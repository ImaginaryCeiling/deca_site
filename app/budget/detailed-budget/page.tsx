import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DetailedBudgetPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/budget">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Budget Overview
            </Link>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Detailed Budget Breakdown</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>CTPlan Budget Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                  <p className="text-sm text-gray-600 mb-1">One-Time Costs</p>
                  <p className="text-3xl font-bold text-green-700">$145,100</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                  <p className="text-sm text-gray-600 mb-1">Annual Recurring</p>
                  <p className="text-3xl font-bold text-green-700">$70,000</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg border border-green-300 text-center">
                  <p className="text-sm text-gray-700 mb-1">Total First Year</p>
                  <p className="text-3xl font-bold text-green-800">$215,100</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                The CTPlan budget is divided into one-time implementation costs and recurring annual expenses. The
                initial investment covers development, hardware, and setup, while recurring costs ensure ongoing
                operation and improvement of all systems.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Detailed Budget Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-green-800 text-white">
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        CTPlan Component
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        One-Time Cost
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Yearly Cost
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Development Costs */}
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CTPulse Development
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$50,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Development costs for CTPulse and CTPulsePro</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CTProcess Development
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$35,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Development costs for CTProcess</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CTPerformance Development
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$20,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Development costs for CTPerformance; includes initial fee for OneFootGo
                      </td>
                    </tr>

                    {/* Hardware Costs */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cameras</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$25,100</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Installation of 4 cameras on each court, ~$200 per camera
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        On-Premises Server
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$10,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        On-Premises server to run CTProcess and CTPerformance; includes staff training costs
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        NFC Tracking System
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$5,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Cost to implement the NFC Tracking System</td>
                    </tr>

                    {/* Recurring Costs */}
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cloud Services</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$30,000</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Cloud Services for data management</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        OneFootGo Licensing Fee
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$25,000</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Yearly cost to use OneFootGo software in CTPerformance
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Maintenance & Updates
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$10,000</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Yearly maintenance and updates for CTPlan</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Miscellaneous</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">---</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$5,000</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Budget set aside for unplanned issues</td>
                    </tr>

                    {/* Totals */}
                    <tr className="bg-green-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Total</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">$145,100</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">$70,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        Total First Year Costs: $215,100
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Budget Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">One-Time Costs Distribution</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">CTPulse Development ($50,000)</span>
                        <span className="text-sm font-medium">34.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "34.5%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">CTProcess Development ($35,000)</span>
                        <span className="text-sm font-medium">24.1%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "24.1%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">CTPerformance Development ($20,000)</span>
                        <span className="text-sm font-medium">13.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "13.8%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Hardware & Infrastructure ($40,100)</span>
                        <span className="text-sm font-medium">27.6%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "27.6%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Annual Recurring Costs Distribution</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Cloud Services ($30,000)</span>
                        <span className="text-sm font-medium">42.9%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "42.9%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">OneFootGo Licensing ($25,000)</span>
                        <span className="text-sm font-medium">35.7%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "35.7%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Maintenance & Updates ($10,000)</span>
                        <span className="text-sm font-medium">14.3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "14.3%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Miscellaneous ($5,000)</span>
                        <span className="text-sm font-medium">7.1%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "7.1%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-2">Budget Justification</h3>
                <p className="text-gray-700 mb-2">The budget allocation reflects our strategic priorities:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>
                    <strong>Development costs</strong> (72.4% of one-time expenses) are front-loaded to ensure robust,
                    high-quality systems that will require minimal future modifications.
                  </li>
                  <li>
                    <strong>Hardware investments</strong> (27.6% of one-time expenses) provide the necessary
                    infrastructure to support all three CTPlan components.
                  </li>
                  <li>
                    <strong>Cloud services and licensing</strong> (78.6% of recurring costs) ensure continuous access to
                    cutting-edge AI capabilities and secure data storage.
                  </li>
                  <li>
                    <strong>Maintenance budget</strong> (14.3% of recurring costs) guarantees system reliability and
                    performance over time.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
