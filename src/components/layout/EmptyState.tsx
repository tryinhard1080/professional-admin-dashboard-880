import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    text: string;
    onClick: () => void;
    variant?: "default" | "outline" | "ghost" | "gradient";
  };
  className?: string;
  children?: ReactNode;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className = "",
  children
}: EmptyStateProps) {
  return (
    <Card variant="glass" className={`p-12 text-center ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        {Icon && (
          <div className="p-4 rounded-full bg-muted/30">
            <Icon className="h-8 w-8 text-muted-foreground" />
          </div>
        )}
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-muted-foreground max-w-md">{description}</p>
          )}
        </div>

        {children}

        {action && (
          <Button
            variant={action.variant || "default"}
            onClick={action.onClick}
            className="mt-4"
          >
            {action.text}
          </Button>
        )}
      </div>
    </Card>
  );
}