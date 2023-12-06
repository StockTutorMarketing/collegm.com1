import Banner from '@/components/Banner'
import CoursesShowcase from '@/components/CoursesShowcase';
import Header from '@/components/Header'
import Image from 'next/image'
import Marquee from "react-fast-marquee";


export default function Home() {
  return (
    <main className="bg-gray-200">

      <Marquee className='bg-yellow-400 p-5'>
        Get All stock market courses @discounted price 🔥 Avail Live Class Benifits 🔥
      </Marquee>

      <Banner />

      <CoursesShowcase />
    </main>
  )
}
