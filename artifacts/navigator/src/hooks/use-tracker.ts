import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";

interface TrackerEntry {
  id: number;
  schemeId: string;
  status: string;
  notes: string | null;
  appliedAt: string | null;
  updatedAt: string;
}

function fetchTracker(token: string | null): Promise<TrackerEntry[]> {
  return fetch("/api/v1/tracker", {
    headers: { Authorization: `Bearer ${token}` },
  }).then(r => r.json());
}

function upsertTracker(token: string | null, schemeId: string, status: string) {
  return fetch(`/api/v1/tracker/${schemeId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ status }),
  }).then(r => r.json());
}

export function useTracker() {
  const { token, isAuthenticated } = useAuth();
  const qc = useQueryClient();
  const { toast } = useToast();

  const { data: entries = [] } = useQuery<TrackerEntry[]>({
    queryKey: ["tracker"],
    queryFn: () => fetchTracker(token),
    enabled: isAuthenticated,
  });

  const upsertMutation = useMutation({
    mutationFn: ({ schemeId, status }: { schemeId: string; status: string }) =>
      upsertTracker(token, schemeId, status),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tracker"] });
      toast({ title: "Added to Application Tracker" });
    },
  });

  const getStatus = (schemeId: string) =>
    entries.find(e => e.schemeId === schemeId)?.status ?? null;

  const track = (schemeId: string, status = "applied") =>
    upsertMutation.mutate({ schemeId, status });

  return { entries, getStatus, track, isPending: upsertMutation.isPending };
}
