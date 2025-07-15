import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  text?: string;
  variant?: "card" | "inline" | "overlay";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingState({
  text = "Loading...",
  variant = "card",
  size = "md",
  className = ""
}: LoadingStateProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  };

  const content = (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Loader2 className={`animate-spin text-primary ${sizeClasses[size]}`} />
      <p className={`text-muted-foreground ${size === "sm" ? "text-sm" : "text-base"}`}>
        {text}
      </p>
    </div>
  );

  if (variant === "inline") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Loader2 className={`animate-spin text-primary ${sizeClasses[size]}`} />
        <span className="text-muted-foreground">{text}</span>
      </div>
    );
  }

  if (variant === "overlay") {
    return (
      <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <Card variant="glass" className={`p-12 ${className}`}>
      {content}
    </Card>
  );
}