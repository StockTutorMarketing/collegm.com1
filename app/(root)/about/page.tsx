import { urlFor } from '@/sanity'
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { TeamMembers } from '@/typings'
import getTeamMembers from '@/utils/getTeamMembers'
import ClientSideRoute from '@/components/ClientSideRoute'

type Props = {}

export const revalidate = 0 // revalidate at most every hour

async function AboutUs({ }: Props) {
    const teamMembers: TeamMembers[] = await getTeamMembers();

    return (
        <main className='bg-gray-200 dark:bg-zinc-900 p-5'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row items-center justify-between lg:space-x-3 my-12 lg:my-24'>
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

                        <button className='button bg-white'>Contact Us</button>
                    </div>
                </div>

                <h1 className='text-center text-3xl font-medium'>Our Executive Team</h1>

                <div className='grid items-center justify-center sm:grid-cols-2 lg:grid-cols-4 my-12 lg:my-22 gap-5'>
                    {teamMembers.map((member) => (
                        <ClientSideRoute
                            key={member._id}
                            route={member?.link || ''}
                        >
                            <div
                                className='flex flex-col items-center border border-gray-100 rounded-lg py-4 group hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer max-w-sm'
                            >
                                <div className='relative h-44 w-44 rounded-full'>
                                    <Image
                                        className='absolute max-w-full h-auto object-contain rounded-full'
                                        src={urlFor(member?.image).url()}
                                        alt=''
                                        fill
                                    />
                                </div>
                                <div className='text-slate-800 text-center mt-4 flex flex-col items-center'>
                                    <h3 className='text-3xl font-semibold group-hover:text-zinc-100 transition duration-200 ease-in-out'>{member?.name}</h3>
                                    <p className='uppercase text-sm mt-1 group-hover:text-zinc-100 transition duration-200 ease-in-out'>{member?.role}</p>

                                    <FontAwesomeIcon icon={faLinkedin} className='h-7 w-7 mt-1 group-hover:text-zinc-100 transition duration-200 ease-in-out' />
                                </div>
                            </div>
                        </ClientSideRoute>

                    ))}
                </div>
            </div>
        </main>
    )
}

export default AboutUs