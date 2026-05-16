import { Star } from 'lucide-react'
import Image from 'next/image'

export function TestimonialSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Trusted by Homeowners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our clients love working with us. Here&apos;s what they have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              &quot;Finding my dream home was incredibly easy with Homefy. The team was professional and helped me every step of the way.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/jpg?seed=person1"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Homeowner, NYC</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              &quot;Excellent service and attention to detail. I sold my property in record time thanks to their marketing expertise.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/jpg?seed=person2"
                  alt="Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Real Estate Investor, CA</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              &quot;The team&apos;s market knowledge and honesty set them apart. I trust their advice and recommendations completely.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/jpg?seed=person3"
                  alt="Emily Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">Emily Rodriguez</p>
                <p className="text-sm text-muted-foreground">First-Time Buyer, TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
