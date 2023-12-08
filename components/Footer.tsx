import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className='max-w-7xl mx-auto p-5'>
            <div className='flex flex-col items-center justify-center'>
                <div className='gap-x-8 gap-y-4 flex flex-wrap items-center justify-between md:justify-around font-medium'>
                    <Link
                        href={'/'}
                    >
                        Home
                    </Link>
                    <Link
                        href={'/courses'}
                    >
                        Courses
                    </Link>
                    <Link
                        href={'/about'}
                    >
                        About Us
                    </Link>
                    <Link
                        href={'/terms-condition'}
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        href={'/privacy-policy'}
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href={'/refund-cancellation-policy'}
                    >
                        Refund And Cancellation Policy
                    </Link>
                </div>
                <div className='mt-5'>
                    <SocialIcon url='https://twitter.com/ColleGm_' bgColor='transparent' fgColor='black' />
                    <SocialIcon url='https://www.linkedin.com/company/collegm/' bgColor='transparent' fgColor='black' />
                    <SocialIcon url='https://www.facebook.com/people/ColleGm/100089120164013/' bgColor='transparent' fgColor='black' />
                    <SocialIcon url='https://www.instagram.com/collegm_official/?next=%2Fcollegm_bx%2F' bgColor='transparent' fgColor='black' />
                </div>

                <p className='text-slate-500 mt-5'>© {new Date().getFullYear()} Collegm, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer