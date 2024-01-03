import Banner from '@/components/Banner'
import CommunityNumbers from '@/components/CommunityNumbers';
import ExcellentTeachers from '@/components/ExcellentTeachers';
import FeaturedCourses from '@/components/FeaturedCourses';
import Testimonials from '@/components/Testimonials';
import { getWebInfo } from '@/utils/getWebInfo';
import Link from 'next/link';
import Marquee from "react-fast-marquee";

export const revalidate = process.env.NODE_ENV === 'production' ? 3600 : 0 // revalidate at most every hour if running on production

export default async function Home() {

  const webInfo = await getWebInfo();

  return (
    <main className="bg-gray-200 dark:bg-zinc-900">

      <Marquee
        className='bg-yellow-400 p-5 !sticky top-[6.5rem] z-40 dark:text-zinc-800'
        pauseOnHover
      >
        <Link
          href={webInfo?.marqueeLink}
          target='_blank'
        >
          {webInfo?.marqueeText}
        </Link>
      </Marquee>

      <Banner />

      <FeaturedCourses />

      <CommunityNumbers />

      <Testimonials />

      <ExcellentTeachers />
    </main>
  )
}
