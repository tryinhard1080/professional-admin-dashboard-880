import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Recycle, TrendingDown, TrendingUp, Truck, MapPin, DollarSign, ArrowUpRight, ArrowDownRight, Upload, FileText, Brain, BarChart3, Download, Leaf, PiggyBank, Bell, Settings } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts";

const wasteMetrics = [
  { name: "Jan", costs: 45000, pickups: 1240, sustainability: 78, savings: 8500 },
  { name: "Feb", costs: 42000, pickups: 1180, sustainability: 82, savings: 12300 },
  { name: "Mar", costs: 48000, pickups: 1320, sustainability: 79, savings: 9800 },
  { name: "Apr", costs: 46000, pickups: 1280, sustainability: 85, savings: 15200 },
  { name: "May", costs: 44000, pickups: 1260, sustainability: 88, savings: 18900 },
  { name: "Jun", costs: 41000, pickups: 1200, sustainability: 91, savings: 22400 },
];

const regionalBenchmarks = [
  { region: "Downtown", cost: "$42.30/ton", frequency: "3x/week", score: 94 },
  { region: "Industrial", cost: "$38.50/ton", frequency: "2x/week", score: 89 },
  { region: "Residential", cost: "$45.80/ton", frequency: "1x/week", score: 76 },
  { region: "Commercial", cost: "$40.20/ton", frequency: "Daily", score: 92 },
];

const Index = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="glass-nav backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 mb-8 animate-slide-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text">WasteWise Analytics</h1>
                <p className="text-lg text-muted-foreground">Smart Waste Management & Cost Optimization Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="glass" size="icon" className="hover:scale-110">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" className="hover:scale-110">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="gradient" size="lg" className="font-semibold">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Reports
              </Button>
            </div>
          </div>
        </header>

        {/* Enhanced KPI Cards with 2025 Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card variant="glass" interactive className="group">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground/80">Monthly Costs/Property</p>
                  <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">$342.50</h2>
                  <p className="text-sm text-muted-foreground flex items-center mt-2">
                    <TrendingDown className="mr-1 h-3 w-3 text-secondary" />
                    -8.3% vs last month
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </Card>

          <Card variant="glass" interactive className="group">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground/80">Pickup Optimization</p>
                  <h2 className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">94%</h2>
                  <p className="text-sm text-muted-foreground flex items-center mt-2">
                    <TrendingUp className="mr-1 h-3 w-3 text-secondary" />
                    +12% efficiency gain
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-gradient-secondary group-hover:animate-glow-pulse">
                  <Truck className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </Card>

          <Card variant="glass" interactive className="group">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground/80">Sustainability Score</p>
                  <h2 className="text-3xl font-bold bg-gradient-data bg-clip-text text-transparent">91/100</h2>
                  <p className="text-sm text-muted-foreground flex items-center mt-2">
                    <TrendingUp className="mr-1 h-3 w-3 text-secondary" />
                    Industry leading
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-gradient-data group-hover:animate-glow-pulse">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </Card>

          <Card variant="glass" interactive className="group">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground/80">Cost Savings YTD</p>
                  <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">$187K</h2>
                  <p className="text-sm text-muted-foreground flex items-center mt-2">
                    <ArrowUpRight className="mr-1 h-3 w-3 text-secondary" />
                    +34% vs target
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse">
                  <PiggyBank className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Document Upload & AI Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card variant="glass" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Upload className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Contract Analysis</h3>
              </div>
              <Badge className="bg-gradient-primary text-white border-0 px-3 py-1 text-sm font-medium">AI-Powered</Badge>
            </div>
          
            {/* Enhanced Drag & Drop Upload Zone */}
            <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer group bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-gradient-primary rounded-full group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">Drop contracts here</p>
                  <p className="text-sm text-muted-foreground">or click to browse files</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX up to 10MB</p>
                </div>
                <Button variant="glass" className="mt-4">
                  <FileText className="mr-2 h-4 w-4" />
                  Browse Files
                </Button>
              </div>
            </div>

          {/* Recent Uploads */}
          <div className="mt-6 space-y-3">
            <h4 className="font-medium text-foreground">Recent Analysis</h4>
            {[
              { name: "Downtown_Contract_2024.pdf", status: "completed", savings: "$12,500" },
              { name: "Industrial_Agreement.pdf", status: "processing", savings: "..." },
              { name: "Residential_Terms.docx", status: "completed", savings: "$8,200" }
            ].map((file, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{file.name}</p>
                    <div className="flex items-center gap-2">
                      <Badge className={file.status === 'completed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}>
                        {file.status}
                      </Badge>
                      {file.status === 'processing' && (
                        <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-success">{file.savings}</p>
                  <p className="text-xs text-muted-foreground">potential savings</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

          <Card variant="glass" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-secondary">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI Insights</h3>
              </div>
            </div>

          <div className="space-y-4">
            {[
              {
                title: "Route Optimization Opportunity",
                description: "AI detected 18% efficiency gain possible by consolidating Routes A & C",
                impact: "High",
                savings: "$15,200/month",
                confidence: 94
              },
              {
                title: "Contract Renegotiation Alert",
                description: "Downtown contract rates 23% above market average for similar properties",
                impact: "High", 
                savings: "$8,900/month",
                confidence: 87
              },
              {
                title: "Pickup Frequency Adjustment",
                description: "Residential Zone B shows 40% unused capacity, reduce to 2x/week",
                impact: "Medium",
                savings: "$3,400/month", 
                confidence: 78
              }
            ].map((insight, i) => (
              <div key={i} className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{insight.title}</h4>
                  <Badge className={insight.impact === 'High' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}>
                    {insight.impact}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm font-bold text-success">{insight.savings}</p>
                      <p className="text-xs text-muted-foreground">potential savings</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{insight.confidence}%</p>
                      <p className="text-xs text-muted-foreground">confidence</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Implement</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

        {/* Enhanced Property Comparison Tools */}
        <Card variant="glass" className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-data">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Property Comparison</h3>
            </div>
            <div className="flex gap-3">
              <Button variant="glass" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Compare
              </Button>
              <Button variant="gradient" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Downtown Complex", cost: "$342.50", efficiency: 94, sustainability: 91, selected: true },
            { name: "Industrial Park", cost: "$289.30", efficiency: 87, sustainability: 78, selected: true },
            { name: "Shopping Center", cost: "$412.80", efficiency: 76, sustainability: 82, selected: false }
          ].map((property, i) => (
            <div key={i} className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
              property.selected 
                ? 'border-primary bg-primary/5' 
                : 'border-muted hover:border-primary/50 bg-muted/10'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground">{property.name}</h4>
                <div className={`w-3 h-3 rounded-full ${property.selected ? 'bg-primary' : 'bg-muted'}`} />
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Cost per Property</p>
                  <p className="text-lg font-bold text-foreground">{property.cost}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Efficiency</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-success h-2 rounded-full"
                          style={{ width: `${property.efficiency}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium">{property.efficiency}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground">Sustainability</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-success h-2 rounded-full"
                          style={{ width: `${property.sustainability}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium">{property.sustainability}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card variant="glass" className="p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Cost & Efficiency Trends</h3>
            </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={wasteMetrics}>
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    backdropFilter: "blur(8px)"
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="costs"
                  stroke="hsl(var(--secondary))"
                  fill="hsl(var(--secondary) / 0.1)"
                  strokeWidth={3}
                  name="Monthly Costs ($)"
                />
                <Area
                  type="monotone"
                  dataKey="savings"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary) / 0.1)"
                  strokeWidth={3}
                  name="Cost Savings ($)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

          <Card variant="glass" className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-secondary">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Regional Benchmarking</h3>
            </div>
          <div className="space-y-4">
            {regionalBenchmarks.map((region, i) => (
              <div key={i} className="p-4 rounded-xl bg-muted/30 backdrop-blur-sm border border-primary/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{region.region}</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-success"></div>
                    <span className="text-sm font-medium">{region.score}/100</span>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Cost: <span className="text-foreground font-medium">{region.cost}</span></p>
                  <p>Frequency: <span className="text-foreground font-medium">{region.frequency}</span></p>
                </div>
              </div>
            ))}
          </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;