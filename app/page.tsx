import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { PropertiesSection } from '@/components/properties-section'
import { TestimonialSection } from '@/components/testimonial-section'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { FixedNav } from '@/components/fixed-nav'

export default function Home() {
  return (
    <>
      <Header />
      <FixedNav />
      <main className="pt-0">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <PropertiesSection />
        <TestimonialSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
