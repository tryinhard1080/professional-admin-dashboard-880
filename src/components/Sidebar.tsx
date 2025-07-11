import { Home, BarChart3, Recycle, MapPin, TrendingUp, Settings, User, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Overview", path: "/" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Recycle, label: "Waste Tracking", path: "/transactions" },
  { icon: MapPin, label: "Properties", path: "/notifications" },
  { icon: TrendingUp, label: "Cost Optimization", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-64 glass-nav border-r border-primary/10">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-primary/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Recycle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold gradient-text">WasteWise</h2>
              <p className="text-xs text-muted-foreground">Analytics</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                      "hover:bg-primary/10 hover:backdrop-blur-sm",
                      isActive 
                        ? "bg-primary/10 text-primary border border-primary/20 shadow-lg" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className={cn(
                      "h-5 w-5 transition-colors",
                      isActive ? "text-primary" : "group-hover:text-primary"
                    )} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 mt-auto border-t border-primary/10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass-button">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Facility Manager</span>
              <span className="text-xs text-muted-foreground">The Trash Hub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;