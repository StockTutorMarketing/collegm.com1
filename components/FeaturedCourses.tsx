import CoursesCard from './CoursesCard';
import getCourses from '@/utils/getCourses';
import ClientSideRoute from './ClientSideRoute';
import { Courses } from '@/typings';
import Link from 'next/link';

type Props = {}

async function FeaturedCourses({ }: Props) {

    const courses: Courses[] = await getCourses();

    return (
        <div className='max-w-7xl mx-auto p-5 mt-24'>
            <div className='md:text-left'>
                <p className='text-green-800 dark:text-green-600 font-semibold'>Live</p>

                <h2 className='text-3xl lg:text-4xl font-bold text-slate-800 dark:text-zinc-100 mt-6'>Courses</h2>

                <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between'>
                    <p className='text-slate-700 dark:text-zinc-300 mt-8 md:max-w-md md:text-lg lg:max-w-2xl lg:text-xl'>Elevate your stock market trading and investing expertise through our expert-led courses designed for all skill levels. Embark on your learning journey today!</p>

                    <Link
                        className='button bg-white dark:bg-zinc-800 shadow-sm border dark:border-zinc-400 w-fit mt-5 lg:mt-0'
                        href={'/courses'}
                    >
                        Explore Courses -&gt;
                    </Link>
                </div>
            </div>

            <div className='mt-12 gap-5 grid sm:grid-cols-2 lg:grid-cols-3'>
                {courses.map((course) => {
                    if (course.isFeaturedCourse)
                        return (
                            <ClientSideRoute key={course._id} route={`courses/${course.slug.current}`}>
                                <CoursesCard course={course} />
                            </ClientSideRoute>
                        )
                })}
            </div>
        </div>
    )
}

export default FeaturedCourses