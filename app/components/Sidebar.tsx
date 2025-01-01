import Link from 'next/link'
import { FileText, Briefcase, GraduationCap, Code, Award } from 'lucide-react'

export default function Sidebar() {
  const sections = [
    { icon: FileText, label: 'Summary', href: '#summary' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: GraduationCap, label: 'Education', href: '#education' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: Award, label: 'Certifications', href: '#certifications' },
  ]

  return (
    <div className="w-16 fixed left-0 top-0 h-full bg-teal-600 flex flex-col items-center py-8 space-y-8">
      {sections.map((section, index) => (
        <Link key={index} href={section.href} className="text-white hover:text-teal-200 transition-colors">
          <section.icon size={24} />
          <span className="sr-only">{section.label}</span>
        </Link>
      ))}
    </div>
  )
}

