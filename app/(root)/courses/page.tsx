import CoursesCard from '@/components/CoursesCard'
import React from 'react'

type Props = {}

export default function Courses({ }: Props) {

  const courses = [
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
    {
      id: 5,
      title: 'Forex Trading',
      image: '/images/course_image.webp',
      description: '6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc. 6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc.',
      authorName: 'Mohd Saif',
      joiningDate: 'August 2014',
      authorImage: '/images/author_image.jpg',
    },
    {
      id: 6,
      title: 'Forex Trading',
      image: '/images/course_image.webp',
      description: '6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc. 6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc.',
      authorName: 'Mohd Saif',
      joiningDate: 'August 2014',
      authorImage: '/images/author_image.jpg',
    },
    {
      id: 7,
      title: 'Forex Trading',
      image: '/images/course_image.webp',
      description: '6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc. 6+ year trading experience International Mentor. Top Students are from USA, Canda, U.K, Egypt etc.',
      authorName: 'Mohd Saif',
      joiningDate: 'August 2014',
      authorImage: '/images/author_image.jpg',
    },
  ];

  return (
    <main className='bg-gray-200 dark:bg-zinc-900 py-12'>
      <div className='max-w-7xl mx-auto p-5'>
        <div className='gap-x-5 gap-y-8 grid sm:grid-cols-2 lg:grid-cols-3'>
          {courses.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </main>
  )
}