"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Key, BarChart3, Copy, Eye, EyeOff, RefreshCw, TrendingUp, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [showApiKey, setShowApiKey] = useState(false)
  const apiKey = "rly_1234567890abcdef1234567890abcdef"

  const recentRequests = [
    {
      id: "req_001",
      endpoint: "/v1/rainfall",
      location: "New York, NY",
      date: "2024-01-15",
      status: "200",
      timestamp: "2024-01-16 14:30:25",
    },
    {
      id: "req_002",
      endpoint: "/v1/rainfall",
      location: "Los Angeles, CA",
      date: "2024-01-14",
      status: "200",
      timestamp: "2024-01-16 14:28:12",
    },
    {
      id: "req_003",
      endpoint: "/v1/rainfall",
      location: "Chicago, IL",
      date: "2024-01-13",
      status: "200",
      timestamp: "2024-01-16 14:25:45",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
            <p className="text-xl text-muted-foreground">Monitor your API usage and manage your Rainlytics account.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">API Calls This Month</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent">+12%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.8%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent">+0.2%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145ms</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent">-5ms</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Locations Queried</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent">+23</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="api-keys">API Keys</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Usage Progress */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Monthly Usage</CardTitle>
                  <CardDescription>Your current plan allows 50,000 API calls per month.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>API Calls Used</span>
                      <span>1,247 / 50,000</span>
                    </div>
                    <Progress value={2.5} className="h-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Professional Plan</Badge>
                    <Button variant="outline" size="sm">
                      Upgrade Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Recent API Requests</CardTitle>
                  <CardDescription>Your latest API calls and their status.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Endpoint</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Timestamp</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-mono text-sm">{request.endpoint}</TableCell>
                          <TableCell>{request.location}</TableCell>
                          <TableCell>{request.date}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="text-accent">
                              {request.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm">{request.timestamp}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api-keys" className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-primary" />
                    API Keys
                  </CardTitle>
                  <CardDescription>Manage your API keys for accessing the Rainlytics API.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">Production Key</div>
                        <div className="text-sm text-muted-foreground">Created on January 1, 2024</div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm bg-muted px-2 py-1 rounded">
                            {showApiKey ? apiKey : "rly_" + "•".repeat(32)}
                          </code>
                          <Button variant="ghost" size="sm" onClick={() => setShowApiKey(!showApiKey)}>
                            {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(apiKey)}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Regenerate
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button>Create New API Key</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Usage Analytics
                  </CardTitle>
                  <CardDescription>Detailed breakdown of your API usage patterns.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Top Endpoints</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">/v1/rainfall</span>
                            <span className="text-sm text-muted-foreground">1,247 calls</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Response Times</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Average: 145ms</span>
                            <span className="text-sm text-muted-foreground">P95: 280ms</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
