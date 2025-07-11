import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Calendar, Search, Download, Eye, Trash2, Filter } from "lucide-react";
import { useState } from "react";

const ViewReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data for previously generated reports
  const reports = [
    {
      id: 1,
      title: "Contract Analysis - Downtown Property",
      property: "123 Main Street",
      type: "Contract Review",
      createdDate: "2024-01-15",
      status: "completed",
      description: "Comprehensive analysis of waste management contract terms and cost comparison"
    },
    {
      id: 2,
      title: "Cost Optimization Report - Industrial Complex", 
      property: "456 Industrial Blvd",
      type: "Cost Analysis",
      createdDate: "2024-01-10",
      status: "completed",
      description: "Detailed breakdown of potential savings and service provider recommendations"
    },
    {
      id: 3,
      title: "Service Provider Comparison - Retail Center",
      property: "789 Shopping Plaza",
      type: "Provider Comparison", 
      createdDate: "2024-01-08",
      status: "completed",
      description: "Side-by-side comparison of multiple waste management service providers"
    },
    {
      id: 4,
      title: "Invoice Analysis - Office Building",
      property: "321 Business Park",
      type: "Invoice Review",
      createdDate: "2024-01-05",
      status: "archived",
      description: "Monthly invoice verification and cost tracking analysis"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-700 dark:text-green-300";
      case "draft": return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300";
      case "archived": return "bg-gray-500/20 text-gray-700 dark:text-gray-300";
      default: return "bg-blue-500/20 text-blue-700 dark:text-blue-300";
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || report.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8">
      <header className="animate-fade-in">
        <h1 className="text-4xl font-bold gradient-text">View Reports</h1>
        <p className="text-muted-foreground">Browse and manage your previously generated analysis reports</p>
      </header>

      {/* Search and Filter Controls */}
      <Card className="glass-card p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search reports or properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={filterStatus === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("all")}
            >
              All
            </Button>
            <Button
              variant={filterStatus === "completed" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("completed")}
            >
              Completed
            </Button>
            <Button
              variant={filterStatus === "archived" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("archived")}
            >
              Archived
            </Button>
          </div>
        </div>
      </Card>

      {/* Reports List */}
      <div className="grid gap-6">
        {filteredReports.map((report) => (
          <Card key={report.id} className="glass-card p-6 hover-lift transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                <div className="p-3 bg-gradient-to-br from-primary to-primary-glow rounded-xl">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{report.title}</h3>
                    <Badge className={getStatusColor(report.status)}>
                      {report.status}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-2">{report.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(report.createdDate).toLocaleDateString()}
                    </span>
                    <span>Property: {report.property}</span>
                    <span>Type: {report.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <Card className="glass-card p-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No reports found</h3>
          <p className="text-muted-foreground">
            {searchTerm || filterStatus !== "all" 
              ? "Try adjusting your search or filter criteria"
              : "Generate your first report from the Dashboard to see it here"
            }
          </p>
        </Card>
      )}
    </div>
  );
};

export default ViewReports;