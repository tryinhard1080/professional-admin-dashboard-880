import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Waste Service Contract Analysis</h1>
              <p className="text-muted-foreground">Comprehensive comparison and savings report</p>
            </div>
          </div>
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            Analysis Complete
          </Badge>
        </div>
        
        {/* Property Details */}
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
      </div>

      {/* Service Provider Comparison Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-red-500">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">Republic Services</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Monthly Cost:</span>
              <span className="font-semibold text-red-700 dark:text-red-300">$8,247.50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Annual Cost:</span>
              <span className="font-semibold text-red-700 dark:text-red-300">$98,970.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Service Level:</span>
              <Badge variant="outline" className="text-red-600 border-red-300">Current Provider</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-500">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">Waste Management</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Monthly Cost:</span>
              <span className="font-semibold text-green-700 dark:text-green-300">$6,185.25</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Annual Cost:</span>
              <span className="font-semibold text-green-700 dark:text-green-300">$74,223.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Service Level:</span>
              <Badge variant="outline" className="text-green-600 border-green-300">Recommended</Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Annual Savings Summary */}
      <Card className="p-6 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">Potential Annual Savings</h3>
              <p className="text-blue-600/80 dark:text-blue-400/80">By switching to Waste Management</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">$24,747.00</div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <TrendingDown className="h-4 w-4" />
              <span className="text-sm font-medium">25% cost reduction</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Detailed Contract Elements Comparison */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Contract Elements Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 font-medium">Service Element</th>
                <th className="text-center py-3 font-medium text-red-600">Republic Services</th>
                <th className="text-center py-3 font-medium text-green-600">Waste Management</th>
                <th className="text-center py-3 font-medium">Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 font-medium">Base Service Fee</td>
                <td className="text-center py-3 text-red-600">$6,850.00</td>
                <td className="text-center py-3 text-green-600">$5,275.00</td>
                <td className="text-center py-3 font-semibold text-blue-600">$1,575.00</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Fuel Surcharge</td>
                <td className="text-center py-3 text-red-600">$425.50</td>
                <td className="text-center py-3 text-green-600">$315.25</td>
                <td className="text-center py-3 font-semibold text-blue-600">$110.25</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Environmental Fee</td>
                <td className="text-center py-3 text-red-600">$185.00</td>
                <td className="text-center py-3 text-green-600">$125.00</td>
                <td className="text-center py-3 font-semibold text-blue-600">$60.00</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Administrative Fee</td>
                <td className="text-center py-3 text-red-600">$287.00</td>
                <td className="text-center py-3 text-green-600">$195.00</td>
                <td className="text-center py-3 font-semibold text-blue-600">$92.00</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Recycling Processing</td>
                <td className="text-center py-3 text-red-600">$275.00</td>
                <td className="text-center py-3 text-green-600">$150.00</td>
                <td className="text-center py-3 font-semibold text-blue-600">$125.00</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Disposal Fee</td>
                <td className="text-center py-3 text-red-600">$225.00</td>
                <td className="text-center py-3 text-green-600">$125.00</td>
                <td className="text-center py-3 font-semibold text-blue-600">$100.00</td>
              </tr>
              <tr className="bg-muted/30 font-semibold">
                <td className="py-3">Monthly Total</td>
                <td className="text-center py-3 text-red-600">$8,247.50</td>
                <td className="text-center py-3 text-green-600">$6,185.25</td>
                <td className="text-center py-3 text-blue-600">$2,062.25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Contract Risk Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Risk Assessment
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-950/20">
              <span className="text-sm">Annual Price Increases</span>
              <Badge variant="destructive">High Risk</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
              <span className="text-sm">Service Level Guarantees</span>
              <Badge variant="outline" className="text-warning border-warning">Medium</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
              <span className="text-sm">Contract Flexibility</span>
              <Badge variant="outline" className="text-success border-success">Low Risk</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success" />
            Efficiency Metrics
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Service Reliability</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="font-semibold text-success">98.5%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Cost Efficiency</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="font-semibold text-success">25% better</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Environmental Impact</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="font-semibold text-success">15% reduction</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recommendation Summary */}
      <Card className="p-6 bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-success to-primary">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-success mb-2">Recommendation: Switch to Waste Management</h3>
            <p className="text-muted-foreground mb-4">
              Based on our comprehensive analysis, switching to Waste Management will provide significant cost savings 
              while maintaining or improving service quality. The projected annual savings of $24,747 represents a 25% 
              cost reduction compared to your current Republic Services contract.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Lower monthly fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Better service reliability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
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