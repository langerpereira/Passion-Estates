import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="relative rounded-2xl overflow-hidden">
        <div className="h-102 md:h-80 lg:h-140 relative">
          <Image src="/image2.jpg.webp" alt="footer background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />

          {/* translucent top strip */}
          <div className="absolute inset-x-6 top-6">
            <div className="bg-black/15 backdrop-blur-md rounded-lg border border-white/12 p-4 flex items-start justify-between text-white">
              <div className="max-w-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-white">
                      <path d="M3 9.5v6A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 9.5V6a5 5 0 0 1 10 0v3.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">Passion Estates</div>
                    <div className="text-sm text-white/70">Stay updated with the latest real estate trends, market insights, and expert tips to help you make smarter property decisions.</div>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-white/70">Address</div>
                <div className="text-white">123 Main Street, Sylhet, Bangladesh</div>
              </div>
            </div>
          </div>

          {/* subscribe + links */}
          <div className="absolute inset-x-8 top-28 md:top-32 lg:top-36">
            <div className="flex flex-col lg:flex-row lg:items-center items-start gap-6">
              <div className="flex-1 max-w-xl text-white">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">Subscribe for market updates & property tips.</h3>
                <div className="flex items-center gap-3 mt-4 w-full">
                  <input placeholder="Enter your email" className="h-10 rounded-full px-4 bg-white/90 text-slate-900 placeholder:text-slate-500 outline-none min-w-0 flex-1" />
                  <Button className="h-10 px-4 rounded-full inline-flex items-center gap-3">
                    <span>Learn More</span>
                    <span className="inline-flex items-center justify-center bg-black text-white rounded-full w-8 h-8">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-3 gap-6 text-white">
                <div>
                  <h4 className="font-semibold mb-3">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Properties</li>
                    <li>Services</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Properties</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>Buy a Home</li>
                    <li>Rent a Home</li>
                    <li>Luxury Villas</li>
                    <li>New Listings</li>
                    <li>FAQs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Resources</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>Blog & Insights</li>
                    <li>Buying Guide</li>
                    <li>Selling Guide</li>
                    <li>Market Insights</li>
                    <li>Investment Tips</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* giant logo */}
          <div className="absolute left-0 right-0 bottom-4 flex items-center justify-center pointer-events-none">
            <div className="text-white/60 text-[96px] md:text-[110px] lg:text-[140px] font-semibold tracking-tight select-none">Passion Estates</div>
          </div>
        </div>
      </div>

      {/* bottom bar removed per design — keep minimal spacing */}
    </footer>
  )
}
