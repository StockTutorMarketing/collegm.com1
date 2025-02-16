import ClientSideRoute from '@/components/ClientSideRoute';
import CoursesCard from '@/components/CoursesCard'
import { Courses } from '@/typings';
import getCourses from '@/utils/getCourses';

type Props = {}

export const revalidate = process.env.NODE_ENV === 'production' ? 3600 : 0 // revalidate at most every hour if running on production

export default async function Courses({ }: Props) {
  const courses: Courses[] = await getCourses();

  return (
    <main className='bg-gray-200 dark:bg-zinc-900 py-12'>
      <div className='max-w-7xl mx-auto p-5'>
        <div className='gap-x-5 gap-y-8 grid sm:grid-cols-2 lg:grid-cols-3'>
          {courses.map((course) => (
            <ClientSideRoute key={course._id} route={`courses/${course.slug.current}`}>
              <CoursesCard course={course} />
            </ClientSideRoute>
          ))}
        </div>
      </div>
    </main>
  )
}