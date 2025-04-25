import Link from "next/link"
import { ArrowLeft, ImageIcon, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MediaPage() {
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
          <h1 className="text-3xl font-bold mb-8 text-center">Media Gallery</h1>

          <Tabs defaultValue="images" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="images" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" /> Images
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" /> Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="images">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                      src={`/placeholder.svg?height=300&width=400&query=business case study image ${i + 1}`}
                      alt={`Case Study Image ${i + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">Research Image {i + 1}</h3>
                      <p className="text-gray-600">Description of the research image and its significance</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <Video className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">Case Study Video {i + 1}</h3>
                      <p className="text-gray-600 mb-4">Description of the video content and key insights</p>
                      <Button variant="outline" className="w-full">
                        Watch Video
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
