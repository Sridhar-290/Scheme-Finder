import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Search, Shield, Bot, Users, BookOpen, Building2 } from "lucide-react";
import { useGetSchemeStats, useGetFeaturedSchemes } from "@workspace/api-client-react";
import { SchemeCard } from "@/components/scheme-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/contexts/language-context";

export default function Home() {
  const { data: stats } = useGetSchemeStats();
  const { data: featuredSchemes, isLoading: isLoadingFeatured } = useGetFeaturedSchemes();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-primary py-24 md:py-32 lg:py-40 flex items-center justify-center text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl/none whitespace-pre-line">
            {t("hero_title")}
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-primary-foreground/80 md:text-xl">
            {t("hero_subtitle")}
          </p>
          <div className="mx-auto mt-8 flex max-w-sm flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link href="/schemes">
              <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 border-0">
                {t("hero_browse")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats && (
        <section className="w-full py-12 border-b bg-muted/30 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <h4 className="text-4xl font-bold text-foreground">{stats.totalSchemes}</h4>
                <p className="text-sm text-muted-foreground">{t("stats_total")}</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Building2 className="h-8 w-8 text-primary mb-2" />
                <h4 className="text-4xl font-bold text-foreground">{stats.centralSchemes}</h4>
                <p className="text-sm text-muted-foreground">{t("stats_central")}</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Building2 className="h-8 w-8 text-secondary mb-2" />
                <h4 className="text-4xl font-bold text-foreground">{stats.stateSchemes}</h4>
                <p className="text-sm text-muted-foreground">{t("stats_state")}</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Users className="h-8 w-8 text-primary mb-2" />
                <h4 className="text-4xl font-bold text-foreground">{stats.totalBeneficiaries}</h4>
                <p className="text-sm text-muted-foreground">{t("stats_beneficiaries")}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Schemes */}
      <section className="w-full py-16 md:py-24 bg-background flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("featured_title")}</h2>
            <p className="text-muted-foreground max-w-[800px]">
              {t("featured_subtitle")}
            </p>
          </div>
          
          {isLoadingFeatured ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-[250px] w-full rounded-xl" />
              ))}
            </div>
          ) : featuredSchemes && featuredSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSchemes.slice(0, 3).map((scheme) => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>
          ) : null}
          
          <div className="mt-10 flex justify-center">
            <Link href="/schemes">
              <Button variant="outline">{t("view_all")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 md:py-24 bg-muted/20 flex justify-center border-t border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("smart_discovery")}</h3>
              <p className="text-muted-foreground mt-2">{t("smart_discovery_desc")}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("ai_assistant")}</h3>
              <p className="text-muted-foreground mt-2">{t("ai_assistant_desc")}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("trusted_info")}</h3>
              <p className="text-muted-foreground mt-2">{t("trusted_info_desc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
