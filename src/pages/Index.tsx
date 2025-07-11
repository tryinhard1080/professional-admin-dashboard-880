import { Card } from "@/components/ui/card";
import { Recycle, TrendingDown, TrendingUp, Truck, MapPin, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts";

const wasteData = [
  { name: "Jan", collected: 2400, recycled: 1800, cost: 15000 },
  { name: "Feb", collected: 2100, recycled: 1600, cost: 13500 },
  { name: "Mar", collected: 2800, recycled: 2200, cost: 17000 },
  { name: "Apr", collected: 2600, recycled: 2000, cost: 16200 },
  { name: "May", collected: 3200, recycled: 2500, cost: 18500 },
  { name: "Jun", collected: 2900, recycled: 2300, cost: 17800 },
];

const costSavingsData = [
  { name: "Q1", savings: 12000 },
  { name: "Q2", savings: 18500 },
  { name: "Q3", savings: 24000 },
  { name: "Q4", savings: 31500 },
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Waste Collected</p>
              <h2 className="text-3xl font-bold text-foreground">2,847 tons</h2>
              <p className="text-sm text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +12.5% this month
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-primary to-primary-glow rounded-xl">
              <Recycle className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Recycling Rate</p>
              <h2 className="text-3xl font-bold text-foreground">78.4%</h2>
              <p className="text-sm text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +5.2% improvement
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-success to-primary-glow rounded-xl">
              <ArrowUpRight className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Savings</p>
              <h2 className="text-3xl font-bold text-foreground">$24,680</h2>
              <p className="text-sm text-warning flex items-center gap-1 mt-1">
                <TrendingDown className="h-3 w-3" />
                Cost optimization
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-warning to-accent rounded-xl">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Waste Collection Trends</h3>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={wasteData}>
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
                  dataKey="collected"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary) / 0.1)"
                  strokeWidth={3}
                  name="Collected (tons)"
                />
                <Area
                  type="monotone"
                  dataKey="recycled"
                  stroke="hsl(var(--success))"
                  fill="hsl(var(--success) / 0.1)"
                  strokeWidth={3}
                  name="Recycled (tons)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Collections</h3>
          <div className="space-y-4">
            {[
              { location: "Downtown District", amount: "2.4 tons", time: "2 hours ago", type: "Mixed Waste" },
              { location: "Industrial Park", amount: "5.2 tons", time: "4 hours ago", type: "Recyclables" },
              { location: "Residential Zone A", amount: "1.8 tons", time: "6 hours ago", type: "Organic" },
              { location: "Shopping Center", amount: "3.1 tons", time: "8 hours ago", type: "Commercial" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-full">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.location}</p>
                    <p className="text-sm text-muted-foreground">{item.time} • {item.type}</p>
                  </div>
                </div>
                <p className="font-bold text-primary">{item.amount}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;