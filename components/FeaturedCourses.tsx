import Image from 'next/image'
import React from 'react'
import CoursesCard from './CoursesCard';

type Props = {}

function FeaturedCourses({ }: Props) {

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
    ];

    return (
        <div className='max-w-7xl mx-auto p-5 mt-24'>
            <div className='md:text-center'>
                <p className='text-green-800 font-semibold text-sm'>Brand New</p>

                <h2 className='text-3xl lg:text-4xl font-bold text-slate-800 mt-6'>Courses</h2>

                <p className='text-slate-700 mt-8 md:max-w-md md:text-lg lg:max-w-2xl lg:text-xl mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
            </div>

            <div className='mt-12 gap-5 grid sm:grid-cols-2 lg:grid-cols-3'>
                {coursesCard.map((course) => (
                    <CoursesCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedCourses