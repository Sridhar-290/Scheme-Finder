import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useGetProfile, useUpdateProfile, getGetProfileQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { UserCircle, Save } from "lucide-react";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.coerce.number().min(1).max(120).optional().or(z.literal('')),
  state: z.string().optional().or(z.literal('')),
  income: z.coerce.number().min(0).optional().or(z.literal('')),
  occupation: z.string().optional().or(z.literal('')),
  gender: z.string().optional().or(z.literal('')),
  category: z.string().optional().or(z.literal('')),
});

export default function Profile() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: profile, isLoading } = useGetProfile();

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    values: {
      name: profile?.name || user?.name || "",
      age: profile?.age || "",
      state: profile?.state || "",
      income: profile?.income || "",
      occupation: profile?.occupation || "",
      gender: profile?.gender || "",
      category: profile?.category || "",
    } as any, // Using 'any' here since the empty string coercion is handled nicely by RHF/Zod integration but TypeScript strict types complain
  });

  const updateMutation = useUpdateProfile({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetProfileQueryKey() });
        toast({ title: "Profile updated successfully" });
      },
      onError: (err) => {
        toast({ title: "Failed to update profile", variant: "destructive" });
      }
    }
  });

  const onSubmit = (data: z.infer<typeof profileSchema>) => {
    // Clean up empty strings to undefined before sending
    const cleanedData = {
      ...data,
      age: data.age === "" ? undefined : data.age as number,
      income: data.income === "" ? undefined : data.income as number,
      state: data.state === "" ? undefined : data.state,
      occupation: data.occupation === "" ? undefined : data.occupation,
      gender: data.gender === "" ? undefined : data.gender,
      category: data.category === "" ? undefined : data.category,
    };
    
    updateMutation.mutate({ data: cleanedData });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="container py-12 max-w-3xl mx-auto px-4">
        <Skeleton className="h-40 w-full mb-8 rounded-xl" />
        <Skeleton className="h-[500px] w-full rounded-xl" />
      </div>
    );
  }

  return (
    <div className="container py-12 max-w-3xl mx-auto px-4">
      {/* Profile Header */}
      <div className="bg-primary/5 rounded-2xl p-8 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border">
        <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold shadow-md shrink-0">
          {getInitials(profile?.name || user?.name || "User")}
        </div>
        <div className="text-center sm:text-left pt-2">
          <h1 className="text-3xl font-bold tracking-tight">{profile?.name || user?.name}</h1>
          <p className="text-muted-foreground mt-1">{user?.email}</p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
            {profile?.state && <span className="text-xs bg-background border px-2 py-1 rounded-md">{profile.state}</span>}
            {profile?.occupation && <span className="text-xs bg-background border px-2 py-1 rounded-md capitalize">{profile.occupation.replace('_', ' ')}</span>}
          </div>
        </div>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCircle className="h-5 w-5" />
            Personal Details
          </CardTitle>
          <CardDescription>
            Update your profile to get more accurate scheme recommendations in the Eligibility Wizard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form id="profile-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value as string}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="transgender">Transgender</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Social Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value as string}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="General">General</SelectItem>
                          <SelectItem value="OBC">OBC</SelectItem>
                          <SelectItem value="SC">SC</SelectItem>
                          <SelectItem value="ST">ST</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value as string}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="Karnataka">Karnataka</SelectItem>
                          <SelectItem value="Delhi">Delhi</SelectItem>
                          <SelectItem value="Gujarat">Gujarat</SelectItem>
                          <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                          <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="West Bengal">West Bengal</SelectItem>
                          <SelectItem value="Kerala">Kerala</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="occupation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Occupation</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value as string}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select occupation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="farmer">Farmer</SelectItem>
                          <SelectItem value="employed">Employed (Salaried)</SelectItem>
                          <SelectItem value="self-employed">Self Employed / Business</SelectItem>
                          <SelectItem value="unemployed">Unemployed</SelectItem>
                          <SelectItem value="homemaker">Homemaker</SelectItem>
                          <SelectItem value="retired">Retired / Pensioner</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="income"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Annual Family Income (₹)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g. 250000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="bg-muted/30 border-t px-6 py-4">
          <Button 
            type="submit" 
            form="profile-form" 
            className="w-full sm:w-auto gap-2"
            disabled={updateMutation.isPending}
          >
            <Save className="h-4 w-4" />
            {updateMutation.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
