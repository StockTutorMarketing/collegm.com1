import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TimelineContainer from '@/components/TimelineContainer'
import { groq } from 'next-sanity'
import { sanityClient, urlFor } from '@/sanity'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/RichTextComponents'
import { Courses } from '@/typings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons'
import { getWebInfo } from '@/utils/getWebInfo'

type Props = {
    params: {
        slug: string;
    }
}

export const revalidate = 0 // revalidate at most every hour

async function CourseDetailsPage({ params: { slug } }: Props) {
    const query = groq`
    *[_type == 'courses' && slug.current == $slug][0] {
        ...,
        teachers[0] ->
    }
`;
    const course: Courses = await sanityClient.fetch(query, { slug })
    const webInfo = await getWebInfo();

    return (
        <div className='bg-gray-200 dark:bg-zinc-900'>
            <div className='max-w-7xl mx-auto p-5 flex flex-col md:flex-row-reverse justify-between'>
                <div className='p-4 bg-white dark:bg-zinc-800 rounded-lg md:max-w-sm h-fit dark:border dark:border-zinc-700'>
                    <div className='relative h-52 w-[19rem] sm:h-52 sm:w-80 xl:h-64 xl:w-[22rem]'>
                        <Image
                            className='absolute max-w-full h-auto object-cover rounded-lg'
                            src={urlFor(course?.teachers?.image).url()}
                            alt=''
                            fill
                        />
                    </div>

                    <div className='mt-5 text-slate-800 dark:text-zinc-100'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-lg font-semibold'>{course?.title}</h4>

                            {course?.rating === null &&
                                <p className='flex items-center'>
                                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 h-6 w-6 mr-1' />
                                    {course?.rating}
                                </p>
                            }
                        </div>

                        <p className='mt-4 text-2xl font-medium'>
                            ₹{course?.discountedPrice.toLocaleString()}
                            {" "}

                            {course?.actualPrice === null &&
                                <span className='text-xl'>
                                    {" "}
                                    ₹<s>{course?.actualPrice}</s>
                                </span>
                            }
                        </p>

                        <div className='mt-5 text-lg'>
                            {course?.startingDate === null &&
                                <p className=''>
                                    Starts on:
                                    {" "}
                                    <span className='font-medium'>
                                        {course?.startingDate}
                                    </span>
                                </p>
                            }
                            <p className=''>
                                Duration:
                                {" "}
                                <span className='font-medium'>
                                    {course?.duration}
                                    {" "}
                                    Days
                                </span>
                            </p>
                        </div>

                        <button
                            className='py-3 w-full mt-8 bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800 rounded-lg font-medium drop-shadow-lg active:scale-95 transition transform ease-out duration-100'
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>

                <div className='flex flex-col flex-[0.9_1_0%] text-slate-800 dark:text-zinc-100'>
                    <div className='mt-10'>
                        <h1 className='text-3xl font-semibold'>{course?.title}</h1>

                        <p className='mt-2 text-sm '>{course?.description}</p>

                        {course?.rating === null &&
                            <p className='flex items-center mt-4'>
                                <FontAwesomeIcon icon={faStar} className='text-yellow-500 h-6 w-6 mr-1' />
                                {course?.rating}
                            </p>
                        }

                        <p className='mt-2 text-2xl font-medium'>
                            ₹{course?.discountedPrice.toLocaleString()}
                            {" "}
                            {course?.actualPrice === null &&
                                <span className='text-xl'>
                                    {" "}
                                    ₹<s>{course?.actualPrice}</s>
                                </span>
                            }
                        </p>

                        <div className='mt-5 text-lg'>
                            {course?.startingDate === null &&
                                <p className=''>
                                    Starts on:
                                    {" "}
                                    <span className='font-medium'>
                                        {course?.startingDate}
                                    </span>
                                </p>
                            }
                            <p className=''>
                                Duration:
                                {" "}
                                <span className='font-medium'>
                                    {course?.duration}
                                    {" "}
                                    Days
                                </span>
                            </p>
                        </div>

                        <button
                            className='py-3 w-full lg:w-80 mt-8 bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800 rounded-lg font-medium drop-shadow-lg active:scale-95 transition transform ease-out duration-100'
                        >
                            Enroll Now
                        </button>
                    </div>

                    <div className='mt-10 w-full'>
                        <Tabs defaultValue="overview" className="">
                            <TabsList className='flex justify-around '>
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                                <TabsTrigger value="help">Help</TabsTrigger>
                            </TabsList>

                            {/* Overview Tab Menu */}
                            <TabsContent value="overview" className='mt-4 space-y-6 text-slate-800 dark:text-zinc-100'>
                                <PortableText
                                    value={course?.overview}
                                    components={RichTextComponents}
                                />

                            </TabsContent>

                            {/* Curriculum Tab Menu */}

                            <TabsContent value="curriculum">
                                {/* Do Not Switch the component -- Needs 'use client' */}
                                <TimelineContainer values={course?.cirriculum} />
                            </TabsContent>

                            {/* Instructor Tab Menu */}
                            <TabsContent value="instructor" className='flex flex-col lg:flex-row items-center justify-center mt-5 lg:gap-x-5'>
                                <div className='relative h-52 w-[21rem] flex-shrink-0'>
                                    <Image
                                        className='absolute max-w-full h-auto object-cover rounded-lg'
                                        src={urlFor(course?.teachers?.image).url()}
                                        alt=''
                                        fill
                                    />
                                </div>
                                <div className=' mt-3 text-slate-800 dark:text-zinc-100'>
                                    <h1 className='text-2xl font-medium'>{course?.teachers?.name}</h1>

                                    <p className='text-sm mt-2'>
                                        {course?.teachers?.bio}
                                    </p>
                                </div>
                            </TabsContent>

                            {/* Help Tab Menu */}

                            <TabsContent value="help" className='text-slate-800 dark:text-zinc-100'>
                                <h1 className='text-2xl font-semibold'>For more details about the course</h1>

                                <p className='text-sm mt-2'>If you have any question regarding the course and couldnt find the answer on this page, feel free to contact us</p>

                                <div className='flex flex-col'>
                                    <div className='relative h-64 w-64'>
                                        <Image
                                            className='absolute max-w-full h-auto object-contain'
                                            src={'/images/help_image.png'}
                                            alt=''
                                            fill
                                        />
                                    </div>

                                    <div className='space-y-3'>
                                        <h3 className='text-2xl font-semibold'>Message us on Whatsapp</h3>
                                        <button className='py-1.5 w-full bg-green-500 rounded-lg text-white font-medium'>
                                            <SocialIcon
                                                style={{ height: 40, width: 40, marginRight: 15 }}
                                                url={`https://wa.me/${webInfo.whatsappNumber}?text=I'm%20interested%20in%20your%20car%20for%20sale`}
                                                network='whatsapp'
                                            />
                                            Chat on Whatsapp
                                        </button>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailsPage