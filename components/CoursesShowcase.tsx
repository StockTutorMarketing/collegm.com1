import Image from 'next/image'
import React from 'react'

type Props = {}

function CoursesShowcase({ }: Props) {

    const coursesCard = [
        {
            id: 1,
            title: 'Forex Trading',
            image: '/images/course_image.webp',
            description: '6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc. 6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc.',
            authorName: 'Mohd Saif',
            joiningDate: 'August 2014',
            authorImage: '/images/author_image.jpg',
        },
        {
            id: 2,
            title: 'Forex Trading',
            image: '/images/course_image.webp',
            description: '6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc. 6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc.',
            authorName: 'Mohd Saif',
            joiningDate: 'August 2014',
            authorImage: '/images/author_image.jpg',
        },
        {
            id: 3,
            title: 'Forex Trading',
            image: '/images/course_image.webp',
            description: '6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc. 6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc.',
            authorName: 'Mohd Saif',
            joiningDate: 'August 2014',
            authorImage: '/images/author_image.jpg',
        },
        {
            id: 4,
            title: 'Forex Trading',
            image: '/images/course_image.webp',
            description: '6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc. 6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc.',
            authorName: 'Mohd Saif',
            joiningDate: 'August 2014',
            authorImage: '/images/author_image.jpg',
        },
    ];

    return (
        <div className='max-w-7xl mx-auto p-5 mt-24'>
            <div className='md:text-center'>
                <p className='text-green-800 font-semibold text-sm'>Brand New</p>

                <h2 className='text-3xl font-semibold text-slate-800 mt-6'>Courses</h2>

                <p className='text-slate-700 mt-8 md:max-w-md md:text-lg lg:max-w-2xl lg:text-xl mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
            </div>

            <div className='mt-12 gap-5 grid sm:grid-cols-2 lg:grid-cols-3'>
                {coursesCard.map((course) => (
                    <div
                        key={course.id}
                        className='bg-white rounded-lg'
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
                ))}
            </div>
        </div>
    )
}

export default CoursesShowcase