import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, Zap, Flame, Tornado, Snowflake, Eye } from "lucide-react";

const EmergencyOverride = () => {
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);

  const emergencyTypes = [
    {
      id: "wildfire",
      name: "Wildfire Suppression",
      description: "Immediate rainfall deployment for fire containment and suppression",
      icon: Flame,
      response: "Heavy Rain + Wind Control",
      deployTime: "< 8 minutes",
      coverage: "Up to 500 sq km",
      color: "text-red-400",
      priority: "CRITICAL",
    },
    {
      id: "hurricane",
      name: "Hurricane Intervention",
      description: "Storm weakening and path redirection using atmospheric pressure control",
      icon: Tornado,
      response: "Wind Dispersal + Pressure Control",
      deployTime: "< 15 minutes",
      coverage: "Up to 2000 sq km",
      color: "text-purple-400",
      priority: "CRITICAL",
    },
    {
      id: "drought",
      name: "Drought Emergency",
      description: "Rapid moisture restoration for agricultural and water supply emergencies",
      icon: Eye,
      response: "Sustained Rainfall + Humidity",
      deployTime: "< 12 minutes",
      coverage: "Up to 1000 sq km",
      color: "text-blue-400",
      priority: "HIGH",
    },
    {
      id: "heatwave",
      name: "Extreme Heat Response",
      description: "Temperature reduction through cloud cover and cooling winds",
      icon: Zap,
      response: "Cloud Cover + Cooling Winds",
      deployTime: "< 10 minutes",
      coverage: "Up to 800 sq km",
      color: "text-orange-400",
      priority: "HIGH",
    },
    {
      id: "pollution",
      name: "Air Quality Crisis",
      description: "Pollution dispersal using targeted wind patterns and precipitation",
      icon: Snowflake,
      response: "Wind Clearing + Rain Wash",
      deployTime: "< 6 minutes",
      coverage: "Up to 300 sq km",
      color: "neon-text-green",
      priority: "MEDIUM",
    },
  ];

  const activeAlerts = [
    {
      location: "California, USA",
      type: "Wildfire",
      severity: "CRITICAL",
      eta: "6 minutes",
      status: "Deploying",
      affected: "45,000 people",
    },
    {
      location: "Queensland, Australia",
      type: "Drought Emergency",
      severity: "HIGH",
      eta: "12 minutes",
      status: "Authorized",
      affected: "78,000 hectares",
    },
    {
      location: "Delhi, India",
      type: "Air Quality Crisis",
      severity: "MEDIUM",
      eta: "8 minutes",
      status: "Preparing",
      affected: "12M people",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-red-400 animate-pulse" />
            <h2 className="text-5xl font-orbitron font-bold text-red-400">
              EMERGENCY OVERRIDE
            </h2>
            <Shield className="w-12 h-12 neon-text-green animate-pulse" />
          </div>
          <p className="text-xl font-exo text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protecting Earth first — priority climate control for emergencies. 
            Government and NGO authorized rapid response for natural disasters and environmental crises.
          </p>
        </div>

        {/* System Status */}
        <Card variant="glass" className="mb-12 max-w-4xl mx-auto border-2 border-destructive/50 pulse-glow">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-orbitron font-bold text-red-400 mb-2">ACTIVE</div>
                <div className="text-sm font-exo text-muted-foreground">Emergency Mode</div>
              </div>
              <div>
                <div className="text-3xl font-orbitron font-bold neon-text-green mb-2">156/156</div>
                <div className="text-sm font-exo text-muted-foreground">Satellites Ready</div>
              </div>
              <div>
                <div className="text-3xl font-orbitron font-bold neon-text mb-2">&lt; 5 MIN</div>
                <div className="text-sm font-exo text-muted-foreground">Avg Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-orbitron font-bold text-red-400 mb-2">{activeAlerts.length}</div>
                <div className="text-sm font-exo text-muted-foreground">Active Responses</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Response Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-orbitron font-bold holographic-text text-center mb-12">
            Rapid Response Protocols
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyTypes.map((emergency) => (
              <Card 
                key={emergency.id} 
                variant="glass" 
                className={`cursor-pointer hover:scale-105 transition-all duration-500 group border-red-500/30 ${
                  selectedEmergency === emergency.id ? 'ring-2 ring-red-500 scale-105' : ''
                }`}
                onClick={() => setSelectedEmergency(emergency.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <emergency.icon className={`w-16 h-16 ${emergency.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-orbitron font-bold mb-2 ${
                    emergency.priority === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                    emergency.priority === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {emergency.priority} PRIORITY
                  </div>
                  <CardTitle className="text-xl text-red-400">
                    {emergency.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {emergency.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 text-sm font-exo">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response:</span>
                      <span className="neon-text">{emergency.response}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deploy Time:</span>
                      <span className="text-red-400 font-bold">{emergency.deployTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coverage:</span>
                      <span className="neon-text-green">{emergency.coverage}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="destructive" 
                    className="w-full mt-6 pulse-glow font-orbitron font-bold" 
                    size="lg"
                  >
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Deploy Response
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Emergency Responses */}
        <Card variant="glass" className="border-red-500/30">
          <CardHeader>
            <CardTitle className="text-3xl text-red-400 text-center">
              🚨 Active Emergency Responses
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Real-time monitoring of ongoing emergency climate interventions
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              {activeAlerts.map((alert, index) => (
                <div key={index} className="glass-card p-6 border-red-500/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                        <h4 className="text-xl font-orbitron font-bold text-red-400">
                          {alert.location}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-orbitron font-bold ${
                          alert.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                          alert.severity === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {alert.severity}
                        </span>
                      </div>
                      <div className="text-sm font-exo text-muted-foreground">
                        {alert.type} • {alert.affected} affected
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-orbitron font-bold neon-text mb-1">
                        ETA: {alert.eta}
                      </div>
                      <div className={`text-sm font-exo ${
                        alert.status === 'Deploying' ? 'text-red-400' :
                        alert.status === 'Authorized' ? 'text-yellow-400' :
                        'neon-text'
                      }`}>
                        Status: {alert.status}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 w-full bg-space-medium rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        alert.status === 'Deploying' ? 'bg-red-400 w-3/4' :
                        alert.status === 'Authorized' ? 'bg-yellow-400 w-1/2' :
                        'bg-neon-cyan w-1/4'
                      }`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Authorization Notice */}
        <Card variant="glass" className="mt-12 max-w-4xl mx-auto border-green-500/30">
          <CardContent className="p-8 text-center">
            <Shield className="w-16 h-16 neon-text-green mx-auto mb-6" />
            <h3 className="text-3xl font-orbitron font-bold neon-text-green mb-4">
              🛡️ Authorized Personnel Only
            </h3>
            <p className="text-lg font-exo text-muted-foreground mb-6 max-w-2xl mx-auto">
              Emergency override systems require government authorization, NGO credentials, 
              or verified emergency responder status. All actions are logged and monitored 
              by international climate control authorities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-4">
                <div className="text-xl font-orbitron font-bold neon-text-green mb-2">24/7</div>
                <div className="text-sm font-exo text-muted-foreground">Emergency Monitoring</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-xl font-orbitron font-bold neon-text-green mb-2">195</div>
                <div className="text-sm font-exo text-muted-foreground">Government Partners</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-xl font-orbitron font-bold neon-text-green mb-2">5,847</div>
                <div className="text-sm font-exo text-muted-foreground">Lives Saved</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmergencyOverride;