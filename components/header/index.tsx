'use client'

// Tools
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Marquee from 'react-smooth-marquee' 
import { usePlausible } from 'next-plausible'

const Header: React.FC = () => {
  const pathname = usePathname() 
  const plausible = usePlausible()

  return (
    <header className="p-5 absolute z-50 w-full font-bold text-base md:text-4xl text-white">
      <div className="flex border-b border-white">
        {/* Home Link */}
        <Link href="/" aria-label="Navigate to the home page" className="mb-1 no-underline md:mb-0 hover:text-gray-500 focus:text-white">
          Jacob Byers
        </Link>

        {/* Marquee */}
        <div className="mx-auto w-[40rem] ticker-wrapper hidden md:block text-center text-3xl font-light">
          <Marquee velocity={0.04}>
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i}>
                Available {new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString('default', { month: 'long' })}.&nbsp;&nbsp;
              </span>
            ))}
          </Marquee>
        </div>

        {/* Navigation Links */}
        <nav className="flex ml-auto space-x-6 md:w-auto">
          <Link href="/" className={`${pathname === '/' ? 'bigDot' : ''} relative no-underline hover:text-gray-500 focus:text-white`}>
            Work
          </Link>
          <Link href="/about" className={`${pathname === '/about' ? 'bigDot' : ''} relative no-underline hover:text-gray-500 focus:text-white`}>
            About
          </Link>
          <a
            href="https://calendly.com/ohmni/lets-talk"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-gray-500 focus:text-white"
            onClick={() => plausible('Calendly Click')}
          >
            Book Call
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header