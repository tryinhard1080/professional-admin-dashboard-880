
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Recycle, BarChart, DollarSign } from "lucide-react";

export default function Landing() {
  return <div className="min-h-screen bg-gradient-primary overflow-hidden">
      <ContainerScroll titleComponent={<>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
              Protect your income!
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-2">
      </h2>
            <span className="text-6xl md:text-[8rem] font-bold mt-1 leading-none text-secondary">
              WasteWise
            </span>
            <p className="text-xl text-white/80 mt-10 mb-8 max-w-2xl mx-auto">
              AI-powered waste management. Don't let a small oversight on your waste contract blow your budget!
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button asChild size="lg" variant="secondary">
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/analytics">See Analytics</Link>
              </Button>
            </div>
          </>}>
        <div className="h-full w-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 overflow-hidden hover-lift transition-all duration-500 border border-white/20 shadow-elegant">
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

          {/* Enhanced Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-primary/10 p-4 rounded-lg hover-scale transition-all duration-300 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-primary/20">
                  <DollarSign className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Annual Savings</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">$12K</div>
            </div>
            <div className="bg-destructive/10 p-4 rounded-lg hover-scale transition-all duration-300 border border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-destructive/20">
                  <BarChart className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Current Costs</span>
              </div>
              <div className="text-2xl font-bold text-destructive">$60K</div>
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg hover-scale transition-all duration-300 border border-secondary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-secondary/20">
                  <DollarSign className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Savings</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent">20%</div>
            </div>
          </div>

          {/* Chart Preview */}
          <div className="mb-4">
            <h3 className="text-md font-semibold text-foreground mb-3">Cost Optimization Forecast</h3>
            <div className="h-28 bg-card border border-border rounded-lg p-2 relative">
              {/* Chart Labels */}
              <div className="absolute top-1 right-1 space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-destructive"></div>
                  <span className="text-muted-foreground">Current Spend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-primary"></div>
                  <span className="text-muted-foreground">Waste Spend with WasteWise</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-2 bg-primary/30 rounded-sm"></div>
                  <span className="text-muted-foreground">Savings</span>
                </div>
              </div>
              
              <svg className="w-full h-full" viewBox="0 0 400 120">
                <defs>
                  <linearGradient id="savings-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                {/* Savings area (green shaded) */}
                <polygon fill="url(#savings-gradient)" points="0,70 50,65 100,60 150,55 200,50 250,45 300,40 350,35 400,30 400,90 350,85 300,80 250,75 200,70 150,65 100,60 50,55 0,50" />
                
                {/* Current spend line (red) */}
                <polyline fill="none" stroke="hsl(var(--destructive))" strokeWidth="3" points="0,70 50,65 100,60 150,55 200,50 250,45 300,40 350,35 400,30" />
                
                {/* Waste spend with WasteWise line (blue dotted) */}
                <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="6,3" points="0,50 50,55 100,60 150,65 200,70 250,75 300,80 350,85 400,90" />
              </svg>
            </div>
          </div>

          {/* Enhanced Optimization Opportunities */}
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover-scale transition-all duration-300">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Contract Optimization</span>
                  <span className="text-primary font-bold">$4K/year</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-glow-pulse transition-all duration-1000" style={{width: '33%'}}></div>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-gradient-to-r from-secondary/5 to-transparent border border-secondary/10 hover-scale transition-all duration-300">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Route Optimization</span>
                  <span className="text-secondary font-bold">$6K/year</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-secondary h-2 rounded-full animate-glow-pulse transition-all duration-1000" style={{width: '50%'}}></div>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover-scale transition-all duration-300">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Container Right-sizing</span>
                  <span className="text-accent font-bold">$2K/year</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full animate-glow-pulse transition-all duration-1000" style={{width: '17%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>;
}
