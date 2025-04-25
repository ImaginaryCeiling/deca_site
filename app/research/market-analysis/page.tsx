import Link from "next/link"
import { ArrowLeft, BarChart2, PieChart, LineChart, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MarketAnalysisPage() {
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
          <h1 className="text-3xl font-bold mb-4">Market Analysis</h1>
          <p className="text-lg text-gray-700 mb-8">
            Our comprehensive market analysis revealed key trends and opportunities that informed our strategic
            recommendations.
          </p>

          <div className="prose max-w-none mb-12">
            <h2>Methodology</h2>
            <p>
              Our market analysis combined quantitative data from industry reports with qualitative insights from expert
              interviews. We analyzed market size, growth trends, competitive landscape, and consumer behavior to
              identify key opportunities and challenges.
            </p>

            <h2>Key Findings</h2>
            <p>The analysis revealed several important insights that shaped our strategic recommendations:</p>
            <ul>
              <li>
                The market is growing at a CAGR of 12.5%, driven by increasing demand for [specific product/service]
              </li>
              <li>
                Three major competitors control 65% of the market share, with fragmented competition for the remaining
                35%
              </li>
              <li>
                Consumer preferences are shifting toward [specific trend], creating an opportunity for differentiation
              </li>
              <li>
                Regulatory changes in [specific area] are creating both challenges and opportunities for market entrants
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Market Size & Growth</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <LineChart className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  The market has shown consistent growth over the past 5 years, with projections indicating continued
                  expansion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Market Segmentation</CardTitle>
                <PieChart className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <PieChart className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  The market can be segmented into three primary customer groups, each with distinct needs and
                  preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Competitive Landscape</CardTitle>
                <BarChart2 className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <BarChart2 className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  Analysis of key competitors reveals opportunities for differentiation in [specific areas].
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Consumer Trends</CardTitle>
                <LineChart className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <LineChart className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  Emerging consumer trends indicate a shift toward [specific preferences], creating new market
                  opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Strategic Implications</h2>
            <p className="text-gray-700 mb-4">
              Based on our market analysis, we identified several strategic implications that informed our
              recommendations:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded">Opportunity</span>
                <span>Targeting the underserved [specific segment] with a differentiated offering</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded">Opportunity</span>
                <span>Leveraging emerging technology to create a competitive advantage</span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 font-medium mr-2 px-2.5 py-0.5 rounded">Threat</span>
                <span>Increasing competition from new market entrants</span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 font-medium mr-2 px-2.5 py-0.5 rounded">Threat</span>
                <span>Regulatory changes that could impact market dynamics</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/documents/market-analysis.pdf">Download Full Market Analysis Report</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
