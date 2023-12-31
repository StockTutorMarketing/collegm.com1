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
        <header className='bg-white dark:bg-zinc-800 border-b dark:border-zinc-700 z-10 sticky top-0'>
            <div className='relative p-5'>
                <div className='flex items-center justify-between max-w-7xl mx-auto'>
                    <div className="three col sm:hidden" onClick={() => openMenu(!menu)}>
                        <div className={`hamburger ${menu ? "is-active" : ''}`} id="hamburger-1">
                            <span className='line dark:!bg-zinc-100'></span>
                            <span className='line dark:!bg-zinc-100'></span>
                            <span className='line dark:!bg-zinc-100'></span>
                        </div>
                        <p className='hidden lg:inline xl:hidden ml-4 font-medium text-fnx-primary'>Menu</p>
                    </div>

                    <Link
                        href={'/'}
                        className='relative h-12 w-32 lg:h-16 lg:w-40 cursor-pointer'
                    >
                        <Image
                            className='absolute max-w-full h-auto object-cover'
                            src={'/images/CollegeGm_Logo.png'}
                            alt=''
                            fill
                        />
                    </Link>

                    {/* Mobile Navbar */}
                    <nav className={`${menu ? "static translate-x-0" : "invisible -translate-x-full"} z-40 bg-white dark:bg-zinc-800 absolute left-0 top-[calc(1px_+_88px)] w-full max-w-full min-h-screen h-full transition-all duration-300`}>
                        <ul className='flex flex-col text-xl p-5 space-y-5 dark:text-zinc-100'>
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
                        <ul className='flex space-x-3 lg:space-x-7 text-lg dark:text-zinc-100'>
                            <Link
                                href={'/'}
                                className={`transition duration-200 ${pathname === '/' ? 'opacity-100 font-medium' : 'opacity-70'}`}

                            >
                                Home
                            </Link>
                            <Link
                                href={'/courses'}
                                className={`transition duration-200 ${pathname === '/courses' ? 'opacity-100 font-medium' : 'opacity-70'}`}
                            >
                                Courses
                            </Link>
                            <Link
                                href={'/about'}
                                className={`transition duration-200 ${pathname === '/about' ? 'opacity-100 font-medium' : 'opacity-70'}`}
                            >
                                About Us
                            </Link>
                            <Link
                                href={'/contact'}
                                className={`transition duration-200 ${pathname === '/contact' ? 'opacity-100 font-medium' : 'opacity-70'}`}
                            >
                                Contact Us
                            </Link>
                        </ul>
                    </nav>

                    <Link
                        href={'/courses'}
                        className='text-xs lg:text-sm button dark:text-zinc-100 dark:border-zinc-400'
                    >
                        Become A Mentor -&gt;
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header