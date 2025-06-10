'use client'

import Link from 'next/link'

export function Footer() {
	return (
		<div className='mt-12 pt-2 bg-secondary'>
			<div className='container mx-auto py-8 max-w-5xl'>
				<div className='flex justify-center items-center'>
					<p className='text-sm text-muted-foreground'>
						© {new Date().getFullYear()}{' '}
						<Link
							href={'/'}
							className='text-blue-500 hover:underline cursor-pointer'
						>
							shoky.dev
						</Link>
						. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	)
}
