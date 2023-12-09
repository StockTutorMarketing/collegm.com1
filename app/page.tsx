import Banner from '@/components/Banner'
import CommunityNumbers from '@/components/CommunityNumbers';
import ExcellentTeachers from '@/components/ExcellentTeachers';
import FeaturedCourses from '@/components/FeaturedCourses';
import Testimonials from '@/components/Testimonials';
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="bg-gray-200 dark:bg-zinc-900">

      <Marquee className='bg-yellow-400 p-5'>
        Get All stock market courses @discounted price 🔥 Avail Live Class Benifits 🔥
      </Marquee>

      <Banner />

      <FeaturedCourses />

      <CommunityNumbers />
      
      <Testimonials />

      <ExcellentTeachers />
    </main>
  )
}
