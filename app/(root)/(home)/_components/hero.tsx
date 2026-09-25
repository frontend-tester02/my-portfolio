'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import {
	ArrowDown,
	ArrowDownToLine,
	ArrowUpRight,
	Code2,
	Github,
	Globe2,
	Linkedin,
	MapPin,
	Sparkles,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, techStack } from '@/constants'
import ContactForm from '@/components/forms/contact'

export default function Hero({ journal }: { journal: ReactNode }) {
	const root = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries =>
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible')
						observer.unobserve(entry.target)
					}
				}),
			{ threshold: 0.12 },
		)
		root.current
			?.querySelectorAll('[data-reveal]')
			.forEach(el => observer.observe(el))
		return () => observer.disconnect()
	}, [])
	return (
		<div ref={root} id='home' className='portfolio-home'>
			<section className='intro-section portfolio-container'>
				<div className='intro-copy'>
					<div className='eyebrow entrance'>
						<span className='status-dot' /> FULL STACK DEVELOPER
					</div>
					<h1 className='entrance delay-1'>
						Turning ideas
						<br />
						into <span className='serif-accent'>digital</span>
						<br />
						<span className='serif-accent'>experiences.</span>
						<span className='heading-spark' aria-hidden='true'>
							✳
						</span>
					</h1>
					<p className='intro-description entrance delay-2'>
						Hey, I’m <strong>Shokhrukh.</strong> A developer based in Seoul,
						<br className='hidden lg:block' /> building thoughtful websites and
						applications
						<br className='hidden lg:block' /> with clean code and a little
						curiosity.
					</p>
					<div className='hero-actions entrance delay-3'>
						<a href='#work' className='primary-action'>
							Explore my work <ArrowUpRight size={18} />
						</a>
						<a
							href='/resume-en.pdf'
							download='Shokhrukh_Nuriddinov_Resume.pdf'
							className='secondary-action'
						>
							<ArrowDownToLine size={17} /> Download CV
						</a>
					</div>
					<div className='social-row entrance delay-3'>
						<span>FIND ME ON</span>
						<a
							href='https://github.com/frontend-tester02'
							target='_blank'
							rel='noreferrer'
							aria-label='GitHub'
						>
							<Github size={18} />
						</a>
						<a
							href='https://www.linkedin.com/in/shokhrukh-nuriddinov-b42283249'
							target='_blank'
							rel='noreferrer'
							aria-label='LinkedIn'
						>
							<Linkedin size={18} />
						</a>
						<span className='social-divider' />
						<MapPin size={14} />
						<span>Seoul, South Korea</span>
					</div>
				</div>
				<div className='hero-art entrance delay-2'>
					<div className='art-grid' aria-hidden='true' />
					<div className='orbit orbit-one' aria-hidden='true' />
					<div className='orbit orbit-two' aria-hidden='true' />
					<span className='art-star' aria-hidden='true'>
						✳
					</span>
					<div className='portrait-frame'>
						<Image
							src='/portfolio.jpg'
							alt='Shokhrukh Nuriddinov'
							fill
							priority
							sizes='(max-width: 768px) 75vw, 360px'
							className='portrait-image'
						/>
						<div className='portrait-caption'>
							<span>Shokhrukh Nuriddinov</span>
							<span>Developer & problem solver</span>
						</div>
					</div>
					<div className='floating-note code-note'>
						<span className='note-icon'>
							<Code2 size={21} />
						</span>
						<div>
							Built with purpose.
							<small>From the first pixel to the last line.</small>
						</div>
					</div>
					<div className='floating-note location-note'>
						<Globe2 size={18} />
						<span>
							Based in Seoul <span aria-hidden='true'>↗</span>
						</span>
					</div>
					<span className='art-coordinate'>37.5665° N · 126.9780° E</span>
				</div>
				<div className='hero-bottom'>
					<span>GOOD DESIGN. CLEAN CODE. REAL IMPACT.</span>
					<a href='#work'>
						Scroll to explore <ArrowDown size={14} />
					</a>
				</div>
			</section>
			<section className='stack-strip' aria-label='Technology stack'>
				<div className='portfolio-container stack-inner'>
					<span className='stack-label'>
						MY EVERYDAY
						<br />
						<strong>TOOLKIT</strong>
					</span>
					<div className='stack-items'>
						{techStack.slice(0, 6).map(tech => (
							<div key={tech.title}>
								<Image src={tech.image} alt='' width={25} height={25} />
								<span>{tech.title}</span>
							</div>
						))}
					</div>
				</div>
			</section>
			<section
				id='about'
				className='about-section portfolio-container'
				data-reveal
			>
				<div className='about-heading'>
					<p className='eyebrow'>01 / THE PERSON BEHIND THE CODE</p>
					<h2>
						Curious mind.
						<br />
						<span className='serif-accent'>Builder at heart.</span>
					</h2>
					<Sparkles size={40} strokeWidth={1} />
				</div>
				<div className='about-copy'>
					<p>
						I’m Shokhrukh, a full stack developer who enjoys connecting
						thoughtful design with practical engineering.
					</p>
					<p>
						From intuitive interfaces to the systems behind them, I build
						efficient, user-focused experiences. Based in Seoul, I’m always
						exploring new technologies and finding better ways to solve
						interesting problems.
					</p>
					<h3 className='mb-3 text-lg'>Skills & tools</h3><div className='project-tags'>{['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Sass', 'TypeScript', 'Express.js', 'Nest.js', 'MongoDB', 'PostgreSQL', 'Prisma', 'REST API', 'Git', 'GitHub', 'Vercel', 'Postman', 'JWT', 'NextAuth', 'Claude.ai', 'Cursor', 'Codex', 'ChatGPT', 'Antigravity'].map(skill => <span key={skill}>{skill}</span>)}</div><div className='experience-row'>
						<h3>Frontend Developer · Sammi agency</h3>
						<p><time dateTime='2023-09'>Sep 2023</time> – <time dateTime='2026-03'>March 2026</time></p>
					</div>
				</div>
			</section>
			<section
				id='work'
				className='portfolio-container work-section'
				data-reveal
			>
				<div className='section-heading'>
					<div>
						<p className='eyebrow'>02 / SELECTED WORK</p>
						<h2>
							A few things I’ve <span className='serif-accent'>built.</span>
						</h2>
					</div>
					<span className='text-link'>{projects.length} projects</span>
				</div>
				<div className='selected-projects'>
					{projects.map(
						(project, index) => (
							<article className='work-card' key={project.id}>
								<a
									href={project.demoUrl}
									target='_blank'
									rel='noreferrer'
									className={`work-image work-image-${index}`}
									aria-label={`Open ${project.title} live demo`}
								>
									<Image
										src={project.image}
										alt={`${project.title} website preview`}
										width={700}
										height={440}
										sizes='(max-width: 640px) 90vw, 45vw'
									/>
									<span className='project-launch'>
										<ArrowUpRight size={20} />
									</span>
								</a>
								<div className='work-meta'>
									<span>0{index + 1} / WEB APPLICATION</span>
									<a
										href={project.githubUrl}
										target='_blank'
										rel='noreferrer'
										aria-label={`${project.title} source code`}
									>
										<Github size={17} />
									</a>
								</div>
								<h3>
									<a href={project.demoUrl} target='_blank' rel='noreferrer'>
										{project.title}
									</a>
								</h3>
								<p className='work-description'>{project.description}</p>
								<div className='project-tags'>
									{project.technologies.slice(0, 3).map(tech => (
										<span key={tech}>{tech}</span>
									))}
								</div>
							</article>
						),
					)}
				</div>
			</section>
			<section id='blogs' className='portfolio-container journal-section' data-reveal>
				<div>
					<p className='eyebrow'>03 / NOTES & IDEAS</p>
					<h2>
						Learning. Building. <span className='serif-accent'>Sharing.</span>
					</h2>
					<p>
						Thoughts on web development, technology, and things I learn along
						the way.
					</p>
				</div>
				{journal}
			</section>
			<section id='contact' className='contact-section' data-reveal>
				<div className='portfolio-container contact-grid'>
					<div>
						<p className='eyebrow'>04 / LET’S CONNECT</p>
						<h2>
							Have something
							<br />
							<span className='serif-accent'>in mind?</span>
							<span className='contact-star' aria-hidden='true'>
								✳
							</span>
						</h2>
						<p>
							I’d love to hear about it. Let’s make something great together.
						</p>
						<a
							href='mailto:shokhrukhnuriddinov@gmail.com'
							className='contact-email'
						>
							shokhrukhnuriddinov@gmail.com <ArrowUpRight size={18} />
						</a><a href='tel:+821021154633' className='contact-email'>+82 10 2115 4633</a>
					</div>
					<div className='contact-form-panel'>
						<h3>Say hello.</h3>
						<ContactForm />
					</div>
				</div>
			</section>
			<footer className='portfolio-container portfolio-footer'>
				<Link href='/' className='brand'>
					shoky<span>.</span>dev
				</Link>
				<span>© {new Date().getFullYear()} Shokhrukh Nuriddinov</span>
				<a href='#home'>Back to top ↑</a>
			</footer>
		</div>
	)
}
