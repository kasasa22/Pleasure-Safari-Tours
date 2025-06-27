import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Eye, Tag } from "lucide-react"

const blogPosts = {
  "1": {
    title: "Top 10 Must-Visit Destinations in 2024",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-700 leading-relaxed mb-8">As we step into 2024, the world of travel continues to evolve with new destinations emerging and classic favorites reinventing themselves. Here are the top 10 destinations that should be on every traveler's bucket list this year.</p>
        
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">🏙️ 1. Dubai, UAE - The City of the Future</h2>
          <p class="text-gray-700 leading-relaxed mb-4">Dubai continues to amaze visitors with its blend of traditional culture and futuristic architecture. From the world's tallest building to luxury shopping and desert adventures, Dubai offers something for everyone.</p>
        </div>
        
        <div class="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">🏔️ 2. Cape Town, South Africa - Where Two Oceans Meet</h2>
          <p class="text-gray-700 leading-relaxed mb-4">With its stunning landscapes, rich history, and vibrant culture, Cape Town remains one of the world's most beautiful cities.</p>
        </div>
      </div>
    `,
    excerpt: "Discover the most exciting travel destinations that should be on your bucket list this year.",
    image: "/images/dubai.jpg",
    category: "Destinations",
    author: "Sarah Johnson",
    authorBio: "Sarah is a seasoned travel writer with over 10 years of experience exploring destinations worldwide.",
    authorImage: "/placeholder.svg?height=80&width=80",
    date: "2024-01-15",
    readTime: "8 min read",
    views: "2,847",
    tags: ["Travel", "Destinations", "2024", "Bucket List", "Adventure"],
  },
  "2": {
    title: "Essential Travel Tips for First-Time International Travelers",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-700 leading-relaxed mb-8">Embarking on your first international adventure can be both exciting and overwhelming. Here's everything you need to know to make your first international trip smooth and memorable.</p>
        
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">📋 Before You Go</h2>
          <p class="text-gray-700 leading-relaxed mb-4">Preparation is key to a successful international trip. Start planning at least 2-3 months in advance.</p>
        </div>
        
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">✈️ At the Airport</h2>
          <p class="text-gray-700 leading-relaxed mb-4">Navigate international airports like a pro with these insider tips.</p>
        </div>
      </div>
    `,
    excerpt: "Everything you need to know before embarking on your first international adventure.",
    image: "/images/cape.jpg",
    category: "Travel Tips",
    author: "Michael Chen",
    authorBio: "Michael is a travel consultant with expertise in first-time traveler guidance.",
    authorImage: "/placeholder.svg?height=80&width=80",
    date: "2024-01-12",
    readTime: "7 min read",
    views: "1,923",
    tags: ["Travel Tips", "First Time", "International", "Planning"],
  },
  "3": {
    title: "Visa Requirements: A Complete Guide for African Travelers",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-700 leading-relaxed mb-8">Navigating visa requirements can be challenging for African passport holders. This comprehensive guide will help you understand the process and increase your approval chances.</p>
        
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">📋 Understanding Visa Types</h2>
          <p class="text-gray-700 mb-6">Different types of visas serve different purposes.</p>
        </div>
      </div>
    `,
    excerpt: "Navigate visa requirements with our comprehensive guide for travelers from Africa.",
    image: "/images/china.jpg",
    category: "Visa Guide",
    author: "David Mukasa",
    authorBio: "David is our lead visa specialist with over 12 years of experience.",
    authorImage: "/placeholder.svg?height=80&width=80",
    date: "2024-01-10",
    readTime: "12 min read",
    views: "4,521",
    tags: ["Visa", "Travel Documents", "Africa", "Immigration"],
  },
  "4": {
    title: "Budget Travel: How to See the World Without Breaking the Bank",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-700 leading-relaxed mb-8">Traveling the world doesn't have to cost a fortune. With smart planning and insider knowledge, you can have amazing experiences on any budget.</p>
        
        <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">💰 Budget Planning Basics</h2>
          <p class="text-gray-700 leading-relaxed mb-4">Start with a realistic budget and stick to it throughout your journey.</p>
        </div>
      </div>
    `,
    excerpt: "Practical tips and tricks for traveling on a budget while still having amazing experiences.",
    image: "/images/mtn.jpg",
    category: "Budget Travel",
    author: "Lisa Anderson",
    authorBio: "Lisa specializes in budget travel and has visited 50+ countries on a shoestring budget.",
    authorImage: "/placeholder.svg?height=80&width=80",
    date: "2024-01-08",
    readTime: "6 min read",
    views: "3,156",
    tags: ["Budget Travel", "Money Saving", "Tips", "Backpacking"],
  },
  "5": {
    title: "Cultural Etiquette: Respecting Local Customs While Traveling",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-700 leading-relaxed mb-8">Being a respectful traveler means understanding and honoring local customs and traditions wherever you go.</p>
        
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">🤝 Universal Respect Principles</h2>
          <p class="text-gray-700 leading-relaxed mb-4">Some principles of respect are universal across all cultures.</p>
        </div>
      </div>
    `,
    excerpt: "Learn how to be a respectful traveler and embrace local cultures during your journeys.",
    image: "/images/sa.jpg",
    category: "Culture",
    author: "James Ochieng",
    authorBio: "James is a cultural anthropologist and travel writer specializing in cross-cultural experiences.",
    authorImage: "/placeholder.svg?height=80&width=80",
    date: "2024-01-05",
    readTime: "8 min read",
    views: "2,234",
    tags: ["Culture", "Etiquette", "Respect", "Local Customs"],
  },
  "6": {
    title: "Adventure Travel: Thrilling Experiences Around the Globe",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-700 leading-relaxed mb-8">For thrill-seekers and adventure enthusiasts, the world offers countless opportunities for heart-pumping experiences.</p>
        
        <div class="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">🏔️ Mountain Adventures</h2>
          <p class="text-gray-700 leading-relaxed mb-4">From climbing peaks to hiking trails, mountain adventures offer unparalleled thrills.</p>
        </div>
      </div>
    `,
    excerpt: "From mountain climbing to deep-sea diving, discover the world's most exciting adventures.",
    image: "/images/beach.jpg",
    category: "Adventure",
    author: "Emma Thompson",
    authorBio: "Emma is an adventure travel specialist and certified mountain guide.",
    authorImage: "/placeholder.svg?height=80&width=80",
    date: "2024-01-03",
    readTime: "9 min read",
    views: "1,876",
    tags: ["Adventure", "Extreme Sports", "Outdoor", "Adrenaline"],
  },
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Back Button */}
        <Link
          href="/blog"
          className="absolute top-8 left-8 inline-flex items-center text-white hover:text-yellow-400 transition-colors z-10 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <div className="absolute bottom-8 left-8 right-8 text-white">
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-4 px-4 py-2">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              <span>{post.views} views</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Article Content */}
            <div className="mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Author Bio */}
            <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 border-0">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-6">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.author}</h3>
                    <p className="text-purple-600 font-medium mb-3">Travel Expert & Content Writer</p>
                    <p className="text-gray-700 leading-relaxed">{post.authorBio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Related Posts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {Object.entries(blogPosts)
                    .filter(([id]) => id !== params.id)
                    .slice(0, 3)
                    .map(([id, relatedPost]) => (
                      <Link key={id} href={`/blog/${id}`} className="block group">
                        <div className="flex space-x-3">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors text-sm leading-tight mb-1">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              {relatedPost.readTime}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">Need Travel Help?</h3>
                <p className="text-green-800 mb-4 text-sm">
                  Our travel experts are ready to help you plan your next adventure.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
