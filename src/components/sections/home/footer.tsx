import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-200 p-8 text-black">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">ITC TALKS</h2>
            <nav className="space-y-2">
              <div>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </div>
              <div>
                <Link href="#about" className="text-sm hover:underline">
                  About
                </Link>
              </div>
              <div>
                <Link href="#agenda" className="text-sm hover:underline">
                  Agenda
                </Link>
              </div>
              <div>
                <Link href="#speakers" className="text-sm hover:underline">
                  Speakers
                </Link>
              </div>
            </nav>
          </div>
          <div className="text-xs text-gray-600">© 2025 Copyright ITC Talks. All rights reserved.</div>
        </div>

        <div className="bg-blue-600 p-8 text-white">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">EVENT LOCATION</h2>
            <p className="text-sm">Auditorium, Saad Dahlab University</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">FOLLOW US</h2>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">POWERED BY</h2>
            <div className="text-2xl font-bold">ITC</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

