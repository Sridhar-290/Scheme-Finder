import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/auth-context";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import NotFound from "@/pages/not-found";
import { setAuthTokenGetter } from "@workspace/api-client-react";

import { AppLayout } from "@/components/layout/app-layout";
import { ProtectedRoute } from "@/components/layout/protected-route";

import Home from "@/pages/home";
import Schemes from "@/pages/schemes";
import SchemeDetail from "@/pages/scheme-detail";
import AI from "@/pages/ai";
import Saved from "@/pages/saved";
import Profile from "@/pages/profile";
import Login from "@/pages/login";
import Register from "@/pages/register";
import About from "@/pages/about";
import Settings from "@/pages/settings";
import Tracker from "@/pages/tracker";
import SharePage from "@/pages/share";
import Compare from "@/pages/compare";

setAuthTokenGetter(() => localStorage.getItem("auth_token"));

const queryClient = new QueryClient();

function Router() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/schemes" component={Schemes} />
        <Route path="/schemes/:id" component={SchemeDetail} />
        <Route path="/ai" component={AI} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        
        <Route path="/saved">
          {() => <ProtectedRoute><Saved /></ProtectedRoute>}
        </Route>
        <Route path="/profile">
          {() => <ProtectedRoute><Profile /></ProtectedRoute>}
        </Route>
        <Route path="/settings">
          {() => <ProtectedRoute><Settings /></ProtectedRoute>}
        </Route>
        <Route path="/tracker">
          {() => <ProtectedRoute><Tracker /></ProtectedRoute>}
        </Route>
        <Route path="/compare" component={Compare} />
        <Route path="/share/:userId" component={SharePage} />
        
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="app-theme">
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <AuthProvider>
            <TooltipProvider>
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                <Router />
              </WouterRouter>
              <Toaster />
            </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;