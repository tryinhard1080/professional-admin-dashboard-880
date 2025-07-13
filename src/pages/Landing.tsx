
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Recycle, BarChart, DollarSign, Brain, Shield, Zap, Upload, FileText, TrendingUp, CheckCircle, Clock, Eye } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-primary overflow-hidden relative">
      {/* AI-themed Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.3" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" className="text-white" />
        </svg>
      </div>

      {/* Floating AI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-secondary rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <ContainerScroll titleComponent={
        <>
          {/* Professional Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                <Brain className="w-4 h-4" />
                <span>AI Analysis Ready</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                <Shield className="w-4 h-4" />
                <span>Enterprise-Grade Security</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                WasteWise
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-secondary mb-2">
              Intelligence
            </h2>
            <p className="text-lg text-white/90 mb-4">
              Professional Waste Management Platform
            </p>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Claude 3.5 Sonnet AI analyzes waste contracts against industry standards. 
              Identify risks, optimize costs, and protect your budget with intelligent insights.
            </p>
          </div>

          {/* Enhanced Process Visualization */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Upload Contract</h3>
              <p className="text-xs text-white/70">&lt; 30 seconds</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">AI Analysis</h3>
              <p className="text-xs text-white/70">3-5 seconds</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Risk Analysis</h3>
              <p className="text-xs text-white/70">1-2 seconds</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Professional Report</h3>
              <p className="text-xs text-white/70">Instant</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center mb-12">
            <Button asChild size="lg" variant="secondary" className="hover:bg-secondary/90 transition-all duration-300">
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:bg-white/10 transition-all duration-300">
              <Link to="/analytics">See Analytics</Link>
            </Button>
          </div>
        </>
      }>
        <div className="h-full w-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 overflow-hidden hover-lift transition-all duration-500 border border-white/20 shadow-elegant">
          {/* Enhanced Dashboard Preview Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-glow-pulse">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">WasteWise Intelligence</h2>
                <p className="text-sm text-muted-foreground">AI-Powered Analytics Dashboard</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <CheckCircle className="w-3 h-3 text-secondary" />
                <span>Analysis Complete</span>
              </div>
              <div className="text-xs text-primary font-medium">$12K Savings Identified</div>
            </div>
          </div>

          {/* Enhanced Key Metrics Grid with AI Theme */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-primary/10 p-4 rounded-lg hover-scale transition-all duration-300 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-bl-full"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-primary/20">
                  <DollarSign className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Annual Savings</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">$48K</div>
              <div className="text-xs text-primary mt-1">+20% vs last year</div>
            </div>
            
            <div className="bg-destructive/10 p-4 rounded-lg hover-scale transition-all duration-300 border border-destructive/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-destructive/10 rounded-bl-full"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-destructive/20">
                  <BarChart className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Risk Score</span>
              </div>
              <div className="text-2xl font-bold text-destructive">Medium</div>
              <div className="text-xs text-destructive mt-1">3 issues found</div>
            </div>
            
            <div className="bg-secondary/10 p-4 rounded-lg hover-scale transition-all duration-300 border border-secondary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-secondary/10 rounded-bl-full"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-secondary/20">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Efficiency</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent">87%</div>
              <div className="text-xs text-secondary mt-1">Above average</div>
            </div>
          </div>

          {/* Enhanced Chart Preview */}
          <div className="mb-6">
            <h3 className="text-md font-semibold text-foreground mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              AI Cost Optimization Forecast
            </h3>
            <div className="h-32 bg-card border border-border rounded-lg p-3 relative">
              <div className="absolute top-2 right-2 space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-destructive"></div>
                  <span className="text-muted-foreground">Current Spend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-primary"></div>
                  <span className="text-muted-foreground">Optimized Spend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-2 bg-secondary/30 rounded-sm"></div>
                  <span className="text-muted-foreground">AI Savings</span>
                </div>
              </div>
              
              <svg className="w-full h-full" viewBox="0 0 400 140">
                <defs>
                  <linearGradient id="ai-savings-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                <polygon fill="url(#ai-savings-gradient)" points="0,80 50,75 100,70 150,65 200,60 250,55 300,50 350,45 400,40 400,100 350,95 300,90 250,85 200,80 150,75 100,70 50,65 0,60" />
                <polyline fill="none" stroke="hsl(var(--destructive))" strokeWidth="3" points="0,80 50,75 100,70 150,65 200,60 250,55 300,50 350,45 400,40" />
                <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="6,3" points="0,60 50,65 100,70 150,75 200,80 250,85 300,90 350,95 400,100" />
              </svg>
            </div>
          </div>

          {/* Enhanced Optimization Opportunities with AI Theme */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground flex items-center gap-2">
              <Brain className="w-4 h-4 text-primary" />
              AI-Identified Opportunities
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover-scale transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Contract Term Optimization</span>
                  <span className="text-primary font-bold">$18K/year</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">AI detected sub-optimal contract terms vs industry standards</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-glow-pulse transition-all duration-1000" style={{width: '60%'}}></div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-r from-secondary/5 to-transparent border border-secondary/10 hover-scale transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-secondary/5 rounded-bl-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Route & Schedule Optimization</span>
                  <span className="text-secondary font-bold">$22K/year</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Machine learning analysis of pickup patterns and efficiency gains</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-secondary h-2 rounded-full animate-glow-pulse transition-all duration-1000" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover-scale transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-accent/5 rounded-bl-full flex items-center justify-center">
                  <BarChart className="w-4 h-4 text-accent" />
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Container Right-sizing</span>
                  <span className="text-accent font-bold">$8K/year</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">AI analysis of waste volume patterns for optimal container sizing</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full animate-glow-pulse transition-all duration-1000" style={{width: '35%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Enhanced Content Section Below Dashboard */}
      <div className="py-20 px-6 bg-gradient-to-b from-card to-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How WasteWise Intelligence Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by Claude 3.5 Sonnet AI, our platform provides enterprise-grade waste management intelligence that transforms how organizations manage costs and risks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Contract Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Claude 3.5 Sonnet technology analyzes contracts against industry standards, identifying hidden costs and optimization opportunities in seconds.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>99.7% accuracy in contract analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Industry benchmark comparisons</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Risk Assessment & Mitigation</h3>
              <p className="text-muted-foreground mb-4">
                Identify potential risks with color-coded severity levels and cost impact analysis. Prevent budget overruns before they happen.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Predictive risk modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Real-time cost monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Instant Professional Reports</h3>
              <p className="text-muted-foreground mb-4">
                Executive-ready insights with actionable recommendations and cost savings. Professional reports generated instantly for immediate decision-making.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>C-suite ready presentations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Actionable recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
