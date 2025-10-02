import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Code, Shield, Zap } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="text-sm">
              <Book className="h-3 w-3 mr-1" />
              API Documentation
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-balance">Developer Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Everything you need to integrate Rainlytics API into your application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-border bg-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a
                    href="#getting-started"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Getting Started
                  </a>
                  <a
                    href="#authentication"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Authentication
                  </a>
                  <a
                    href="#endpoints"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    API Endpoints
                  </a>
                  <a
                    href="#examples"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Code Examples
                  </a>
                  <a
                    href="#errors"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Error Handling
                  </a>
                  <a
                    href="#rate-limits"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Rate Limits
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Getting Started */}
              <Card id="getting-started" className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Getting Started
                  </CardTitle>
                  <CardDescription>Quick start guide to using the Rainlytics API.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">1. Get Your API Key</h4>
                    <p className="text-sm text-muted-foreground">
                      Sign up for a free account and get your API key from the dashboard.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">2. Make Your First Request</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`curl -X GET "https://api.rainlytics.com/v1/rainfall" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "city": "New York",
    "date": "10/02/2025"
  }'`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Authentication */}
              <Card id="authentication" className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Authentication
                  </CardTitle>
                  <CardDescription>Secure your API requests with OAuth 2.0.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    All API requests must be authenticated using OAuth 2.0 Bearer tokens. Include your API key in the
                    Authorization header of every request.
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium">Authorization Header</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </pre>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">API Key Format</h4>
                    <p className="text-sm text-muted-foreground">
                      API keys start with <code className="bg-muted px-1 rounded">rly_</code> followed by 32 characters.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* API Endpoints */}
              <Card id="endpoints" className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    API Endpoints
                  </CardTitle>
                  <CardDescription>Available endpoints and their parameters.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="rainfall" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="rainfall">Get Rainfall Data</TabsTrigger>
                      <TabsTrigger value="bulk">Bulk Requests</TabsTrigger>
                    </TabsList>

                    <TabsContent value="rainfall" className="space-y-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            GET
                          </Badge>
                          <code className="text-sm bg-muted px-2 py-1 rounded ml-2">/v1/rainfall</code>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Parameters</h4>
                          <div className="space-y-2">
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div className="font-medium">Parameter</div>
                              <div className="font-medium">Type</div>
                              <div className="font-medium">Description</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                              <div>city</div>
                              <div>string</div>
                              <div>City name (e.g., "New York", "Chicago", "Boston")</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                              <div>date</div>
                              <div>string</div>
                              <div>Date in MM/DD/YYYY format (e.g., "10/02/2025")</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Response</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`{
  "city": "New York",
  "date": "10/02/2025",
  "rainfall": {
    "amount_mm": 12.5,
    "amount_inches": 0.49
  }
}`}</code>
                          </pre>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="bulk" className="space-y-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            POST
                          </Badge>
                          <code className="text-sm bg-muted px-2 py-1 rounded ml-2">/v1/rainfall/bulk</code>
                        </div>

                        <p className="text-sm text-muted-foreground">
                          Request rainfall data for multiple locations and dates in a single API call.
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium">Request Body</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`{
  "requests": [
    {
      "city": "New York",
      "date": "10/02/2025"
    },
    {
      "city": "Chicago",
      "date": "10/02/2025"
    }
  ]
}`}</code>
                          </pre>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Error Handling */}
              <Card id="errors" className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                  <CardDescription>Understanding API error responses and status codes.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">HTTP Status Codes</h4>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="font-medium">Status Code</div>
                        <div className="font-medium">Description</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>200 OK</div>
                        <div>Request successful</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>400 Bad Request</div>
                        <div>Invalid parameters</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>401 Unauthorized</div>
                        <div>Invalid API key</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>429 Too Many Requests</div>
                        <div>Rate limit exceeded</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Error Response Format</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`{
  "error": {
    "code": "INVALID_CITY",
    "message": "City name is required",
    "details": {
      "parameter": "city",
      "value": ""
    }
  }
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Rate Limits */}
              <Card id="rate-limits" className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Rate Limits</CardTitle>
                  <CardDescription>API usage limits and best practices.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Rate Limit Headers</h4>
                    <p className="text-sm text-muted-foreground">
                      Every API response includes rate limit information in the headers:
                    </p>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200`}</code>
                    </pre>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Plan Limits</h4>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="font-medium">Plan</div>
                        <div className="font-medium">Monthly Limit</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>Developer (Free)</div>
                        <div>1,000 requests</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>Professional</div>
                        <div>50,000 requests</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>Enterprise</div>
                        <div>Unlimited</div>
                      </div>
                    </div>
                  </div>
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
