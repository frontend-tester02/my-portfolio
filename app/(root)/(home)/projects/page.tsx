import TopBar from '@/components/shared/tob-bar'
import { Footer } from '../../_components/footer'
import { ProjectGrid } from '@/components/cards/project-grid'
import { projects } from '@/constants/index'

export default function Page() {
	return (
		<>
			<TopBar
				label='Projects'
				description='Here you can see my best projects.'
			/>

			<div className='mx-auto flex flex-col max-w-5xl gap-8 text-center max-md:mt-10 px-4'>
				<ProjectGrid projects={projects} />
			</div>
			<Footer />
		</>
	)
}
