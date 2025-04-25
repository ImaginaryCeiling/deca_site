import Link from "next/link"
import { ArrowLeft, Users, BarChart2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CustomerInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Customer Insights</h1>
          <p className="text-lg text-gray-700 mb-8">
            Our customer research provided valuable insights into needs, preferences, and pain points that informed our
            solution.
          </p>

          <div className="prose max-w-none mb-12">
            <h2>Research Methodology</h2>
            <p>We conducted a mixed-methods research approach including:</p>
            <ul>
              <li>Online survey with 250+ respondents from our target demographic</li>
              <li>In-depth interviews with 15 potential customers</li>
              <li>Focus groups with 3 distinct customer segments</li>
              <li>Analysis of customer reviews and feedback from competitors</li>
            </ul>

            <h2>Key Findings</h2>
            <p>Our research revealed several important insights about customer needs and preferences:</p>
            <ul>
              <li>85% of respondents expressed frustration with [specific pain point]</li>
              <li>Customers are willing to pay a premium for solutions that address [specific need]</li>
              <li>The decision-making process typically involves [specific steps or considerations]</li>
              <li>Brand trust and reliability were rated as the most important factors in purchase decisions</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customer Demographics</CardTitle>
                <Users className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  Analysis of our target customer segments and their key characteristics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customer Pain Points</CardTitle>
                <BarChart2 className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <BarChart2 className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  Visualization of the most common pain points identified in our research.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customer Feedback</CardTitle>
                <MessageSquare className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <MessageSquare className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Key themes from customer interviews and qualitative feedback.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Purchase Drivers</CardTitle>
                <BarChart2 className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <BarChart2 className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Analysis of the factors that most influence purchase decisions.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Customer Personas</h2>
            <p className="text-gray-700 mb-4">Based on our research, we developed three primary customer personas:</p>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Persona 1</h3>
                  <p className="text-sm text-gray-500 mb-2">Key demographic and psychographic details</p>
                  <p className="text-gray-700 mb-2">Primary needs and pain points</p>
                  <p className="text-gray-700">How our solution addresses their specific needs</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Persona 2</h3>
                  <p className="text-sm text-gray-500 mb-2">Key demographic and psychographic details</p>
                  <p className="text-gray-700 mb-2">Primary needs and pain points</p>
                  <p className="text-gray-700">How our solution addresses their specific needs</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Persona 3</h3>
                  <p className="text-sm text-gray-500 mb-2">Key demographic and psychographic details</p>
                  <p className="text-gray-700 mb-2">Primary needs and pain points</p>
                  <p className="text-gray-700">How our solution addresses their specific needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/documents/customer-research.pdf">Download Full Customer Research Report</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
