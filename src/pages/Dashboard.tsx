import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Recycle, TrendingDown, TrendingUp, Truck, MapPin, DollarSign, ArrowUpRight, ArrowDownRight, Upload, FileText, Brain, BarChart3, Download, Leaf, PiggyBank, Bell, Settings, FileCheck, FileSpreadsheet, Image, Clock, CheckCircle, AlertCircle, Loader2, X, RotateCcw } from "lucide-react";
import { useState, useRef } from "react";
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
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [unitCount, setUnitCount] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [analysisType, setAnalysisType] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [processingFiles, setProcessingFiles] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const analysisOptions = [
    {
      id: "contract-review",
      title: "Contract Review",
      description: "Comprehensive contract analysis for cost optimization",
      estimatedTime: "2-4 minutes",
      icon: FileCheck
    },
    {
      id: "contract-comparison", 
      title: "Contract Comparison",
      description: "Side-by-side comparison with market standards",
      estimatedTime: "3-5 minutes",
      icon: BarChart3
    },
    {
      id: "invoice-performance",
      title: "Invoice Performance Review", 
      description: "Historical invoice analysis and trends",
      estimatedTime: "1-3 minutes",
      icon: TrendingUp
    }
  ];

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (['pdf'].includes(ext || '')) return FileText;
    if (['xlsx', 'xls', 'csv'].includes(ext || '')) return FileSpreadsheet;
    if (['jpg', 'jpeg', 'png', 'webp'].includes(ext || '')) return Image;
    return FileText;
  };

  const getFileTypeColor = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (['pdf'].includes(ext || '')) return 'text-destructive';
    if (['xlsx', 'xls', 'csv'].includes(ext || '')) return 'text-secondary';
    if (['jpg', 'jpeg', 'png', 'webp'].includes(ext || '')) return 'text-primary';
    return 'text-muted-foreground';
  };

  const validateFile = (file: File) => {
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel', 'text/csv', 'image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const maxSize = file.type.startsWith('image/') ? 10 * 1024 * 1024 : 25 * 1024 * 1024; // 10MB for images, 25MB for docs
    
    if (!allowedTypes.includes(file.type)) {
      return 'Unsupported file type. Please upload PDF, Excel, CSV, or image files.';
    }
    if (file.size > maxSize) {
      return `File too large. Maximum size is ${file.type.startsWith('image/') ? '10MB' : '25MB'}.`;
    }
    return null;
  };

  const handleFileUpload = (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const validFiles: any[] = [];
    
    fileArray.forEach(file => {
      const error = validateFile(file);
      if (!error) {
        const fileObj = {
          id: Math.random().toString(36).substr(2, 9),
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'ready',
          uploadedAt: new Date(),
          error: null
        };
        validFiles.push(fileObj);
      }
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const processFiles = async () => {
    if (!unitCount || !propertyType || !analysisType || uploadedFiles.length === 0) {
      return;
    }

    const readyFiles = uploadedFiles.filter(f => f.status === 'ready');
    
    for (const file of readyFiles) {
      // Start upload
      setUploadedFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading' } : f
      ));
      
      // Simulate upload progress
      let progress = 0;
      const uploadInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(uploadInterval);
          
          // Move to processing
          setUploadedFiles(prev => prev.map(f => 
            f.id === file.id ? { ...f, status: 'processing' } : f
          ));
          setProcessingFiles(prev => ({ ...prev, [file.id]: 'Analyzing document structure...' }));
          
          // Simulate processing stages
          setTimeout(() => {
            setProcessingFiles(prev => ({ ...prev, [file.id]: 'Extracting contract terms...' }));
          }, 2000);
          
          setTimeout(() => {
            setProcessingFiles(prev => ({ ...prev, [file.id]: 'Comparing with market data...' }));
          }, 4000);
          
          setTimeout(() => {
            setProcessingFiles(prev => ({ ...prev, [file.id]: 'Generating recommendations...' }));
          }, 6000);
          
          setTimeout(() => {
            setUploadedFiles(prev => prev.map(f => 
              f.id === file.id ? { 
                ...f, 
                status: 'completed', 
                savings: `$${(Math.random() * 20000 + 5000).toFixed(0)}`,
                confidence: Math.floor(Math.random() * 20 + 75)
              } : f
            ));
            setProcessingFiles(prev => {
              const { [file.id]: removed, ...rest } = prev;
              return rest;
            });
          }, 8000);
        }
        setUploadProgress(prev => ({ ...prev, [file.id]: progress }));
      }, 200);
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
    setUploadProgress(prev => {
      const { [fileId]: removed, ...rest } = prev;
      return rest;
    });
  };

  const retryFile = (fileId: string) => {
    setUploadedFiles(prev => prev.map(f => 
      f.id === fileId ? { ...f, status: 'ready', error: null } : f
    ));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files);
    }
  };

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

        {/* Specialized Upload Workflow for Waste Contracts and Invoices */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          <Card variant="glass" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Upload className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Specialized Document Upload</h3>
              </div>
              <Badge className="bg-gradient-primary text-white border-0 px-3 py-1 text-sm font-medium">AI-Powered</Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* File Upload Zone */}
              <div className="lg:col-span-2 space-y-6">
                {/* Enhanced Drag & Drop Upload Zone */}
                <div 
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 cursor-pointer group ${
                    isDragging 
                      ? 'border-primary bg-primary/10' 
                      : 'border-primary/30 hover:border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.xlsx,.xls,.csv,.jpg,.jpeg,.png,.webp"
                    onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <Upload className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-foreground">Drop files here or click to browse</p>
                      <p className="text-sm text-muted-foreground">Support for PDF contracts, Excel reports, images</p>
                      <div className="flex items-center justify-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3 text-destructive" />
                          PDF (25MB)
                        </span>
                        <span className="flex items-center gap-1">
                          <FileSpreadsheet className="h-3 w-3 text-secondary" />
                          Excel (25MB)
                        </span>
                        <span className="flex items-center gap-1">
                          <Image className="h-3 w-3 text-primary" />
                          Images (10MB)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Details Form */}
                <Card variant="glass" className="p-4">
                  <h4 className="font-semibold text-foreground mb-4">Property Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="unitCount" className="text-sm font-medium">Unit Count *</Label>
                      <Input
                        id="unitCount"
                        type="number"
                        placeholder="Enter number of units"
                        value={unitCount}
                        onChange={(e) => setUnitCount(e.target.value)}
                        min="1"
                        max="10000"
                        className="glass-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propertyType" className="text-sm font-medium">Property Type *</Label>
                      <Select value={propertyType} onValueChange={setPropertyType}>
                        <SelectTrigger className="glass-input">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent className="glass-content">
                          <SelectItem value="garden-style">Garden Style</SelectItem>
                          <SelectItem value="mid-rise">Mid-Rise (4-8 floors)</SelectItem>
                          <SelectItem value="hi-rise">Hi-Rise (9+ floors)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>

                {/* Analysis Type Selector */}
                <Card variant="glass" className="p-4">
                  <h4 className="font-semibold text-foreground mb-4">Analysis Type *</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {analysisOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <div
                          key={option.id}
                          className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                            analysisType === option.id
                              ? 'border-primary bg-primary/10'
                              : 'border-muted hover:border-primary/50 bg-muted/10'
                          }`}
                          onClick={() => setAnalysisType(option.id)}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${
                              analysisType === option.id ? 'bg-gradient-primary' : 'bg-muted'
                            }`}>
                              <IconComponent className={`h-4 w-4 ${
                                analysisType === option.id ? 'text-white' : 'text-muted-foreground'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-sm text-foreground">{option.title}</h5>
                              <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                              <div className="flex items-center gap-1 mt-2">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{option.estimatedTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>

                {/* Process Button */}
                <Button
                  onClick={processFiles}
                  disabled={!unitCount || !propertyType || !analysisType || uploadedFiles.filter(f => f.status === 'ready').length === 0}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Start Analysis ({uploadedFiles.filter(f => f.status === 'ready').length} files)
                </Button>
              </div>

              {/* Recent Uploads Dashboard */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Upload Status</h4>
                
                {uploadedFiles.length === 0 ? (
                  <div className="text-center p-6 text-muted-foreground">
                    <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No files uploaded yet</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[500px] overflow-y-auto">
                    {uploadedFiles.map((file) => {
                      const FileIcon = getFileIcon(file.name);
                      const progress = uploadProgress[file.id] || 0;
                      const processingStage = processingFiles[file.id];
                      
                      return (
                        <Card key={file.id} variant="glass" className="p-3">
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg bg-muted/20`}>
                              <FileIcon className={`h-4 w-4 ${getFileTypeColor(file.name)}`} />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                              
                              {/* Status and Progress */}
                              <div className="mt-2">
                                {file.status === 'ready' && (
                                  <Badge className="bg-muted/20 text-muted-foreground">Ready</Badge>
                                )}
                                
                                {file.status === 'uploading' && (
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <Loader2 className="h-3 w-3 animate-spin text-primary" />
                                      <span className="text-xs text-primary">Uploading... {Math.round(progress)}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-1">
                                      <div 
                                        className="bg-gradient-primary h-1 rounded-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                      />
                                    </div>
                                  </div>
                                )}
                                
                                {file.status === 'processing' && (
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <Loader2 className="h-3 w-3 animate-spin text-secondary" />
                                      <span className="text-xs text-secondary">Processing...</span>
                                    </div>
                                    {processingStage && (
                                      <p className="text-xs text-muted-foreground">{processingStage}</p>
                                    )}
                                    <div className="w-full bg-muted rounded-full h-1">
                                      <div className="bg-gradient-secondary h-1 rounded-full animate-pulse" style={{ width: '60%' }} />
                                    </div>
                                  </div>
                                )}
                                
                                {file.status === 'completed' && (
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-3 w-3 text-success" />
                                      <Badge className="bg-success/10 text-success">Completed</Badge>
                                    </div>
                                    <div className="text-xs">
                                      <p className="font-bold text-success">{file.savings} potential savings</p>
                                      <p className="text-muted-foreground">{file.confidence}% confidence</p>
                                    </div>
                                  </div>
                                )}
                                
                                {file.status === 'failed' && (
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <AlertCircle className="h-3 w-3 text-destructive" />
                                      <Badge className="bg-destructive/10 text-destructive">Failed</Badge>
                                    </div>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => retryFile(file.id)}
                                      className="text-xs"
                                    >
                                      <RotateCcw className="h-3 w-3 mr-1" />
                                      Retry
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeFile(file.id)}
                              className="opacity-60 hover:opacity-100"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* AI Insights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          <Card variant="glass" className="p-6 lg:col-span-2">
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