'use client'
import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Mobile from './mobile'

function Navbar() {
	const pathname = usePathname()
	return (
		<div className='h-[10vh] fixed backdrop-blur-sm border-b inset-0 bg-background z-40'>
			<div className='container max-w-5xl mx-auto h-[10vh] w-full flex items-center justify-between px-4'>
				{/* LOGO */}
				<Link href={'/'}>
					<h1 className='text-4xl'>shoky.dev</h1>
				</Link>
				<div className='gap-2 md:flex hidden'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-md transition-colors',
								pathname === nav.route && 'text-blue-400'
							)}
							target={nav.name === 'resume' ? '_blank' : '_self'}
						>
							{nav.name}
						</Link>
					))}
				</div>
				<div className='flex justify-end'>
					<Mobile />
					<ModeToggle />
				</div>
			</div>
		</div>
	)
}

export default Navbar
