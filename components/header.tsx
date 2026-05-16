import { Home, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 text-white font-bold text-xl">
          <Home className="w-6 h-6 text-white" />
          <span>Passion Estates</span>
        </Link>

        {/* Contact Button */}
        <Button variant="pill" className="h-12 pl-7 pr-2 inline-flex items-center gap-4 text-lg font-medium">
          <span>Contact us</span>
          <span className="inline-flex items-center justify-center bg-black text-white rounded-full w-10 h-10">
            <ArrowRight className="w-5 h-5" />
          </span>
        </Button>
      </div>
    </header>
  )
}
