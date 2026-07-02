import { Link } from "wouter";
import { useGetSavedSchemes, useUnsaveScheme, getGetSavedSchemesQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { SchemeCard } from "@/components/scheme-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BookmarkMinus, Bookmark } from "lucide-react";

export default function Saved() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: savedSchemes, isLoading } = useGetSavedSchemes();

  const unsaveMutation = useUnsaveScheme({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetSavedSchemesQueryKey() });
        toast({ title: "Scheme removed from saved" });
      }
    }
  });

  const handleUnsave = (schemeId: string) => {
    unsaveMutation.mutate({ schemeId });
  };

  if (isLoading) {
    return (
      <div className="container py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Saved Schemes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-[250px] w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 px-4 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Saved Schemes</h1>
          <p className="text-muted-foreground">Keep track of schemes you are interested in applying for.</p>
        </div>
      </div>

      {!savedSchemes || savedSchemes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed rounded-xl bg-muted/10">
          <div className="bg-primary/5 p-4 rounded-full mb-4">
            <Bookmark className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium">No saved schemes</h3>
          <p className="text-muted-foreground mt-2 max-w-sm mb-6">
            You haven't saved any schemes yet. Browse the directory to find and save schemes for quick access later.
          </p>
          <Link href="/schemes">
            <Button>Browse Schemes</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedSchemes.map((saved) => (
            <div key={saved.id} className="relative group">
              <SchemeCard scheme={saved.scheme} />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleUnsave(saved.schemeId)}
                title="Remove from saved"
              >
                <BookmarkMinus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
