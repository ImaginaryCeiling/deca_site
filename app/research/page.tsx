import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResearchPage() {
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

        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Research Methods & Findings</h1>

          <Tabs defaultValue="methods" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="methods">Research Methods</TabsTrigger>
              <TabsTrigger value="findings">Key Findings</TabsTrigger>
              <TabsTrigger value="conclusions">Conclusions</TabsTrigger>
            </TabsList>

            <TabsContent value="methods">
              <Card>
                <CardHeader>
                  <CardTitle>ACE Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our research methods were chosen based on the ACE framework, which we developed to ensure each
                    method was hitting a specific need:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">A</span>
                      <span>
                        <strong>Actionable:</strong> The method provides clear and implementable insights that can be
                        implemented to address challenges.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">C</span>
                      <span>
                        <strong>Credible:</strong> The method relies on trustworthy sources, stakeholders, or past
                        experience to ensure accurate and reliable information.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">E</span>
                      <span>
                        <strong>Engaging:</strong> The method enables direct interaction with the key stakeholders or
                        environments to ensure deeper understanding of the context.
                      </span>
                    </li>
                  </ul>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-lg mb-2">Fan Experience</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>StatsPerform Sales Call</li>
                        <li>Fan Survey</li>
                        <li>Fan Interview</li>
                        <li>Online Research</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-lg mb-2">Operations Management</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Tournament Shadowing</li>
                        <li>Interview with Head of Operations at CTP</li>
                        <li>Online Research</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-lg mb-2">Player Development</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>OneFootGo Consultation</li>
                        <li>Player Survey</li>
                        <li>Player & Coach Interview</li>
                        <li>Online Research</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="findings">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fan Experience Findings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                        <div>
                          <p className="font-medium">
                            Fans are unaware of what activities take place during large events
                          </p>
                          <p className="text-gray-600 mt-1">
                            Many fans reported not knowing about all the activities and events happening during
                            tournaments, leading to missed opportunities for engagement.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                        <div>
                          <p className="font-medium">Personalized experiences are proven to draw fans' attention</p>
                          <p className="text-gray-600 mt-1">
                            Our research with StatsPerform showed that personalized recommendations and notifications
                            significantly increase fan engagement and retention.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Operations Management Findings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                        <div>
                          <p className="font-medium">
                            Improper spacing between bookings leads to court scheduling issues
                          </p>
                          <p className="text-gray-600 mt-1">
                            CTP faces a major issue called "ghost hours," where improper time spacing between bookings
                            leads to revenue loss as the gaps cannot be used for play.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                        <div>
                          <p className="font-medium">Resources are inefficiently managed, especially at large events</p>
                          <p className="text-gray-600 mt-1">
                            During tournaments, players, officials, and staff complained that "everything was too spread
                            out," with some officials expected to cover long distances in short timeframes.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Player Development Findings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                        <div>
                          <p className="font-medium">Video analysis is currently an underutilized technique at CTP</p>
                          <p className="text-gray-600 mt-1">
                            Players pointed out that there is untapped potential in the video analysis that is currently
                            done at CTP for all levels.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                        <div>
                          <p className="font-medium">
                            Top players at CTP are still using old-fashioned coaching strategies
                          </p>
                          <p className="text-gray-600 mt-1">
                            Despite having talented players who compete at professional levels, coaching methods have
                            not kept pace with technological advancements.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="conclusions">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fan Experience Conclusions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Conclusion</span>
                        <div>
                          <p className="font-medium">Fans need better communication strategies during large events</p>
                          <p className="text-gray-600 mt-1">
                            Improved communication channels and event information would significantly enhance the fan
                            experience at CTP.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Conclusion</span>
                        <div>
                          <p className="font-medium">
                            Tailored recommendations delivered straight to fans will increase retention
                          </p>
                          <p className="text-gray-600 mt-1">
                            Personalized experiences that match fans with events and players they're likely to enjoy
                            will boost engagement and loyalty.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Operations Management Conclusions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Conclusion</span>
                        <div>
                          <p className="font-medium">
                            Spacing bookings correctly is essential to minimize revenue loss
                          </p>
                          <p className="text-gray-600 mt-1">
                            An intelligent court scheduling system could significantly reduce "ghost hours" and increase
                            revenue.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Conclusion</span>
                        <div>
                          <p className="font-medium">
                            Tracking resources 24/7 will help prevent operational inefficiencies
                          </p>
                          <p className="text-gray-600 mt-1">
                            Real-time tracking of staff, equipment, and court usage would streamline operations and
                            improve resource allocation.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Player Development Conclusions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Conclusion</span>
                        <div>
                          <p className="font-medium">
                            Top players need every single edge in their training to stay at the top
                          </p>
                          <p className="text-gray-600 mt-1">
                            Advanced analytics and AI-powered coaching tools could provide the competitive edge needed
                            for elite players.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Conclusion</span>
                        <div>
                          <p className="font-medium">
                            Investment in advanced player development technology will keep players at their best
                          </p>
                          <p className="text-gray-600 mt-1">
                            Modern video analysis and performance tracking tools would enhance player development and
                            coaching effectiveness.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
