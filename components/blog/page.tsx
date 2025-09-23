import BlogCard from '@/components/cards/blog.card'
import { getBlogs } from '@/service/blog.service'

async function BlogPage() {
	const blogs = await getBlogs()
	return (
		<>
			<div className='container mx-auto max-w-5xl px-4'>
				<div className='mt-24 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1'>
					{blogs.map(blog => (
						<BlogCard key={blog.slug} {...blog} />
					))}
				</div>
			</div>
		</>
	)
}

export default BlogPage
