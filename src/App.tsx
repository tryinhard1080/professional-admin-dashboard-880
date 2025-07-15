import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import ViewReports from "./pages/ViewReports";
import Properties from "./pages/Properties";
import TrashBossAI from "./pages/TrashBossAI";
import CostOptimization from "./pages/CostOptimization";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route 
            path="/*" 
            element={
              <div className="flex min-h-screen bg-background">
                <Sidebar />
                <main className="flex-1 ml-64 p-8">
                  <div className="max-w-7xl mx-auto">
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/analytics" element={<Analytics />} />
                      <Route path="/transactions" element={<ViewReports />} />
                      <Route path="/notifications" element={<Properties />} />
                      <Route path="/trash-boss-ai" element={<TrashBossAI />} />
                      <Route path="/profile" element={<CostOptimization />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </div>
                </main>
              </div>
            } 
          />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;