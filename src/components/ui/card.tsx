import * as React from "react"

import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient' | 'glow' | 'premium' | 'floating'
  interactive?: boolean
  loading?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', interactive = false, loading = false, ...props }, ref) => {
    const variants = {
      default: "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300",
      glass: "glass-card rounded-xl border border-white/20 bg-white/10 text-card-foreground backdrop-blur-md hover-lift",
      gradient: "rounded-xl bg-gradient-primary text-white shadow-glow hover-glow transition-all duration-300",
      glow: "rounded-lg border bg-card text-card-foreground shadow-glow animate-glow-pulse hover-scale",
      premium: "rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 border border-primary/20 backdrop-blur-sm hover-lift transition-all duration-500",
      floating: "rounded-xl bg-card border border-border shadow-depth hover:shadow-float transition-all duration-300 hover:-translate-y-2"
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          variants[variant],
          interactive && "card-interactive hover-scale cursor-pointer",
          loading && "skeleton",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
