
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

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/10 rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-white/10 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
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
              Cutting edge AI models analyze waste contracts against industry standards. 
              Identify risks, optimize costs, and protect your budget with intelligent insights.
            </p>
          </div>

          {/* Enhanced Process Visualization */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="glass-card rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Upload Contract</h3>
              <p className="text-xs text-white/70">&lt; 30 seconds</p>
            </div>
            
            <div className="glass-card rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">AI Analysis</h3>
              <p className="text-xs text-white/70">3-5 seconds</p>
            </div>
            
            <div className="glass-card rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Risk Analysis</h3>
              <p className="text-xs text-white/70">1-2 seconds</p>
            </div>
            
            <div className="glass-card rounded-lg p-4 text-center">
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
        <div className="h-full w-full glass-card rounded-2xl p-6 overflow-hidden hover-lift transition-all duration-500 shadow-elegant">
          {/* Enhanced Dashboard Preview Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-glow-pulse">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">WasteWise Intelligence</h2>
                <p className="text-sm text-white/70">AI-Powered Analytics Dashboard</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-white mb-1">
                <CheckCircle className="w-3 h-3 text-secondary" />
                <span>Analysis Complete</span>
              </div>
              <div className="text-xs text-primary font-medium bg-primary/20 px-2 py-1 rounded">$12K Savings Identified</div>
            </div>
          </div>

          {/* Enhanced Key Metrics Grid with AI Theme */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="glass-card p-4 rounded-lg hover-scale transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-bl-full"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-primary/20">
                  <DollarSign className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-white">Annual Savings</span>
              </div>
              <div className="text-2xl font-bold text-primary">$48K</div>
              <div className="text-xs text-secondary font-medium mt-1">+20% vs last year</div>
            </div>
            
            <div className="glass-card p-4 rounded-lg hover-scale transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-destructive/10 rounded-bl-full"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-destructive/20">
                  <BarChart className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-xs font-medium text-white">Risk Score</span>
              </div>
              <div className="text-2xl font-bold text-destructive">Medium</div>
              <div className="text-xs text-destructive font-medium mt-1">3 issues found</div>
            </div>
            
            <div className="glass-card p-4 rounded-lg hover-scale transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-secondary/10 rounded-bl-full"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-secondary/20">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-xs font-medium text-white">Efficiency</span>
              </div>
              <div className="text-2xl font-bold text-secondary">87%</div>
              <div className="text-xs text-secondary font-medium mt-1">Above average</div>
            </div>
          </div>

          {/* Enhanced Chart Preview */}
          <div className="mb-6">
            <h3 className="text-md font-semibold text-white mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              AI Cost Optimization Forecast
            </h3>
            <div className="h-48 glass-card rounded-lg p-4 relative">
              <div className="absolute top-3 right-3 space-y-2 text-xs glass-card p-2 rounded">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-destructive"></div>
                  <span className="text-white font-medium">Current Spend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-primary"></div>
                  <span className="text-white font-medium">Optimized Spend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-2 bg-secondary/50 rounded-sm"></div>
                  <span className="text-white font-medium">AI Savings</span>
                </div>
              </div>
              
              <div className="w-full h-full relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="ai-savings-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                  {/* AI Savings Area */}
                  <polygon 
                    fill="url(#ai-savings-gradient)" 
                    points="20,70 80,65 140,60 200,55 260,50 320,45 380,40 380,110 320,105 260,100 200,95 140,90 80,85 20,80" 
                  />
                  
                  {/* Current Spend Line */}
                  <polyline 
                    fill="none" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth="3" 
                    points="20,70 80,65 140,60 200,55 260,50 320,45 380,40"
                  />
                  
                  {/* Optimized Spend Line */}
                  <polyline 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="3" 
                    strokeDasharray="5,3" 
                    points="20,80 80,85 140,90 200,95 260,100 320,105 380,110"
                  />
                  
                  {/* Data Points */}
                  <circle cx="20" cy="70" r="3" fill="hsl(var(--destructive))" />
                  <circle cx="140" cy="60" r="3" fill="hsl(var(--destructive))" />
                  <circle cx="260" cy="50" r="3" fill="hsl(var(--destructive))" />
                  <circle cx="380" cy="40" r="3" fill="hsl(var(--destructive))" />
                  
                  <circle cx="20" cy="80" r="3" fill="hsl(var(--primary))" />
                  <circle cx="140" cy="90" r="3" fill="hsl(var(--primary))" />
                  <circle cx="260" cy="100" r="3" fill="hsl(var(--primary))" />
                  <circle cx="380" cy="110" r="3" fill="hsl(var(--primary))" />
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced Optimization Opportunities with AI Theme */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-white flex items-center gap-2">
              <Brain className="w-4 h-4 text-primary" />
              AI-Identified Opportunities
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg glass-card hover-scale transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="font-semibold text-white">Contract Term Optimization</span>
                  <span className="text-primary font-bold bg-primary/20 px-2 py-1 rounded">$18K/year</span>
                </div>
                <p className="text-xs text-white/70 mb-3">AI detected sub-optimal contract terms vs industry standards</p>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-1000" style={{width: '60%'}}></div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg glass-card hover-scale transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-secondary/10 rounded-bl-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="font-semibold text-white">Route & Schedule Optimization</span>
                  <span className="text-secondary font-bold bg-secondary/20 px-2 py-1 rounded">$22K/year</span>
                </div>
                <p className="text-xs text-white/70 mb-3">Machine learning analysis of pickup patterns and efficiency gains</p>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full transition-all duration-1000" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg glass-card hover-scale transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-accent/10 rounded-bl-full flex items-center justify-center">
                  <BarChart className="w-4 h-4 text-accent" />
                </div>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="font-semibold text-white">Container Right-sizing</span>
                  <span className="text-accent font-bold bg-accent/20 px-2 py-1 rounded">$8K/year</span>
                </div>
                <p className="text-xs text-white/70 mb-3">AI analysis of waste volume patterns for optimal container sizing</p>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full transition-all duration-1000" style={{width: '35%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Enhanced Content Section Below Dashboard */}
      <div className="py-20 px-6 bg-gradient-primary relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How WasteWise Intelligence Works
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-4">
              Powered by cutting edge AI models, our platform provides enterprise-grade waste management intelligence that transforms how organizations manage costs and risks.
            </p>
            <p className="text-base text-secondary font-medium max-w-2xl mx-auto">
              For property managers: Save your time and your budgets - ensuring no detail gets missed in your annual waste spend review.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-lg p-6 hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Contract Analysis</h3>
              <p className="text-white/70 mb-4">
                Cutting edge AI technology analyzes contracts against industry standards, identifying hidden costs and optimization opportunities in seconds.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
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

            <div className="glass-card rounded-lg p-6 hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Risk Assessment & Mitigation</h3>
              <p className="text-white/70 mb-4">
                Identify potential risks with color-coded severity levels and cost impact analysis. Prevent budget overruns before they happen.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
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

            <div className="glass-card rounded-lg p-6 hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Professional Reports</h3>
              <p className="text-white/70 mb-4">
                Executive-ready insights with actionable recommendations and cost savings. Professional reports generated instantly for immediate decision-making.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
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
