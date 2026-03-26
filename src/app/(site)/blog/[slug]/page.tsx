import blogData from "@/components/Blog/blogData"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const blog = blogData.find(
    (item) => item.slug === slug
  )

  if (!blog) {
    notFound()
  }

  return (
    <section className="py-20">

      <div className="max-w-[800px] mx-auto pt-35 px-4">

        <Image
          src={blog.img}
          alt={blog.title}
          width={400}
          height={400}
          className="rounded-lg mb-6"
        />

        <p className="text-gray-500">
          {blog.date} • {blog.views} views
        </p>

        <h1 className="text-3xl font-bold mt-3 mb-6">
          {blog.title}
        </h1>

        <p className="text-gray-700 whitespace-pre-line">
          {blog.content}
        </p>

      </div>

    </section>
  )
}