"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Copy, MapPin, Calendar, Code } from "lucide-react"
import { useState } from "react"

export default function PlaygroundPage() {
  const [city, setCity] = useState("New York")
  const [date, setDate] = useState("10/02/2025")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleTryAPI = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/v1/rainfall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city,
          date,
        }),
      })

      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      setResponse(JSON.stringify({ error: "Failed to fetch data" }, null, 2))
    } finally {
      setIsLoading(false)
    }
  }

  const curlExample = `curl -X POST "https://api.rainlytics.com/v1/rainfall" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "city": "${city}",
    "date": "${date}"
  }'`

  const jsExample = `const response = await fetch('https://api.rainlytics.com/v1/rainfall', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    city: '${city}',
    date: '${date}'
  })
});

const data = await response.json();
console.log(data);`

  const pythonExample = `import requests

url = "https://api.rainlytics.com/v1/rainfall"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "city": "${city}",
    "date": "${date}"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="text-sm">
              <Play className="h-3 w-3 mr-1" />
              Interactive Demo
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-balance">API Playground</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Test our rainfall data API with real parameters and see live responses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  API Parameters
                </CardTitle>
                <CardDescription>Enter the location and date to retrieve rainfall data.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="city" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    City
                  </Label>
                  <Input
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="New York"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date (MM/DD/YYYY)
                  </Label>
                  <Input
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="10/02/2025"
                  />
                </div>

                <Button onClick={handleTryAPI} disabled={isLoading} className="w-full" size="lg">
                  {isLoading ? "Fetching Data..." : "Try API"}
                </Button>
              </CardContent>
            </Card>

            {/* Response Panel */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    API Response
                  </span>
                  {response && (
                    <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(response)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  )}
                </CardTitle>
                <CardDescription>Live response from the Rainlytics API.</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={response || "Click 'Try API' to see the response here..."}
                  readOnly
                  className="min-h-[300px] font-mono text-sm bg-muted"
                />
              </CardContent>
            </Card>
          </div>

          {/* Code Examples */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
              <CardDescription>Copy these examples to integrate Rainlytics API into your application.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="curl" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>

                <TabsContent value="curl" className="space-y-4">
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{curlExample}</code>
                    </pre>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 bg-transparent"
                      onClick={() => navigator.clipboard.writeText(curlExample)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="javascript" className="space-y-4">
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{jsExample}</code>
                    </pre>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 bg-transparent"
                      onClick={() => navigator.clipboard.writeText(jsExample)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="python" className="space-y-4">
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{pythonExample}</code>
                    </pre>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 bg-transparent"
                      onClick={() => navigator.clipboard.writeText(pythonExample)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
