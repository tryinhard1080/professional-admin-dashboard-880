import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    trend: "up" | "down" | "neutral";
    label?: string;
  };
  icon?: LucideIcon;
  iconGradient?: "primary" | "secondary" | "data";
  valueGradient?: "primary" | "secondary" | "data";
  className?: string;
  children?: ReactNode;
}

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  iconGradient = "primary",
  valueGradient = "primary",
  className = "",
  children
}: MetricCardProps) {
  const gradientMap = {
    primary: "bg-gradient-primary",
    secondary: "bg-gradient-secondary", 
    data: "bg-gradient-data"
  };

  const textGradientMap = {
    primary: "bg-gradient-primary bg-clip-text text-transparent",
    secondary: "bg-gradient-secondary bg-clip-text text-transparent",
    data: "bg-gradient-data bg-clip-text text-transparent"
  };

  const getTrendIcon = () => {
    if (change?.trend === "up") return TrendingUp;
    if (change?.trend === "down") return TrendingDown;
    return null;
  };

  const getTrendColor = () => {
    if (change?.trend === "up") return "text-data-positive";
    if (change?.trend === "down") return "text-data-negative";
    return "text-data-neutral";
  };

  const TrendIcon = getTrendIcon();

  return (
    <Card variant="glass" interactive className={`group ${className}`}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-foreground/80">{title}</p>
            <h2 className={`text-3xl font-bold ${textGradientMap[valueGradient]}`}>
              {value}
            </h2>
            {change && (
              <p className={`text-sm flex items-center mt-2 ${getTrendColor()}`}>
                {TrendIcon && <TrendIcon className="mr-1 h-3 w-3" />}
                {change.value} {change.label}
              </p>
            )}
          </div>
          {Icon && (
            <div className={`p-3 rounded-lg ${gradientMap[iconGradient]} group-hover:animate-glow-pulse`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
          )}
        </div>
        {children}
      </div>
    </Card>
  );
}