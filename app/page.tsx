import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Shield, Zap, Code, BarChart3, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 gradient-blur" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="text-sm">
              <Zap className="h-3 w-3 mr-1" />
              OAuth 2.0 Secured API
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Historical Rainfall Data
              <span className="text-primary block">At Your Fingertips</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Access precise historical rainfall data for any location and date via our powerful REST API. Perfect for
              agriculture, insurance, construction, and event planning applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/playground">
                <Button size="lg" className="text-lg px-8">
                  Try API Playground
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Code className="h-5 w-5 mr-2" />
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Built for Developers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Simple, reliable, and powerful rainfall data API designed with developer experience in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <Database className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Comprehensive Data</CardTitle>
                <CardDescription>
                  Access decades of historical rainfall data with precise measurements for any geographic location.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>OAuth 2.0 Security</CardTitle>
                <CardDescription>
                  Enterprise-grade security with OAuth 2.0 authentication ensuring your data and API keys are protected.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized API endpoints delivering rainfall data in milliseconds with 99.9% uptime guarantee.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Global Coverage</CardTitle>
                <CardDescription>
                  Worldwide rainfall data coverage with precise latitude/longitude coordinate support.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Calendar className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Historical Range</CardTitle>
                <CardDescription>
                  Access rainfall data spanning multiple decades with daily, weekly, and monthly aggregations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Rich Analytics</CardTitle>
                <CardDescription>
                  Built-in analytics and aggregation functions for trend analysis and statistical insights.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Trusted by Industries</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              From agriculture to insurance, our rainfall data powers critical business decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-accent rounded-full" />
                  Agriculture & Farming
                </CardTitle>
                <CardDescription>
                  Optimize crop planning, irrigation scheduling, and yield predictions with precise historical rainfall
                  patterns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  Insurance & Risk Assessment
                </CardTitle>
                <CardDescription>
                  Assess weather-related risks, calculate premiums, and process claims with accurate historical data.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-chart-3 rounded-full" />
                  Construction & Infrastructure
                </CardTitle>
                <CardDescription>
                  Plan construction schedules, assess site conditions, and mitigate weather-related project risks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-chart-4 rounded-full" />
                  Event Planning
                </CardTitle>
                <CardDescription>
                  Make informed decisions about outdoor events with historical weather patterns and rainfall data.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join thousands of developers already using Rainlytics to power their applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8">
                Get API Key
              </Button>
            </Link>
            <Link href="/playground">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
