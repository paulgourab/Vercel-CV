import Header from './components/Header'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import CertificateSlider from './components/CertificateSlider' // Update: Import statement

export default function Home() {
  const featuredCertificates = [
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "June 2024",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/az_104.JPG-FarW7xUVB3pdMFLMhKdd8qpVj1L9aU.jpeg"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "September 2023",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture4.JPG-eaEbp3jNHUVjrpXIUPVubq4kDS3e4w.jpeg"
    },
    {
      title: "Git and GitHub",
      issuer: "365 Data Science",
      date: "November 2022",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git.jpg-ecvB8GaydN4ReBWQQaz6M3yLV3NabC.jpeg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Header />
          <div className="p-6 space-y-8">
            <Summary />
            <Experience />
            <Education />
            <Skills />
            <CertificateSlider certificates={featuredCertificates} /> {/* Update: Removed separate section for Featured Certifications */}
          </div>
        </div>
      </div>
    </div>
  )
}

