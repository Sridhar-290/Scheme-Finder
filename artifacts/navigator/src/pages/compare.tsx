import { useState } from "react";
import { Link } from "wouter";
import { useListSchemes, useGetScheme, getGetSchemeQueryKey } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, X, Scale } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface CompareSlot {
  id: string | null;
}

export default function Compare() {
  const [slots, setSlots] = useState<CompareSlot[]>([{ id: null }, { id: null }, { id: null }]);

  const { data: schemesData } = useListSchemes({ limit: 200 });

  const schemeDetails = slots.map(slot =>
    useGetScheme(slot.id || "", {
      query: {
        enabled: !!slot.id,
        queryKey: getGetSchemeQueryKey(slot.id || "")
      }
    })
  );

  const setSlotScheme = (index: number, schemeId: string) => {
    const updated = [...slots];
    updated[index] = { id: schemeId || null };
    setSlots(updated);
  };

  const removeSlot = (index: number) => {
    const updated = [...slots];
    updated[index] = { id: null };
    setSlots(updated);
  };

  const schemes = schemesData?.schemes || [];
  const selectedIds = slots.map(s => s.id).filter(Boolean);

  return (
    <div className="container py-8 px-4 md:px-6 max-w-7xl mx-auto">
      <Link href="/schemes">
        <Button variant="ghost" size="sm" className="mb-6 -ml-3 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to schemes
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
          <Scale className="h-7 w-7 text-primary" /> Compare Schemes
        </h1>
        <p className="text-muted-foreground mt-2">Select up to 3 schemes to compare side by side</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {slots.map((slot, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Scheme {idx + 1}</span>
              {slot.id && (
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeSlot(idx)}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Select value={slot.id || ""} onValueChange={(v) => setSlotScheme(idx, v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a scheme" />
              </SelectTrigger>
              <SelectContent>
                {schemes.filter(s => !selectedIds.includes(s.id) || s.id === slot.id).map(s => (
                  <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {slot.id && schemeDetails[idx].isLoading && (
              <Card>
                <CardHeader className="pb-2">
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
              </Card>
            )}
            {slot.id && schemeDetails[idx].data && (
              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex gap-1 mb-2">
                    <Badge variant="secondary" className="text-xs">{schemeDetails[idx].data.category}</Badge>
                    <Badge variant="outline" className="text-xs">{schemeDetails[idx].data.schemeType}</Badge>
                  </div>
                  <CardTitle className="text-sm leading-tight line-clamp-2">{schemeDetails[idx].data.title}</CardTitle>
                </CardHeader>
              </Card>
            )}
          </div>
        ))}
      </div>

      {slots.filter(s => s.id).length >= 2 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 pr-6 text-sm font-medium text-muted-foreground w-48">Feature</th>
                {slots.filter(s => s.id).map((slot, idx) => {
                  const data = schemeDetails[slots.indexOf(slot)].data;
                  return (
                    <th key={idx} className="text-left py-3 px-4 text-sm font-semibold min-w-[250px]">
                      {data?.title || "Scheme"}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-6 text-sm font-medium text-muted-foreground">Category</td>
                {slots.filter(s => s.id).map((slot, idx) => (
                  <td key={idx} className="py-3 px-4 text-sm">
                    {schemeDetails[slots.indexOf(slot)].data?.category}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-6 text-sm font-medium text-muted-foreground">Type</td>
                {slots.filter(s => s.id).map((slot, idx) => (
                  <td key={idx} className="py-3 px-4 text-sm">
                    {schemeDetails[slots.indexOf(slot)].data?.schemeType === "central" ? "Central Govt" : "State Govt"}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-6 text-sm font-medium text-muted-foreground">Income Limit</td>
                {slots.filter(s => s.id).map((slot, idx) => (
                  <td key={idx} className="py-3 px-4 text-sm">
                    {schemeDetails[slots.indexOf(slot)].data?.maxIncome
                      ? `₹${(schemeDetails[slots.indexOf(slot)].data!.maxIncome!).toLocaleString("en-IN")}/yr`
                      : "No limit"}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-6 text-sm font-medium text-muted-foreground">Age Range</td>
                {slots.filter(s => s.id).map((slot, idx) => {
                  const d = schemeDetails[slots.indexOf(slot)].data;
                  return (
                    <td key={idx} className="py-3 px-4 text-sm">
                      {d?.minAge || 0} - {d?.maxAge || "No limit"} years
                    </td>
                  );
                })}
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-6 text-sm font-medium text-muted-foreground">Gender</td>
                {slots.filter(s => s.id).map((slot, idx) => (
                  <td key={idx} className="py-3 px-4 text-sm">
                    {schemeDetails[slots.indexOf(slot)].data?.gender || "All"}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-6 text-sm font-medium text-muted-foreground">State</td>
                {slots.filter(s => s.id).map((slot, idx) => (
                  <td key={idx} className="py-3 px-4 text-sm">
                    {schemeDetails[slots.indexOf(slot)].data?.state || "All India"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 pr-6 text-sm font-medium text-muted-foreground align-top">Benefits</td>
                {slots.filter(s => s.id).map((slot, idx) => (
                  <td key={idx} className="py-3 px-4 text-sm leading-relaxed">
                    {schemeDetails[slots.indexOf(slot)].data?.benefits}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {slots.filter(s => s.id).length < 2 && (
        <div className="text-center py-24 border rounded-xl bg-muted/20">
          <Scale className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-medium">Select at least 2 schemes to compare</h3>
          <p className="text-muted-foreground mt-2">Choose schemes from the dropdowns above to see them side by side</p>
        </div>
      )}
    </div>
  );
}
