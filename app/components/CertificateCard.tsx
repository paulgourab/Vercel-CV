import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  imageUrl: string
}

export default function CertificateCard({ title, issuer, date, imageUrl }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{issuer}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </CardContent>
    </Card>
  )
}

