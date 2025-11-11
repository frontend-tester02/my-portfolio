'use client'
import TopBar from '@/components/shared/tob-bar'
import { Footer } from '../../_components/footer'
import { projects } from '@/constants/index'
import { AllProjects } from '@/components/cards/all-projects'

export default function Page() {
	return (
		<>
			<TopBar
				label='Projects'
				description='Here you can see my best projects.'
			/>

			<div className='mx-auto flex flex-col max-w-5xl gap-8 text-center max-md:mt-10 px-4'>
				<AllProjects projects={projects} />
			</div>
			<Footer />
		</>
	)
}
