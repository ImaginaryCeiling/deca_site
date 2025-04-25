import type React from "react"
import Image from "next/image"
import { BarChart2, Users, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as ChartTooltip } from "recharts"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Replace the existing ChartContainer and ChartTooltipContent components with these:
const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const ChartTooltipContent = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border rounded-md shadow-md p-2">
        <p className="font-bold">{`${payload[0].name}`}</p>
        <p className="text-gray-700">{`Value: $${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cary-tennis-park-aerial.png"
            alt="Aerial view of Cary Tennis Park"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cary Tennis Park</h1>
            <p className="text-xl mb-8">Sports and Entertainment Marketing Operations Research</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                <a href="#research">View Research Methods</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a
                  href="https://deca2025.s3.us-east-1.amazonaws.com/SEOR_NC_Chauhan_Nawal_WE.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHbFvGx0C1txFbHIKg%2FH3fHNzXOL8EVvcz%2F4y5PMEp%2FyAiEAjI5pyaU7HXynlzE8CPZkSsjpRwF6gCSuUMsNKeqbnksquQMILhAAGgwwMTA1MjYyODE4MDIiDAMyA%2BeFkElATQl3CCqWA28pBd3u6rNq8XXyERbOv2CHs77Fw9UpX1oIZwE5elOr6yVZ93Us8UyMc8Lm1Zbz%2BApyxMvUSHewnqs2%2FH89wQn8YFjy8JDBC1XePfoM33r55qJ3IkLaBLDr2Qp5znhL2mqdQzq78w3J8TOUHw3POVHuB6GrHMAvNaj9qB4%2BHNbdujh7M%2BGgkUnPg1RjJd%2B3UhIZ%2FH3YQtmkicUz6%2BGP2ltxo9tS4rhN%2FKTcqkhAMuCys5%2BhNHOvrGkvuHhf2wlp%2B7nstFlTfqmLYZHLAom2sFdWq3CS8Ldg%2Bp0xqk%2BZ8t8Tn%2FdLZNriKbfTMVcbyuZ%2BNeEpYGoexEZzEn3I4I8KSIh3TBD4RwhdKpgdDDq5pD232WfVEx7AC1N8iGXG0vLXDXhf4AB4mb19vnWBPe%2B8rTqsgkKGZqZESBM3HlB0HXkGiDe%2FNKOY2gw%2F8RHtMumqH63bI%2BSi6NMxPS1vFd%2BgqaG%2FNqxTDyVJmqxT6cTenk4uR9BHT6hEhl2pfcazMT26P%2Fawwj8pMaVNaBCQZYuT7WSSayfNt%2BowqI2uwAY63gIsYtXbLm9rr5MClsHv4tOcxFDUSdJJoyHqebFwhPAWdPloACxQiWMHsdeZUHTluh5VZRjjsP6Ha1XElAXVrVL55EDUS%2FL262wJgb%2F%2BIcZ3WbgeSoqYhGuzx%2FV47zJC13eX8QW69uI7rF9cDNxcU5P20yHU%2Bq5%2B7Ug22%2FgzBwdlQ1FxlpXSu27SKJe%2BGDnz7PgAbTSg815r3KbzPR4jwMkxZcYgfJ%2BDx5dlzY2TU6z0%2BerhMFwHv779L%2B9%2Fos0WFFVmF35z4JznMe0dYAMWig25tNEQ4DFCZ0F7zrGTyVC4bwTHoPsisGe6cXLIeSdVajkSlbO%2BrfPiB3G%2B1Si0ggj4KWoSvlV9m864N83gleDI7XoE8IU5F3oxSrfaCHo3eeeIVlNW5njAP%2Fxa91qw7%2B7s2byRiigph31uunaUNty1ALC2ahRh4EshSdjxFG5hPDGgc80U8vXmkcIttBYVKg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQE43KKBFEBBUATQ2%2F20250425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250425T130706Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=314ca0e858ecba81dec922814c9bd2e75f83318a0314147c82c493c746d872ad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Paper
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Project Overview</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Cary Tennis Park (CTP) first welcomed players to its courts in Cary, NC on August 16, 2002. Featuring 25
                outdoor tennis courts, 7 indoor tennis courts, and 4 pickleball courts, the 19-acre facility caters to
                players of all ages and skill levels and is the premier tennis facility in the Southeast.
              </p>
              <p className="text-lg text-gray-700">
                In order to stay at the forefront of the tennis industry, CTP needs to constantly improve in 3 main
                areas: fan experience, operations management, and player development. By taking advantage of new
                advances in AI, it's possible for CTP to create additional pull factors into the facility and continue
                innovating, cementing its position as a world-class facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methods Section */}
      <section className="py-16 bg-gray-50" id="research">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Methods</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">ACE Framework</h3>
              <p className="text-gray-700 mb-4">
                Our research methods were chosen based on the ACE framework, which we developed to ensure each method
                was hitting a specific need:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
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
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <Tabs defaultValue="fan-experience" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="fan-experience">Fan Experience</TabsTrigger>
                <TabsTrigger value="operations">Operations Management</TabsTrigger>
                <TabsTrigger value="player-development">Player Development</TabsTrigger>
              </TabsList>

              <TabsContent value="fan-experience">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-6 w-6 text-green-600 mr-2" />
                      Fan Experience Research
                    </CardTitle>
                    <CardDescription>Methods used to understand fan needs and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-bold text-lg mb-2">StatsPerform Sales Call</h4>
                        <p className="mb-2">
                          We conducted a detailed consultation with StatsPerform, a leading sports analytics company.
                        </p>
                        <p>
                          This consultation provided insights into how data analytics can enhance fan engagement at
                          sporting events. StatsPerform shared case studies from professional tennis tournaments where
                          personalized notifications increased fan engagement by 37%. They demonstrated how real-time
                          analytics can identify "momentum shifts" in matches that create exciting viewing opportunities
                          for spectators. This research was crucial for understanding how technology could transform the
                          passive spectator experience into an interactive one.
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-bold text-lg mb-2">Fan Survey</h4>
                        <p className="mb-2">We surveyed 150 fans who regularly attend events at Cary Tennis Park.</p>
                        <p>
                          The survey included questions about their experience at CTP, pain points, and desired
                          improvements. Key findings included that 78% of fans were unaware of all activities taking
                          place during large events, and 65% expressed interest in receiving personalized
                          recommendations for matches based on their preferences. The survey also revealed that fans who
                          received some form of personalized experience were 2.3 times more likely to attend future
                          events. This quantitative data provided statistical validation for our proposed fan experience
                          enhancements.
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-bold text-lg mb-2">Fan Interviews</h4>
                        <p className="mb-2">
                          We conducted in-depth interviews with 15 fans representing different demographics.
                        </p>
                        <p>
                          These interviews allowed us to gather qualitative insights about the fan experience at CTP.
                          Fans consistently mentioned feeling disconnected from the action when multiple matches were
                          happening simultaneously. Several interviewees expressed frustration about missing exciting
                          matches because they weren't aware they were happening. Families with children mentioned
                          challenges in finding age-appropriate activities during tournaments. These personal stories
                          helped us identify specific pain points that our solution needed to address.
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-bold text-lg mb-2">Online Research</h4>
                        <p className="mb-2">
                          We analyzed online reviews, social media mentions, and forum discussions about CTP.
                        </p>
                        <p>
                          This research provided unfiltered feedback about the facility and events. We used sentiment
                          analysis to identify common themes in the feedback. Positive comments frequently mentioned the
                          quality of the facilities, while negative comments often focused on information gaps and
                          communication issues during events. This research helped us understand the public perception
                          of CTP and identify opportunities for improvement that might not have been captured through
                          direct research methods.
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-lg mb-2">Key Findings</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                          <span>Fans are unaware of what activities take place during large events</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                          <span>Personalized experiences are proven to draw fans' attention</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                            Conclusion
                          </span>
                          <span>
                            Fans need better communication strategies and tailored recommendations to increase retention
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="operations">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart2 className="h-6 w-6 text-green-600 mr-2" />
                      Operations Management Research
                    </CardTitle>
                    <CardDescription>Methods used to analyze operational challenges and opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-bold text-lg mb-2">Tournament Shadowing</h4>
                        <p className="mb-2">
                          Our team shadowed staff during three major tournaments at CTP to observe operations firsthand.
                        </p>
                        <p>
                          This immersive research method allowed us to directly observe operational challenges in
                          real-time. We documented workflow processes, communication patterns, and resource allocation
                          decisions. Key observations included staff spending an average of 15% of their time searching
                          for equipment or available personnel, significant delays in court turnover between matches,
                          and communication gaps between different operational teams. We also noted that during peak
                          times, staff were often overwhelmed with multiple simultaneous demands, leading to suboptimal
                          decision-making.
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-bold text-lg mb-2">Interview with Head of Operations</h4>
                        <p className="mb-2">We conducted an extensive interview with the Head of Operations at CTP.</p>
                        <p>
                          This interview provided insider perspective on the operational challenges facing CTP. The Head
                          of Operations identified "ghost hours" as a major revenue loss factor, explaining that
                          improper spacing between bookings creates time slots too short for standard bookings but too
                          long to ignore. They estimated this issue alone costs CTP approximately $50,000 in annual
                          revenue. They also highlighted challenges in resource tracking during large events and
                          expressed interest in technological solutions that could provide real-time visibility into
                          facility usage and resource allocation.
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-bold text-lg mb-2">Online Research</h4>
                        <p className="mb-2">
                          We researched best practices in tennis facility management and innovative technologies.
                        </p>
                        <p>
                          This research included reviewing case studies from other premier tennis facilities, analyzing
                          industry reports on sports venue management, and exploring emerging technologies in facility
                          operations. We identified several innovative approaches being used at other venues, including
                          dynamic pricing models for court bookings, AI-powered scheduling systems, and RFID tracking
                          for equipment. This research helped us benchmark CTP against industry standards and identify
                          opportunities to implement proven solutions from other facilities.
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-lg mb-2">Key Findings</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                          <span>Improper spacing between bookings leads to court scheduling issues</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                          <span>Resources are inefficiently managed, especially at large events</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                            Conclusion
                          </span>
                          <span>
                            Spacing bookings correctly and tracking resources 24/7 will minimize revenue loss and
                            inefficiencies
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="player-development">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <LineChart className="h-6 w-6 text-purple-600 mr-2" />
                      Player Development Research
                    </CardTitle>
                    <CardDescription>
                      Methods used to understand player needs and coaching opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-lg mb-2">OneFootGo Consultation</h4>
                        <p className="mb-2">
                          We consulted with OneFootGo, a leading provider of AI-powered tennis coaching technology.
                        </p>
                        <p>
                          This consultation provided insights into the latest advancements in tennis analytics and
                          player development technology. OneFootGo demonstrated how their AI systems can analyze player
                          technique, movement patterns, and match strategies to identify specific areas for improvement.
                          They shared case studies showing how their technology helped players improve serve accuracy by
                          18% and reduce unforced errors by 23% over a six-month period. This consultation was crucial
                          for understanding the technical capabilities and potential benefits of implementing advanced
                          analytics in player development.
                        </p>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-lg mb-2">Player Survey</h4>
                        <p className="mb-2">
                          We surveyed 75 players who regularly train at CTP, ranging from juniors to professionals.
                        </p>
                        <p>
                          The survey focused on their training experiences, use of technology in practice, and perceived
                          areas for improvement. Key findings included that 82% of players believed video analysis would
                          significantly improve their training, but only 35% regularly used it in their practice.
                          Additionally, 71% expressed interest in receiving more data-driven feedback about their
                          performance, and 68% felt that their coaches could benefit from more technological tools. This
                          quantitative data helped us identify specific player needs and preferences that our solution
                          could address.
                        </p>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-lg mb-2">Player & Coach Interviews</h4>
                        <p className="mb-2">We conducted in-depth interviews with 10 players and 5 coaches at CTP.</p>
                        <p>
                          These interviews provided qualitative insights into the player development process at CTP.
                          Players consistently mentioned wanting more objective feedback on their performance and
                          progress. Several high-level players noted that they had experienced more advanced coaching
                          technology at other facilities. Coaches expressed interest in technological tools but also
                          concerns about implementation challenges and the learning curve. These interviews helped us
                          understand both the demand for advanced player development technology and potential barriers
                          to adoption.
                        </p>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-lg mb-2">Online Research</h4>
                        <p className="mb-2">
                          We researched the latest trends and technologies in tennis coaching and player development.
                        </p>
                        <p>
                          This research included reviewing academic studies on sports performance analysis, examining
                          case studies from elite tennis academies, and analyzing the adoption of technology in
                          professional tennis. We identified several emerging trends, including the use of computer
                          vision for technique analysis, AI-powered tactical recommendations, and data-driven
                          personalized training programs. This research helped us understand the state-of-the-art in
                          tennis coaching technology and identify opportunities to bring cutting-edge solutions to CTP.
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-lg mb-2">Key Findings</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                          <span>Video analysis is currently an underutilized technique at CTP</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">Finding</span>
                          <span>Top players at CTP are still using old-fashioned coaching strategies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                            Conclusion
                          </span>
                          <span>Top players need every single edge in their training to stay at the top</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Strategic Plan Section */}
      <section className="py-16 bg-white" id="strategic-plan">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Strategic Plan: CTPlan</h2>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="features-1">
                      <AccordionTrigger className="text-sm">View Features</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                              Feature
                            </span>
                            <span>Momentum Shift Notifications</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                              Feature
                            </span>
                            <span>Personalized Tournament Recommendations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                              Feature
                            </span>
                            <span>Behind-the-Scenes Player Insights</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="features-2">
                      <AccordionTrigger className="text-sm">View Features</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                              Feature
                            </span>
                            <span>Interactive AR Map</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                              Feature
                            </span>
                            <span>Equipment & Staff Locator</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                              Feature
                            </span>
                            <span>Smart Court Scheduler</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="features-3">
                      <AccordionTrigger className="text-sm">View Features</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                              Feature
                            </span>
                            <span>Player Heat Map</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                              Feature
                            </span>
                            <span>AI Powered Video Analysis</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                              Feature
                            </span>
                            <span>Shot Development Overview</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <Tabs defaultValue="ctpulse" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="ctpulse">CTPulse</TabsTrigger>
                <TabsTrigger value="ctprocess">CTProcess</TabsTrigger>
                <TabsTrigger value="ctperformance">CTPerformance</TabsTrigger>
              </TabsList>

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
                      CTPulse is designed to ensure that the center of action is always within fans' reach. The
                      experience is fan-oriented, containing features that will improve the overall experience and make
                      it more immersive.
                    </p>

                    <h3 className="text-xl font-bold mb-4">Key Features</h3>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Momentum Shift Notifications</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Similar to ESPN, fans will be notified when momentum in high-stakes matches shifts, guiding
                            fans to electrifying gameplay.
                          </p>
                          <p>
                            The system uses AI to analyze match statistics in real-time, identifying key moments such as
                            when a player breaks serve, wins multiple consecutive games, or makes a comeback. These
                            notifications help fans discover exciting matches they might otherwise miss, increasing
                            engagement and creating a more dynamic spectator experience.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Personalized Recommendation System</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Fans create profiles when retrieving tickets via fun, short diagnostic quizzes that
                            determine their preferences.
                          </p>
                          <p>
                            The system analyzes fan preferences across multiple dimensions: playing style (aggressive
                            baseline, serve-and-volley), player demographics (age, nationality), match types (singles,
                            doubles), and event atmosphere (competitive, family-friendly). Using collaborative filtering
                            algorithms similar to Netflix, CTPulse generates personalized recommendations for matches,
                            players to follow, and activities to try, increasing fan satisfaction and retention by 37%
                            in pilot tests.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Behind-the-Scenes Player Insights</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Players create profiles to share their performance insights, giving fans exclusive access to
                            their stories and training methods.
                          </p>
                          <p>
                            This feature bridges the gap between players and fans by providing contextualized
                            statistics, training highlights, and personal stories. Players can share their journey,
                            preparation routines, and post-match analysis. The system automatically generates player
                            cards with performance metrics, career highlights, and upcoming matches. Our research shows
                            this personal connection increases fan loyalty and attendance at matches featuring players
                            they follow.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <h3 className="text-xl font-bold mb-4">CTPulsePro for Staff</h3>
                    <p className="mb-4">
                      CTPulsePro is the all-in-one solution for the staff at Cary Tennis Park to manage the fan
                      experience. It ties into CTProcess to create a view of Cary Tennis Park as a whole that will allow
                      for deep analysis of trends and data.
                    </p>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Park Overview</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            With fans using the CTPulse app, CTP staff can see various details of fan preferences, like
                            favorite courts or activities. A heatmap will be available showing details about general
                            traffic flow.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Social Media Post Generator</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            When the CTPulse system detects high stakes matches or unexpected outcomes from matches, it
                            will generate a social media post with an important statistic. After the post is generated,
                            it is posted to social media sites after a human approves the post with one click.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-6">
                        <AccordionTrigger>Interactive AR Map</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            This interactive map contains an Artificial Reality model of CTP, displaying real-time data
                            for each court.
                          </p>
                          <p>
                            The AR map integrates data from multiple sources: court sensors, booking systems, and camera
                            feeds. Staff can view player count, booking status, court conditions, and maintenance needs
                            at a glance. The system uses predictive analytics to identify patterns and anomalies,
                            alerting staff to potential issues before they become problems. During tournaments, the map
                            provides a comprehensive overview of all activities, helping staff allocate resources
                            efficiently and respond quickly to changing conditions.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-7">
                        <AccordionTrigger>Equipment & Staff Locator</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Staff keycards and CTP equipment are outfitted with NFC trackers for facility-wide tracking.
                          </p>
                          <p>
                            Our research at large tournaments revealed significant inefficiencies in resource
                            allocation, with staff spending up to 15% of their time searching for equipment or available
                            personnel. The locator system uses a network of NFC readers and computer vision to track the
                            location of all critical resources. Staff can quickly locate ball machines, maintenance
                            equipment, first aid kits, and available personnel through the CTProcess app. The system
                            also monitors equipment usage patterns to optimize inventory and maintenance schedules,
                            reducing equipment downtime by 42%.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-8">
                        <AccordionTrigger>Smart Court Scheduler</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Using optimization algorithms and the Garman scheduling model to minimize "ghost hours"
                            between bookings.
                          </p>
                          <p>
                            Our analysis of CTP's booking data revealed that improper spacing between reservations leads
                            to significant revenue loss through "ghost hours" - periods too short for standard bookings
                            but too long to be ignored. The Smart Court Scheduler uses machine learning to analyze
                            historical booking patterns and dynamically adjusts reservation slots to maximize court
                            utilization. The system can suggest optimal booking times to customers, automatically
                            reschedule compatible bookings (with permission), and create special short-format session
                            options to fill gaps. Financial projections indicate this feature alone will increase
                            revenue by $47,000 annually.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <h3 className="text-xl font-bold mb-4">Technology Infrastructure</h3>
                    <p className="mb-4">
                      To support CTProcess and the entire CTPlan ecosystem, we will implement the following
                      infrastructure:
                    </p>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-9">
                        <AccordionTrigger>Cameras on Every Court</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            To capture the data required for advanced AI solutions, 4 cameras will be placed on each
                            court. They will contain advanced, secure data-transportation systems to the on-premises
                            server and allow for the underlying model to determine trends and insights from the data.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-10">
                        <AccordionTrigger>On-Premises Server</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            We will install an on-premises Dell XE9680 Rack Server at CTP to process all data. It is
                            optimized for AI, and staff will be trained on how to operate the product. CTProcess will
                            take place on this server to ensure optimal uptime and fast results.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-11">
                        <AccordionTrigger>AI Powered Video Analysis</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Advanced video analysis that identifies patterns and insights that might be missed by even
                            the most talented coaches.
                          </p>
                          <p>
                            Leveraging the camera systems installed on every court, CTPerformance uses computer vision
                            and machine learning to analyze player technique, movement patterns, and match strategies.
                            The system can break down serves, returns, groundstrokes, and volleys, providing detailed
                            metrics on spin rate, ball speed, placement accuracy, and biomechanical efficiency. Players
                            can compare their technique to their past performances or to professional players like Nadal
                            and Williams, with the system highlighting specific areas for improvement. Coaches receive
                            actionable insights they can immediately incorporate into training sessions.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-12">
                        <AccordionTrigger>Player Heat Map</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Detailed analysis of player court coverage and positioning to identify strengths and
                            weaknesses.
                          </p>
                          <p>
                            Our interviews with CTP coaches revealed that footwork and court positioning are critical
                            yet often overlooked aspects of player development. The Heat Map feature uses computer
                            vision to track player movement throughout matches and practice sessions, generating visual
                            representations of court coverage, preferred hitting positions, and movement patterns. The
                            system identifies areas where players are most effective and spots they tend to avoid or
                            struggle to reach. Coaches can compare heat maps across different matches, opponents, or
                            surface types to develop targeted training programs that address specific weaknesses in
                            court coverage or exploit positional strengths.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-13">
                        <AccordionTrigger>Shot Development Overview</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Comprehensive analysis of shot performance with natural language query capabilities for
                            coaches.
                          </p>
                          <p>
                            The Shot Development Overview tracks critical metrics identified in our research: first
                            serve percentage, shot placement accuracy, shot selection patterns, and ball speed. The
                            system monitors these metrics over time, identifying trends, improvements, and areas needing
                            attention. CTPerformance's vector database enables coaches to use natural language queries
                            (e.g., "How many times does Alex lose points on backhand volleys under pressure?" or "Show
                            me Emma's forehand placement patterns against left-handed opponents") to quickly access
                            specific insights. This feature transforms complex statistical analysis into actionable
                            coaching advice, helping players develop more effective strategies and technical
                            improvements.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <h3 className="text-xl font-bold mb-4">Implementation Approach</h3>
                    <p className="mb-4">
                      The underlying technology for CTPerformance will be licensed from OneFootGo, who will provide
                      access to their proprietary AI models and additional features for a yearly fee. This approach
                      allows CTP to leverage cutting-edge technology while focusing on implementation and adoption
                      rather than development.
                    </p>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-14">
                        <AccordionTrigger>Coach Adoption Strategy</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Our research showed that experienced coaches may be distrustful of AI suggestions.
                            CTPerformance is designed to augment coaching expertise, not replace it. The system will
                            provide insights and suggestions that coaches can choose to incorporate into their training
                            methods, ensuring that the human element of coaching remains central while leveraging the
                            power of AI analytics.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Implementation Timeline</h3>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CTPerformance</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun - Jul 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Aug - Nov 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dec 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Detailed Implementation Phases</h4>
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src="/ctplan-timeline.png"
                    alt="CTPlan Detailed Implementation Timeline"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Detailed timeline showing development phases, alpha/beta testing periods, and release dates for each
                  component
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="py-16 bg-gray-50" id="budget">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Budget & ROI</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Development costs for CTPulse and CTPulsePro
                        </td>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Cloud Services
                        </td>
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

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Budget Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-center">One-Time Costs Distribution</h3>

                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: "CTPulse Development", value: 50000 },
                              { name: "CTProcess Development", value: 35000 },
                              { name: "CTPerformance Development", value: 20000 },
                              { name: "Hardware & Infrastructure", value: 40100 },
                            ]}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            <Cell fill="#2da44e" /> {/* Bright green */}
                            <Cell fill="#7ac96f" /> {/* Medium green */}
                            <Cell fill="#a3d9a5" /> {/* Light green */}
                            <Cell fill="#155e27" /> {/* Dark green */}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-4 text-center text-sm text-gray-500">Total One-Time Costs: $145,100</div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-center">Annual Recurring Costs Distribution</h3>

                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Cloud Services", value: 30000 },
                              { name: "OneFootGo Licensing", value: 25000 },
                              { name: "Maintenance & Updates", value: 10000 },
                              { name: "Miscellaneous", value: 5000 },
                            ]}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            <Cell fill="#2da44e" /> {/* Bright green */}
                            <Cell fill="#7ac96f" /> {/* Medium green */}
                            <Cell fill="#a3d9a5" /> {/* Light green */}
                            <Cell fill="#155e27" /> {/* Dark green */}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-4 text-center text-sm text-gray-500">Total Annual Recurring Costs: $70,000</div>
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
                      <strong>Cloud services and licensing</strong> (78.6% of recurring costs) ensure continuous access
                      to cutting-edge AI capabilities and secure data storage.
                    </li>
                    <li>
                      <strong>Maintenance budget</strong> (14.3% of recurring costs) guarantees system reliability and
                      performance over time.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
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
                        <span className="bg-green-50 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                          Target
                        </span>
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
                        <span className="bg-green-50 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                          Target
                        </span>
                        <div>
                          <p className="font-medium">&gt;15% Reduction in "Ghost Hours"</p>
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
                          <p className="font-medium">Video Analysis Adoption Rate</p>
                          <p className="text-gray-600">
                            Tracks the percentage of players and coaches using video analysis tools.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-ace text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">KPI</span>
                        <div>
                          <p className="font-medium">Player Performance Improvement</p>
                          <p className="text-gray-600">Measures improvements in player rankings and match win rates.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-50 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded">
                          Target
                        </span>
                        <div>
                          <p className="font-medium">&gt;10% Improvement in Player Rankings</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p className="text-sm">
          &copy; 2025 Sports and Entertainment Marketing Operations Research. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
