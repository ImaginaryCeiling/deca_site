"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl text-green-800">SEOR - Cary Tennis Park</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#research"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Research
            </Link>
            <Link
              href="#strategic-plan"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Strategic Plan
            </Link>
            <a
              href="https://deca2025.s3.us-east-1.amazonaws.com/SEOR_NC_Chauhan_Nawal_WE.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHbFvGx0C1txFbHIKg%2FH3fHNzXOL8EVvcz%2F4y5PMEp%2FyAiEAjI5pyaU7HXynlzE8CPZkSsjpRwF6gCSuUMsNKeqbnksquQMILhAAGgwwMTA1MjYyODE4MDIiDAMyA%2BeFkElATQl3CCqWA28pBd3u6rNq8XXyERbOv2CHs77Fw9UpX1oIZwE5elOr6yVZ93Us8UyMc8Lm1Zbz%2BApyxMvUSHewnqs2%2FH89wQn8YFjy8JDBC1XePfoM33r55qJ3IkLaBLDr2Qp5znhL2mqdQzq78w3J8TOUHw3POVHuB6GrHMAvNaj9qB4%2BHNbdujh7M%2BGgkUnPg1RjJd%2B3UhIZ%2FH3YQtmkicUz6%2BGP2ltxo9tS4rhN%2FKTcqkhAMuCys5%2BhNHOvrGkvuHhf2wlp%2B7nstFlTfqmLYZHLAom2sFdWq3CS8Ldg%2Bp0xqk%2BZ8t8Tn%2FdLZNriKbfTMVcbyuZ%2BNeEpYGoexEZzEn3I4I8KSIh3TBD4RwhdKpgdDDq5pD232WfVEx7AC1N8iGXG0vLXDXhf4AB4mb19vnWBPe%2B8rTqsgkKGZqZESBM3HlB0HXkGiDe%2FNKOY2gw%2F8RHtMumqH63bI%2BSi6NMxPS1vFd%2BgqaG%2FNqxTDyVJmqxT6cTenk4uR9BHT6hEhl2pfcazMT26P%2Fawwj8pMaVNaBCQZYuT7WSSayfNt%2BowqI2uwAY63gIsYtXbLm9rr5MClsHv4tOcxFDUSdJJoyHqebFwhPAWdPloACxQiWMHsdeZUHTluh5VZRjjsP6Ha1XElAXVrVL55EDUS%2FL262wJgb%2F%2BIcZ3WbgeSoqYhGuzx%2FV47zJC13eX8QW69uI7rF9cDNxcU5P20yHU%2Bq5%2B7Ug22%2FgzBwdlQ1FxlpXSu27SKJe%2BGDnz7PgAbTSg815r3KbzPR4jwMkxZcYgfJ%2BDx5dlzY2TU6z0%2BerhMFwHv779L%2B9%2Fos0WFFVmF35z4JznMe0dYAMWig25tNEQ4DFCZ0F7zrGTyVC4bwTHoPsisGe6cXLIeSdVajkSlbO%2BrfPiB3G%2B1Si0ggj4KWoSvlV9m864N83gleDI7XoE8IU5F3oxSrfaCHo3eeeIVlNW5njAP%2Fxa91qw7%2B7s2byRiigph31uunaUNty1ALC2ahRh4EshSdjxFG5hPDGgc80U8vXmkcIttBYVKg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQE43KKBFEBBUATQ2%2F20250425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250425T130706Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=314ca0e858ecba81dec922814c9bd2e75f83318a0314147c82c493c746d872ad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Full Paper
            </a>
            <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
              <Link href="mailto:team@example.com">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="#research"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              href="#strategic-plan"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Strategic Plan
            </Link>
            <a
              href="https://deca2025.s3.us-east-1.amazonaws.com/SEOR_NC_Chauhan_Nawal_WE.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHbFvGx0C1txFbHIKg%2FH3fHNzXOL8EVvcz%2F4y5PMEp%2FyAiEAjI5pyaU7HXynlzE8CPZkSsjpRwF6gCSuUMsNKeqbnksquQMILhAAGgwwMTA1MjYyODE4MDIiDAMyA%2BeFkElATQl3CCqWA28pBd3u6rNq8XXyERbOv2CHs77Fw9UpX1oIZwE5elOr6yVZ93Us8UyMc8Lm1Zbz%2BApyxMvUSHewnqs2%2FH89wQn8YFjy8JDBC1XePfoM33r55qJ3IkLaBLDr2Qp5znhL2mqdQzq78w3J8TOUHw3POVHuB6GrHMAvNaj9qB4%2BHNbdujh7M%2BGgkUnPg1RjJd%2B3UhIZ%2FH3YQtmkicUz6%2BGP2ltxo9tS4rhN%2FKTcqkhAMuCys5%2BhNHOvrGkvuHhf2wlp%2B7nstFlTfqmLYZHLAom2sFdWq3CS8Ldg%2Bp0xqk%2BZ8t8Tn%2FdLZNriKbfTMVcbyuZ%2BNeEpYGoexEZzEn3I4I8KSIh3TBD4RwhdKpgdDDq5pD232WfVEx7AC1N8iGXG0vLXDXhf4AB4mb19vnWBPe%2B8rTqsgkKGZqZESBM3HlB0HXkGiDe%2FNKOY2gw%2F8RHtMumqH63bI%2BSi6NMxPS1vFd%2BgqaG%2FNqxTDyVJmqxT6cTenk4uR9BHT6hEhl2pfcazMT26P%2Fawwj8pMaVNaBCQZYuT7WSSayfNt%2BowqI2uwAY63gIsYtXbLm9rr5MClsHv4tOcxFDUSdJJoyHqebFwhPAWdPloACxQiWMHsdeZUHTluh5VZRjjsP6Ha1XElAXVrVL55EDUS%2FL262wJgb%2F%2BIcZ3WbgeSoqYhGuzx%2FV47zJC13eX8QW69uI7rF9cDNxcU5P20yHU%2Bq5%2B7Ug22%2FgzBwdlQ1FxlpXSu27SKJe%2BGDnz7PgAbTSg815r3KbzPR4jwMkxZcYgfJ%2BDx5dlzY2TU6z0%2BerhMFwHv779L%2B9%2Fos0WFFVmF35z4JznMe0dYAMWig25tNEQ4DFCZ0F7zrGTyVC4bwTHoPsisGe6cXLIeSdVajkSlbO%2BrfPiB3G%2B1Si0ggj4KWoSvlV9m864N83gleDI7XoE8IU5F3oxSrfaCHo3eeeIVlNW5njAP%2Fxa91qw7%2B7s2byRiigph31uunaUNty1ALC2ahRh4EshSdjxFG5hPDGgc80U8vXmkcIttBYVKg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQE43KKBFEBBUATQ2%2F20250425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250425T130706Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=314ca0e858ecba81dec922814c9bd2e75f83318a0314147c82c493c746d872ad"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Full Paper
            </a>
            <div className="pt-2">
              <Button asChild size="sm" className="w-full bg-green-600 hover:bg-green-700">
                <Link href="mailto:team@example.com" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
