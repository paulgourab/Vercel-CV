import { Code } from 'lucide-react'

export default function Skills() {
  const skills = [
    { 
      category: "Cloud Platforms", 
      items: [
        { name: "AWS" },
        { name: "AZURE" },
        { name: "GOOGLE CLOUD" }
      ]
    },
     { 
      category: "DevOps", 
      items: [
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "Ansible" },
        { name: "Terraform" },
        { name: "Jenkins" },
      ]
    },
    { 
      category: "Operating Systems", 
      items: [
        { name: "Windows 10/11" },
        { name: "Linux" },
        { name: "Windows Server" }
      ]
    },
    { 
      category: "Productivity Suites", 
      items: [
        { name: "Microsoft 365" },
        { name: "Google Workspace" }
      ]
    },
    { 
      category: "Programming & Databases", 
      items: [
        { name: "Python" },
        { name: "Java" },
        { name: "Go" },
        { name: "SQL" }
      ]
    },
    { 
      category: "Languages", 
      items: [
        { name: "Bangla" },
        { name: "English" }
      ]
    }
  ]

  return (
    <section id="skills">
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-6 h-6 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
      </div>
      <div className="space-y-6">
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-teal-700 mb-2">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-4">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="text-sm text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

