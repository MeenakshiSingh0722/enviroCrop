import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CloudRain, Sun, CloudSnow, Wind, Cloudy, MapPin, Clock, DollarSign } from "lucide-react";

const WeatherServices = () => {
  const weatherServices = [
    {
      icon: CloudRain,
      name: "Premium Rainfall",
      description: "Perfect precipitation for relaxation, agriculture, or romantic ambiance",
      features: ["Light drizzle to heavy downpour", "Temperature controlled", "Duration: 1-24 hours"],
      price: "From $149/hour",
      color: "neon-text",
    },
    {
      icon: Sun,
      name: "Concentrated Sunlight",
      description: "Pure solar energy for events, energy generation, or mood enhancement",
      features: ["UV-filtered options", "Intensity control", "Cloud-free guarantee"],
      price: "From $199/hour",
      color: "neon-text-orange",
    },
    {
      icon: CloudSnow,
      name: "Artificial Snowfall",
      description: "Fresh snow for winter sports, celebrations, or cooling effects",
      features: ["Powder or wet snow", "Temperature regulation", "Cleanup included"],
      price: "From $299/hour",
      color: "text-white",
    },
    {
      icon: Wind,
      name: "Controlled Wind Systems",
      description: "Precise air movement for energy, cooling, or atmospheric effects",
      features: ["5-50 mph range", "Direction control", "Pollution clearing"],
      price: "From $99/hour",
      color: "neon-text-green",
    },
    {
      icon: Cloudy,
      name: "Atmospheric Fog",
      description: "Mysterious fog effects for events, film production, or privacy",
      features: ["Density control", "Safe composition", "Quick dissipation"],
      price: "From $179/hour",
      color: "text-gray-300",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold holographic-text mb-6">
            Weather as a Service
          </h2>
          <p className="text-xl font-exo text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Select the weather you desire — rain for relaxation, sun for energy, or snow for fun. 
            Our orbital climate control systems deliver precise atmospheric conditions anywhere on Earth.
          </p>
        </div>

        {/* Weather Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {weatherServices.map((service, index) => (
            <Card key={index} variant="glass" className="hover:scale-105 transition-all duration-500 group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <service.icon className={`w-16 h-16 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <CardTitle className="text-2xl neon-text">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-exo">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-orbitron font-bold neon-text">
                    {service.price}
                  </span>
                  <DollarSign className="w-5 h-5 neon-text-green" />
                </div>
                
                <Button variant="neon" className="w-full" size="lg">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GPS-Based Control Section */}
        <Card variant="neon" className="mb-16">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-12 h-12 neon-text animate-pulse" />
            </div>
            <CardTitle className="text-3xl neon-text">
              GPS-Precision Weather Control
            </CardTitle>
            <CardDescription className="text-lg">
              Pin your land or location, and let EnviroCorp deliver weather directly to your spot.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="glass-card p-6">
                <MapPin className="w-8 h-8 neon-text mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-semibold neon-text mb-2">
                  Set Coordinates
                </h3>
                <p className="text-sm font-exo text-muted-foreground">
                  Enter precise latitude and longitude for your target location
                </p>
              </div>
              
              <div className="glass-card p-6">
                <Clock className="w-8 h-8 neon-text-green mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-semibold neon-text-green mb-2">
                  Choose Duration
                </h3>
                <p className="text-sm font-exo text-muted-foreground">
                  Select from 30 minutes to 72 hours of controlled weather
                </p>
              </div>
              
              <div className="glass-card p-6">
                <DollarSign className="w-8 h-8 neon-text-purple mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-semibold neon-text-purple mb-2">
                  Instant Payment
                </h3>
                <p className="text-sm font-exo text-muted-foreground">
                  Secure payment processing with real-time deployment
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="holographic" size="lg" className="min-w-[250px]">
                Launch GPS Weather Control
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Land Verification Notice */}
        <Card variant="glass" className="max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-orbitron font-bold neon-text mb-4">
              🛡️ Land Verification Required
            </h3>
            <p className="text-lg font-exo text-muted-foreground mb-6">
              Secure your land with official verification — your climate, your rules. 
              Upload land ownership documents or digital IDs for verification before applying weather changes.
            </p>
            <Button variant="glass" size="lg">
              Upload Documentation
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WeatherServices;