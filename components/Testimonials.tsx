import { urlFor } from '@/sanity';
import { Testimonials } from '@/typings';
import getTestimonials from '@/utils/getTestimonials'
import Image from 'next/image'
import React from 'react'

type Props = {}

async function Testimonials({ }: Props) {

    const testimonials: Testimonials[] = await getTestimonials();

    return (
        <div className='mx-auto p-5 max-w-7xl'>
            <div className='md:text-center'>
                <h2 className='text-3xl lg:text-4xl font-bold text-slate-800 dark:text-zinc-100 mt-6'>Testimonials</h2>

                {/* <p className='text-slate-700 dark:text-zinc-300 mt-8 md:max-w-md md:text-lg lg:max-w-2xl lg:text-xl mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p> */}
            </div>
            <div className='flex items-start justify-between overflow-x-scroll space-x-5 scrollbar-thin scrollbar-thumb-slate-800 dark:scrollbar-thumb-zinc-100 scrollbar-track-neutral-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md'>
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial._id}
                        className='flex items-start justify-between mt-12 mb-5 space-x-4 flex-shrink-0 max-w-xs sm:max-w-sm md:max-w-md'
                    >
                        <div className='relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0'>
                            <Image
                                className='absolute max-w-full h-auto object-cover rounded-full' src={urlFor(testimonial.image).url()}
                                alt=''
                                fill
                            />

                        </div>
                        <div className='text-center bg-white dark:bg-zinc-700 rounded-xl p-2 space-y-3'>
                            <h3 className='lg:text-lg font-semibold dark:text-zinc-100'>{testimonial.name}</h3>
                            <p className='text-slate-800 dark:text-zinc-200 text-sm lg:text-base'>{testimonial.statement}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials