import Image from 'next/image'
import React from 'react'
import CoursesCard from './CoursesCard';
import getCourses from '@/utils/getCourses';

type Props = {}

async function FeaturedCourses({ }: Props) {

    const courses: any = await getCourses();

    return (
        <div className='max-w-7xl mx-auto p-5 mt-24'>
            <div className='md:text-center'>
                <p className='text-green-800 dark:text-green-600 font-semibold text-sm'>Brand New</p>

                <h2 className='text-3xl lg:text-4xl font-bold text-slate-800 dark:text-zinc-100 mt-6'>Courses</h2>

                <p className='text-slate-700 dark:text-zinc-300 mt-8 md:max-w-md md:text-lg lg:max-w-2xl lg:text-xl mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
            </div>

            <div className='mt-12 gap-5 grid sm:grid-cols-2 lg:grid-cols-3'>
                {courses.map((course: any) => (
                    <CoursesCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedCourses