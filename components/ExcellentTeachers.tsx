import Image from 'next/image'
import React from 'react'

type Props = {}

function ExcellentTeachers({ }: Props) {

    const teachers = [
        {
            id: 1,
            name: 'Aseem Singhal',
            field: 'Automatic Trading Using Python',
            image: '/images/author_image.jpg',
        },
        {
            id: 2,
            name: 'Aseem Singhal',
            field: 'Automatic Trading Using Python',
            image: '/images/author_image.jpg',
        },
        {
            id: 3,
            name: 'Aseem Singhal',
            field: 'Automatic Trading Using Python',
            image: '/images/author_image.jpg',
        },
        {
            id: 4,
            name: 'Aseem Singhal',
            field: 'Automatic Trading Using Python',
            image: '/images/author_image.jpg',
        },
        {
            id: 5,
            name: 'Aseem Singhal',
            field: 'Automatic Trading Using Python',
            image: '/images/author_image.jpg',
        },
        {
            id: 6,
            name: 'Aseem Singhal',
            field: 'Automatic Trading Using Python',
            image: '/images/author_image.jpg',
        },
        {
            id: 7,
            name: 'Aseem Singhal',
            field: 'Automatic Trading Using Python',
            image: '/images/author_image.jpg',
        },
    ]

    return (
        <div className='max-w-7xl mx-auto p-5 pb-24'>
            <div className='md:text-center'>
                <p className='text-green-800 font-semibold text-sm uppercase'>EXCELLENT</p>

                <h2 className='text-3xl lg:text-4xl font-bold text-slate-800 mt-6'>Teachers</h2>

                <p className='text-slate-700 mt-8 md:max-w-md md:text-lg lg:max-w-2xl lg:text-xl mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
            </div>
            <div className='grid justify-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-5 mt-10'>
                {teachers.map((teacher) => (
                    <div key={teacher.id} className='flex flex-col'>
                        <div className='relative h-36 w-36 md:h-52 md:w-52 lg:h-60 lg:w-60'>
                            <Image
                                className='absolute max-w-full h-auto object-cover rounded-lg'
                                src={teacher.image}
                                alt=''
                                fill
                            />
                        </div>
                        <div className='w-36 lg:w-full space-y-2 mt-3 text-left'>
                            <h3 className='font-bold lg:text-lg'>{teacher.name}</h3>
                            <p className='text-xs lg:text-sm'>{teacher.field}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ExcellentTeachers