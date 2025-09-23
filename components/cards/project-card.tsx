import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export interface Project {
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

interface ProjectCardProps {
	project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
	// const getStatusColor = (status: string) => {
	// 	switch (status) {
	// 		case 'Completed':
	// 			return 'bg-green-100 text-green-800 border-green-200'
	// 		case 'In Progress':
	// 			return 'bg-blue-100 text-blue-800 border-blue-200'
	// 		case 'Planning':
	// 			return 'bg-yellow-100 text-yellow-800 border-yellow-200'
	// 		default:
	// 			return 'bg-gray-100 text-gray-800 border-gray-200'
	// 	}
	// }

	return (
		<Card className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
			<div className='relative overflow-hidden rounded-t-lg'>
				<Image
					src={project.image || '/placeholder.svg'}
					alt={project.title}
					width={500}
					height={400}
					className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
				/>
			</div>

			<CardHeader className='text-start'>
				<CardTitle className='text-xl font-semibold text-white-500 group-hover:text-blue-600 transition-colors'>
					{project.title}
				</CardTitle>
				<CardDescription className='text-muted-foreground line-clamp-3'>
					{project.description}
				</CardDescription>
			</CardHeader>

			<CardContent className='text-start'>
				<div className='space-y-3'>
					<div>
						<h4 className='text-sm font-medium text-white-500 mb-2'>
							Technologies Used:
						</h4>
						<div className='flex flex-wrap gap-1'>
							{project.technologies.map((tech, index) => (
								<Badge key={index} variant='secondary' className='text-xs'>
									{tech}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</CardContent>

			<CardFooter className='flex gap-2 pt-4'>
				{project.demoUrl && (
					<Button asChild className='flex-1' size='sm'>
						<Link
							href={project.demoUrl}
							target='_blank'
							rel='noopener noreferrer'
						>
							<ExternalLink className='w-4 h-4 mr-2' />
							Live Demo
						</Link>
					</Button>
				)}
				{project.githubUrl && (
					<Button asChild variant='outline' className='flex-1' size='sm'>
						<Link
							href={project.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
						>
							<Github className='w-4 h-4 mr-2' />
							Source Code
						</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}
