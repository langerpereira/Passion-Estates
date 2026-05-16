"use client"

import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function AboutSection() {
  const stats = [
    { number: '8+', label: 'Years of Experience' },
    { number: '700+', label: 'Happy Clients' },
    { number: '300+', label: 'Properties Sold' },
    { number: '80+', label: 'Expert Agents' },
  ]

  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    gsap.registerPlugin(ScrollTrigger)
    const elems = containerRef.current.querySelectorAll<HTMLElement>('.reveal')
    elems.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.05 * i,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-4 reveal">About Us</p>
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-8 max-w-3xl mx-auto text-balance reveal">
            We are a modern real estate platform committed to helping people find spaces they truly belong in, from first-time buyers to seasoned investors,{' '}
            <span className="text-muted-foreground">we simplify the property journey with honest advice.</span>
          </h2>
          <Button
            variant="ghost"
            className="h-11 rounded-full bg-black px-2 pl-6 pr-1 text-white shadow-sm hover:bg-gray-200 reveal"
          >
            <span>Learn More</span>
            <span className="ml-3 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white text-black">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2 reveal">{stat.number}</p>
              <p className="text-muted-foreground text-sm reveal">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
