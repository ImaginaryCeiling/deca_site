import Link from "next/link"
import { ArrowLeft, DollarSign, TrendingUp, BarChart2, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FinancialAnalysisPage() {
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
          <h1 className="text-3xl font-bold mb-4">Financial Analysis</h1>
          <p className="text-lg text-gray-700 mb-8">
            Our financial analysis demonstrates the viability and potential return on investment of our proposed
            solution.
          </p>

          <div className="prose max-w-none mb-12">
            <h2>Methodology</h2>
            <p>
              Our financial analysis includes comprehensive projections for revenue, costs, and profitability over a
              5-year period. We developed these projections based on market research, industry benchmarks, and
              conservative assumptions.
            </p>

            <h2>Key Financial Metrics</h2>
            <ul>
              <li>Initial investment required: $X</li>
              <li>Projected break-even point: Month Y</li>
              <li>5-year ROI: Z%</li>
              <li>Net Present Value (NPV): $A</li>
              <li>Internal Rate of Return (IRR): B%</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue Projections</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <TrendingUp className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  Projected revenue growth over the next 5 years based on market penetration and pricing strategy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost Structure</CardTitle>
                <PieChart className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <PieChart className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  Breakdown of fixed and variable costs associated with our solution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profitability Analysis</CardTitle>
                <BarChart2 className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <BarChart2 className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Projected profit margins and EBITDA over the 5-year period.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">ROI Analysis</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <DollarSign className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  Return on investment analysis with payback period and IRR calculations.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Sensitivity Analysis</h2>
            <p className="text-gray-700 mb-4">
              We conducted sensitivity analysis to understand how changes in key variables would impact financial
              outcomes:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Scenario
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ROI
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Payback Period
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      NPV
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Base Case</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Y months</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$Z</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Optimistic</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Y months</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$Z</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pessimistic</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Y months</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$Z</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/documents/financial-analysis.pdf">Download Full Financial Analysis</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
