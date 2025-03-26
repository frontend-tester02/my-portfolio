import { ResumeIcon } from '@radix-ui/react-icons'
import { Contact2, FileCode2, Home, ListCollapse } from 'lucide-react'
import { FaBlog } from 'react-icons/fa6'

export const navLinks = [
	{ name: 'Home', route: '/', icon: Home },
	{ name: 'About', route: '/about', icon: ListCollapse },
	{ name: 'Projects', route: '/projects', icon: FileCode2 },
	{ name: 'Blogs', route: '/blogs', icon: FaBlog },
	{ name: 'Contacts', route: '/contacts', icon: Contact2 },
	{ name: 'Resume', route: '/resume', icon: ResumeIcon },
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

export const projectData = [
	{
		title: 'Udemy clone',
		githubLink: 'https://github.com/frontend-tester02/udemy',
		demoLink: 'https://udemy.shoky.dev/en',
		previewImage: '/assets/udemy-clone.png',
		description:
			'A website I created for my nail salon business that I manage, located in Surrey BC. Users can read about us and learn more about our services while also booking online appointments.',
		tags: ['ReactJs', 'NextJs', 'TypeScript', 'TailwindCss', 'MongoDB'],
	},
	{
		title: 'NurBlog',
		githubLink: 'https://github.com/frontend-tester02/shokh-blog',
		demoLink: 'https://shokh-blog.shoky.dev/',
		previewImage: '/assets/blog.png',
		description:
			'A website I created for my nail salon business that I manage, located in Surrey BC. Users can read about us and learn more about our services while also booking online appointments.',
		tags: ['ReactJs', 'NextJs', 'TypeScript'],
	},
]
