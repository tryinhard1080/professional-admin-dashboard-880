import { Card } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Recycle, Truck, DollarSign, Target, AlertTriangle } from "lucide-react";

const efficiencyData = [
  { name: "Jan", efficiency: 76, cost: 15000, routes: 45 },
  { name: "Feb", efficiency: 82, cost: 13500, routes: 42 },
  { name: "Mar", efficiency: 79, cost: 17000, routes: 48 },
  { name: "Apr", efficiency: 85, cost: 16200, routes: 44 },
  { name: "May", efficiency: 88, cost: 18500, routes: 46 },
  { name: "Jun", efficiency: 91, cost: 17800, routes: 43 },
];

const wasteTypeData = [
  { name: "Recyclables", value: 35, color: "#22c55e" },
  { name: "Organic", value: 28, color: "#84cc16" },
  { name: "Mixed Waste", value: 25, color: "#f59e0b" },
  { name: "Hazardous", value: 12, color: "#ef4444" },
];

const routeOptimization = [
  { name: "Route A", before: 120, after: 85, savings: 29 },
  { name: "Route B", before: 95, after: 72, savings: 24 },
  { name: "Route C", before: 140, after: 98, savings: 30 },
  { name: "Route D", before: 110, after: 80, savings: 27 },
];

const Analytics = () => {
  return (
    <div className="space-y-8">
      <header className="animate-fade-in">
        <h1 className="text-4xl font-bold gradient-text">Advanced Analytics</h1>
        <p className="text-muted-foreground">AI-powered insights and operational intelligence</p>
      </header>

      {/* Enhanced KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-slide-up">
        {[
          { title: "Route Efficiency", value: "91%", change: "+5%", icon: Truck, color: "from-primary to-primary-glow" },
          { title: "Cost Reduction", value: "$31.5K", change: "+18%", icon: DollarSign, color: "from-success to-primary-glow" },
          { title: "Diversion Rate", value: "78.4%", change: "+3.2%", icon: Recycle, color: "from-warning to-accent" },
          { title: "Target Achievement", value: "94%", change: "+7%", icon: Target, color: "from-accent to-warning" },
        ].map((kpi, i) => (
          <Card key={i} variant="glass" interactive className={`group hover-lift stagger-${i + 1}`}>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground/80">{kpi.title}</p>
                  <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{kpi.value}</h3>
                  <p className="text-sm text-success font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {kpi.change}
                  </p>
                </div>
                <div className={`p-3 bg-gradient-to-br ${kpi.color} rounded-lg group-hover:animate-glow-pulse transition-all duration-300`}>
                  <kpi.icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enhanced Efficiency Trends */}
        <Card variant="glass" className="p-6 hover-lift animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold gradient-text">Operational Efficiency</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={efficiencyData}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    backdropFilter: "blur(8px)"
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="efficiency"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  name="Efficiency %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Enhanced Waste Composition */}
        <Card variant="glass" className="p-6 hover-lift animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-secondary">
              <Recycle className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold gradient-text-secondary">Waste Composition</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wasteTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {wasteTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Enhanced Route Optimization */}
      <Card variant="glass" className="p-6 hover-lift animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-data">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold gradient-text-data">Route Optimization Results</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-success font-medium">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            Live Data
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={routeOptimization}>
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  backdropFilter: "blur(8px)"
                }}
              />
              <Bar dataKey="before" fill="hsl(var(--muted))" name="Before (min)" />
              <Bar dataKey="after" fill="hsl(var(--primary))" name="After (min)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;