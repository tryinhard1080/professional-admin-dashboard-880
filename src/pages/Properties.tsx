import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Phone, Mail, Globe, MapPin, Truck, Recycle, Cpu, Leaf, Building, Wrench } from "lucide-react";

const SupplierDirectory = () => {
  const suppliers = [
    {
      id: 1,
      name: "EcoWaste Solutions",
      rating: 4.8,
      reviews: 127,
      category: "Full Service",
      badges: ["Featured", "Hauler"],
      description: "Comprehensive waste management and recycling services for commercial properties",
      services: ["Waste Collection", "Recycling", "Consulting"],
      phone: "(555) 123-4567",
      email: "contact@ecowaste.com",
      website: "www.ecowastesolutions.com",
      location: "Los Angeles, CA",
      icon: Truck,
      iconColor: "text-primary"
    },
    {
      id: 2,
      name: "SmartWaste Monitoring",
      rating: 4.9,
      reviews: 89,
      category: "Technology",
      badges: ["IoT", "National"],
      description: "Advanced IoT-based waste monitoring and analytics for smart waste management",
      services: ["IoT Sensors", "Analytics", "Software"],
      phone: "(555) 234-5678",
      email: "info@smartwaste.com",
      website: "www.smartwastemonitoring.com",
      location: "San Francisco, CA",
      icon: Cpu,
      iconColor: "text-accent-purple"
    },
    {
      id: 3,
      name: "GreenHaul Services",
      rating: 4.7,
      reviews: 203,
      category: "Organic Waste",
      badges: ["Organic", "Local"],
      description: "Specialized organic waste collection and composting services for sustainable facilities",
      services: ["Organic Collection", "Composting", "Garden Waste"],
      phone: "(555) 345-6789",
      email: "hello@greenhaul.com",
      website: "www.greenhaulservices.com",
      location: "Portland, OR",
      icon: Leaf,
      iconColor: "text-secondary"
    },
    {
      id: 4,
      name: "CompactorTech Industries",
      rating: 4.6,
      reviews: 156,
      category: "Equipment",
      badges: ["Equipment", "Installation"],
      description: "Industrial waste compactors and equipment installation for large commercial facilities",
      services: ["Compactors", "Installation", "Maintenance"],
      phone: "(555) 456-7890",
      email: "sales@compactortech.com",
      website: "www.compactortech.com",
      location: "Chicago, IL",
      icon: Wrench,
      iconColor: "text-accent-amber"
    },
    {
      id: 5,
      name: "Regional Recycling Corp",
      rating: 4.5,
      reviews: 174,
      category: "Recycling",
      badges: ["Recycling", "Regional"],
      description: "Comprehensive recycling services with advanced sorting and processing facilities",
      services: ["Metal Recycling", "Paper Processing", "Electronics"],
      phone: "(555) 567-8901",
      email: "info@regionalrecycling.com",
      website: "www.regionalrecycling.com",
      location: "Denver, CO",
      icon: Recycle,
      iconColor: "text-accent-teal"
    },
    {
      id: 6,
      name: "WasteTech Solutions",
      rating: 4.8,
      reviews: 91,
      category: "Software",
      badges: ["Software", "Analytics"],
      description: "Cloud-based waste management software and reporting solutions for enterprise clients",
      services: ["Software Platform", "Reporting", "Integration"],
      phone: "(555) 678-9012",
      email: "support@wastetech.com",
      website: "www.wastetechsolutions.com",
      location: "Austin, TX",
      icon: Building,
      iconColor: "text-primary"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? "text-accent-amber fill-accent-amber" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  const getBadgeVariant = (badge: string) => {
    const variants: { [key: string]: string } = {
      "Featured": "glass-primary",
      "Hauler": "glass-secondary",
      "National": "glass-primary",
      "Local": "glass-secondary",
      "IoT": "glass-primary",
      "Organic": "glass-secondary",
      "Equipment": "glass-primary",
      "Installation": "glass-secondary",
      "Recycling": "glass-secondary",
      "Regional": "glass-primary",
      "Software": "glass-primary",
      "Analytics": "glass-secondary"
    };
    return variants[badge] || "glass-primary";
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold gradient-text">Supplier Directory</h1>
              <p className="text-muted-foreground mt-2">Find verified waste management suppliers and service providers</p>
            </div>
            <Badge variant="outline" className="glass-primary px-3 py-1 text-xs font-medium text-accent-amber border-accent-amber/30">
              Preview
            </Badge>
          </div>
          <Badge variant="outline" className="glass-card px-4 py-2 text-sm font-medium">
            Coming Soon: Advanced Filters
          </Badge>
        </div>
        
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search coming soon..."
              disabled
              className="w-full pl-10 pr-4 py-3 glass-input rounded-xl border border-border/30 opacity-60 cursor-not-allowed"
            />
          </div>
          
          {/* Preview Notice Card */}
          <Card className="glass-card p-4 border-accent-amber/20">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg glass-primary">
                <Star className="h-5 w-5 text-accent-amber" />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Directory Preview</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You're viewing sample supplier data. Full functionality including verified listings, 
                  real reviews, direct booking, and advanced search will be available soon.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="glass-secondary text-xs px-2 py-1 border-primary/20">
                    Coming Soon: Real Suppliers
                  </Badge>
                  <Badge variant="outline" className="glass-secondary text-xs px-2 py-1 border-primary/20">
                    Coming Soon: Direct Booking
                  </Badge>
                  <Badge variant="outline" className="glass-secondary text-xs px-2 py-1 border-primary/20">
                    Coming Soon: Verified Reviews
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {suppliers.map((supplier, index) => {
          const Icon = supplier.icon;
          return (
            <Card 
              key={supplier.id} 
              className={`glass-card p-6 hover-lift card-interactive animate-fade-in stagger-${index % 6 + 1}`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl glass-primary ${supplier.iconColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{supplier.name}</h3>
                      <p className="text-sm text-muted-foreground">{supplier.category}</p>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {supplier.badges.map((badge) => (
                    <Badge 
                      key={badge} 
                      variant="outline" 
                      className={`${getBadgeVariant(badge)} text-xs px-2 py-1 border-primary/20`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(supplier.rating)}
                  </div>
                  <span className="text-sm font-medium">{supplier.rating}</span>
                  <span className="text-sm text-muted-foreground">({supplier.reviews} reviews)</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {supplier.description}
                </p>

                {/* Services */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {supplier.services.map((service) => (
                      <span 
                        key={service}
                        className="inline-block px-2 py-1 bg-muted/50 text-xs rounded-md text-muted-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{supplier.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={`tel:${supplier.phone}`}
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
                    </a>
                    <a 
                      href={`mailto:${supplier.email}`}
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </a>
                    <a 
                      href={`https://${supplier.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      <span>Website</span>
                    </a>
                  </div>
                </div>

                {/* Contact Button */}
                <button 
                  disabled 
                  className="w-full mt-4 glass-button rounded-xl py-2.5 text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed relative group"
                  title="Coming soon - Direct supplier contact"
                >
                  Contact Supplier
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 rounded-xl text-xs">
                    Coming Soon
                  </span>
                </button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <button 
          disabled 
          className="glass-button px-8 py-3 rounded-xl text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed relative group"
          title="Coming soon - More suppliers"
        >
          Load More Suppliers
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 rounded-xl text-xs">
            Coming Soon
          </span>
        </button>
      </div>
    </div>
  );
};

export default SupplierDirectory;