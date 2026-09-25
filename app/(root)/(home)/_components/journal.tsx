import { getBlogs } from '@/service/blog.service'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default async function Journal() {
 try {
  const blogs = await getBlogs()
  if (!blogs.length) return <p className='journal-status'>New articles are on the way. Check back soon.</p>
  return <div className='journal-grid'>{blogs.map(blog => <article key={blog.slug} className='journal-card'>
   <Link href={`/blogs/${blog.slug}`} className='journal-cover'><Image src={blog.image.url} alt={blog.title} width={650} height={335} sizes='(max-width: 767px) 90vw, 45vw' /></Link>
   <p className='eyebrow'>{blog.category.name}</p>
   <h3><Link href={`/blogs/${blog.slug}`}>{blog.title} <ArrowUpRight size={18} className='inline' /></Link></h3>
   <p>{blog.description}</p>
   <span className='journal-author'>By {blog.author.name}</span>
  </article>)}</div>
 } catch {
  return <p className='journal-status'>Articles couldn’t be loaded right now. Please try again later.</p>
 }
}
