import ContactForm from '@/components/forms/contact'
import TopBar from '@/components/shared/tob-bar'
import { Mail, Phone } from 'lucide-react'
import { Footer } from '../../_components/footer'

async function Page() {
	return (
		<>
			<TopBar label='Contact' />

			<div className='container mx-auto max-w-5xl min-h-[65vh] px-4'>
				<div className='mt-6 pt-10 grid grid-cols-2 gap-4 max-md:grid-cols-1'>
					<div className='flex flex-col'>
						<h1 className='font-spaceGrotesk text-4xl'>Touch base with us</h1>
						<p className='mt-2 text-muted-foreground'>
							We are here to help you. If you have any questions, feel free to
							contact us.
						</p>

						<div className='mt-12 flex items-center gap-3'>
							<Mail className='size-4' />
							<p className='text-sm'>shokhrukhnuriddinov@gmail.com</p>
						</div>
						<div className='flex items-center gap-2'>
							<Phone className='size-4' />
							<p className='text-sm'>+82 10 2115 4633</p>
						</div>
					</div>

					<div>
						<h1 className='mb-2 font-spaceGrotesk text-4xl'>Contact form</h1>
						<ContactForm />
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Page
