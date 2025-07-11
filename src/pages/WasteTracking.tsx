import { Card } from "@/components/ui/card";
import { Truck, MapPin, Clock, Recycle } from "lucide-react";

const WasteTracking = () => {
  return (
    <div className="space-y-8">
      <header className="animate-fade-in">
        <h1 className="text-4xl font-bold gradient-text">Waste Collection Tracking</h1>
        <p className="text-muted-foreground">Real-time monitoring of collection operations</p>
      </header>

      <Card className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Active Collections</h3>
        <div className="space-y-4">
          {[
            { location: "Downtown District A", type: "Mixed Waste", amount: "2.4 tons", status: "completed" },
            { location: "Industrial Park B", type: "Recyclables", amount: "5.2 tons", status: "in-progress" },
            { location: "Residential Zone C", type: "Organic Waste", amount: "1.8 tons", status: "scheduled" }
          ].map((collection, i) => (
            <div key={i} className="p-4 rounded-xl bg-muted/20 backdrop-blur-sm border border-primary/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-full">
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{collection.location}</p>
                    <p className="text-sm text-muted-foreground">{collection.type}</p>
                  </div>
                </div>
                <p className="font-bold text-primary">{collection.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default WasteTracking;