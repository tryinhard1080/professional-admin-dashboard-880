import { Brain, MessageSquare, BarChart3, Download, Sparkles, Zap, TrendingUp, FileText, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TrashBossAI = () => {
  const mockConversations = [
    {
      user: "Analyze my waste collection efficiency for Q3",
      ai: "Based on your Q3 data, I found several optimization opportunities. Your downtown properties have 23% higher collection costs due to route inefficiencies. I've generated a visual breakdown and recommendations.",
      hasChart: true,
      timestamp: "2 min ago"
    },
    {
      user: "Compare recycling rates across all properties",
      ai: "I've analyzed recycling performance across your 47 properties. The Marina District leads with 78% recycling rate, while Industrial Zone properties average 34%. Here's a comprehensive comparison with actionable insights.",
      hasChart: true,
      timestamp: "5 min ago"
    },
    {
      user: "Generate cost optimization recommendations",
      ai: "I've identified $23,400 in potential monthly savings through route optimization, pickup frequency adjustments, and waste stream improvements. Ready to export a detailed executive summary?",
      hasChart: false,
      timestamp: "8 min ago"
    }
  ];

  const capabilities = [
    {
      icon: MessageSquare,
      title: "Conversational Analysis",
      description: "Ask questions about your waste data in natural language and get instant insights",
      demo: "Show me which properties generate the most food waste"
    },
    {
      icon: BarChart3,
      title: "Dynamic Visualizations",
      description: "Generate custom charts, graphs, and dashboards on demand",
      demo: "Create a monthly trend chart for recycling rates"
    },
    {
      icon: TrendingUp,
      title: "Smart Recommendations",
      description: "AI-powered suggestions for cost savings and efficiency improvements",
      demo: "How can I reduce pickup costs by 15%?"
    },
    {
      icon: FileText,
      title: "Report Generation",
      description: "Instantly create executive summaries, compliance reports, and presentations",
      demo: "Generate a sustainability report for board meeting"
    },
    {
      icon: Download,
      title: "Multi-Format Export",
      description: "Download insights as PDF reports, Excel spreadsheets, or high-res images",
      demo: "Export waste trends as PowerPoint slides"
    }
  ];

  const sampleOutputs = [
    {
      type: "Chart",
      title: "Weekly Collection Efficiency",
      description: "AI-generated visualization showing route optimization opportunities"
    },
    {
      type: "Report",
      title: "Q3 Sustainability Report",
      description: "Executive summary with key metrics and recommendations"
    },
    {
      type: "Analysis",
      title: "Cost Optimization Plan",
      description: "Detailed breakdown of potential savings across all properties"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg-primary">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-primary shadow-glow animate-float">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold gradient-text">Trash Boss AI</h1>
                <Badge variant="secondary" className="bg-gradient-secondary text-white border-0 px-3 py-1 animate-glow-pulse">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
              </div>
              <p className="text-xl text-foreground">Your AI-Powered Waste Management Assistant</p>
            </div>
          </div>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Revolutionize how you analyze waste data, generate insights, and optimize operations with our advanced AI chatbot. 
            Ask questions, iterate on reports, and export professional-grade deliverables—all through natural conversation.
          </p>
        </div>

        {/* Mock Chat Interface */}
        <Card className="glass-card mb-12 max-w-4xl mx-auto animate-scale-in">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Chat Preview</CardTitle>
                <CardDescription className="text-foreground font-medium">Experience the power of conversational waste analytics</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm text-foreground">AI Ready</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockConversations.map((conv, index) => (
              <div key={index} className="space-y-3">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                    <p className="text-sm">{conv.user}</p>
                  </div>
                </div>
                
                {/* AI response */}
                <div className="flex gap-3">
                  <div className="p-1.5 rounded-full bg-gradient-primary shadow-glow flex-shrink-0">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 flex-1">
                    <p className="text-sm text-foreground mb-2">{conv.ai}</p>
                    {conv.hasChart && (
                      <div className="bg-card border border-border rounded-lg p-3 mt-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <BarChart3 className="h-3 w-3" />
                          <span>Interactive chart generated • Click to expand</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            <div className="flex gap-3">
              <div className="p-1.5 rounded-full bg-gradient-primary shadow-glow flex-shrink-0">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <span className="text-xs text-foreground ml-2">Trash Boss AI is analyzing...</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Capabilities Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="glass-card hover-lift group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                  </div>
                  <CardDescription>{capability.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                    <p className="text-sm text-foreground italic">"{capability.demo}"</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">Demo Query</Badge>
                      <span className="text-xs text-muted-foreground">Try when available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sample Outputs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Sample AI Outputs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sampleOutputs.map((output, index) => (
              <Card key={index} className="glass-card hover-scale group relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-gradient-secondary text-white border-0">
                    {output.type}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg pr-16">{output.title}</CardTitle>
                  <CardDescription>{output.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-data/10 border border-primary/20 rounded-lg p-4 mb-4">
                    <div className="w-full h-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-md flex items-center justify-center">
                      <div className="text-foreground/60 text-sm font-medium">Preview Available Soon</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" disabled>
                    <Download className="h-4 w-4 mr-2" />
                    Download Sample
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Preview */}
        <Card className="glass-card max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-gradient-primary shadow-glow">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Technical Preview</CardTitle>
                <CardDescription>Powered by advanced language models and real-time data processing</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg mb-3">AI Capabilities</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Natural Language Processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Advanced Data Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Dynamic Visualization Generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Multi-format Document Export</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg mb-3">Integration Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Real-time WasteWise Data Access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Historical Trend Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Cross-property Comparisons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Automated Report Scheduling</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-foreground">
                    Expected Launch: Q4 2025 • Early Access Available Soon
                  </span>
                </div>
                <Button variant="default" className="bg-gradient-primary border-0 shadow-glow" disabled>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Join Waitlist
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrashBossAI;
