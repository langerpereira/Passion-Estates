export function FixedNav() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden sm:flex gap-4 bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
      <a href="#" className="text-white hover:text-white/70 text-sm font-medium transition-colors">Home</a>
      <a href="#" className="text-white hover:text-white/70 text-sm font-medium transition-colors">About Us</a>
      <a href="#" className="text-white hover:text-white/70 text-sm font-medium transition-colors">Properties</a>
      <a href="#" className="text-white hover:text-white/70 text-sm font-medium transition-colors">Services</a>
      <a href="#" className="text-white hover:text-white/70 text-sm font-medium transition-colors">Blog</a>
    </nav>
  )
}
