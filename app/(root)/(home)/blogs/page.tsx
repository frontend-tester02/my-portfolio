import BlogCard from '@/components/cards/blog.card'
import TopBar from '@/components/shared/tob-bar'
import { getBlogs } from '@/service/blog.service'
import { Footer } from '../../_components/footer'

async function Page() {
	const blogs = await getBlogs()
	return (
		<>
			<TopBar
				label='Blogs'
				description='Read our latest blogs to learn more about our courses and instructors.'
			/>
			<div className='container mx-auto max-w-5xl px-4'>
				<div className='mt-24 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1'>
					{blogs.map(blog => (
						<BlogCard key={blog.slug} {...blog} />
					))}
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Page
