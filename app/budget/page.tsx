import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BudgetPage() {
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
          <h1 className="text-3xl font-bold mb-8 text-center">Budget & ROI Analysis</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>First Year Implementation</CardTitle>
                <CardDescription>Cost breakdown by component</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">CTPulse:</span>
                    <span className="font-bold">$76,366</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "35%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">CTProcess:</span>
                    <span className="font-bold">$66,366</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "31%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">CTPerformance:</span>
                    <span className="font-bold">$71,366</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "33%" }}></div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                    <span className="font-bold">Total First Year:</span>
                    <span className="font-bold text-lg">$215,100</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/budget/detailed-budget">
                    View Detailed Budget <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5-Year Projection</CardTitle>
                <CardDescription>Return on investment analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total 5-Year Cost:</span>
                    <span className="font-bold">$495,000</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total 5-Year Revenue:</span>
                    <span className="font-bold text-green-600">$788,243</span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">5-Year ROI:</span>
                      <span className="font-bold text-lg text-green-600">12.50%</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      ROI (%) = (Cumulative Revenue - Cumulative Expenses) / Cumulative Expenses × 100
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Detailed Budget Breakdown</CardTitle>
              <CardDescription>Component costs and recurring expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Component
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Initial Cost
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Annual Recurring
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        5-Year Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CTPulse</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$55,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$25,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$155,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CTProcess</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$45,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$20,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$125,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CTPerformance</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$45,100</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$25,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$145,100</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Infrastructure</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$70,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$0</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$70,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Total</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">$215,100</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">$70,000/year</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">$495,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Button asChild>
                  <Link href="/budget/detailed-budget">
                    View Detailed Budget Breakdown <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Performance Indicators</CardTitle>
              <CardDescription>Metrics to measure plan effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Fan Experience</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">KPI</span>
                      <div>
                        <p className="font-medium">App Engagement Rate</p>
                        <p className="text-gray-600">
                          Tracks user sign-ups and engagement with CTPulse promotional efforts.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">KPI</span>
                      <div>
                        <p className="font-medium">Attendance Growth</p>
                        <p className="text-gray-600">
                          Compares ticket sales and attendance before and after fan engagement strategies.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Target</span>
                      <div>
                        <p className="font-medium">&gt;25% Attendance Rate Increase</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Operations Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">KPI</span>
                      <div>
                        <p className="font-medium">Court Utilization Rate</p>
                        <p className="text-gray-600">
                          Measures the reduction of "ghost hours" to maximize revenue and efficiency.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">KPI</span>
                      <div>
                        <p className="font-medium">Resource Allocation Efficiency</p>
                        <p className="text-gray-600">
                          Tracks improvements in staff and equipment allocation during events.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Target</span>
                      <div>
                        <p className="font-medium">&gt;50% "Ghost Hour" Reduction</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Player Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">KPI</span>
                      <div>
                        <p className="font-medium">Insight Usage Rate</p>
                        <p className="text-gray-600">
                          Tracks how often coaches use AI-powered suggestions in their training.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">KPI</span>
                      <div>
                        <p className="font-medium">Player Improvement Metrics</p>
                        <p className="text-gray-600">
                          Evaluates progress in key areas like shot speed and footwork efficiency.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Target</span>
                      <div>
                        <p className="font-medium">&gt;66% Suggestion Usage Rate</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
