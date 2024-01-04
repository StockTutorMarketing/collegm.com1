import { urlFor } from '@/sanity'
import { Courses } from '@/typings'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

type Props = {
    course: Courses
}

function CoursesCard({ course }: Props) {

    return (
        <div
            key={course._id}
            className='bg-white rounded-lg cursor-pointer hover:scale-105 transition transform duration-300 ease-out dark:bg-zinc-800 border dark:border-zinc-500'
        >
            <div className='relative h-64 w-[21rem] sm:h-56 sm:w-72 md:h-[17rem] md:w-[22rem] lg:h-60 lg:w-[19.6rem] xl:w-[25rem] xl:h-[19rem]'>
                <Image
                    className='absolute max-w-full h-auto object-cover rounded-t-lg'
                    src={urlFor(course?.thumbnail).url()}
                    alt=''
                    fill
                />
            </div>
            <div className='p-5'>
                <div className='dark:text-zinc-100'>
                    <h2 className='text-2xl font-semibold lg:truncate'>{course.title}</h2>
                    {/* <p className='text-xs line-clamp-2'>{course.description}</p> */}
                </div>
                <div className='mt-5'>
                    <div className='flex space-x-4 items-center'>
                        {/* <div className='relative h-12 w-12'>
                            <Image
                                className='absolute max-w-full h-auto object-cover rounded-full'
                                src={urlFor(course?.teachers?.image).url()}
                                alt=''
                                fill
                            />
                        </div> */}

                        <div className='flex items-center justify-between w-full'>
                            <div className='dark:text-zinc-100'>
                                <p className='text-sm font-semibold'>{course?.teachers?.name}</p>
                                <p className='text-sm text-slate-500 dark:text-zinc-100'>{course?.teachers?.joining}</p>
                            </div>
                            <div className='flex flex-col items-end'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 h-5 w-5 mr-1' />
                                    <p className='font-semibold'>{course?.rating}</p>
                                </div>
                                <div className='flex items-center space-x-2 text-sm lg:text-base'>
                                    {course.actualPrice == undefined
                                        ? null
                                        :
                                        <span className='lg:text-xl'>
                                            ₹<s>{course?.actualPrice}</s>
                                        </span>
                                    }
                                    <p className='font-semibold'>₹ {course?.discountedPrice}</p>
                                    <p className='text-red-500'>(50% OFF)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesCard