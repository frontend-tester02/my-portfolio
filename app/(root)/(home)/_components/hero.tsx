'use client'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { MdEmail, MdWork } from 'react-icons/md'
import Autoplay from 'embla-carousel-autoplay'
import { projects, techStack } from '@/constants'
import Image from 'next/image'
import { ResumeIcon } from '@radix-ui/react-icons'
import { ProjectGrid } from '@/components/cards/project-grid'
import { Footer } from '../../_components/footer'
import ContactForm from '@/components/forms/contact'
import BlogPage from '../blogs/page'

function Hero() {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/resume.pdf'
		link.download = 'Shokhrukh_Nuriddinov_Resume.pdf'
		link.click()
	}

	return (
		<>
			<div className='mx-auto flex justify-center min-h-[100vh] max-w-5xl gap-8 text-center '>
				<div className='w-[700px] flex flex-col space-y-4 self-center'>
					<h1 className='font-serif text-3xl font-bold'>
						I am <span className='text-blue-500'>Nuriddinov Shokhrukh</span>
					</h1>
					<p className='text-muted-foreground'>
						I solve problems and create captivating applications.
					</p>
					<p className='text-muted-foreground'>
						I am a{' '}
						<span className='text-blue-500'>Full Stack Web Developer</span>{' '}
						based in Seoul, South Korea, deriving immense satisfaction from
						solving intricate problems through the art of coding!
					</p>
					<div className='flex justify-center items-center gap-8'>
						<Button type='button' size={'icon'} className='rounded-full'>
							<Link href={'https://github.com/frontend-tester02'}>
								<Github />
							</Link>
						</Button>
						<Button type='button' size={'icon'} className='rounded-full'>
							<Link
								href={
									'https://www.linkedin.com/in/shokhrukh-nuriddinov-b42283249'
								}
							>
								<Linkedin />
							</Link>
						</Button>
						<Button type='button' size={'icon'} className='rounded-full'>
							<Link href={'/contacts'}>
								<MdEmail />
							</Link>
						</Button>
					</div>
					<div className='flex justify-center gap-4'>
						<Button
							variant={'outline'}
							size={'default'}
							className='rounded-md'
							onClick={handleDownload}
						>
							<ResumeIcon className='mr-2 h-4 w-4' /> Download CV
						</Button>

						<Link href={'/projects'}>
							<Button size={'default'} className='rounded-md'>
								<MdWork className='mr-2 h-4 w-4' /> Projects
							</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className='mx-auto flex flex-col justify-center  max-w-5xl gap-8 text-center max-md:mt-20 px-4 mb-20'>
				<div className='mb-8 flex flex-col md:flex-row items-center gap-8'>
					<div className='md:w-1/3'>
						<Image
							src='/portfolio.jpg'
							alt='Your Name'
							width={300}
							height={300}
							className='rounded-full'
						/>
					</div>
					<div className='md:w-2/3 font-serif'>
						<h2 className='text-4xl font-bold mb-4'>About Me</h2>
						<p className='text-md mb-4 text-start text-muted-foreground md:px-4'>
							Full Stack Web Developer based in Seoul, South Korea, passionate
							about solving complex problems through coding. I enjoy building
							efficient, user-focused solutions and continuously expand my
							skills to stay ahead in evolving web technologies.
						</p>
						<div className='flex flex-wrap items-start'>
							<Button asChild className='mb-2 mr-4'>
								<Link href={'/contacts'}>
									<Mail className='h-4 w-4' /> Contact Me
								</Link>
							</Button>

							<Button variant='outline' className='mr-4 mb-2' asChild>
								<Link
									href={'https://github.com/frontend-tester02'}
									target='_blank'
								>
									<Github className='h-4 w-4' /> GitHub
								</Link>
							</Button>

							<Button variant='outline' asChild>
								<Link
									href={
										'https://www.linkedin.com/in/shokhrukh-nuriddinov-b42283249'
									}
									target='_blank'
								>
									<Linkedin className='h-4 w-4' /> LinkedIn
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className='w-full bg-secondary mb-20'>
				<Carousel
					opts={{ align: 'end', loop: true }}
					plugins={[Autoplay({ delay: 2000 })]}
					className='container mx-auto w-full max-w-5xl'
				>
					<CarouselContent className='p-2'>
						{techStack.map((item, idx) => (
							<CarouselItem
								key={idx}
								className='basis-1/3 md:basis-1/4 lg:basis-1/6 flex flex-col'
							>
								<Image
									src={item.image}
									alt={item.title}
									width={50}
									height={50}
									className='mt-2 text-muted-foreground'
								/>
								<p className='mt-2 text-start'>{item.title}</p>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			<div className='mx-auto flex flex-col min-h-[40vh] max-w-5xl gap-8 text-center max-md:mt-10 px-4 mb-5'>
				<ProjectGrid projects={projects} />
			</div>

			<div className='mx-auto flex flex-col min-h-[40vh] max-w-5xl gap-8 max-md:mt-10 px-4 mb-5'>
				<BlogPage />
			</div>

			<div className='container mx-auto max-w-5xl px-4 pt-10 pb-5'>
				<div className='mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1'>
					<div className='flex flex-col'>
						<h1 className='font-spaceGrotesk text-4xl'>Touch base with me</h1>
						<p className='mt-2 text-muted-foreground'>
							We are here to help you. If you have any questions, feel free to
							contact me.
						</p>

						<div className='mt-12 flex items-center gap-3'>
							<Mail className='size-4' />
							<p className='text-sm'>shokhrukhnuriddinov@gmail.com</p>
						</div>
						<div className='flex items-center gap-2'>
							<Phone className='size-4' />
							<p className='text-sm'>+82 10 2115 4633</p>
						</div>
					</div>

					<div>
						<h1 className='mb-2 font-spaceGrotesk text-4xl'>Contact form</h1>
						<ContactForm />
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Hero
