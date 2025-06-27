import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"

interface BlogCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    image: string
    category: string
    author: string
    date: string
    readTime: string
    featured?: boolean
  }
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Card className={`overflow-hidden hover:shadow-xl transition-shadow ${featured ? "lg:col-span-1" : ""}`}>
      <div className={`relative ${featured ? "h-64" : "h-48"}`}>
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-purple-600 text-white">{post.category}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className={`font-bold text-purple-900 mb-3 ${featured ? "text-xl" : "text-lg"}`}>
          <Link href={`/blog/${post.id}`} className="hover:text-purple-700">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
