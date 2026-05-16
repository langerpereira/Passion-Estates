import Image from 'next/image'
import { Home, Users, DollarSign, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SERVICES = [
  {
    icon: Home,
    title: 'Property Buying Assistance',
    desc: 'We help you find the perfect home or investment property with expert guidance.',
  },
  {
    icon: Building,
    title: 'Property Selling Solutions',
    desc: 'From pricing to promotion, we ensure your property sells faster and at the best value.',
  },
  {
    icon: Users,
    title: 'Rental & Leasing Services',
    desc: 'Discover reliable tenants or ideal rental homes with our hassle-free leasing support.',
  },
  {
    icon: DollarSign,
    title: 'Property Management',
    desc: 'End-to-end property care, including maintenance, rent collection, and tenant support.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="h-170 sm:h-185 lg:h-170 relative">
            <Image src="/image.png" alt="services" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />

            {/* Title left */}
            <div className="absolute left-8 top-12 md:top-16 max-w-2xl text-left text-white z-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-regular leading-tight mb-4">Professional Real Estate Services</h2>
            </div>

            {/* Blurb & button top-right */}
            <div className="absolute right-8 top-12 md:top-16 max-w-sm text-right text-white hidden sm:block z-20">
              <p className="text-sm mb-6 font-normal">We offer end-to-end real estate services designed to simplify buying, selling, and managing properties.</p>
              <Button variant="pill" className="h-11 px-2 pl-6 pr-1 gap-3 inline-flex items-center">
                <span>Learn More</span>
                <span className="inline-flex items-center justify-center bg-black text-white rounded-full w-9 h-9 flex-none shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 flex-none">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </div>

            {/* Cards overlay */}
            <div className="absolute left-0 right-0 bottom-14 md:bottom-16 px-6 md:px-12 z-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                  {SERVICES.map((s, idx) => {
                    const Icon = s.icon
                    const translate = ['translate-y-8', '-translate-y-8', 'translate-y-8', '-translate-y-8']
                    const minHeights = ['min-h-[220px]', 'min-h-[280px]', 'min-h-[240px]', 'min-h-[220px]']
                    return (
                      <div
                        key={s.title}
                        className={`w-full ${minHeights[idx]} ${translate[idx]} bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-white shadow-2xl flex flex-col justify-between`}
                      >
                        <div>
                          <div className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center mb-6">
                            <Icon className="w-5 h-5 text-white/90" />
                          </div>
                          <h3 className="text-lg font-medium mb-3">{s.title}</h3>
                          <p className="text-sm text-white/80 leading-relaxed font-normal">{s.desc}</p>
                        </div>

                        <div className="flex items-center justify-start opacity-90 mt-4">
                          <span className="text-2xl">{/* decorative icon space */}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
