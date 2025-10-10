import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function NotFound() {
	return (
		<>
			<Header />
			<main className='flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-5 pt-20'>
				<div className='text-center space-y-6'>
					<h1 className='text-[8rem] md:text-[12rem] font-bold leading-none'>404</h1>
					<div className='border-t border-white pt-6 space-y-4'>
						<h2 className='text-2xl md:text-4xl font-normal'>This page could not be found.</h2>
						<Link 
							href='/' 
							className='inline-block text-lg md:text-2xl hover:text-gray-500 focus:text-white transition-colors underline'
						>
							← Back to Home
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

