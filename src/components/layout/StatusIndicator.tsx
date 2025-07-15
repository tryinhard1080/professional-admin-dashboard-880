import { CheckCircle, AlertCircle, Clock, XCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StatusIndicatorProps {
  status: "success" | "warning" | "error" | "pending" | "info";
  text: string;
  showIcon?: boolean;
  variant?: "badge" | "inline";
  size?: "sm" | "md" | "lg";
}

export function StatusIndicator({
  status,
  text,
  showIcon = true,
  variant = "badge",
  size = "md"
}: StatusIndicatorProps) {
  const statusConfig = {
    success: {
      icon: CheckCircle,
      variant: "success" as const,
      color: "text-data-positive"
    },
    warning: {
      icon: AlertCircle,
      variant: "warning" as const,
      color: "text-warning"
    },
    error: {
      icon: XCircle,
      variant: "destructive" as const,
      color: "text-data-negative"
    },
    pending: {
      icon: Clock,
      variant: "outline" as const,
      color: "text-data-neutral"
    },
    info: {
      icon: Info,
      variant: "info" as const,
      color: "text-info"
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4", 
    lg: "h-5 w-5"
  };

  if (variant === "inline") {
    return (
      <div className={`flex items-center gap-2 ${config.color}`}>
        {showIcon && <Icon className={sizeClasses[size]} />}
        <span className={`font-medium ${size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm"}`}>
          {text}
        </span>
      </div>
    );
  }

  return (
    <Badge variant={config.variant} className="flex items-center gap-1">
      {showIcon && <Icon className="h-3 w-3" />}
      {text}
    </Badge>
  );
}