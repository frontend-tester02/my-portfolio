import { Url, UrlObject } from 'url'

export interface ChildProps {
	children: React.ReactNode
}

export interface IAuthor {
	name: string
	image: {
		url: string
	}
	bio: string
	blogs: IBlog[]
	id: string
}

export interface ICategoryAndTags {
	name: string
	slug: string
	blogs: IBlog[]
}

export interface IBlog {
	title: string
	description: string
	author: IAuthor
	category: ICategoryAndTags
	tag: ICategoryAndTags
	image: { url: string }
	createdAt: string
	content: { html: string }
	slug: string
}

export interface IProject {
	id: number
	title: string
	description: string
	image: string
	technologies: string[]
	demoUrl?: string
	githubUrl?: string
	featured: boolean
	status: 'Completed' | 'In Progress' | 'Planning'
}
