import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "glass" | "gradient" | "success" | "warning" | "info";
  };
  actions?: {
    primary?: {
      text: string;
      onClick: () => void;
      variant?: "default" | "secondary" | "glass" | "gradient";
      disabled?: boolean;
    };
    secondary?: {
      text: string;
      onClick: () => void;
      variant?: "outline" | "ghost";
      disabled?: boolean;
    };
  };
  variant?: "default" | "glass" | "gradient" | "glow" | "premium" | "floating";
  className?: string;
  children?: ReactNode;
}

export function ActionCard({
  title,
  description,
  icon: Icon,
  badge,
  actions,
  variant = "glass",
  className = "",
  children
}: ActionCardProps) {
  return (
    <Card variant={variant} interactive className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Icon className="h-5 w-5 text-white" />
            </div>
          )}
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        {badge && (
          <Badge variant={badge.variant || "glass"} className="px-3 py-1 text-sm font-medium">
            {badge.text}
          </Badge>
        )}
      </div>

      {description && (
        <p className="text-muted-foreground mb-6">{description}</p>
      )}

      {children}

      {actions && (
        <div className="flex items-center gap-3 mt-6">
          {actions.primary && (
            <Button
              variant={actions.primary.variant || "default"}
              onClick={actions.primary.onClick}
              disabled={actions.primary.disabled}
            >
              {actions.primary.text}
            </Button>
          )}
          {actions.secondary && (
            <Button
              variant={actions.secondary.variant || "outline"}
              onClick={actions.secondary.onClick}
              disabled={actions.secondary.disabled}
            >
              {actions.secondary.text}
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}