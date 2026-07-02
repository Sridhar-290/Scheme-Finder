import { Link, useLocation } from "wouter";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { LogIn, UserCircle, Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [location] = useLocation();

  const { t } = useTranslation();

  const links = [
    { href: "/schemes", label: t("nav_browse") },
    { href: "/ai", label: t("nav_ai") },
    { href: "/about", label: t("nav_about") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-primary">
              Benefits Navigator
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-foreground/80 ${
                  location === link.href ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-primary">Benefits Navigator</span>
            </Link>
            <div className="my-4 flex flex-col space-y-3 pb-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-foreground/70 transition-colors hover:text-foreground ${
                    location === link.href ? "text-foreground" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search placeholder */}
          </div>
          <nav className="flex items-center space-x-2">
            {isAuthenticated ? (
              <>
                <Link href="/tracker">
                  <Button variant="ghost" size="sm">{t("nav_tracker")}</Button>
                </Link>
                <Link href="/saved">
                  <Button variant="ghost" size="sm">{t("nav_saved")}</Button>
                </Link>
                <Link href="/profile">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <UserCircle className="h-5 w-5" />
                    <span className="hidden md:inline-block">{user?.name || t("nav_profile")}</span>
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={() => logout()}>
                  {t("nav_logout")}
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button size="sm" className="gap-2">
                  <LogIn className="h-4 w-4" />
                  <span className="hidden sm:inline-block">{t("nav_login")}</span>
                </Button>
              </Link>
            )}
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
