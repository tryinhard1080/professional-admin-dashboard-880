import { Card } from "@/components/ui/card";
import { Recycle, TrendingDown, TrendingUp, Truck, MapPin, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
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