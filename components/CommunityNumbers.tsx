import React from 'react'

type Props = {}

function CommunityNumbers({ }: Props) {
    return (
        <div className='max-w-3xl mx-auto p-5'>
            <div className='lg:py-10 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-zinc-700 dark:border dark:border-zinc-500 group hover:shadow-lg transition transform duration-300 ease-out'>
                <div className='max-w-xs text-center px-12 py-8 dark:text-zinc-100'>
                    <h1 className='text-5xl font-bold'>15K</h1>
                    <p>Strong Learners Community.</p>
                </div>

                <div aria-hidden='true' className='h-1.5 w-56 md:h-24 xl:h-32 md:w-1.5 bg-gray-300/70 rounded-full group-hover:scale-110 group-hover:bg-gray-300/100 transition transform duration-300 ease-out' />

                <div className='max-w-xs text-center px-12 py-8 dark:text-zinc-100'>
                    <h1 className='text-5xl font-bold'>106.5K</h1>
                    <p>Hours of Live Classes Delivered.</p>
                </div>

                <div aria-hidden='true' className='h-1.5 w-56 md:h-24 xl:h-32 md:w-1.5 bg-gray-300/70 rounded-full group-hover:scale-110 group-hover:bg-gray-300/100 transition transform duration-300 ease-out' />

                <div className='max-w-xs text-center px-12 py-8 dark:text-zinc-100'>
                    <h1 className='text-5xl font-bold'>4.5+</h1>
                    <p>Average Student Rating.</p>
                </div>
            </div>
        </div>
    )
}

export default CommunityNumbers