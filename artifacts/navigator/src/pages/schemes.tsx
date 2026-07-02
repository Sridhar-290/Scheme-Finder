import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { 
  useListSchemes, 
  useGetSchemeCategories,
  useSaveScheme,
  useUnsaveScheme,
  useGetSavedSchemes,
  getGetSavedSchemesQueryKey,
  ListSchemesSchemeType
} from "@workspace/api-client-react";
import { useAuth } from "@/contexts/auth-context";
import { SchemeCard } from "@/components/scheme-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { INDIAN_STATES } from "@/lib/states";

export default function Schemes() {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Filters state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [schemeType, setSchemeType] = useState<ListSchemesSchemeType | "all">("all");
  const [state, setState] = useState<string>("all");
  const [age, setAge] = useState<number[]>([18]);
  const [gender, setGender] = useState<string>("all");
  const [page, setPage] = useState(1);

  const { data: categoriesData } = useGetSchemeCategories();
  
  const queryParams = {
    ...(search ? { search } : {}),
    ...(category !== "all" ? { category } : {}),
    ...(schemeType !== "all" ? { schemeType: schemeType as ListSchemesSchemeType } : {}),
    ...(state !== "all" ? { state } : {}),
    ...(gender !== "all" ? { gender } : {}),
    minAge: age[0],
    page,
    limit: 12
  };

  const { data: schemesData, isLoading } = useListSchemes(queryParams);
  const { data: savedSchemes } = useGetSavedSchemes({ 
    query: { enabled: isAuthenticated, queryKey: getGetSavedSchemesQueryKey() } 
  });

  const savedSchemeIds = new Set(savedSchemes?.map(s => s.schemeId) || []);

  const saveMutation = useSaveScheme({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetSavedSchemesQueryKey() });
        toast({ title: "Scheme saved" });
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

  const handleSaveToggle = (schemeId: string, isCurrentlySaved: boolean) => {
    if (!isAuthenticated) {
      toast({ 
        title: "Login Required", 
        description: "Please login to save schemes.",
        variant: "destructive"
      });
      return;
    }

    if (isCurrentlySaved) {
      unsaveMutation.mutate({ schemeId });
    } else {
      saveMutation.mutate({ schemeId, data: {} });
    }
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setSchemeType("all");
    setState("all");
    setGender("all");
    setAge([18]);
    setPage(1);
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Search</Label>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search schemes..." 
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="pl-8"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <Select value={category} onValueChange={(val) => { setCategory(val); setPage(1); }}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categoriesData?.map(c => (
              <SelectItem key={c.category} value={c.category}>{c.category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Scheme Type</Label>
        <Select value={schemeType} onValueChange={(val) => { setSchemeType(val as any); setPage(1); }}>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="central">Central Govt</SelectItem>
            <SelectItem value="state">State Govt</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>State</Label>
        <Select value={state} onValueChange={(val) => { setState(val); setPage(1); }}>
          <SelectTrigger>
            <SelectValue placeholder="All States" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            {INDIAN_STATES.map(s => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Gender</Label>
        <Select value={gender} onValueChange={(val) => { setGender(val); setPage(1); }}>
          <SelectTrigger>
            <SelectValue placeholder="All Genders" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Genders</SelectItem>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="transgender">Transgender</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label>Age: {age[0]} years</Label>
        </div>
        <Slider 
          value={age} 
          onValueChange={(val) => { setAge(val); setPage(1); }} 
          max={100} 
          step={1} 
        />
      </div>

      <Button variant="outline" className="w-full" onClick={resetFilters}>
        Reset Filters
      </Button>
    </div>
  );

  return (
    <div className="container py-8 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Mobile Filters Trigger */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Browse Schemes</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-6">
                <FiltersContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0 space-y-6">
          <div className="sticky top-24">
            <h2 className="font-semibold mb-4 text-lg">Filters</h2>
            <FiltersContent />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <div className="hidden md:flex justify-between items-end mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Browse Schemes</h1>
            <p className="text-sm text-muted-foreground">
              {schemesData?.total || 0} schemes found
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <Skeleton className="h-[200px] w-full rounded-xl" />
                </div>
              ))}
            </div>
          ) : schemesData?.schemes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center border rounded-xl bg-muted/20">
              <Search className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-xl font-medium">No schemes found</h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
              <Button variant="outline" className="mt-6" onClick={resetFilters}>
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {schemesData?.schemes.map((scheme) => (
                  <SchemeCard 
                    key={scheme.id} 
                    scheme={scheme} 
                    isSaved={savedSchemeIds.has(scheme.id)}
                    onSaveToggle={handleSaveToggle}
                  />
                ))}
              </div>

              {/* Pagination */}
              {schemesData && schemesData.total > queryParams.limit && (
                <div className="flex justify-center mt-12 gap-2">
                  <Button
                    variant="outline"
                    disabled={page === 1}
                    onClick={() => setPage(p => p - 1)}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    disabled={page * queryParams.limit >= schemesData.total}
                    onClick={() => setPage(p => p + 1)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
