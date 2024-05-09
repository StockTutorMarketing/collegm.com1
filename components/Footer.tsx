import { getWebInfo } from '@/utils/getWebInfo'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

type Props = {}

async function Footer({ }: Props) {
    const webInfo = await getWebInfo();

    return (
        <footer className='p-5 dark:bg-zinc-800 border-t dark:border-zinc-700'>
            <div className='flex flex-col items-center justify-center max-w-7xl mx-auto'>
                <div className='gap-x-8 gap-y-4 flex flex-wrap items-center justify-between md:justify-around font-medium text-sm dark:text-zinc-100'>
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
                        href={'/privacy'}
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href={'/refund'}
                    >
                        Refund And Cancellation Policy
                    </Link>
                </div>
                <div className='mt-5'>
                    <SocialIcon
                        url={webInfo.twitter}
                        bgColor='transparent'
                        fgColor='grey'
                        target='_blank'
                    />
                    <SocialIcon
                        url={webInfo.linkedIn}
                        bgColor='transparent'
                        fgColor='grey'
                        target='_blank'
                    />
                    <SocialIcon
                        url={webInfo.facebook}
                        bgColor='transparent'
                        fgColor='grey'
                        target='_blank'
                    />
                    <SocialIcon
                        url={webInfo.instagram}
                        bgColor='transparent'
                        fgColor='grey'
                        target='_blank'
                    />
                </div>

                <p className='text-slate-500 dark:text-zinc-300 mt-5 text-sm'>Copyright © {new Date().getFullYear()} - MDM MADHUBANI TECHNOLOGIES PRIVATE LIMITED all rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer