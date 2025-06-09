import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import { Footer } from './_components/footer'

const Layout = ({ children }: ChildProps) => {
	return (
		<div className=''>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default Layout
