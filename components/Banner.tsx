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
                    <h1 className='text-5xl lg:text-8xl leading-tight font-bold lg:leading-snug overflow-hidden dark:text-zinc-100'>
                        Learn
                        <br />
                        <span className='text-[#5280e2] font-bold'>{text}</span>
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
                    <div className='lg:max-w-xs text-slate-800 dark:text-zinc-100'>
                        <h3 className='text-lg font-semibold text-uppercase'>1. Live Learning Experience</h3>
                        <p className=' text-sm'>
                            - Dive into real-time, interactive classes led by industry experts to enhance your understanding of financial markets.
                        </p>
                    </div>
                    <div className='lg:max-w-xs text-slate-800 dark:text-zinc-100'>
                        <h3 className='text-lg font-semibold text-uppercase'>2. Community Connection:</h3>
                        <p className='text-sm'>
                            - Join a vibrant communities of like-minded individuals, fostering collaboration, idea exchange, and continuous learning.
                        </p>
                    </div>
                    <div className='lg:max-w-xs text-slate-800 dark:text-zinc-100'>
                        <h3 className='text-lg font-semibold text-uppercase'>3. Expert-Led Courses:</h3>
                        <p className='text-sm'>
                            - Gain insights from seasoned professionals with hands-on market experience, guiding you through practical strategies for success.
                        </p>
                    </div>
                </div>
                <Link
                    className='button bg-white shadow-sm border w-fit'
                    href={'/courses'}
                >
                    Explore Courses -&gt;
                </Link>
            </div>
        </div >
    )
}

export default Banner