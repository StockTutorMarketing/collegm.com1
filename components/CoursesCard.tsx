import Image from 'next/image'
import React from 'react'

type Props = {}

function CoursesCard({ course }: any) { // any for now
    return (
        <div
            key={course.id}
            className='bg-white rounded-lg cursor-pointer hover:scale-105 transition transform duration-300 ease-out'
        >
            <div className='relative h-64 w-[21rem] sm:h-56 sm:w-72 md:h-[17rem] md:w-[22rem] lg:h-60 lg:w-[19.6rem] xl:w-[25rem] xl:h-[19rem]'>
                <Image
                    className='absolute max-w-full h-auto object-contain rounded-t-lg'
                    src={course.image}
                    alt=''
                    fill
                />
            </div>
            <div className='p-5'>
                <div className=''>
                    <h2 className='text-2xl font-semibold'>{course.title}</h2>
                    <p className='text-xs line-clamp-2'>{course.description}</p>
                </div>
                <div className='mt-5'>
                    <div className='flex space-x-4 items-center'>
                        <div className='relative h-12 w-12'>
                            <Image
                                className='absolute max-w-full h-auto object-cover rounded-full'
                                src={course.authorImage}
                                alt=''
                                fill
                            />
                        </div>

                        <div className=''>
                            <p className='text-sm font-semibold'>{course.authorName}</p>
                            <p className='text-sm text-slate-500'>Joined in {course.joiningDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesCard