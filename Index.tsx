import HeroSection from "@/components/HeroSection";
import WeatherServices from "@/components/WeatherServices";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import VacationMode from "@/components/VacationMode";
import LiveClimateMap from "@/components/LiveClimateMap";
import EmergencyOverride from "@/components/EmergencyOverride";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Weather Services */}
      <WeatherServices />
      
      {/* Subscription Plans */}
      <SubscriptionPlans />
      
      {/* Vacation Hologram Mode */}
      <VacationMode />
      
      {/* Live Climate Map */}
      <LiveClimateMap />
      
      {/* Emergency Override System */}
      <EmergencyOverride />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass-card p-8">
            <h3 className="text-3xl font-orbitron font-bold holographic-text mb-4">
              ENVIROCORP 2070
            </h3>
            <p className="text-lg font-exo text-muted-foreground mb-6 max-w-2xl mx-auto">
              Leading Earth's climate control systems through advanced orbital technology. 
              Authorized by the United Earth Climate Council and 195 nations worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-exo text-muted-foreground">
              <span>© 2070 EnviroCorp Industries</span>
              <span>•</span>
              <span>Climate Control License: ECC-2070-001</span>
              <span>•</span>
              <span>Emergency Hotline: +1-EARTH-911</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
