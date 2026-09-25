'use client'
import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Mobile from './mobile'

export default function Navbar() {
 const pathname = usePathname()
 const [active, setActive] = useState('home')
 useEffect(() => {
  if (pathname !== '/') return
  let frame = 0
  const update = () => {
   // Use the actual page order and the same offset as anchor scrolling.
   const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0
   const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
   const activationLine = Math.max(headerBottom, scrollPadding) + 24
   let current = 'home'
   document.querySelectorAll<HTMLElement>('.portfolio-home > section[id]').forEach(section => {
    if (section.getBoundingClientRect().top <= activationLine) current = section.id
   })
   // The last section may be too short to reach the activation line.
   const page = document.scrollingElement ?? document.documentElement
   const atBottom = page.scrollTop + page.clientHeight >= page.scrollHeight - 4
   const contact = document.getElementById('contact')?.getBoundingClientRect()
   if (atBottom && contact && contact.top < page.clientHeight && contact.bottom > headerBottom) {
    current = 'contact'
   }
   setActive(current)
  }
  const scheduleUpdate = () => {
   cancelAnimationFrame(frame)
   frame = requestAnimationFrame(update)
  }
  update()
  // Capture nested scrolling too, including browser anchor navigation.
  document.addEventListener('scroll', scheduleUpdate, { passive: true, capture: true })
  window.addEventListener('resize', scheduleUpdate)
  window.addEventListener('hashchange', scheduleUpdate)
  document.addEventListener('animationend', scheduleUpdate)
  const observer = new ResizeObserver(scheduleUpdate)
  const content = document.querySelector('.portfolio-home')
  if (content) observer.observe(content)
  return () => {
   cancelAnimationFrame(frame)
   observer.disconnect()
   document.removeEventListener('scroll', scheduleUpdate, true)
   window.removeEventListener('resize', scheduleUpdate)
   window.removeEventListener('hashchange', scheduleUpdate)
   document.removeEventListener('animationend', scheduleUpdate)
  }
 }, [pathname])
 const href = (route: string) => pathname === '/' ? route.slice(1) : route
 return <header className='site-header'><div className='portfolio-container nav-inner'>
  <Link href={href('/#home')} className='brand' aria-label='shoky.dev home'>shoky<span>.</span>dev</Link>
  <nav className='desktop-nav' aria-label='Main navigation'>{navLinks.map(nav => {
   const selected = pathname === '/' && nav.route === `/#${active}`
   return <Link key={nav.route} href={href(nav.route)} aria-current={selected ? 'location' : undefined} className={selected ? 'nav-active' : ''}>{nav.name}</Link>
  })}</nav>
  <div className='nav-actions'><ModeToggle /><Link href={href('/#contact')} className='nav-contact'>Let’s talk <ArrowUpRight size={16} /></Link><Mobile /></div>
 </div></header>
}
