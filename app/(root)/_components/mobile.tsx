'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { AlignCenter } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

function Mobile() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild className='md:hidden'>
				<Button
					size={'icon'}
					variant={'ghost'}
					aria-label='mobile-hamburger-menu'
				>
					<AlignCenter />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<SheetHeader>
					<Link href={'/'} onClick={() => setIsOpen(false)}>
						<h1 className='text-4xl'>shoky.dev</h1>
					</Link>
					<Separator />
				</SheetHeader>
				<div className='mt-4 flex flex-col space-y-3'>
					{navLinks.map(nav => (
						<Link
							href={nav.route}
							key={nav.route}
							className='flex h-12 cursor-pointer items-center gap-2 rounded-md px-3 transition-colors hover:bg-blue-400/20'
							onClick={() => setIsOpen(false)}
						>
							<nav.icon className='size-5' />
							<span>{nav.name}</span>
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
