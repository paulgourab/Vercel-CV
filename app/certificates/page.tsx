import Navigation from '../components/Navigation'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function Certificates() {
  const certificates = [
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "June 2024",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/az_104.JPG-FarW7xUVB3pdMFLMhKdd8qpVj1L9aU.jpeg"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "AWS",
      date: "September 2023",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture4.JPG-eaEbp3jNHUVjrpXIUPVubq4kDS3e4w.jpeg"
    },
    {
      title: "Git and GitHub",
      issuer: "365 Data Science",
      date: "November 2022",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git.jpg-ecvB8GaydN4ReBWQQaz6M3yLV3NabC.jpeg"
    },
    {
      title: "Linux Shell Scripting for DevOps",
      issuer: "Coursera",
      date: "September 2023",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture3.JPG-9poyRcRrp4pauUuBsJcntw12WdEVGE.jpeg"
    },
    {
      title: "UX Design Foundations",
      issuer: "Google",
      date: "September 2023",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture5.JPG-B5LtRshR2Gc9SkdygFHiA6b6izV28i.jpeg"
    },
    {
      title: "SOC Analyst Level 1",
      issuer: "Cybrary",
      date: "August 2023",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.JPG-hDidPI4zyM0uL7L0VNLKmxILKrnYXI.jpeg"
    },
    {
      title: "Programming Foundations",
      issuer: "LinkedIn",
      date: "April 2022",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1650317879211-KsjKnLzi70kbyGLcSSGRFkRZhZVqfl.png"
    },
    {
      title: "Wireshark for Network Security",
      issuer: "Coursera",
      date: "September 2023",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture2.JPG-pA5giZx3Fr9YBzRUjhc0dhJLjoCLa9.jpeg"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "November 2023",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture7.JPG-HRz4dlD9BEX1UxNbwUNm88uvVPgrMW.jpeg"
    },
    {
      title: "Network Addressing and Troubleshooting",
      issuer: "Cisco",
      date: "November 2023",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture6.JPG-3UOEpzsUsD5bI9GIqvKi9B3E5s9xxL.jpeg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Resume
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Professional Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 bg-gradient-to-br from-teal-50 to-white">
                  <h2 className="font-semibold text-gray-800">{cert.title}</h2>
                  <p className="text-sm text-teal-600">{cert.issuer} • {cert.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

