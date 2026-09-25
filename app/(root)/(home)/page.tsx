import { Suspense } from 'react'
import Hero from './_components/hero'
import Journal from './_components/journal'

export default function Page() {
 return <Hero journal={<Suspense fallback={<p className='journal-status' role='status'>Loading articles…</p>}><Journal /></Suspense>} />
}
