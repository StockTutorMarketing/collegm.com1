import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { AcademicCapIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TimelineContainer from '@/components/TimelineContainer'

type Props = {}

function CourseDetails({ }: Props) {
    return (
        <div className='bg-gray-200 dark:bg-zinc-900'>
            <div className='max-w-7xl mx-auto p-5 flex flex-col md:flex-row-reverse justify-between'>
                <div className='p-4 bg-white dark:bg-zinc-800 rounded-lg md:max-w-sm h-fit dark:border dark:border-zinc-700'>
                    <div className='relative h-52 w-[19rem] sm:h-52 sm:w-80 xl:h-64 xl:w-[22rem]'>
                        <Image
                            className='absolute max-w-full h-auto object-cover rounded-lg'
                            src={'/images/author_image.jpg'}
                            alt=''
                            fill
                        />
                    </div>

                    <div className='mt-5 text-slate-800 dark:text-zinc-100'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-lg font-semibold'>Options Trading</h4>

                            <p className='flex items-center'>
                                <StarIcon className='h-6 w-6 mr-2 text-yellow-500' />
                                5.0
                            </p>
                        </div>

                        <p className='mt-4 text-2xl font-medium'>
                            ₹49
                            {" "}
                            <span className='text-xl'>
                                {" "}
                                ₹<s>1000</s>
                            </span>
                        </p>

                        <div className='mt-5 text-lg'>
                            <p className=''>
                                Starts on:
                                {" "}
                                <span className='font-medium'>
                                    26 November 2023
                                </span>
                            </p>
                            <p className=''>
                                Duration:
                                {" "}
                                <span className='font-medium'>
                                    1 Day
                                </span>
                            </p>
                        </div>

                        <button className='py-3 w-full mt-8 bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800 rounded-lg font-medium drop-shadow-lg'>
                            Enroll Now
                        </button>
                    </div>
                </div>

                <div className='flex flex-col flex-[0.9_1_0%] text-slate-800 dark:text-zinc-100'>
                    <div className='mt-10'>
                        <h1 className='text-3xl font-semibold'>Options Trading</h1>

                        <p className='mt-2 text-sm '>Technical Analyst Full time Professional Trader 6+ years Trading Experience Stock Market Coach & Mentor</p>

                        <p className='flex items-center mt-4'>
                            <StarIcon className='h-6 w-6 mr-1 text-yellow-500' />
                            <StarIcon className='h-6 w-6 mr-1 text-yellow-500' />
                            <StarIcon className='h-6 w-6 mr-1 text-yellow-500' />
                            <StarIcon className='h-6 w-6 mr-1 text-yellow-500' />
                            <StarIcon className='h-6 w-6 mr-1' />
                            5.0
                        </p>

                        <p className='mt-2 text-2xl font-medium'>
                            ₹49
                            {" "}
                            <span className='text-xl'>
                                {" "}
                                ₹<s>1000</s>
                            </span>
                        </p>

                        <div className='mt-5 text-lg'>
                            <p className=''>
                                Starts on:
                                {" "}
                                <span className='font-medium'>
                                    26 November 2023
                                </span>
                            </p>
                            <p className=''>
                                Duration:
                                {" "}
                                <span className='font-medium'>
                                    1 Day
                                </span>
                            </p>
                        </div>

                        <button className='py-3 w-full lg:w-80 mt-8 bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800 rounded-lg font-medium drop-shadow-lg'>
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
                                <div>
                                    <h1 className='text-3xl font-semibold'>
                                        This Transformative Class
                                    </h1>
                                    <p className='mt-2 text-sm'>Technical Analyst Full time Professional Trader 6+ years Trading Experience Stock Market Coach & Mentor</p>
                                </div>

                                <div>
                                    <h1 className='text-2xl font-medium'>Key Highlights:</h1>

                                    <p className='text-sm mt-2'>
                                        Stock option buying with momentum Momentum support buying Momentum reversal buying Volatility option buying Volatility reversal buying Momentum based swing trading Trend based swing trading Momentum based option selling Trend based option selling Covered call Covered put Short strangle Sideways market trading and gap trading
                                    </p>
                                </div>

                                <div className=''>
                                    <h1 className='text-2xl font-medium'>Who Should Enroll:</h1>

                                    <ol className='list-decimal pl-8'>
                                        <li>Coffee</li>
                                        <li>Tea</li>
                                        <li>Milk</li>
                                    </ol>

                                    <p>Enrollment is open to:</p>
                                    <ol className='list-disc pl-8'>
                                        <li>Coffee</li>
                                        <li>Tea</li>
                                        <li>Milk</li>
                                    </ol>
                                </div>

                                <div className='flex flex-col items-center justify-center'>
                                    <div className='bg-orange-500 rounded-full p-2'>
                                        <AcademicCapIcon className='h-16 w-16' />
                                    </div>

                                    <h1 className='text-3xl font-semibold mt-5'>
                                        After completion,
                                        <br />
                                        Get a certificate
                                    </h1>

                                    <div className=''>
                                        <div className='relative h-52 w-80 xl:h-80 xl:w-[28rem] mt-7'>
                                            <Image
                                                className='absolute max-w-full h-auto object-contain'
                                                src={'/images/certificate_Image.webp'}
                                                alt=''
                                                fill
                                            />
                                        </div>

                                        <div>
                                            <div className='mt-7 space-y-2'>
                                                <h1 className='text-2xl font-semibold inline-flex items-center'>
                                                    <CheckBadgeIcon className='h-5 w-5 mr-2' />
                                                    Official and verified
                                                </h1>

                                                <p>Receive an instructor signed certificate with institution&apos;s logo to verify your achievements.</p>
                                            </div>

                                            <div className='mt-7 space-y-2'>
                                                <h1 className='text-2xl font-semibold inline-flex items-center'>
                                                    <CheckBadgeIcon className='h-5 w-5 mr-2' />
                                                    Enhances Credibility
                                                </h1>

                                                <p>Use your certificate to enhance your professional credibility and stand out among your peers!.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='py-3 w-full mt-8 bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800 rounded-lg font-medium drop-shadow-lg uppercase'>
                                        Enroll Now and get certificate
                                    </button>
                                </div>
                            </TabsContent>

                            {/* Curriculum Tab Menu */}

                            <TabsContent value="curriculum">
                                {/* Do Not Switch the component -- Needs 'use client' */}
                                <TimelineContainer />
                            </TabsContent>

                            {/* Instructor Tab Menu */}
                            <TabsContent value="instructor" className='flex flex-col lg:flex-row items-center justify-center mt-5 lg:gap-x-5'>
                                <div className='relative h-52 w-[21rem] flex-shrink-0'>
                                    <Image
                                        className='absolute max-w-full h-auto object-cover rounded-lg'
                                        src={'/images/author_image.jpg'}
                                        alt=''
                                        fill
                                    />
                                </div>
                                <div className=' mt-3 text-slate-800 dark:text-zinc-100'>
                                    <h1 className='text-2xl font-medium'>Ansh R. Hiran</h1>

                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sapiente porro doloribus id culpa! Vitae cupiditate consequatur quis aut porro, consequuntur, tenetur laborum explicabo exercitationem similique quod cumque, quam quo!
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
                                        <button className='py-3 w-full bg-green-500 rounded-lg text-white font-medium'>
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

export default CourseDetails