import { IProject } from '@/types'
import { Contact2, FileCode2, Home, ListCollapse } from 'lucide-react'
import { FaBlog } from 'react-icons/fa6'

export const navLinks = [
	{ name: 'Home', route: '/', icon: Home },
	{ name: 'About', route: '/about', icon: ListCollapse },
	{ name: 'Projects', route: '/projects', icon: FileCode2 },
	{ name: 'Blogs', route: '/blogs', icon: FaBlog },
	{ name: 'Contacts', route: '/contacts', icon: Contact2 },
]

export const techStack = [
	{
		title: 'ReactJS',
		image: '/assets/react.svg',
	},
	{
		title: 'TypeScript',
		image: '/assets/typescript.svg',
	},
	{
		title: 'JavaScript',
		image: '/assets/javascript.svg',
	},
	{
		title: 'TailwindCss',
		image: '/assets/tailwind.svg',
	},
	{
		title: 'NodeJs',
		image: '/assets/node.svg',
	},
	{
		title: 'Sass',
		image: '/assets/sass.svg',
	},
	{
		title: 'MongoDB',
		image: '/assets/mongodb.svg',
	},
	{
		title: 'Jest',
		image: '/assets/jest.svg',
	},
	{
		title: 'Git',
		image: '/assets/git.svg',
	},
]

export const projects: IProject[] = [
	{
		id: 1,
		title: 'Udemy clone',
		githubUrl: 'https://github.com/frontend-tester02/udemy',
		demoUrl: 'https://udemy.shoky.dev/en',
		image: '/assets/udemy-clone.png',
		description:
			'Revolutionize e-learning with our Udemy clone. Seamlessly authenticate users, process payments, support multilingual content, and integrate AI for enhanced learning experiences',
		technologies: [
			'Next.js',
			'TypeScript',
			'Stripe',
			'Server action',
			'Tailwind CSS',
		],
		featured: true,
		status: 'Completed',
	},
	{
		id: 2,
		title: 'TechMemo',
		githubUrl: 'https://github.com/frontend-tester02/shokh-blog',
		demoUrl: 'https://shokh-blog.shoky.dev/',
		image: '/assets/blog.png',
		description:
			'TechMemo is a personal tech journal by Nuriddinov Shokhrukh, where ideas meet code. Here, you’ll find insightful articles on the latest technology trends, programming tutorials, and personal reflections — crafted for developers, tech enthusiasts, and curious minds. From AI discussions to TypeScript guides, content is shared in both English and Uzbek to empower a diverse community of learners and creators.',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CMS blog'],
		featured: true,
		status: 'Completed',
	},
	{
		id: 3,
		title: 'Seleor E-commerce',
		githubUrl: 'https://github.com/frontend-tester02/seleor',
		demoUrl: 'https://seleor.shoky.dev/',
		image: '/assets/seleor1.jpg',
		description:
			'Seleor is your go-to online marketplace for everything you need — from the latest tech gadgets to fashion essentials, digital tools, and everyday must-haves. Designed for simplicity and convenience, Seleor connects quality products with smart shoppers. Discover new trends, exclusive deals, and reliable service, all in one place.',
		technologies: [
			'Next.js',
			'TypeScript',
			'Stripe',
			'Node.js',
			'Tailwind CSS',
		],
		featured: true,
		status: 'Completed',
	},
]
