import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Recycle, TrendingDown, TrendingUp, Truck, MapPin, DollarSign, ArrowUpRight, ArrowDownRight, Upload, FileText, Brain, BarChart3, Download } from "lucide-react";
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
    <div className="space-y-8">
      <header className="flex justify-between items-center animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold gradient-text">Waste Analytics Dashboard</h1>
          <p className="text-muted-foreground">Real-time insights for The Trash Hub operations</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="glass-button">
            <Upload className="h-4 w-4 mr-2" />
            Upload Contract
          </Button>
          <button className="glass-button px-4 py-2 rounded-xl hover-scale">
            <Recycle className="h-5 w-5 text-primary" />
          </button>
          <button className="glass-button px-4 py-2 rounded-xl hover-scale">
            <Truck className="h-5 w-5 text-accent" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-up">
        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Costs/Property</p>
              <h2 className="text-3xl font-bold text-foreground">$342.50</h2>
              <p className="text-sm text-success flex items-center gap-1 mt-1">
                <TrendingDown className="h-3 w-3" />
                -8.3% vs last month
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-primary to-primary-glow rounded-xl">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pickup Optimization</p>
              <h2 className="text-3xl font-bold text-foreground">94%</h2>
              <p className="text-sm text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +12% efficiency gain
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-xl">
              <Truck className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Sustainability Score</p>
              <h2 className="text-3xl font-bold text-foreground">91/100</h2>
              <p className="text-sm text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                Industry leading
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-primary to-success rounded-xl">
              <Recycle className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Cost Savings YTD</p>
              <h2 className="text-3xl font-bold text-foreground">$187K</h2>
              <p className="text-sm text-success flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-3 w-3" />
                +34% vs target
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-success to-primary-glow rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Document Upload & AI Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">Contract Analysis</h3>
            <Badge className="bg-primary/10 text-primary border-primary/20">AI-Powered</Badge>
          </div>
          
          {/* Drag & Drop Upload Zone */}
          <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:scale-110 transition-transform">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">Drop contracts here</p>
                <p className="text-sm text-muted-foreground">or click to browse files</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX up to 10MB</p>
              </div>
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

        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">AI Insights</h3>
            <Brain className="h-5 w-5 text-primary" />
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

      {/* Property Comparison Tools */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Property Comparison</h3>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Compare
            </Button>
            <Button size="sm" variant="outline">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Cost & Efficiency Trends</h3>
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

        <Card className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Regional Benchmarking</h3>
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
  );
};

export default Index;