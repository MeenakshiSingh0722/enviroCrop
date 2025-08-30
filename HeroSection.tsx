import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Zap, Cloud, MapPin } from "lucide-react";
import earthImage from "@/assets/earth-2070.jpg";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const year2070 = new Date().getFullYear() + (2070 - new Date().getFullYear());

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-void via-space-deep to-space-medium">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={earthImage} 
            alt="Earth 2070 with Climate Control Systems" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full floating opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Scan Lines Effect */}
      <div className="absolute inset-0 scan-lines opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Globe className="w-12 h-12 neon-text animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-orbitron font-black holographic-text">
              ENVIROCORP
            </h1>
            <Zap className="w-12 h-12 neon-text-green animate-pulse" />
          </div>
          
          <div className="text-xl md:text-2xl font-exo text-muted-foreground mb-2">
            EARTH CLIMATE CONTROL SYSTEMS
          </div>
          
          <div className="text-4xl md:text-5xl font-orbitron font-bold neon-text-purple">
            {year2070}
          </div>
        </div>

        {/* Tagline */}
        <div className="glass-card p-8 mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold neon-text mb-4">
            "Your Weather, Your World, Your Way"
          </h2>
          <p className="text-lg md:text-xl font-exo text-muted-foreground leading-relaxed">
            Advanced space-based climate manipulation technology puts Earth's weather at your fingertips. 
            Order rain for your crops, sunshine for your events, or snow for your dreams.
          </p>
        </div>

        {/* Current System Status */}
        <div className="glass-card p-6 mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-6 text-sm font-orbitron">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neon-green rounded-full pulse-glow" />
              <span className="neon-text-green">ORBITAL SYSTEMS ONLINE</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 neon-text" />
              <span className="neon-text">CLIMATE GRID ACTIVE</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div className="text-muted-foreground">
              {currentTime.toLocaleTimeString()} UTC
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="holographic" size="lg" className="min-w-[200px] h-14 text-lg">
            <MapPin className="w-5 h-5 mr-2" />
            Order Weather Now
          </Button>
          
          <Button variant="neon" size="lg" className="min-w-[200px] h-14 text-lg">
            <Globe className="w-5 h-5 mr-2" />
            View Live Climate Map
          </Button>
          
          <Button variant="glass" size="lg" className="min-w-[200px] h-14 text-lg">
            <Zap className="w-5 h-5 mr-2" />
            Emergency Override
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Active Weather Orders", value: "1,247", icon: Cloud },
            { label: "Satellites Online", value: "156", icon: Globe },
            { label: "Countries Served", value: "195", icon: MapPin },
            { label: "Emergency Responses", value: "89", icon: Zap },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 text-center">
              <stat.icon className="w-6 h-6 neon-text mx-auto mb-2" />
              <div className="text-2xl font-orbitron font-bold neon-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-exo">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;