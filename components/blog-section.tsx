import { ArrowRight, Calendar, User } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function BlogSection() {
  const articles = [
    {
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=blog1',
      category: 'Market Trends',
      title: 'Top 5 Tips for First-Time Home Buyers',
      author: 'Sarah Johnson',
      date: 'Mar 15, 2024',
      excerpt: 'Learn essential strategies to navigate the property market as a first-time buyer.',
    },
    {
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=blog2',
      category: 'Investment Guide',
      title: 'Real Estate Investment Strategies for 2024',
      author: 'Michael Chen',
      date: 'Mar 10, 2024',
      excerpt: 'Discover proven investment strategies to maximize your real estate portfolio returns.',
    },
    {
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=blog3',
      category: 'Home Improvement',
      title: 'Smart Home Upgrades That Increase Property Value',
      author: 'Emily Davis',
      date: 'Mar 5, 2024',
      excerpt: 'Find out which home improvements offer the best ROI for your property.',
    },
  ]

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Real Estate News & Updates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay informed with the latest real estate trends, market insights, and helpful tips.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold text-accent uppercase mb-3">{article.category}</p>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex flex-col gap-3 text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
