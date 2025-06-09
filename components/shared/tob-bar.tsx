'use client'

import { Dot } from 'lucide-react'
import Link from 'next/link'

interface Props {
	label: string
	description?: string
	extra?: string
}

function TopBar({ label, extra, description }: Props) {
	return (
		<>
			<div className='mt-20 h-12 bg-gradient-to-r from-secondary to-primary'>
				<div className='container mx-auto flex w-full max-w-5xl items-center px-4'>
					<div className='flex items-center'>
						<Link
							href={'/'}
							className='opacity-80 transition-opacity hover:opacity-95'
						>
							Home
						</Link>
						<Dot className='size-12 text-muted-foreground' />
						<p>{label}</p>
						{extra && (
							<>
								<Dot className='size-12 text-muted-foreground' />
								<p>{extra}</p>
							</>
						)}
					</div>
				</div>
			</div>

			{description && (
				<div className='container mx-auto my-12 max-w-5xl px-4'>
					<h1 className='font-spaceGrotesk text-4xl font-bold'>{label}</h1>
					<p className='mt-2 max-w-md text-muted-foreground'>{description}</p>
				</div>
			)}
		</>
	)
}

export default TopBar
