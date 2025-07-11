
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
            <div className="bg-secondary/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-secondary" />
                <span className="text-xs text-muted-foreground">Savings</span>
              </div>
              <div className="text-2xl font-bold text-secondary">20%</div>
            </div>
          </div>

          {/* Chart Preview */}
          <div className="mb-6">
            <h3 className="text-md font-semibold text-foreground mb-3">Cost Optimization Forecast</h3>
            <div className="h-52 bg-card border border-border rounded-lg p-2 relative">
              {/* Chart Labels */}
              <div className="absolute top-1 right-1 space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-destructive"></div>
                  <span className="text-muted-foreground">Current Spend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-primary border-dashed border-t-2 border-primary bg-transparent"></div>
                  <span className="text-muted-foreground">Waste Spend with WasteWise</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-2 bg-secondary/30 rounded-sm"></div>
                  <span className="text-muted-foreground">Savings</span>
                </div>
              </div>
              
              {/* Background grid for better visual structure */}
              <svg className="absolute inset-2 w-full h-full opacity-10" viewBox="0 0 400 160">
                <defs>
                  <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 20" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              
              <svg className="w-full h-full" viewBox="0 0 400 160">
                <defs>
                  <linearGradient id="savings-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Savings area (green shaded) - expanded to fill more space */}
                <polygon fill="url(#savings-gradient)" points="10,90 60,85 110,80 160,75 210,70 260,65 310,60 360,55 390,50 390,130 360,125 310,120 260,115 210,110 160,105 110,100 60,95 10,90" />
                
                {/* Current spend line (red) - extended and repositioned */}
                <polyline fill="none" stroke="hsl(var(--destructive))" strokeWidth="3" points="10,90 60,85 110,80 160,75 210,70 260,65 310,60 360,55 390,50" />
                
                {/* Waste spend with WasteWise line (blue dotted) - extended and repositioned */}
                <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="6,3" points="10,90 60,95 110,100 160,105 210,110 260,115 310,120 360,125 390,130" />
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
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{
                width: '33%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Route Optimization</span>
                <span className="text-accent-foreground font-medium">$6K/year</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-accent h-2 rounded-full animate-pulse" style={{
                width: '50%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Container Right-sizing</span>
                <span className="text-primary font-medium">$2K/year</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{
                width: '17%'
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>;
}
