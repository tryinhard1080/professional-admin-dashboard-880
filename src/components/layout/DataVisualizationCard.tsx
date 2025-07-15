import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon, Download, Share2, MoreHorizontal } from "lucide-react";

interface DataVisualizationCardProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "glass" | "success" | "warning" | "info";
  };
  actions?: {
    download?: boolean;
    share?: boolean;
    more?: boolean;
  };
  variant?: "default" | "glass" | "gradient" | "glow";
  className?: string;
  children: ReactNode;
}

export function DataVisualizationCard({
  title,
  subtitle,
  icon: Icon,
  badge,
  actions,
  variant = "glass",
  className = "",
  children
}: DataVisualizationCardProps) {
  return (
    <Card variant={variant} className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2 rounded-lg bg-gradient-data">
              <Icon className="h-5 w-5 text-white" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {badge && (
            <Badge variant={badge.variant || "glass"} className="px-2 py-1 text-xs">
              {badge.text}
            </Badge>
          )}
          
          {actions && (
            <div className="flex items-center gap-1">
              {actions.download && (
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent/50">
                  <Download className="h-4 w-4" />
                </Button>
              )}
              {actions.share && (
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent/50">
                  <Share2 className="h-4 w-4" />
                </Button>
              )}
              {actions.more && (
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent/50">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="min-h-[200px]">
        {children}
      </div>
    </Card>
  );
}