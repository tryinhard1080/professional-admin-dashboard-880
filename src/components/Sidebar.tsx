import { Home, BarChart3, FileText, Building2, TrendingUp, Settings, User, Bell, BarChart2, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: FileText, label: "View Reports", path: "/transactions" },
  { icon: Building2, label: "Supplier Directory", path: "/notifications" },
  { icon: Brain, label: "Trash Boss AI - Coming Soon", path: "/trash-boss-ai" },
  { icon: TrendingUp, label: "Rent vs Purchase Calculator - Coming Soon", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-64 glass-nav border-r border-primary/10 animate-slide-in-left">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-primary/10">
          <div className="flex items-center gap-3 hover-scale cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:shadow-glow transition-all duration-300 animate-float">
              <BarChart2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold gradient-text">WasteWise</h2>
              <p className="text-xs text-muted-foreground">Analytics Platform</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path} className={`animate-slide-in-left stagger-${index + 1}`}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                      "hover:bg-primary/10 hover:backdrop-blur-sm hover:scale-102 hover:shadow-glass",
                      isActive 
                        ? "bg-gradient-to-r from-primary/15 to-primary/5 text-primary border border-primary/20 shadow-glow scale-105" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-lg animate-scale-in" />
                    )}
                    
                    <Icon className={cn(
                      "h-5 w-5 transition-all duration-300 relative z-10",
                      isActive ? "text-primary animate-bounce-subtle" : "group-hover:text-primary group-hover:scale-110"
                    )} />
                    <span className="font-medium relative z-10">{item.label}</span>
                    
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-primary/10">
          <ThemeToggle />
        </div>

        <div className="p-4 border-t border-primary/10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass-button hover-lift cursor-pointer group">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Facility Manager</span>
              <span className="text-xs text-muted-foreground">The Trash Hub</span>
            </div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Bell className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;