import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Leaf, Zap, Shield, Star } from "lucide-react";

const SubscriptionPlans = () => {
  const normalPlans = [
    {
      name: "Basic Weather",
      price: "$299",
      period: "/month",
      description: "Perfect for personal use and small properties",
      features: [
        "Up to 50 weather hours/month",
        "Basic weather types (rain, sun, wind)",
        "24/7 customer support",
        "Mobile app access",
        "Weather scheduling",
        "GPS precision targeting"
      ],
      icon: Star,
      variant: "glass" as const,
      popular: false,
    },
    {
      name: "Premium Climate",
      price: "$799",
      period: "/month",
      description: "Advanced weather control for businesses and events",
      features: [
        "Up to 200 weather hours/month",
        "All weather types including snow & fog",
        "Priority deployment (< 15 minutes)",
        "Advanced scheduling & automation",
        "Weather marketplace access",
        "Emergency override credits",
        "API integration",
        "Custom weather patterns"
      ],
      icon: Crown,
      variant: "neon" as const,
      popular: true,
    },
    {
      name: "Enterprise Control",
      price: "$1,999",
      period: "/month",
      description: "Complete climate mastery for large operations",
      features: [
        "Unlimited weather hours",
        "All premium features",
        "Dedicated climate consultant",
        "Real-time satellite data",
        "Government-grade security",
        "Multi-location management",
        "White-label solutions",
        "Custom integration support",
        "Disaster prevention protocols"
      ],
      icon: Shield,
      variant: "holographic" as const,
      popular: false,
    },
  ];

  const farmerPlans = [
    {
      name: "Crop Guardian Basic",
      price: "$199",
      period: "/month",
      description: "Essential weather support for small farms",
      features: [
        "Up to 5 crop cycles/month",
        "Basic crops (wheat, rice, corn)",
        "Automated weather delivery",
        "Crop growth monitoring",
        "Government subsidy eligible",
        "Weather insurance included"
      ],
      subsidyDiscount: "40%",
      finalPrice: "$119",
    },
    {
      name: "Agricultural Pro",
      price: "$599",
      period: "/month",
      description: "Advanced farming solutions for commercial agriculture",
      features: [
        "Up to 20 crop cycles/month",
        "All crop types supported",
        "Precision micro-climate control",
        "Soil analysis integration",
        "Yield optimization AI",
        "Multi-field management",
        "Pest control weather patterns",
        "Harvest timing optimization"
      ],
      subsidyDiscount: "60%",
      finalPrice: "$239",
      popular: true,
    },
    {
      name: "Mega Farm Enterprise",
      price: "$1,499",
      period: "/month",
      description: "Complete agricultural climate ecosystem",
      features: [
        "Unlimited crop cycles",
        "Research & development crops",
        "Continental-scale weather control",
        "Supply chain integration",
        "Carbon credit optimization",
        "International trade weather",
        "Custom crop genetics support",
        "Agricultural AI assistant"
      ],
      subsidyDiscount: "50%",
      finalPrice: "$749",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Normal User Plans */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-orbitron font-bold holographic-text mb-6">
              Personal & Business Plans
            </h2>
            <p className="text-xl font-exo text-muted-foreground max-w-3xl mx-auto">
              Lock in your perfect weather for as many days as you want. Choose from flexible plans 
              designed for every lifestyle and business need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {normalPlans.map((plan, index) => (
              <Card 
                key={index} 
                variant={plan.variant}
                className={`relative hover:scale-105 transition-all duration-500 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="glass-card px-4 py-2 neon-text font-orbitron font-bold text-sm">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <plan.icon className="w-12 h-12 neon-text" />
                  </div>
                  <CardTitle className="text-2xl neon-text">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-orbitron font-bold neon-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground font-exo">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-exo">
                        <Check className="w-5 h-5 neon-text-green flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? "holographic" : "neon"} 
                    className="w-full" 
                    size="lg"
                  >
                    Start {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Farmer Plans */}
        <div>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Leaf className="w-12 h-12 neon-text-green" />
              <h2 className="text-5xl font-orbitron font-bold holographic-text">
                Farmer Crop Plans
              </h2>
              <Leaf className="w-12 h-12 neon-text-green" />
            </div>
            <p className="text-xl font-exo text-muted-foreground max-w-3xl mx-auto mb-4">
              Choose your crop, and we'll provide the ideal climate until harvest. 
              Government-supported weather solutions for sustainable agriculture.
            </p>
            <div className="glass-card p-4 max-w-2xl mx-auto">
              <p className="text-lg font-orbitron neon-text-green">
                🌱 Government Subsidies Available - Grow more, spend less!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {farmerPlans.map((plan, index) => (
              <Card 
                key={index} 
                variant="glass"
                className={`relative hover:scale-105 transition-all duration-500 border-green-500/30 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="glass-card px-4 py-2 neon-text-green font-orbitron font-bold text-sm">
                      FARMER'S CHOICE
                    </div>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Leaf className="w-12 h-12 neon-text-green" />
                  </div>
                  <CardTitle className="text-2xl neon-text-green">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mt-6 space-y-2">
                    <div className="text-2xl font-orbitron text-muted-foreground line-through">
                      {plan.price}<span className="text-sm">/month</span>
                    </div>
                    <div className="glass-card p-2 bg-green-500/20 border-green-500/50">
                      <span className="text-sm font-exo neon-text-green">
                        Government Subsidy: -{plan.subsidyDiscount}
                      </span>
                    </div>
                    <div className="text-4xl font-orbitron font-bold neon-text-green">
                      {plan.finalPrice}
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-exo">
                        <Check className="w-5 h-5 neon-text-green flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? "holographic" : "glass"} 
                    className="w-full border-green-500/50 hover:border-green-500" 
                    size="lg"
                  >
                    <Leaf className="w-4 h-4 mr-2" />
                    Start Growing
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subsidy Info */}
          <Card variant="glass" className="mt-12 max-w-4xl mx-auto border-green-500/30">
            <CardContent className="p-8 text-center">
              <Zap className="w-16 h-16 neon-text-green mx-auto mb-6" />
              <h3 className="text-3xl font-orbitron font-bold neon-text-green mb-4">
                Government-Backed Climate Support
              </h3>
              <p className="text-lg font-exo text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our partnership with global agricultural ministries ensures farmers get the support they need. 
                Automatic subsidy application, carbon credit integration, and sustainable farming incentives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-4">
                  <div className="text-2xl font-orbitron font-bold neon-text-green mb-2">40-60%</div>
                  <div className="text-sm font-exo text-muted-foreground">Average Savings</div>
                </div>
                <div className="glass-card p-4">
                  <div className="text-2xl font-orbitron font-bold neon-text-green mb-2">195</div>
                  <div className="text-sm font-exo text-muted-foreground">Countries Participating</div>
                </div>
                <div className="glass-card p-4">
                  <div className="text-2xl font-orbitron font-bold neon-text-green mb-2">2.3M</div>
                  <div className="text-sm font-exo text-muted-foreground">Farmers Supported</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;