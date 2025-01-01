import { Mail, Phone, Linkedin, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/50">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gourab.jpg-Mq3XsqfTcMgMj3rok8yU7hz07GfTNz.jpeg"
              alt="Gourab Paul"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Gourab Paul</h1>
            <p className="text-xl opacity-90">System Integration Engineer</p>
            <p className="mt-2 max-w-xl text-sm text-teal-50">
              Experienced System Integration Engineer specializing in network infrastructure, cloud computing, and IT solutions.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="mb-4">
            <Link 
              href="/certificates" 
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              Certifications
            </Link>
          </div>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Dhaka, Bangladesh
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> paulgourab399@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> 01641985868
          </p>
          <a 
            href="https://www.linkedin.com/in/gourab-kanti-paul-901498210" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-teal-100"
          >
            <Linkedin className="w-4 h-4" /> 
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  )
}

