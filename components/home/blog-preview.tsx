import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog/blog-card"
import { ArrowRight } from "lucide-react"

export default function BlogPreview() {
  const featuredPosts = [
    {
      id: "1",
      title: "Top 10 Must-Visit Destinations in 2024",
      excerpt:
        "Discover the most exciting travel destinations that should be on your bucket list this year, from hidden gems to popular hotspots.",
      image: "/images/dubai.jpg",
      category: "Destinations",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: "3",
      title: "Visa Requirements: A Complete Guide for African Travelers",
      excerpt:
        "Navigate visa requirements with our comprehensive guide for travelers from Africa, including tips for faster processing.",
      image: "/images/china.jpg",
      category: "Visa Guide",
      author: "David Mukasa",
      date: "2024-01-10",
      readTime: "10 min read",
      featured: true,
    },
    {
      id: "4",
      title: "Budget Travel: How to See the World Without Breaking the Bank",
      excerpt:
        "Practical tips and tricks for traveling on a budget while still having amazing experiences and creating lasting memories.",
      image: "/images/mtn.jpg",
      category: "Budget Travel",
      author: "Lisa Anderson",
      date: "2024-01-08",
      readTime: "6 min read",
      featured: false,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-slate-800 bg-clip-text text-transparent mb-6">
            Latest Travel Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest travel tips, destination guides, and industry insights from our expert team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-700 to-slate-700 hover:from-gray-800 hover:to-slate-800 text-white px-8 py-4"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
