interface BlogCategoriesProps {
  categories: string[]
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-xl font-bold text-purple-900 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button className="text-gray-600 hover:text-purple-600 transition-colors">{category}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
