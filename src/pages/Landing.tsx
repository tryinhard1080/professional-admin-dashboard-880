import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Recycle, BarChart, DollarSign } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-primary overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
              Protect your income!
            </h1>
            <span className="text-5xl md:text-[7rem] font-bold mt-1 leading-none bg-gradient-accent bg-clip-text text-transparent">
              WasteWise
            </span>
            <p className="text-xl text-white/80 mt-6 mb-8 max-w-2xl mx-auto">
              AI-powered waste management analytics that reduce costs by up to 30% while improving sustainability
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button asChild size="lg" variant="secondary">
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/analytics">See Analytics</Link>
              </Button>
            </div>
          </>
        }
      >
        <div className="h-full w-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 overflow-hidden">
          {/* Dashboard Preview Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Recycle className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">WasteWise Analytics</h2>
                <p className="text-sm text-muted-foreground">Live Dashboard Preview</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Current Month</div>
              <div className="text-xs text-primary font-medium">$12K Savings Identified</div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-primary/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Annual Savings</span>
              </div>
              <div className="text-2xl font-bold text-primary">$12K</div>
            </div>
            <div className="bg-destructive/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BarChart className="w-4 h-4 text-destructive" />
                <span className="text-xs text-muted-foreground">Current Costs</span>
              </div>
              <div className="text-2xl font-bold text-destructive">$60K</div>
            </div>
            <div className="bg-accent/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Recycle className="w-4 h-4 text-accent-foreground" />
                <span className="text-xs text-muted-foreground">Efficiency</span>
              </div>
              <div className="text-2xl font-bold text-accent-foreground">92%</div>
            </div>
          </div>

          {/* Chart Preview */}
          <div className="mb-6">
            <h3 className="text-md font-semibold text-foreground mb-3">Cost Optimization Forecast</h3>
            <div className="h-40 bg-card border border-border rounded-lg p-4 relative">
              <svg className="w-full h-full" viewBox="0 0 400 120">
                <defs>
                  <linearGradient id="savings-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05"/>
                  </linearGradient>
                </defs>
                
                {/* Savings area */}
                <polygon
                  fill="url(#savings-gradient)"
                  points="0,70 50,65 100,60 150,55 200,50 250,45 300,40 350,35 400,30 400,90 350,85 300,80 250,75 200,70 150,65 100,60 50,55 0,50"
                />
                
                {/* Current trend line */}
                <polyline
                  fill="none"
                  stroke="hsl(var(--destructive))"
                  strokeWidth="3"
                  points="0,70 50,65 100,60 150,55 200,50 250,45 300,40 350,35 400,30"
                />
                
                {/* Optimized trend line */}
                <polyline
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeDasharray="6,3"
                  points="0,50 50,55 100,60 150,65 200,70 250,75 300,80 350,85 400,90"
                />
              </svg>
            </div>
          </div>

          {/* Optimization Opportunities */}
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Contract Optimization</span>
                <span className="text-primary font-medium">$4K/year</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{width: '33%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Route Optimization</span>
                <span className="text-accent-foreground font-medium">$6K/year</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-accent h-2 rounded-full animate-pulse" style={{width: '50%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Container Right-sizing</span>
                <span className="text-primary font-medium">$2K/year</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{width: '17%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}