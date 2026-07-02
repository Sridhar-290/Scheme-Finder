import { Link } from "wouter";
import { Scheme } from "@workspace/api-client-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck, ImageOff } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useState } from "react";

interface SchemeCardProps {
  scheme: Scheme;
  isSaved?: boolean;
  onSaveToggle?: (schemeId: string, currentlySaved: boolean) => void;
}

export function SchemeCard({ scheme, isSaved = false, onSaveToggle }: SchemeCardProps) {
  const { isAuthenticated } = useAuth();
  const [imgError, setImgError] = useState(false);

  return (
    <Link href={`/schemes/${scheme.id}`} className="block">
      <Card className="flex flex-col h-full hover-elevate transition-all duration-200 overflow-hidden cursor-pointer">
        {scheme.image && !imgError ? (
          <div className="relative h-44 w-full overflow-hidden bg-muted">
            <img
              src={scheme.image}
              alt={scheme.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        ) : (
          <div className="h-44 w-full bg-muted flex items-center justify-center">
            <ImageOff className="h-8 w-8 text-muted-foreground/50" />
          </div>
        )}
        <CardHeader className="pb-3 flex-none">
          <div className="flex justify-between items-start mb-2 gap-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="font-medium bg-primary/10 text-primary hover:bg-primary/20">
                {scheme.category}
              </Badge>
              <Badge variant="outline" className="border-secondary/50 text-secondary-foreground dark:text-foreground">
                {scheme.schemeType === "central" ? "Central Govt" : "State Govt"}
              </Badge>
            </div>
            {isAuthenticated && onSaveToggle && (
              <Button
                variant="ghost"
                size="icon"
                className="-mt-2 -mr-2 h-8 w-8"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSaveToggle(scheme.id, isSaved);
                }}
                data-testid={`btn-save-${scheme.id}`}
              >
                {isSaved ? (
                  <BookmarkCheck className="h-5 w-5 text-secondary fill-secondary" />
                ) : (
                  <Bookmark className="h-5 w-5 text-muted-foreground" />
                )}
              </Button>
            )}
          </div>
          <CardTitle className="text-xl leading-tight line-clamp-2">
            {scheme.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-4">
          <CardDescription className="line-clamp-3 text-sm text-foreground/70">
            {scheme.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-0 flex-none flex justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            {scheme.state && <span>{scheme.state}</span>}
          </div>
          <span className="font-semibold text-primary">View Details →</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
