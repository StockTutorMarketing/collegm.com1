import { urlFor } from '@/sanity';
import { Teachers } from '@/typings';
import getTeachers from '@/utils/getTeachers';
import Image from 'next/image'
import React from 'react'

type Props = {}

async function ExcellentTeachers({ }: Props) {

    const teachers: Teachers[] = await getTeachers();

    return (
        <div className='max-w-7xl mx-auto p-5 pb-24'>
            <div className='md:text-center'>
                <p className='text-green-800 dark:text-green-600 font-semibold text-sm uppercase'>EXCELLENT</p>

                <h2 className='text-3xl lg:text-4xl font-bold text-slate-800 dark:text-zinc-100 mt-6'>Teachers</h2>

                <p className='text-slate-700 dark:text-zinc-300 mt-8 md:max-w-md md:text-lg lg:max-w-2xl lg:text-xl mx-auto'>Learn Future Related Skills from Worlds <span className='underline decoration-zinc-800 dark:decoration-zinc-100'>best experts</span>. Learn 21st century relevant skills for grabbing the next big opportunity in your life and career.</p>
            </div>
            <div className='grid justify-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-5 mt-10'>
                {teachers.map((teacher) => (
                    <div key={teacher?._id} className='flex flex-col'>
                        <div className='relative h-36 w-36 md:h-52 md:w-52 lg:h-60 lg:w-60'>
                            <Image
                                className='absolute max-w-full h-auto object-cover rounded-lg'
                                src={urlFor(teacher?.image).url()}
                                alt=''
                                fill
                            />
                        </div>
                        <div className='w-36 lg:w-full mt-3 text-left'>
                            <h3 className='font-bold lg:text-lg dark:text-zinc-100'>{teacher?.name}</h3>
                            <p className='text-xs lg:text-sm dark:text-zinc-200 mt-0.5'>{teacher?.skill}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExcellentTeachers