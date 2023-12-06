'use client';

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

type Props = {}

function Header({ }: Props) {
    const pathname = usePathname();

    const [menu, openMenu] = useState(false);

    return (
        <header className='p-5 bg-white border-b z-10 relative'>
            <div className='flex items-center justify-between max-w-7xl mx-auto'>

                <div className="three col sm:hidden" onClick={() => openMenu(!menu)}>
                    <div className={`hamburger ${menu ? "is-active" : ''}`} id="hamburger-1">
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </div>
                    <p className='hidden lg:inline xl:hidden ml-4 font-medium text-fnx-primary'>Menu</p>
                </div>

                <div>
                    <div className='relative h-12 w-32 lg:h-16 lg:w-40'>
                        <Image
                            className='absolute max-w-full h-auto object-contain'
                            src={'/images/CollegeGm_Logo.png'}
                            alt=''
                            fill
                        />
                    </div>
                </div>

                {/* Mobile Navbar */}
                <nav className={`${menu ? "static translate-x-0" : "invisible -translate-x-full"} z-40 bg-white absolute left-0 top-[calc(1px_+_88px)] w-full max-w-full min-h-screen h-full transition-all duration-300`}>
                    <ul className='flex flex-col text-xl p-5 space-y-5'>
                        <Link
                            href={'/'}
                            className={`transition duration-200 ${pathname === '/' ? 'opacity-100 font-semibold' : 'opacity-70'}`}
                            onClick={() => openMenu(!menu)}
                        >
                            Home
                        </Link>
                        <Link
                            href={'/courses'}
                            className={`transition duration-200 ${pathname === '/courses' ? 'opacity-100 font-semibold' : 'opacity-70'}`}
                            onClick={() => openMenu(!menu)}
                        >
                            Courses
                        </Link>
                        <Link
                            href={'/about'}
                            className={`transition duration-200 ${pathname === '/about' ? 'opacity-100 font-semibold' : 'opacity-70'}`}
                            onClick={() => openMenu(!menu)}
                        >
                            About Us
                        </Link>
                        <Link
                            href={'/contact'}
                            className={`transition duration-200 ${pathname === '/contact' ? 'opacity-100 font-semibold' : 'opacity-70'}`}
                            onClick={() => openMenu(!menu)}
                        >
                            Contact Us
                        </Link>
                    </ul>
                </nav>

                {/* Desktop Navbar */}
                <nav className='hidden sm:inline'>
                    <ul className='flex space-x-3 lg:space-x-7 text-lg'>
                        <Link
                            href={'/'}
                            className={`transition duration-200 ${pathname === '/' ? 'opacity-100 font-semibold' : 'opacity-70'}`}

                        >
                            Home
                        </Link>
                        <Link
                            href={'/courses'}
                            className={`transition duration-200 ${pathname === '/courses' ? 'opacity-100 font-semibold' : 'opacity-70'}`}
                        >
                            Courses
                        </Link>
                        <Link
                            href={'/about'}
                            className={`transition duration-200 ${pathname === '/about' ? 'opacity-100 font-semibold' : 'opacity-70'}`}
                        >
                            About Us
                        </Link>
                        <Link
                            href={'/contact'}
                            className={`transition duration-200 ${pathname === '/contact' ? 'opacity-100 font-semibold' : 'opacity-70'}`}
                        >
                            Contact Us
                        </Link>
                    </ul>
                </nav>

                <Link
                    href={'/courses'}
                    className='text-sm button'
                >
                    Become A Mentor -&gt;
                </Link>
            </div>
        </header>
    )
}

export default Header