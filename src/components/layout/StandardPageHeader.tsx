import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface StandardPageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  children?: ReactNode;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "glass" | "gradient" | "success" | "warning" | "info" | "destructive" | "outline";
  };
  className?: string;
}

export function StandardPageHeader({
  title,
  description,
  icon: Icon,
  children,
  badge,
  className = ""
}: StandardPageHeaderProps) {
  return (
    <header className={`glass-nav backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 mb-8 animate-slide-up ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Icon className="h-8 w-8 text-white" />
            </div>
          )}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold gradient-text">{title}</h1>
              {badge && (
                <Badge variant={badge.variant || "glass"} className="px-3 py-1 text-sm font-medium">
                  {badge.text}
                </Badge>
              )}
            </div>
            {description && (
              <p className="text-lg text-muted-foreground mt-2">{description}</p>
            )}
          </div>
        </div>
        {children && (
          <div className="flex items-center gap-3">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}