import { ArrowRight, Plus } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/1.webp"
          alt="Modern architectural building"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-tight mb-8 text-balance">
            Find the Right Property, Made Simple.
          </h1>

          {/* Intro paragraph removed per design */}

          <Button variant="pill" className="h-16 pl-8 pr-2 inline-flex items-center gap-5 text-lg font-medium">
            <span>Explore Properties</span>
            <span className="inline-flex items-center justify-center bg-black text-white rounded-full w-12 h-12">
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>

        {/* Right Content - Stats Card */}
        <div className="hidden lg:flex justify-end">
          <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-sm">
            <p className="text-white/80 text-sm mb-4">
              <span className="inline-flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Smart Living Starts Here
              </span>
            </p>
            <p className="text-white text-base leading-relaxed">
              Discover premium residential and commercial properties tailored to your lifestyle and budget. We make buying, selling.
            </p>
          </div>
        </div>
      </div>


    </section>
  )
}
