import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-6 h-6 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
      </div>
      <div>
        <h3 className="text-xl font-semibold">System Integration Engineer</h3>
        <p className="text-gray-600">Attrabit ICT Solution | June 2023 - Present | Baridhara, Dhaka</p>
        <ul className="list-disc list-inside mt-2">
          <li>Configured and managed Cisco Switches, Routers, Firewalls, Access Points, and Windows Server for seamless office connectivity.</li>
          <li>Deployed and maintained Linux servers on AWS EC2 and Azure Virtual Machines, supporting web app hosting and secure network gateways.</li>
          <li>Monitored network operations, and resolved connectivity issues.</li>
          <li>Managed web servers (Apache, Nginx, Tomcat) and utilized Cloudflare, GoDaddy, and NameCheap to enhance hosting performance and security.</li>
          <li>Documented device specifications and software license pricing for Dell, HP, Cisco, and Windows as per client requirements.</li>
          <li>Enhanced operational efficiency by researching cost-effective solutions and enhancing IT strategies.</li>
        </ul>
      </div>
    </section>
  )
}

