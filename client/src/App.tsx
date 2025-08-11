// client/src/App.tsx
import React from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DigitalGridBackground } from "@/components/ui/digital-grid-background";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Home from "@/pages/home";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";
import { queryClient } from "@/lib/queryClient";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacidad" component={Privacy} />
      <Route path="/terminos" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            {/* Fondo digital detrás de todo */}
            <DigitalGridBackground />

            {/* Contenido principal */}
            <main className="flex-1 relative z-10">
              <Router />
            </main>

            {/* Toasts */}
            <Toaster />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
