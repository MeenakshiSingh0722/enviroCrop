import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palmtree, Mountain, Trees, Waves, Snowflake, Play, MapPin } from "lucide-react";

const VacationMode = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const destinations = [
    {
      id: "maldives",
      name: "Maldives Paradise",
      description: "Crystal clear waters, warm tropical breeze, and endless sunshine",
      icon: Palmtree,
      weather: "82°F, Light Ocean Breeze, 100% Sunshine",
      features: ["Holographic ocean views", "Real sea breeze simulation", "UV-controlled sunlight"],
      price: "$99/hour",
      color: "neon-text",
    },
    {
      id: "swiss-alps",
      name: "Swiss Alps Winter",
      description: "Fresh mountain air, pristine snow, and panoramic alpine views",
      icon: Mountain,
      weather: "28°F, Fresh Snow, Mountain Air",
      features: ["Real snowfall simulation", "Alpine wind patterns", "Temperature control"],
      price: "$149/hour",
      color: "text-blue-300",
    },
    {
      id: "amazon",
      name: "Amazon Rainforest",
      description: "Lush tropical humidity, exotic sounds, and filtered sunlight",
      icon: Trees,
      weather: "84°F, 90% Humidity, Filtered Light",
      features: ["Tropical humidity control", "Rainforest acoustics", "Dappled sunlight effect"],
      price: "$129/hour",
      color: "neon-text-green",
    },
    {
      id: "beach-sunset",
      name: "California Beach Sunset",
      description: "Golden hour warmth, ocean waves, and perfect coastal breeze",
      icon: Waves,
      weather: "75°F, Ocean Breeze, Golden Light",
      features: ["Holographic sunset", "Wave sound simulation", "Salt air recreation"],
      price: "$89/hour",
      color: "text-orange-400",
    },
    {
      id: "iceland",
      name: "Iceland Aurora",
      description: "Crisp arctic air, aurora borealis, and pristine wilderness",
      icon: Snowflake,
      weather: "15°F, Clear Skies, Aurora Display",
      features: ["Aurora holographics", "Arctic air simulation", "Star field projection"],
      price: "$199/hour",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold holographic-text mb-6">
            Vacation Hologram Mode
          </h2>
          <p className="text-xl font-exo text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Travel without moving — enjoy vacations from your living room with holographic weather. 
            Experience any destination with real climate conditions and immersive holographic environments.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination) => (
            <Card 
              key={destination.id} 
              variant="glass" 
              className={`cursor-pointer hover:scale-105 transition-all duration-500 group ${
                selectedDestination === destination.id ? 'ring-2 ring-primary scale-105' : ''
              }`}
              onClick={() => setSelectedDestination(destination.id)}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <destination.icon className={`w-16 h-16 ${destination.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <CardTitle className="text-2xl neon-text">
                  {destination.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {destination.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="glass-card p-4 mb-6">
                  <h4 className="font-orbitron font-semibold neon-text mb-2">Climate Simulation</h4>
                  <p className="text-sm font-exo text-muted-foreground">{destination.weather}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {destination.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-exo">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-orbitron font-bold neon-text">
                    {destination.price}
                  </span>
                  <MapPin className="w-5 h-5 neon-text-green" />
                </div>
                
                <Button 
                  variant={selectedDestination === destination.id ? "holographic" : "neon"} 
                  className="w-full" 
                  size="lg"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {selectedDestination === destination.id ? "Selected" : "Experience Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hologram Control Panel */}
        {selectedDestination && (
          <Card variant="neon" className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl neon-text">
                🌐 Hologram Control Panel
              </CardTitle>
              <CardDescription className="text-lg">
                Configure your immersive vacation experience with precision environmental controls
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="glass-card p-6 text-center">
                  <h4 className="font-orbitron font-semibold neon-text mb-4">Environment</h4>
                  <div className="space-y-2 text-sm font-exo">
                    <div>360° Holographic Display</div>
                    <div>Spatial Audio System</div>
                    <div>Scent Simulation</div>
                    <div>Tactile Air Pressure</div>
                  </div>
                </div>
                
                <div className="glass-card p-6 text-center">
                  <h4 className="font-orbitron font-semibold neon-text-green mb-4">Climate</h4>
                  <div className="space-y-2 text-sm font-exo">
                    <div>Real Temperature Control</div>
                    <div>Humidity Regulation</div>
                    <div>Wind Speed & Direction</div>
                    <div>UV Light Simulation</div>
                  </div>
                </div>
                
                <div className="glass-card p-6 text-center">
                  <h4 className="font-orbitron font-semibold neon-text-purple mb-4">Duration</h4>
                  <div className="space-y-2 text-sm font-exo">
                    <div>15 minutes - $25</div>
                    <div>1 hour - $89</div>
                    <div>3 hours - $199</div>
                    <div>Full day - $499</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-x-4">
                <Button variant="holographic" size="lg" className="min-w-[200px]">
                  🚀 Launch Experience
                </Button>
                <Button variant="glass" size="lg" className="min-w-[200px]">
                  ⚙️ Advanced Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card variant="glass">
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-bold neon-text mb-4">
                🎯 How It Works
              </h3>
              <div className="space-y-3 text-sm font-exo text-muted-foreground">
                <p>• Advanced holographic projectors create 360° immersive environments</p>
                <p>• Climate control systems replicate exact weather conditions</p>
                <p>• Spatial audio and scent simulation for complete sensory experience</p>
                <p>• Real-time synchronization with actual destination weather data</p>
              </div>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-bold neon-text-green mb-4">
                ✨ Safety Features
              </h3>
              <div className="space-y-3 text-sm font-exo text-muted-foreground">
                <p>• Emergency shutdown protocols for all systems</p>
                <p>• Safe temperature and humidity ranges</p>
                <p>• Real-time health monitoring integration</p>
                <p>• Child-safe mode with protective barriers</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VacationMode;