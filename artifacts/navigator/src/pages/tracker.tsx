import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/contexts/auth-context";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ClipboardList, ExternalLink, Trash2, Plus, ArrowRight, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

type Status = "not_started" | "applied" | "under_review" | "approved" | "rejected";

const STATUS_CONFIG: Record<Status, { label: string; color: string }> = {
  not_started: { label: "Not Started", color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" },
  applied:      { label: "Applied",     color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
  under_review: { label: "Under Review", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" },
  approved:     { label: "Approved",    color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" },
  rejected:     { label: "Rejected",    color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" },
};

interface TrackerEntry {
  id: number;
  schemeId: string;
  status: string;
  notes: string | null;
  appliedAt: string | null;
  updatedAt: string;
  scheme?: { id: string; title: string; category: string; officialWebsite: string };
}

function fetchTracker(token: string | null): Promise<TrackerEntry[]> {
  return fetch("/api/v1/tracker", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json());
}

function upsertTracker(token: string | null, schemeId: string, body: object) {
  return fetch(`/api/v1/tracker/${schemeId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  }).then(r => r.json());
}

function deleteTracker(token: string | null, schemeId: string) {
  return fetch(`/api/v1/tracker/${schemeId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(r => r.json());
}

const PIPELINE: Status[] = ["not_started", "applied", "under_review", "approved"];

export default function Tracker() {
  const { token, isAuthenticated, user } = useAuth();
  const qc = useQueryClient();
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [editId, setEditId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState<Status>("not_started");

  const handleShare = async () => {
    if (!user?.id) return;
    const url = `${window.location.origin}/share/${user.id}`;
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Share link copied!", description: "Send this link to friends and family." });
    } catch {
      navigate(`/share/${user.id}`);
    }
  };

  const { data: entries = [], isLoading } = useQuery<TrackerEntry[]>({
    queryKey: ["tracker"],
    queryFn: () => fetchTracker(token),
    enabled: isAuthenticated,
  });

  const upsertMutation = useMutation({
    mutationFn: ({ schemeId, body }: { schemeId: string; body: object }) => upsertTracker(token, schemeId, body),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["tracker"] }); toast({ title: "Status updated" }); },
  });

  const deleteMutation = useMutation({
    mutationFn: (schemeId: string) => deleteTracker(token, schemeId),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["tracker"] }); toast({ title: "Removed from tracker" }); },
  });

  const counts = PIPELINE.reduce((acc, s) => ({ ...acc, [s]: entries.filter(e => e.status === s).length }), {} as Record<Status, number>);
  const approved = entries.filter(e => e.status === "approved").length;

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <ClipboardList className="h-16 w-16 text-muted-foreground opacity-40" />
        <h2 className="text-2xl font-semibold">Application Tracker</h2>
        <p className="text-muted-foreground">Sign in to track your applications</p>
        <Link href="/login"><Button>Sign In</Button></Link>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Application Tracker</h1>
          <p className="text-muted-foreground mt-1">Track every scheme application from start to approval</p>
        </div>
        <div className="flex gap-2">
          {approved > 0 && (
            <Button variant="outline" className="gap-2" onClick={handleShare}>
              <Share2 className="h-4 w-4" />Share My Benefits
            </Button>
          )}
          <Link href="/schemes">
            <Button className="gap-2"><Plus className="h-4 w-4" />Add Scheme</Button>
          </Link>
        </div>
      </div>

      {/* Pipeline stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {PIPELINE.map(s => (
          <div key={s} className="rounded-xl border p-4 bg-card">
            <p className="text-sm text-muted-foreground">{STATUS_CONFIG[s].label}</p>
            <p className="text-3xl font-bold mt-1">{counts[s] ?? 0}</p>
          </div>
        ))}
      </div>
      {approved > 0 && (
        <div className="rounded-xl border border-green-300 bg-green-50 dark:bg-green-950 dark:border-green-800 p-4 mb-8 text-green-800 dark:text-green-200 font-medium">
          Congratulations! You have {approved} approved scheme{approved > 1 ? "s" : ""}. Keep tracking to claim all your benefits.
        </div>
      )}

      {isLoading ? (
        <div className="space-y-3">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-20 w-full rounded-xl" />)}</div>
      ) : entries.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 border rounded-xl bg-muted/20 gap-4">
          <ClipboardList className="h-12 w-12 text-muted-foreground opacity-40" />
          <p className="text-lg font-medium">No applications tracked yet</p>
          <p className="text-muted-foreground text-sm">Browse schemes and mark them as applied to start tracking</p>
          <Link href="/schemes"><Button variant="outline">Browse Schemes</Button></Link>
        </div>
      ) : (
        <div className="space-y-3">
          {entries.map(entry => {
            const cfg = STATUS_CONFIG[entry.status as Status] ?? STATUS_CONFIG.not_started;
            return (
              <div key={entry.id} className="flex items-center gap-4 rounded-xl border p-4 bg-card hover:border-primary/30 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold truncate">{entry.scheme?.title ?? entry.schemeId}</span>
                    <Badge variant="outline" className="text-xs">{entry.scheme?.category}</Badge>
                  </div>
                  {entry.notes && <p className="text-sm text-muted-foreground mt-1 truncate">{entry.notes}</p>}
                  {entry.appliedAt && <p className="text-xs text-muted-foreground mt-0.5">Applied: {new Date(entry.appliedAt).toLocaleDateString("en-IN")}</p>}
                </div>

                {/* Status pipeline arrows */}
                <div className="hidden md:flex items-center gap-1 text-xs text-muted-foreground">
                  {PIPELINE.map((s, i) => (
                    <span key={s} className="flex items-center gap-1">
                      <span className={`px-2 py-0.5 rounded-full font-medium ${entry.status === s ? cfg.color : "text-muted-foreground"}`}>
                        {STATUS_CONFIG[s].label}
                      </span>
                      {i < PIPELINE.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground/40" />}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`md:hidden text-xs px-2 py-0.5 rounded-full font-medium ${cfg.color}`}>{cfg.label}</span>

                  {/* Edit dialog */}
                  <Dialog onOpenChange={(open) => {
                    if (open) { setEditId(entry.schemeId); setEditStatus(entry.status as Status); setEditNotes(entry.notes ?? ""); }
                  }}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" data-testid={`edit-tracker-${entry.schemeId}`}>Update</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader><DialogTitle>Update Application Status</DialogTitle></DialogHeader>
                      <p className="text-sm font-medium">{entry.scheme?.title}</p>
                      <div className="space-y-4 mt-2">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Status</label>
                          <Select value={editStatus} onValueChange={v => setEditStatus(v as Status)}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              {(Object.keys(STATUS_CONFIG) as Status[]).map(s => (
                                <SelectItem key={s} value={s}>{STATUS_CONFIG[s].label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Notes (optional)</label>
                          <Textarea value={editNotes} onChange={e => setEditNotes(e.target.value)} placeholder="Reference number, contact, next steps..." rows={3} />
                        </div>
                        <div className="flex gap-2 justify-end">
                          <Button variant="outline" size="sm" onClick={() => deleteMutation.mutate(entry.schemeId)} className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4 mr-1" />Remove
                          </Button>
                          <Button size="sm" onClick={() => upsertMutation.mutate({ schemeId: editId!, body: { status: editStatus, notes: editNotes } })} disabled={upsertMutation.isPending}>
                            Save
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {entry.scheme?.officialWebsite && (
                    <a href={entry.scheme.officialWebsite} target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="icon" data-testid={`external-${entry.schemeId}`}><ExternalLink className="h-4 w-4" /></Button>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
