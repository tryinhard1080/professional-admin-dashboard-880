import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StandardPageHeader } from "@/components/layout/StandardPageHeader";
import { DataVisualizationCard } from "@/components/layout/DataVisualizationCard";
import { StatusIndicator } from "@/components/layout/StatusIndicator";
import { Building2, FileText, DollarSign, TrendingDown, TrendingUp, AlertTriangle, CheckCircle, Calendar, MapPin, ArrowLeft, Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className="space-y-6 max-w-none w-full animate-fade-in">
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <Link to="/transactions">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Reports
          </Button>
        </Link>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Header Section */}
      <StandardPageHeader
        title="Waste Service Contract Analysis"
        description="Comprehensive comparison and savings report"
        icon={FileText}
        badge={{ text: "Analysis Complete", variant: "success" }}
      >
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </StandardPageHeader>

      {/* Property Details */}
      <Card variant="glass" className="p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Property: Industrial Complex #247</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Location: 1234 Industrial Blvd</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Analysis Date: December 2024</span>
          </div>
        </div>
      </Card>

      {/* Service Provider Comparison Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="glass" className="p-6 border-data-negative/20 bg-data-negative/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-data-negative">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-data-negative">Republic Services</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Monthly Cost:</span>
              <span className="font-semibold text-data-negative">$8,247.50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Annual Cost:</span>
              <span className="font-semibold text-data-negative">$98,970.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Service Level:</span>
              <StatusIndicator status="warning" text="Current Provider" />
            </div>
          </div>
        </Card>

        <Card variant="glass" className="p-6 border-data-positive/20 bg-data-positive/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-data-positive">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-data-positive">Waste Management</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Monthly Cost:</span>
              <span className="font-semibold text-data-positive">$6,185.25</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Annual Cost:</span>
              <span className="font-semibold text-data-positive">$74,223.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Service Level:</span>
              <StatusIndicator status="success" text="Recommended" />
            </div>
          </div>
        </Card>
      </div>

      {/* Annual Savings Summary */}
      <Card variant="glass" className="p-6 bg-gradient-to-r from-data-highlight/10 to-primary/10 border-data-highlight/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-primary">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-data-highlight">Potential Annual Savings</h3>
              <p className="text-muted-foreground">By switching to Waste Management</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-data-highlight">$24,747.00</div>
            <div className="flex items-center gap-2 text-data-positive">
              <TrendingDown className="h-4 w-4" />
              <span className="text-sm font-medium">25% cost reduction</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Detailed Contract Elements Comparison */}
      <DataVisualizationCard
        title="Contract Elements Comparison"
        icon={FileText}
        actions={{ download: true, share: true }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 font-medium">Service Element</th>
                <th className="text-center py-3 font-medium text-data-negative">Republic Services</th>
                <th className="text-center py-3 font-medium text-data-positive">Waste Management</th>
                <th className="text-center py-3 font-medium text-data-highlight">Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              <tr className="hover:bg-accent/30 transition-colors">
                <td className="py-3 font-medium">Base Service Fee</td>
                <td className="text-center py-3 text-data-negative">$6,850.00</td>
                <td className="text-center py-3 text-data-positive">$5,275.00</td>
                <td className="text-center py-3 font-semibold text-data-highlight">$1,575.00</td>
              </tr>
              <tr className="hover:bg-accent/30 transition-colors">
                <td className="py-3 font-medium">Fuel Surcharge</td>
                <td className="text-center py-3 text-data-negative">$425.50</td>
                <td className="text-center py-3 text-data-positive">$315.25</td>
                <td className="text-center py-3 font-semibold text-data-highlight">$110.25</td>
              </tr>
              <tr className="hover:bg-accent/30 transition-colors">
                <td className="py-3 font-medium">Environmental Fee</td>
                <td className="text-center py-3 text-data-negative">$185.00</td>
                <td className="text-center py-3 text-data-positive">$125.00</td>
                <td className="text-center py-3 font-semibold text-data-highlight">$60.00</td>
              </tr>
              <tr className="hover:bg-accent/30 transition-colors">
                <td className="py-3 font-medium">Administrative Fee</td>
                <td className="text-center py-3 text-data-negative">$287.00</td>
                <td className="text-center py-3 text-data-positive">$195.00</td>
                <td className="text-center py-3 font-semibold text-data-highlight">$92.00</td>
              </tr>
              <tr className="hover:bg-accent/30 transition-colors">
                <td className="py-3 font-medium">Recycling Processing</td>
                <td className="text-center py-3 text-data-negative">$275.00</td>
                <td className="text-center py-3 text-data-positive">$150.00</td>
                <td className="text-center py-3 font-semibold text-data-highlight">$125.00</td>
              </tr>
              <tr className="hover:bg-accent/30 transition-colors">
                <td className="py-3 font-medium">Disposal Fee</td>
                <td className="text-center py-3 text-data-negative">$225.00</td>
                <td className="text-center py-3 text-data-positive">$125.00</td>
                <td className="text-center py-3 font-semibold text-data-highlight">$100.00</td>
              </tr>
              <tr className="bg-accent/20 font-semibold border-t-2 border-border">
                <td className="py-3">Monthly Total</td>
                <td className="text-center py-3 text-data-negative">$8,247.50</td>
                <td className="text-center py-3 text-data-positive">$6,185.25</td>
                <td className="text-center py-3 text-data-highlight">$2,062.25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DataVisualizationCard>

      {/* Contract Risk Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="glass" className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Risk Assessment
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg glass-card border-data-negative/20 bg-data-negative/5">
              <span className="text-sm">Annual Price Increases</span>
              <StatusIndicator status="error" text="High Risk" />
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg glass-card border-warning/20 bg-warning/5">
              <span className="text-sm">Service Level Guarantees</span>
              <StatusIndicator status="warning" text="Medium" />
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg glass-card border-data-positive/20 bg-data-positive/5">
              <span className="text-sm">Contract Flexibility</span>
              <StatusIndicator status="success" text="Low Risk" />
            </div>
          </div>
        </Card>

        <Card variant="glass" className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-data-positive" />
            Efficiency Metrics
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Service Reliability</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-data-positive" />
                <span className="font-semibold text-data-positive">98.5%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Cost Efficiency</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-data-positive" />
                <span className="font-semibold text-data-positive">25% better</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Environmental Impact</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-data-positive" />
                <span className="font-semibold text-data-positive">15% reduction</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recommendation Summary */}
      <Card variant="glass" className="p-6 bg-gradient-to-r from-data-positive/10 to-primary/10 border-data-positive/20">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-secondary">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-data-positive mb-2">Recommendation: Switch to Waste Management</h3>
            <p className="text-muted-foreground mb-4">
              Based on our comprehensive analysis, switching to Waste Management will provide significant cost savings 
              while maintaining or improving service quality. The projected annual savings of $24,747 represents a 25% 
              cost reduction compared to your current Republic Services contract.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-data-positive" />
                <span>Lower monthly fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-data-positive" />
                <span>Better service reliability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-data-positive" />
                <span>Enhanced recycling program</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;