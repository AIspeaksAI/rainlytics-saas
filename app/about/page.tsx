import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Target, Users, Globe } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former meteorologist with 15+ years in weather data systems.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      bio: "Ex-Google engineer specializing in large-scale data infrastructure.",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Data Science",
      bio: "PhD in Atmospheric Sciences, expert in weather pattern analysis.",
    },
    {
      name: "James Park",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in API design and optimization.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="text-sm">
              <Cloud className="h-3 w-3 mr-1" />
              About Rainlytics
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-balance">Democratizing Weather Data</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              We believe that accurate, accessible rainfall data should be available to every developer and business
              worldwide.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-balance">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Founded in 2023, Rainlytics was born from the frustration of trying to access reliable historical
                rainfall data for agricultural applications. We discovered that while this data exists, it's often
                locked behind complex systems, expensive licenses, or outdated interfaces.
              </p>
              <p className="text-lg text-muted-foreground text-balance">
                Today, we're building the world's most developer-friendly rainfall data API, making decades of
                historical weather information accessible through simple REST endpoints.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl">50+</CardTitle>
                  <CardDescription>Countries Covered</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl">10K+</CardTitle>
                  <CardDescription>Developers Served</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl">99.9%</CardTitle>
                  <CardDescription>API Uptime</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <Cloud className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl">30+</CardTitle>
                  <CardDescription>Years of Data</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-balance">Our Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Developer First</CardTitle>
                  <CardDescription>
                    Every decision we make prioritizes developer experience. Simple APIs, clear documentation, and
                    reliable service are at the core of everything we build.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Data Accuracy</CardTitle>
                  <CardDescription>
                    We source our data from verified weather stations and satellite measurements, ensuring the highest
                    quality and accuracy for your applications.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Global Accessibility</CardTitle>
                  <CardDescription>
                    Weather affects everyone, everywhere. We're committed to providing global coverage and making our
                    API accessible to developers worldwide.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-balance">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground mt-4">
                Passionate experts in weather data, engineering, and developer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center space-y-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-balance">Want to Learn More?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              We'd love to hear from you. Reach out with questions, feedback, or partnership opportunities.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
