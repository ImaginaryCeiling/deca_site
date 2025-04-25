import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocumentsPage() {
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

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Case Study Documents</h1>

          <div className="space-y-4">
            <div className="flex items-center p-4 bg-white rounded-lg shadow">
              <FileText className="h-8 w-8 text-green-600 mr-4" />
              <div className="flex-1">
                <h3 className="font-semibold">Full Case Study Report</h3>
                <p className="text-sm text-gray-500">Sports and Entertainment Marketing Operations Research</p>
              </div>
              <Button asChild variant="outline">
                <a
                  href="https://deca2025.s3.us-east-1.amazonaws.com/SEOR_NC_Chauhan_Nawal_WE.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHbFvGx0C1txFbHIKg%2FH3fHNzXOL8EVvcz%2F4y5PMEp%2FyAiEAjI5pyaU7HXynlzE8CPZkSsjpRwF6gCSuUMsNKeqbnksquQMILhAAGgwwMTA1MjYyODE4MDIiDAMyA%2BeFkElATQl3CCqWA28pBd3u6rNq8XXyERbOv2CHs77Fw9UpX1oIZwE5elOr6yVZ93Us8UyMc8Lm1Zbz%2BApyxMvUSHewnqs2%2FH89wQn8YFjy8JDBC1XePfoM33r55qJ3IkLaBLDr2Qp5znhL2mqdQzq78w3J8TOUHw3POVHuB6GrHMAvNaj9qB4%2BHNbdujh7M%2BGgkUnPg1RjJd%2B3UhIZ%2FH3YQtmkicUz6%2BGP2ltxo9tS4rhN%2FKTcqkhAMuCys5%2BhNHOvrGkvuHhf2wlp%2B7nstFlTfqmLYZHLAom2sFdWq3CS8Ldg%2Bp0xqk%2BZ8t8Tn%2FdLZNriKbfTMVcbyuZ%2BNeEpYGoexEZzEn3I4I8KSIh3TBD4RwhdKpgdDDq5pD232WfVEx7AC1N8iGXG0vLXDXhf4AB4mb19vnWBPe%2B8rTqsgkKGZqZESBM3HlB0HXkGiDe%2FNKOY2gw%2F8RHtMumqH63bI%2BSi6NMxPS1vFd%2BgqaG%2FNqxTDyVJmqxT6cTenk4uR9BHT6hEhl2pfcazMT26P%2Fawwj8pMaVNaBCQZYuT7WSSayfNt%2BowqI2uwAY63gIsYtXbLm9rr5MClsHv4tOcxFDUSdJJoyHqebFwhPAWdPloACxQiWMHsdeZUHTluh5VZRjjsP6Ha1XElAXVrVL55EDUS%2FL262wJgb%2F%2BIcZ3WbgeSoqYhGuzx%2FV47zJC13eX8QW69uI7rF9cDNxcU5P20yHU%2Bq5%2B7Ug22%2FgzBwdlQ1FxlpXSu27SKJe%2BGDnz7PgAbTSg815r3KbzPR4jwMkxZcYgfJ%2BDx5dlzY2TU6z0%2BerhMFwHv779L%2B9%2Fos0WFFVmF35z4JznMe0dYAMWig25tNEQ4DFCZ0F7zrGTyVC4bwTHoPsisGe6cXLIeSdVajkSlbO%2BrfPiB3G%2B1Si0ggj4KWoSvlV9m864N83gleDI7XoE8IU5F3oxSrfaCHo3eeeIVlNW5njAP%2Fxa91qw7%2B7s2byRiigph31uunaUNty1ALC2ahRh4EshSdjxFG5hPDGgc80U8vXmkcIttBYVKg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQE43KKBFEBBUATQ2%2F20250425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250425T130706Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=314ca0e858ecba81dec922814c9bd2e75f83318a0314147c82c493c746d872ad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PDF
                </a>
              </Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">About This Case Study</h2>
              <p className="text-gray-700 mb-4">
                This case study presents a comprehensive analysis of Cary Tennis Park and proposes an AI-powered
                strategic plan (CTPlan) to enhance fan experience, operations management, and player development.
              </p>
              <p className="text-gray-700 mb-4">
                The research was conducted using the ACE framework (Actionable, Credible, Engaging) to ensure that all
                findings and recommendations are practical, reliable, and impactful.
              </p>
              <p className="text-gray-700">
                The proposed solution includes three main components: CTPulse for fan engagement, CTProcess for
                operations optimization, and CTPerformance for player development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
