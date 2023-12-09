import Image from 'next/image'
import React from 'react'

type Props = {}

function AboutUs({ }: Props) {
    return (
        <main className='bg-gray-200 dark:bg-zinc-900 p-5 py-12'>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:space-x-3'>
                <div className='flex items-center justify-center gap-3'>
                    <div className='space-y-5'>
                        <div className='relative h-52 w-44 sm:h-72 sm:w-80 md:h-[21rem] lg:h-60 lg:w-60 xl:h-[21rem] xl:w-80'>
                            <Image
                                className='absolute max-w-full h-auto object-cover rounded-lg'
                                src={'/images/about_image-1.jpg'}
                                alt=''
                                fill
                            />
                        </div>
                        <div className='relative h-52 w-44 sm:h-72 sm:w-80 md:h-[21rem] lg:h-60 lg:w-60 xl:h-[21rem] xl:w-80'>
                            <Image
                                className='absolute max-w-full h-auto object-cover rounded-lg'
                                src={'/images/about_image-2.jpg'}
                                alt=''
                                fill
                            />
                        </div>
                    </div>
                    <div className=''>
                        <div className='relative h-60 w-44 sm:h-80 sm:w-80 md:h-[27rem] lg:w-60 lg:h-80 xl:h-[27rem] xl:w-80'>
                            <Image
                                className='absolute max-w-full h-auto object-cover rounded-lg'
                                src={'/images/about_image-3.jpg'}
                                alt=''
                                fill
                            />
                        </div>
                    </div>
                </div>
                <div className='space-y-5 mt-12 lg:mt-0 xl:flex-[0.9_1_0%] dark:text-zinc-100'>
                    <h1 className='text-3xl md:text-4xl font-bold md:text-center'>Why Choose Us</h1>
                    <h2 className='text-2xl md:text-3xl font-semibold md:text-center'>Collegm is the best place to learn new skills.</h2>
                    <div>
                        <p>Get access to live classes and communities with experts, and find amazing courses. Our network of expert instructors are passionate about sharing their knowledge and inspiring others.</p>
                        <br />
                        <p>You can learn from the best in the field with ColleGm and take your skills to the next level. Collegm is more than just an online learning platform - its an active and vibrant community of like-minded individuals who share a passion for learning. Join our online forums, groups, and events to connect with other learners and exchange ideas.</p>
                        <br />
                        <p>We believe 21st century relevant skill focused, community based active learning by Influential experts is the future of learning. We offer free live masterclasses every month featuring top instructors in their respective fields. Get access to exclusive content and insights that you wont find anywhere elseA domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business.</p>
                        <br />
                        <p>Collegm is your one-stop destination to learn from experts in any field and build a successful career. We offer online skill based courses that provide detailed knowledge about different topics such as Options Trading, Swing Trading, Algo Trading, Project Management etc., so that you can become an Expert in no time!</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs