import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Building, Rocket } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Developer",
      icon: Zap,
      price: "Free",
      description: "Perfect for testing and small projects",
      features: [
        "1,000 API calls/month",
        "Basic rainfall data",
        "Community support",
        "Standard rate limits",
        "OAuth 2.0 authentication",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      icon: Building,
      price: "$29",
      period: "/month",
      description: "Ideal for production applications",
      features: [
        "50,000 API calls/month",
        "Advanced analytics",
        "Priority support",
        "Higher rate limits",
        "Historical data access",
        "Custom aggregations",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "Custom",
      description: "For large-scale applications",
      features: [
        "Unlimited API calls",
        "Dedicated infrastructure",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-balance">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Choose the perfect plan for your rainfall data needs. All plans include OAuth 2.0 security and global
              coverage.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <Card
                  key={plan.name}
                  className={`border-border bg-card relative ${plan.popular ? "ring-2 ring-primary" : ""}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center space-y-4">
                    <div className="mx-auto">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="mt-2">{plan.description}</CardDescription>
                    </div>
                    <div className="space-y-1">
                      <div className="text-4xl font-bold">
                        {plan.price}
                        {plan.period && (
                          <span className="text-lg text-muted-foreground font-normal">{plan.period}</span>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/dashboard" className="block">
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-balance">Frequently Asked Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the free plan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The free Developer plan includes 1,000 API calls per month, basic rainfall data access, and
                    community support. Perfect for testing and small projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">How accurate is the rainfall data?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our data comes from verified weather stations and satellite measurements, providing high-accuracy
                    rainfall information with quality indicators for each data point.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Can I upgrade or downgrade anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will
                    take effect at the next billing cycle.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">What happens if I exceed my limits?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you exceed your monthly API call limit, requests will be throttled. You can upgrade your plan or
                    purchase additional calls as needed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
