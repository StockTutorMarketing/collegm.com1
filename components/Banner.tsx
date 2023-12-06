'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

function Banner({ }: Props) {

    const [text] = useTypewriter({
        words: [
            "Options Trading",
            "Price Action",
            "Nifty / BankNifty",
            "Technical Analysis",
            "Fundamental Analysis",
            "Multibagger Stocks",
            "Forex Trading",
            "Swing Trading",
            "Intraday Trading",
            "Algo Trading",
            "No Code Algo Trading",
            "Ichimoku",
            "Candlesticks & Pattern",
            "Investing",
            "Stock & IPO",
            "F&O Trading",
            "Systematic Trading",
            "Indicators",
            "Hekin-Ashi",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className=''>
                <div className='flex flex-col md:items-center md:flex-row md:justify-between'>
                    <h1 className='text-5xl lg:text-8xl leading-tight lg:leading-snug font-semibold overflow-hidden'>
                        Learn
                        <br />
                        <span className='text-[#5280e2]'>{text}</span>
                        <Cursor cursorColor='#5280e2' />
                    </h1>

                    <div className='relative h-80 w-80 lg:h-[25rem] lg:w-[25rem] flex-shrink-0'>
                        <Image
                            className='absolute max-w-full h-auto object-contain'
                            src={'/images/banner_image.webp'}
                            alt=''
                            fill
                        />
                    </div>
                </div>

                <div className='my-8 space-y-5 lg:flex items-center justify-between lg:space-y-0'>
                    <div className='lg:max-w-xs'>
                        <h3 className='text-lg text-slate-800 font-semibold text-uppercase'>ACTIVE COMMUNITY</h3>
                        <p className='text-slate-800 text-sm'>
                            Engagement and Learning Community is the cornerstone of learning online. Going through a course alongside a group of peers is the best way to achieve transformation.
                        </p>
                    </div>
                    <div className='lg:max-w-xs'>
                        <h3 className='text-lg text-slate-800 font-semibold text-uppercase'>EXPERT</h3>
                        <p className='text-slate-800 text-sm'>
                            Learn Future Relevant Skills from Worlds best Experts Learn 21st century relevant skills for grabbing the next big opportunity in your life and career.
                        </p>
                    </div>
                    <div className='lg:max-w-xs'>
                        <h3 className='text-lg text-slate-800 font-semibold text-uppercase'>LIVE & ACTIVE LEARNING</h3>
                        <p className='text-slate-800 text-sm'>
                            The best way to learn is by doing. Engage in hands on projects and assignments to practically implement what you learn.
                        </p>
                    </div>
                </div>
                <Link
                    className='button bg-white shadow-sm border w-fit'
                    href={'/courses'}
                >
                    Explorer Courses -&gt;
                </Link>
            </div>
        </div >
    )
}

export default Banner