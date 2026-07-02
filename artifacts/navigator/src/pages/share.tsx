import { useRef } from "react";
import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, Download, Share2, ArrowLeft, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PublicTrackerResponse {
  userName: string;
  approvedCount: number;
  schemes: Array<{
    schemeId: string;
    title: string;
    category: string;
    description: string;
    officialWebsite: string;
    approvedAt: string;
  }>;
}

function fetchPublicTracker(userId: string): Promise<PublicTrackerResponse> {
  return fetch(`/api/v1/tracker/public/${userId}`).then(r => {
    if (!r.ok) throw new Error("Not found");
    return r.json();
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  "Agriculture": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Education": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Health": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Housing": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "Employment": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Social Welfare": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  "Women & Child": "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
  "Financial Inclusion": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Skill Development": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
};

export default function SharePage() {
  const { userId } = useParams<{ userId: string }>();
  const { toast } = useToast();
  const cardRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useQuery<PublicTrackerResponse>({
    queryKey: ["public-tracker", userId],
    queryFn: () => fetchPublicTracker(userId!),
    enabled: !!userId,
    retry: false,
  });

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = "my-benefits.png";
      link.href = dataUrl;
      link.click();
      toast({ title: "Downloaded!" });
    } catch {
      toast({ title: "Download failed", variant: "destructive" });
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied to clipboard!" });
    } catch {
      toast({ title: "Could not copy", description: url });
    }
  };

  if (isLoading) {
    return (
      <div className="container max-w-2xl mx-auto px-4 py-20">
        <Skeleton className="h-96 w-full rounded-2xl" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
        <CheckCircle2 className="h-14 w-14 text-muted-foreground opacity-30" />
        <h2 className="text-2xl font-semibold">Card not found</h2>
        <p className="text-muted-foreground">This benefits summary doesn't exist or hasn't been shared publicly.</p>
        <Link href="/"><Button variant="outline" className="gap-2"><ArrowLeft className="h-4 w-4" />Go Home</Button></Link>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />Back
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
            <Share2 className="h-4 w-4" />Copy Link
          </Button>
          <Button size="sm" className="gap-2" onClick={handleDownload}>
            <Download className="h-4 w-4" />Download PNG
          </Button>
        </div>
      </div>

      {/* Shareable card */}
      <div
        ref={cardRef}
        className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-lg"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Star className="h-5 w-5 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Benefits Navigator</span>
            </div>
            <h1 className="text-2xl font-bold">
              {data.userName}'s Approved Benefits
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {data.approvedCount} government scheme{data.approvedCount !== 1 ? "s" : ""} approved
            </p>
          </div>
          <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
        </div>

        {/* Schemes list */}
        {data.schemes.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No approved schemes to display.</p>
        ) : (
          <div className="space-y-3">
            {data.schemes.map((s, i) => (
              <div
                key={s.schemeId}
                className="flex items-start gap-3 rounded-xl bg-background/70 border p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold">{s.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${CATEGORY_COLORS[s.category] ?? "bg-muted text-muted-foreground"}`}>
                      {s.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{s.description}</p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs text-muted-foreground">
          <span>AI Public Benefits Navigator · India</span>
          <span>Share this to help others discover their benefits</span>
        </div>
      </div>

      {/* CTA for visitors */}
      <div className="mt-8 rounded-xl border bg-muted/30 p-6 text-center">
        <p className="font-medium mb-2">Are you eligible for government schemes?</p>
        <p className="text-sm text-muted-foreground mb-4">Discover 44+ welfare schemes you qualify for in minutes.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/schemes"><Button variant="outline">Browse All Schemes</Button></Link>
        </div>
      </div>
    </div>
  );
}
