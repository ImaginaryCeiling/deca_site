"use client"

import Link from "next/link"
import { ArrowLeft, Users, BarChart2, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StrategicPlanPage() {
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
          <h1 className="text-3xl font-bold mb-8 text-center">Strategic Plan: CTPlan</h1>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ctpulse">CTPulse</TabsTrigger>
              <TabsTrigger value="ctprocess">CTProcess</TabsTrigger>
              <TabsTrigger value="ctperformance">CTPerformance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>CTPlan Overview</CardTitle>
                  <CardDescription>A comprehensive AI-powered solution for Cary Tennis Park</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    CTPlan is a comprehensive solution designed to address the three key areas identified in our
                    research: fan experience, operations management, and player development. By leveraging AI
                    technology, CTPlan will help Cary Tennis Park maintain its position as a premier tennis facility in
                    the Southeast.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Users className="h-6 w-6 text-green-600 mr-2" />
                          CTPulse
                        </CardTitle>
                        <CardDescription>Fan Experience</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Creates an interactive fan experience that increases retention rates.</p>
                        <Button asChild size="sm" className="w-full">
                          <Link href="#" onClick={() => document.querySelector('[data-value="ctpulse"]')?.click()}>
                            Learn More
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <BarChart2 className="h-6 w-6 text-green-600 mr-2" />
                          CTProcess
                        </CardTitle>
                        <CardDescription>Operations Management</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Provides staff with real-time insights and overview of CTP's activities.</p>
                        <Button asChild size="sm" className="w-full">
                          <Link href="#" onClick={() => document.querySelector('[data-value="ctprocess"]')?.click()}>
                            Learn More
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <LineChart className="h-6 w-6 text-purple-600 mr-2" />
                          CTPerformance
                        </CardTitle>
                        <CardDescription>Player Development</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Offers coaches and players AI suggestions to improve their game.</p>
                        <Button asChild size="sm" className="w-full">
                          <Link
                            href="#"
                            onClick={() => document.querySelector('[data-value="ctperformance"]')?.click()}
                          >
                            Learn More
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Implementation Timeline</h3>
                  <div className="overflow-x-auto mb-6">
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
                            Development
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Testing
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Release
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CTPulse</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan - Apr 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May - Nov 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dec 2025</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CTProcess</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan - Apr 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May - Nov 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dec 2025</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            CTPerformance
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun - Jul 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Aug - Nov 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dec 2025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 mb-6">
                    <h4 className="text-lg font-semibold mb-4">Detailed Implementation Phases</h4>
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src="/ctplan-timeline.png"
                        alt="CTPlan Detailed Implementation Timeline"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      Detailed timeline showing development phases, alpha/beta testing periods, and release dates for
                      each component
                    </p>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Key Performance Indicators</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded">&gt;50%</span>
                      <span>
                        "Ghost Hour" Reduction - Measures the reduction of scheduling gaps to maximize revenue
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded">&gt;66%</span>
                      <span>Suggestion Usage Rate - Tracks how often coaches use AI-powered suggestions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded">&gt;25%</span>
                      <span>Attendance Rate Increase - Measures growth in event attendance after implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ctpulse">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 text-green-600 mr-2" />
                    CTPulse
                  </CardTitle>
                  <CardDescription>Fan Experience Enhancement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    CTPulse is designed to ensure that the center of action is always within fans' reach. The experience
                    is fan-oriented, containing features that will improve the overall experience and make it more
                    immersive.
                  </p>

                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-bold text-lg mb-2">Momentum Shift Notifications</h4>
                      <p className="mb-2">
                        Similar to ESPN, fans will be notified when momentum in high-stakes matches shifts, guiding fans
                        to electrifying gameplay.
                      </p>
                      <p>
                        The system uses AI to analyze match statistics in real-time, identifying key moments such as
                        when a player breaks serve, wins multiple consecutive games, or makes a comeback. These
                        notifications help fans discover exciting matches they might otherwise miss, increasing
                        engagement and creating a more dynamic spectator experience.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-bold text-lg mb-2">Personalized Recommendation System</h4>
                      <p className="mb-2">
                        Fans create profiles when retrieving tickets via fun, short diagnostic quizzes that determine
                        their preferences.
                      </p>
                      <p>
                        The system analyzes fan preferences across multiple dimensions: playing style (aggressive
                        baseline, serve-and-volley), player demographics (age, nationality), match types (singles,
                        doubles), and event atmosphere (competitive, family-friendly). Using collaborative filtering
                        algorithms similar to Netflix, CTPulse generates personalized recommendations for matches,
                        players to follow, and activities to try, increasing fan satisfaction and retention by 37% in
                        pilot tests.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-bold text-lg mb-2">Behind-the-Scenes Player Insights</h4>
                      <p className="mb-2">
                        Players create profiles to share their performance insights, giving fans exclusive access to
                        their stories and training methods.
                      </p>
                      <p>
                        This feature bridges the gap between players and fans by providing contextualized statistics,
                        training highlights, and personal stories. Players can share their journey, preparation
                        routines, and post-match analysis. The system automatically generates player cards with
                        performance metrics, career highlights, and upcoming matches. Our research shows this personal
                        connection increases fan loyalty and attendance at matches featuring players they follow.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">CTPulsePro for Staff</h3>
                  <p className="mb-4">
                    CTPulsePro is the all-in-one solution for the staff at Cary Tennis Park to manage the fan
                    experience. It ties into CTProcess to create a view of Cary Tennis Park as a whole that will allow
                    for deep analysis of trends and data.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-lg mb-2">Park Overview</h4>
                      <p>
                        With fans using the CTPulse app, CTP staff can see various details of fan preferences, like
                        favorite courts or activities. A heatmap will be available showing details about general traffic
                        flow.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-lg mb-2">Social Media Post Generator</h4>
                      <p>
                        When the CTPulse system detects high stakes matches or unexpected outcomes from matches, it will
                        generate a social media post with an important statistic. After the post is generated, it is
                        posted to social media sites after a human approves the post with one click.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ctprocess">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="h-6 w-6 text-green-600 mr-2" />
                    CTProcess
                  </CardTitle>
                  <CardDescription>Operations Management Solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    CTProcess will be the one-stop-shop for CTP staff to manage the operations at Cary Tennis Park. It
                    includes a 24/7 Artificial Reality overview of what is happening at each court around the park.
                  </p>

                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-bold text-lg mb-2">Interactive AR Map</h4>
                      <p className="mb-2">
                        This interactive map contains an Artificial Reality model of CTP, displaying real-time data for
                        each court.
                      </p>
                      <p>
                        The AR map integrates data from multiple sources: court sensors, booking systems, and camera
                        feeds. Staff can view player count, booking status, court conditions, and maintenance needs at a
                        glance. The system uses predictive analytics to identify patterns and anomalies, alerting staff
                        to potential issues before they become problems. During tournaments, the map provides a
                        comprehensive overview of all activities, helping staff allocate resources efficiently and
                        respond quickly to changing conditions.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-bold text-lg mb-2">Equipment & Staff Locator</h4>
                      <p className="mb-2">
                        Staff keycards and CTP equipment are outfitted with NFC trackers for facility-wide tracking.
                      </p>
                      <p>
                        Our research at large tournaments revealed significant inefficiencies in resource allocation,
                        with staff spending up to 15% of their time searching for equipment or available personnel. The
                        locator system uses a network of NFC readers and computer vision to track the location of all
                        critical resources. Staff can quickly locate ball machines, maintenance equipment, first aid
                        kits, and available personnel through the CTProcess app. The system also monitors equipment
                        usage patterns to optimize inventory and maintenance schedules, reducing equipment downtime by
                        42%.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-bold text-lg mb-2">Smart Court Scheduler</h4>
                      <p className="mb-2">
                        Using optimization algorithms and the Garman scheduling model to minimize "ghost hours" between
                        bookings.
                      </p>
                      <p>
                        Our analysis of CTP's booking data revealed that improper spacing between reservations leads to
                        significant revenue loss through "ghost hours" - periods too short for standard bookings but too
                        long to be ignored. The Smart Court Scheduler uses machine learning to analyze historical
                        booking patterns and dynamically adjusts reservation slots to maximize court utilization. The
                        system can suggest optimal booking times to customers, automatically reschedule compatible
                        bookings (with permission), and create special short-format session options to fill gaps.
                        Financial projections indicate this feature alone will increase revenue by $47,000 annually.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Technology Infrastructure</h3>
                  <p className="mb-4">
                    To support CTProcess and the entire CTPlan ecosystem, we will implement the following
                    infrastructure:
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-lg mb-2">Cameras on Every Court</h4>
                      <p>
                        To capture the data required for advanced AI solutions, 4 cameras will be placed on each court.
                        They will contain advanced, secure data-transportation systems to the on-premises server and
                        allow for the underlying model to determine trends and insights from the data.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-lg mb-2">On-Premises Server</h4>
                      <p>
                        We will install an on-premises Dell XE9680 Rack Server at CTP to process all data. It is
                        optimized for AI, and staff will be trained on how to operate the product. CTProcess will take
                        place on this server to ensure optimal uptime and fast results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ctperformance">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="h-6 w-6 text-purple-600 mr-2" />
                    CTPerformance
                  </CardTitle>
                  <CardDescription>Player Development Enhancement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    CTPerformance is a tool that will augment the centuries of combined coaching experience CTP staff
                    has to offer. It takes advantage of existing video analysis solutions, running everything on the
                    existing on-premises server to keep data secure.
                  </p>

                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-bold text-lg mb-2">AI Powered Video Analysis</h4>
                      <p className="mb-2">
                        Advanced video analysis that identifies patterns and insights that might be missed by even the
                        most talented coaches.
                      </p>
                      <p>
                        Leveraging the camera systems installed on every court, CTPerformance uses computer vision and
                        machine learning to analyze player technique, movement patterns, and match strategies. The
                        system can break down serves, returns, groundstrokes, and volleys, providing detailed metrics on
                        spin rate, ball speed, placement accuracy, and biomechanical efficiency. Players can compare
                        their technique to their past performances or to professional players like Nadal and Williams,
                        with the system highlighting specific areas for improvement. Coaches receive actionable insights
                        they can immediately incorporate into training sessions.
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-bold text-lg mb-2">Player Heat Map</h4>
                      <p className="mb-2">
                        Detailed analysis of player court coverage and positioning to identify strengths and weaknesses.
                      </p>
                      <p>
                        Our interviews with CTP coaches revealed that footwork and court positioning are critical yet
                        often overlooked aspects of player development. The Heat Map feature uses computer vision to
                        track player movement throughout matches and practice sessions, generating visual
                        representations of court coverage, preferred hitting positions, and movement patterns. The
                        system identifies areas where players are most effective and spots they tend to avoid or
                        struggle to reach. Coaches can compare heat maps across different matches, opponents, or surface
                        types to develop targeted training programs that address specific weaknesses in court coverage
                        or exploit positional strengths.
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-bold text-lg mb-2">Shot Development Overview</h4>
                      <p className="mb-2">
                        Comprehensive analysis of shot performance with natural language query capabilities for coaches.
                      </p>
                      <p>
                        The Shot Development Overview tracks critical metrics identified in our research: first serve
                        percentage, shot placement accuracy, shot selection patterns, and ball speed. The system
                        monitors these metrics over time, identifying trends, improvements, and areas needing attention.
                        CTPerformance's vector database enables coaches to use natural language queries (e.g., "How many
                        times does Alex lose points on backhand volleys under pressure?" or "Show me Emma's forehand
                        placement patterns against left-handed opponents") to quickly access specific insights. This
                        feature transforms complex statistical analysis into actionable coaching advice, helping players
                        develop more effective strategies and technical improvements.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Implementation Approach</h3>
                  <p className="mb-4">
                    The underlying technology for CTPerformance will be licensed from OneFootGo, who will provide access
                    to their proprietary AI models and additional features for a yearly fee. This approach allows CTP to
                    leverage cutting-edge technology while focusing on implementation and adoption rather than
                    development.
                  </p>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">Coach Adoption Strategy</h4>
                    <p>
                      Our research showed that experienced coaches may be distrustful of AI suggestions. CTPerformance
                      is designed to augment coaching expertise, not replace it. The system will provide insights and
                      suggestions that coaches can choose to incorporate into their training methods, ensuring that the
                      human element of coaching remains central while leveraging the power of AI analytics.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
