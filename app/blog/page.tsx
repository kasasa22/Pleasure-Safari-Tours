import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog/blog-card"
import BlogSearch from "@/components/blog/blog-search"
import BlogCategories from "@/components/blog/blog-categories"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "1",
      title: "Top 10 Must-Visit Destinations in 2024",
      excerpt: "Discover the most exciting travel destinations that should be on your bucket list this year.",
      image: "/images/dubai.jpg",
      category: "Destinations",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: "2",
      title: "Essential Travel Tips for First-Time International Travelers",
      excerpt: "Everything you need to know before embarking on your first international adventure.",
      image: "/images/cape.jpg",
      category: "Travel Tips",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: "3",
      title: "Visa Requirements: A Complete Guide for African Travelers",
      excerpt: "Navigate visa requirements with our comprehensive guide for travelers from Africa.",
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
      excerpt: "Practical tips and tricks for traveling on a budget while still having amazing experiences.",
      image: "/images/mtn.jpg",
      category: "Budget Travel",
      author: "Lisa Anderson",
      date: "2024-01-08",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: "5",
      title: "Cultural Etiquette: Respecting Local Customs While Traveling",
      excerpt: "Learn how to be a respectful traveler and embrace local cultures during your journeys.",
      image: "/images/sa.jpg",
      category: "Culture",
      author: "James Ochieng",
      date: "2024-01-05",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: "6",
      title: "Adventure Travel: Thrilling Experiences Around the Globe",
      excerpt: "From mountain climbing to deep-sea diving, discover the world's most exciting adventures.",
      image: "/images/beach.jpg",
      category: "Adventure",
      author: "Emma Thompson",
      date: "2024-01-03",
      readTime: "9 min read",
      featured: false,
    },
  ]

  const categories = ["All", "Destinations", "Travel Tips", "Visa Guide", "Budget Travel", "Culture", "Adventure"]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-900 mb-4">Travel Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest travel trends, tips, and destination guides from our travel experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">Featured Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts
                  .filter((post) => post.featured)
                  .map((post) => (
                    <BlogCard key={post.id} post={post} featured />
                  ))}
              </div>
            </div>

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-purple-900 mb-6">Latest Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <BlogSearch />
            <BlogCategories categories={categories} />

            {/* Newsletter Signup */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for the latest travel tips and exclusive offers.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
