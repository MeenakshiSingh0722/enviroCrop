import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Activity, Zap, AlertTriangle, Users, TrendingUp } from "lucide-react";

const LiveClimateMap = () => {
  const [activeOrders, setActiveOrders] = useState(1247);
  const [emergencyAlerts, setEmergencyAlerts] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrders(prev => prev + Math.floor(Math.random() * 5 - 2));
      if (Math.random() > 0.95) {
        setEmergencyAlerts(prev => Math.max(0, prev + (Math.random() > 0.5 ? 1 : -1)));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentOrders = [
    {
      location: "São Paulo, Brazil",
      type: "Emergency Rain",
      status: "Active",
      priority: "High",
      duration: "6 hours",
      client: "Fire Department",
      color: "text-red-400",
    },
    {
      location: "Dubai, UAE",
      type: "Cooling Winds",
      status: "Deploying",
      priority: "Medium",
      duration: "12 hours",
      client: "City Planning",
      color: "neon-text",
    },
    {
      location: "Tokyo, Japan",
      type: "Snow Event",
      status: "Scheduled",
      priority: "Low",
      duration: "4 hours",
      client: "Entertainment Corp",
      color: "text-blue-300",
    },
    {
      location: "London, UK",
      type: "Sunshine Break",
      status: "Active",
      priority: "Medium",
      duration: "8 hours",
      client: "Tourism Board",
      color: "text-yellow-400",
    },
    {
      location: "California, USA",
      type: "Fog Dispersal",
      status: "Emergency",
      priority: "Critical",
      duration: "Ongoing",
      client: "Airport Authority",
      color: "text-red-500",
    },
  ];

  const regions = [
    { name: "North America", orders: 342, status: "Operational", load: "67%" },
    { name: "Europe", orders: 298, status: "Operational", load: "52%" },
    { name: "Asia Pacific", orders: 401, status: "High Activity", load: "89%" },
    { name: "South America", orders: 156, status: "Emergency Mode", load: "34%" },
    { name: "Africa", orders: 89, status: "Operational", load: "28%" },
    { name: "Oceania", orders: 23, status: "Operational", load: "15%" },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold holographic-text mb-6">
            Live Climate Control Map
          </h2>
          <p className="text-xl font-exo text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See the world change in real-time with our global climate tracker. 
            Monitor active weather orders, emergency responses, and orbital system status.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card variant="glass">
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 neon-text mx-auto mb-4" />
              <div className="text-3xl font-orbitron font-bold neon-text pulse-glow">
                {activeOrders.toLocaleString()}
              </div>
              <div className="text-sm font-exo text-muted-foreground">Active Orders</div>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardContent className="p-6 text-center">
              <Globe className="w-8 h-8 neon-text-green mx-auto mb-4" />
              <div className="text-3xl font-orbitron font-bold neon-text-green">
                156
              </div>
              <div className="text-sm font-exo text-muted-foreground">Satellites Online</div>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 neon-text-purple mx-auto mb-4" />
              <div className="text-3xl font-orbitron font-bold neon-text-purple">
                98.7%
              </div>
              <div className="text-sm font-exo text-muted-foreground">System Uptime</div>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardContent className="p-6 text-center">
              <AlertTriangle className={`w-8 h-8 mx-auto mb-4 ${emergencyAlerts > 0 ? 'text-red-400 animate-pulse' : 'text-green-400'}`} />
              <div className={`text-3xl font-orbitron font-bold ${emergencyAlerts > 0 ? 'text-red-400' : 'neon-text-green'}`}>
                {emergencyAlerts}
              </div>
              <div className="text-sm font-exo text-muted-foreground">Emergency Alerts</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Map Visualization */}
        <Card variant="neon" className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl neon-text">
              🌍 Real-Time Global Weather Control
            </CardTitle>
            <CardDescription className="text-lg">
              Interactive orbital view showing active climate manipulation operations worldwide
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="glass-card p-8 relative min-h-[400px] overflow-hidden">
              {/* Simulated Globe View */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-900/30 via-green-900/20 to-blue-800/30 border-2 border-primary/30 floating">
                  <div className="absolute inset-4 rounded-full border border-primary/20 animate-pulse" />
                  <div className="absolute inset-8 rounded-full border border-primary/10" />
                  
                  {/* Orbital Satellites */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-neon-cyan rounded-full pulse-glow"
                      style={{
                        top: `${20 + Math.sin((i * Math.PI) / 4) * 30}%`,
                        left: `${50 + Math.cos((i * Math.PI) / 4) * 40}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                  
                  {/* Weather Operation Markers */}
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse" title="Emergency: São Paulo" />
                  <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" title="Active: Dubai" />
                  <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" title="Scheduled: Tokyo" />
                  
                  {/* Data Streams */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-0.5 w-16 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60"
                        style={{
                          top: `${20 + i * 15}%`,
                          animation: `data-stream ${3 + i * 0.5}s linear infinite`,
                          animationDelay: `${i * 0.8}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 glass-card p-3">
                <div className="text-sm font-orbitron neon-text">Live View</div>
                <div className="text-xs font-exo text-muted-foreground">Updated every 30 seconds</div>
              </div>
              
              <div className="absolute bottom-4 right-4 glass-card p-3">
                <div className="text-sm font-orbitron neon-text-green">System Status: ONLINE</div>
                <div className="text-xs font-exo text-muted-foreground">All orbital systems operational</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regional Status & Current Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Regional Status */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="text-2xl neon-text">
                <TrendingUp className="w-6 h-6 inline mr-2" />
                Regional Operations
              </CardTitle>
              <CardDescription>
                Real-time status across all continental control zones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regions.map((region, index) => (
                  <div key={index} className="glass-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-orbitron font-semibold neon-text">{region.name}</h4>
                      <span className={`text-sm font-exo ${
                        region.status === 'Emergency Mode' ? 'text-red-400' : 
                        region.status === 'High Activity' ? 'text-yellow-400' : 'neon-text-green'
                      }`}>
                        {region.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-exo text-muted-foreground">
                      <span>{region.orders} active orders</span>
                      <span>Load: {region.load}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Orders */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="text-2xl neon-text">
                <Users className="w-6 h-6 inline mr-2" />
                Active Weather Orders
              </CardTitle>
              <CardDescription>
                Current climate manipulation operations in progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {currentOrders.map((order, index) => (
                  <div key={index} className="glass-card p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-orbitron font-semibold neon-text text-sm">{order.location}</h4>
                        <p className="text-xs font-exo text-muted-foreground">{order.client}</p>
                      </div>
                      <span className={`text-xs font-exo px-2 py-1 rounded glass-card ${
                        order.priority === 'Critical' ? 'text-red-400' :
                        order.priority === 'High' ? 'text-orange-400' :
                        order.priority === 'Medium' ? 'text-yellow-400' : 'neon-text-green'
                      }`}>
                        {order.priority}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-orbitron ${order.color}`}>{order.type}</span>
                      <div className="text-xs font-exo text-muted-foreground">
                        {order.duration} • {order.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Control Actions */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="holographic" size="lg">
              🚨 Emergency Override
            </Button>
            <Button variant="neon" size="lg">
              📊 Detailed Analytics
            </Button>
            <Button variant="glass" size="lg">
              ⚙️ System Controls
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveClimateMap;