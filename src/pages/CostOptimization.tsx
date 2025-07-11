import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, DollarSign, Clock, CheckCircle, Sparkles } from "lucide-react";

const CostOptimization = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-primary rounded-full">
            <Calculator className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary">Rent vs Purchase Calculator</h1>
        </div>
        <Badge variant="secondary" className="inline-flex items-center space-x-2 px-4 py-2">
          <Clock className="h-4 w-4" />
          <span>Coming Soon</span>
        </Badge>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Make informed equipment decisions with comprehensive cost analysis and ROI calculations
        </p>
      </header>

      {/* Hero Section */}
      <Card className="glass-card p-8 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Sparkles className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h2 className="text-2xl font-semibold">Intelligent Cost Comparison Tool</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our advanced calculator will help you make data-driven decisions by comparing the total cost of ownership 
            between renting and purchasing equipment. Get detailed financial projections, break-even analysis, 
            and personalized recommendations based on your specific use case and market conditions.
          </p>
        </div>
      </Card>

      {/* Description Box - Easily Editable */}
      <Card className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span>What This Tool Will Provide</span>
        </h3>
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p className="mb-4">
            This comprehensive calculator is being designed to provide you with detailed insights into the financial 
            implications of renting versus purchasing equipment. Whether you're managing a construction project, 
            planning industrial operations, or making strategic equipment investments, this tool will help you:
          </p>
          <p className="mb-4">
            Analyze total cost of ownership including purchase price, financing costs, maintenance, depreciation, 
            insurance, and operational expenses. Compare against rental costs including daily/monthly rates, 
            delivery fees, damage protection, and operational flexibility benefits.
          </p>
          <p>
            <em>More detailed information and use cases will be added here as we finalize the calculator features...</em>
          </p>
        </div>
      </Card>

      {/* Feature Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="glass-card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <DollarSign className="h-6 w-6 text-primary" />
            <h4 className="font-semibold">Cost Analysis</h4>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Total cost of ownership calculation</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Rental vs purchase comparison</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Break-even point analysis</span>
            </li>
          </ul>
        </Card>

        <Card className="glass-card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h4 className="font-semibold">Financial Projections</h4>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>ROI calculations</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Cash flow analysis</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Depreciation impact</span>
            </li>
          </ul>
        </Card>

        <Card className="glass-card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calculator className="h-6 w-6 text-primary" />
            <h4 className="font-semibold">Custom Scenarios</h4>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Equipment-specific modeling</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Market rate integration</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Personalized recommendations</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Timeline Section */}
      <Card className="glass-card p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Expected Launch</h3>
        <p className="text-muted-foreground">
          We're working hard to bring you this powerful tool. Check back soon for updates!
        </p>
      </Card>
    </div>
  );
};

export default CostOptimization;