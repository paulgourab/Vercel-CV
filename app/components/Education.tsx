import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-6 h-6 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-800">Education</h2>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Science (BSc) Engg. Computer Science & Engineering</h3>
          <p className="text-gray-600">Bangladesh University of Business and Technology | 2022</p>
          <p className="text-gray-700">CGPA: 3.15 out of 4</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">HSC Science</h3>
          <p className="text-gray-600">Gopalpur Degree College | 2016</p>
          <p className="text-gray-700">GPA: 5 out of 5</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">SSC Science</h3>
          <p className="text-gray-600">Suti V.M Pilot Model Govt. High School | 2014</p>
          <p className="text-gray-700">GPA: 5 out of 5</p>
        </div>
      </div>
    </section>
  )
}

