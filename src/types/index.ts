// Types for Mutiara Kost website

export interface NavLink {
  href: string
  label: string
  icon: 'whatsapp' | 'location'
  variant: 'primary' | 'secondary'
}

export interface UnitFeature {
  title: string
  description: string
}

export interface Unit {
  id: string
  label: string
  type: 'kamar' | 'kontrakan'
  size: string
  bathroomInfo: string
  features: UnitFeature[]
}

export interface GallerySlide {
  images: GalleryImage[]
  badge: string
  captionPrefix: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface PricingFeature {
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface LocationPoint {
  title: string
  subtitle: string
  colorClass: string
  iconColor: string
  svgPath: string
}
