import Image from 'next/image'

export function PropertiesSection() {
  const properties = [
    {
      image: '/property-modern-yellow.jpg',
      type: '3 Beds / 2 Baths / 1500 sqft',
      title: 'Modern Family Apartment',
      location: 'New York City',
      price: '$500,000',
    },
    {
      image: '/property-modern-interior.jpg',
      type: '3 Beds / 2 Baths / 1500 sqft',
      title: 'Modern Family Apartment',
      location: 'Los Angeles',
      price: '$850,000',
    },
    {
      image: '/property-modern-blue.jpg',
      type: '3 Beds / 2 Baths / 1500 sqft',
      title: 'Modern Family Apartment',
      location: 'New York City',
      price: '$400,000',
    },
    {
      image: '/property-sunset.jpg',
      type: '4 Beds / 3 Baths / 2200 sqft',
      title: 'Contemporary Residence',
      location: 'San Francisco',
      price: '$620,000',
    },
    {
      image: '/property-landscape.jpg',
      type: '5 Beds / 4 Baths / 3500 sqft',
      title: 'Luxury Mountain Home',
      location: 'Denver',
      price: '$920,000',
    },
    {
      image: '/property-modern-yellow.jpg',
      type: '2 Beds / 1.5 Bath / 950 sqft',
      title: 'Cozy Downtown Loft',
      location: 'Chicago',
      price: '$400,000',
    },
  ]

  return (
    <section id="properties" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4 text-balance">
            Premium Property Collection
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover a handpicked selection of properties designed to match your lifestyle, budget, and investment goals, from modern apartments to premium villas, each listing offers verified details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-[22px] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-80 sm:h-96 overflow-hidden bg-muted">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent" />

                <div className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1.5 text-[12px] font-medium text-slate-600 shadow-sm">
                  {property.type}
                </div>
              </div>

              <div className="border-t border-black/5 bg-white px-4 py-2.5">
                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-slate-700 leading-tight mb-1 truncate group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <span className="inline-block h-4 w-4 rounded-full border border-slate-400/70" />
                      {property.location}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm">
                    {property.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
