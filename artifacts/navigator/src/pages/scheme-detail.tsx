import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import { 
  useGetScheme, 
  getGetSchemeQueryKey,
  useGetSavedSchemes,
  useSaveScheme,
  useUnsaveScheme,
  getGetSavedSchemesQueryKey,
} from "@workspace/api-client-react";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Bookmark, 
  BookmarkCheck, 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  Info,
  Share2,
  Calendar,
  ClipboardList,
  ShieldCheck,
  XCircle,
  AlertTriangle,
  ImageOff,
} from "lucide-react";
import { useTracker } from "@/hooks/use-tracker";
import { format } from "date-fns";
import { INDIAN_STATES } from "@/lib/states";

export default function SchemeDetail() {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { getStatus, track, isPending: trackPending } = useTracker();

  const [imgError, setImgError] = useState(false);

  // Eligibility check form
  const [showEligibilityForm, setShowEligibilityForm] = useState(false);
  const [eligAge, setEligAge] = useState("");
  const [eligIncome, setEligIncome] = useState("");
  const [eligState, setEligState] = useState("");
  const [eligGender, setEligGender] = useState("");
  const [eligOccupation, setEligOccupation] = useState("");
  const [eligCategory, setEligCategory] = useState("General");
  const [eligResult, setEligResult] = useState<{
    eligible: boolean;
    partiallyEligible: boolean;
    matchScore: number;
    reason: string;
    missingCriteria: string | null;
    requiredDocuments: string[];
  } | null>(null);
  const [eligChecking, setEligChecking] = useState(false);

  const { data: scheme, isLoading, isError } = useGetScheme(id!, {
    query: {
      enabled: !!id,
      queryKey: getGetSchemeQueryKey(id!)
    }
  });

  const { data: savedSchemes } = useGetSavedSchemes({ 
    query: { enabled: isAuthenticated, queryKey: getGetSavedSchemesQueryKey() } 
  });

  const isSaved = savedSchemes?.some(s => s.schemeId === id);

  const saveMutation = useSaveScheme({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetSavedSchemesQueryKey() });
        toast({ title: "Scheme saved to your profile" });
      }
    }
  });

  const unsaveMutation = useUnsaveScheme({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetSavedSchemesQueryKey() });
        toast({ title: "Scheme removed from saved" });
      }
    }
  });

  const handleSaveToggle = () => {
    if (!isAuthenticated) {
      toast({ 
        title: "Login Required", 
        description: "Please login to save schemes.",
        variant: "destructive"
      });
      return;
    }

    if (isSaved) {
      unsaveMutation.mutate({ schemeId: id! });
    } else {
      saveMutation.mutate({ schemeId: id!, data: {} });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: scheme?.title,
        text: scheme?.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied to clipboard" });
    }
  };

  const handleEligibilityCheck = async () => {
    setEligChecking(true);
    setEligResult(null);
    try {
      const res = await fetch(`/api/v1/eligibility/check/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          age: parseInt(eligAge, 10),
          state: eligState,
          income: parseInt(eligIncome, 10),
          gender: eligGender,
          occupation: eligOccupation,
          category: eligCategory,
        }),
      });
      if (!res.ok) throw new Error("Failed to check eligibility");
      const data = await res.json();
      setEligResult(data);
    } catch {
      toast({ title: "Error checking eligibility", variant: "destructive" });
    } finally {
      setEligChecking(false);
    }
  };

  // Track recently viewed
  useEffect(() => {
    if (scheme) {
      const recent = JSON.parse(localStorage.getItem("recent_schemes") || "[]");
      const updated = [scheme.id, ...recent.filter((r: string) => r !== scheme.id)].slice(0, 5);
      localStorage.setItem("recent_schemes", JSON.stringify(updated));
    }
  }, [scheme]);

  if (isLoading) {
    return (
      <div className="container py-8 max-w-4xl mx-auto px-4">
        <Skeleton className="h-8 w-24 mb-6" />
        <Skeleton className="h-12 w-3/4 mb-4" />
        <div className="flex gap-2 mb-8">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>
        <Skeleton className="h-64 w-full mb-8" />
        <Skeleton className="h-32 w-full mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  if (isError || !scheme) {
    return (
      <div className="container py-24 text-center">
        <h2 className="text-2xl font-bold mb-2">Scheme not found</h2>
        <p className="text-muted-foreground mb-6">The scheme you are looking for might have been removed or is temporarily unavailable.</p>
        <Link href="/schemes">
          <Button>Browse All Schemes</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8 px-4 md:px-6 max-w-4xl mx-auto">
      <Link href="/schemes">
        <Button variant="ghost" size="sm" className="mb-6 -ml-3 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to schemes
        </Button>
      </Link>

      <div className="space-y-6">
        {/* Scheme Image */}
        {scheme.image && !imgError ? (
          <div className="relative h-56 md:h-72 w-full rounded-xl overflow-hidden bg-muted">
            <img
              src={scheme.image}
              alt={scheme.title}
              className="h-full w-full object-cover"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ) : (
          <div className="h-56 md:h-72 w-full rounded-xl bg-muted flex items-center justify-center">
            <ImageOff className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}

        {/* Header */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
              {scheme.category}
            </Badge>
            <Badge variant="outline">
              {scheme.schemeType === "central" ? "Central Government" : "State Government"}
            </Badge>
            {scheme.state && <Badge variant="outline">{scheme.state}</Badge>}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            {scheme.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" />
              Last updated: {format(new Date(scheme.lastUpdated), "MMM d, yyyy")}
            </div>
            
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
              <Button 
                variant={isSaved ? "secondary" : "outline"} 
                size="sm" 
                onClick={handleSaveToggle}
                className={isSaved ? "bg-secondary text-secondary-foreground" : ""}
              >
                {isSaved ? <BookmarkCheck className="mr-2 h-4 w-4" /> : <Bookmark className="mr-2 h-4 w-4" />}
                {isSaved ? "Saved" : "Save"}
              </Button>
              {isAuthenticated && (() => {
                const status = getStatus(id!);
                return (
                  <Button
                    variant={status ? "secondary" : "default"}
                    size="sm"
                    onClick={() => !status && track(id!)}
                    disabled={trackPending || !!status}
                    className={status ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200" : ""}
                    asChild={!!status}
                  >
                    {status ? (
                      <Link href="/tracker">
                        <ClipboardList className="mr-2 h-4 w-4" />
                        Tracking: {status.replace("_", " ")}
                      </Link>
                    ) : (
                      <span className="flex items-center">
                        <ClipboardList className="mr-2 h-4 w-4" />
                        Track Application
                      </span>
                    )}
                  </Button>
                );
              })()}
            </div>
          </div>

          <p className="text-lg text-foreground/80 leading-relaxed">
            {scheme.description}
          </p>
        </div>

        {/* Eligibility Check Section */}
        <div className="bg-muted/30 rounded-xl border border-border/50 overflow-hidden">
          <button
            onClick={() => setShowEligibilityForm(!showEligibilityForm)}
            className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-muted/50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Check Your Eligibility</h3>
                <p className="text-sm text-muted-foreground">Find out if you qualify for this scheme</p>
              </div>
            </div>
            <span className="text-2xl text-muted-foreground">{showEligibilityForm ? "−" : "+"}</span>
          </button>

          {showEligibilityForm && (
            <div className="px-4 md:px-6 pb-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Age</label>
                  <Input type="number" placeholder="e.g. 30" value={eligAge} onChange={e => setEligAge(e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Annual Income (₹)</label>
                  <Input type="number" placeholder="e.g. 300000" value={eligIncome} onChange={e => setEligIncome(e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">State</label>
                    <Select value={eligState} onValueChange={setEligState}>
                      <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Select a state</SelectItem>
                        {INDIAN_STATES.map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Gender</label>
                  <Select value={eligGender} onValueChange={setEligGender}>
                    <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="transgender">Transgender</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Occupation</label>
                  <Select value={eligOccupation} onValueChange={setEligOccupation}>
                    <SelectTrigger><SelectValue placeholder="Select occupation" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="farmer">Farmer</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="employed">Employed</SelectItem>
                      <SelectItem value="self-employed">Self-Employed</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                      <SelectItem value="homemaker">Homemaker</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="vendor">Street Vendor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={eligCategory} onValueChange={setEligCategory}>
                    <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General">General</SelectItem>
                      <SelectItem value="OBC">OBC</SelectItem>
                      <SelectItem value="SC">SC</SelectItem>
                      <SelectItem value="ST">ST</SelectItem>
                      <SelectItem value="EWS">EWS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleEligibilityCheck}
                disabled={!eligAge || !eligIncome || !eligState || !eligGender || eligChecking}
                className="w-full sm:w-auto"
              >
                {eligChecking ? "Checking..." : "Check Eligibility"}
              </Button>

              {/* Eligibility Result */}
              {eligResult && (
                <div className={`rounded-lg p-4 border ${eligResult.eligible ? "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800" : eligResult.partiallyEligible ? "bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800" : "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800"}`}>
                  {eligResult.eligible ? (
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-green-800 dark:text-green-200">You are eligible for this scheme!</p>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">Match Score: {eligResult.matchScore}%</p>
                      </div>
                    </div>
                  ) : eligResult.partiallyEligible ? (
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-yellow-800 dark:text-yellow-200">Partially Eligible</p>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">{eligResult.reason}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800 dark:text-red-200">Not Eligible</p>
                        <p className="text-sm text-red-700 dark:text-red-300 mt-1">Based on your profile, you do not meet the eligibility criteria for this scheme.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Apply CTA */}
        <div className="bg-muted/40 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between border border-border/50 gap-4 my-8">
          <div>
            <h3 className="font-semibold text-lg">Ready to apply?</h3>
            <p className="text-sm text-muted-foreground">Visit the official portal to begin your application process.</p>
          </div>
          <a href={scheme.officialWebsite} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto">
              Apply on Official Website <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> 
                Key Benefits
              </h2>
              <div className="prose prose-sm dark:prose-invert">
                <p>{scheme.benefits}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Info className="mr-2 h-5 w-5 text-primary" /> 
                Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {scheme.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                      {idx + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary" /> 
                Required Documents
              </h2>
              <ul className="space-y-3">
                {scheme.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-center p-3 rounded-lg border bg-card">
                    <FileText className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span className="text-sm font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Application Process</h2>
              <div className="space-y-4">
                {scheme.applicationProcess.map((step, idx) => (
                  <div key={idx} className="flex gap-4 relative">
                    {idx !== scheme.applicationProcess.length - 1 && (
                      <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border -z-10" />
                    )}
                    <div className="h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm pb-4">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* FAQs */}
        {scheme.faqs && scheme.faqs.length > 0 && (
          <section className="pt-8 mt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {scheme.faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}
      </div>
    </div>
  );
}
