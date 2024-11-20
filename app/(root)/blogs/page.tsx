import BlogCard from '@/components/cards/blog'
import BgArrow from '@/components/shared/bg-arrow'
import { getBlogs } from '@/service/blog.service'

async function HomePage() {
	const blogs = await getBlogs()

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[60vh] flex items-center justify-center'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-creteRound text-center max-w-2xl'>
					Taking control of your daily life is easy when you know how!
				</h1>
				<BgArrow />
			</div>
			<h2 className='text-center text-4xl section-title font-creteRound'>
				<span>Recent posts</span>
			</h2>

			<div className='flex flex-col space-y-24 mt-24'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</div>
	)
}

export default HomePage
