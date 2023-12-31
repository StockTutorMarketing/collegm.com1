import Banner from '@/components/Banner'
import CommunityNumbers from '@/components/CommunityNumbers';
import ExcellentTeachers from '@/components/ExcellentTeachers';
import FeaturedCourses from '@/components/FeaturedCourses';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import Marquee from "react-fast-marquee";

export const revalidate = 3600 // revalidate at most every hour

export default function Home() {
  return (
    <main className="bg-gray-200 dark:bg-zinc-900">

      <Marquee
        className='bg-yellow-400 p-5 !sticky top-[6.5rem] z-40'
        pauseOnHover
      >
        Get All stock market courses @discounted price. Download our app from Play Store Now and 🔥 Avail Live Class Benefits 🔥
        <Link
          href={'https://clpgriffin.page.link/SpHw'}
          className='underline'
          target='_blank'
        >
          Click Here
        </Link>
        &nbsp;to download
      </Marquee>

      <Banner />

      <FeaturedCourses />

      <CommunityNumbers />

      <Testimonials />

      <ExcellentTeachers />
    </main>
  )
}
