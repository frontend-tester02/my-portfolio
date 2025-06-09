'use client'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { MdEmail, MdWork } from 'react-icons/md'
import Autoplay from 'embla-carousel-autoplay'
import { techStack } from '@/constants'
import Image from 'next/image'
import { ResumeIcon } from '@radix-ui/react-icons'

function Hero() {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/resume.pdf'
		link.download = 'Shokhrukh_Nuriddinov_Resume.pdf'
		link.click()
	}
	return (
		<>
			<div className='mx-auto flex justify-center min-h-[86vh] max-w-5xl gap-8 text-center '>
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
			<div className='w-full bg-secondary'>
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
		</>
	)
}

export default Hero
