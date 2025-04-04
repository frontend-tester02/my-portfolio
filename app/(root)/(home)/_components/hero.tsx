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

function Hero() {
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
							<Link href={'https://github.com/frontend-tester02'}>
								<Linkedin />
							</Link>
						</Button>
						<Button type='button' size={'icon'} className='rounded-full'>
							<Link href={'https://github.com/frontend-tester02'}>
								<MdEmail />
							</Link>
						</Button>
					</div>
					<div className='flex justify-center gap-4'>
						<Link href={'/contacts'}>
							<Button
								variant={'outline'}
								size={'default'}
								className='rounded-md'
							>
								<Mail className='mr-2 h-4 w-4' /> Contact me
							</Button>
						</Link>
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
