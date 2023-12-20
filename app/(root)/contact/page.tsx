import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { transporter } from '@/lib/transporter'

type Props = {}

const user = process.env.GOOGLE_USER_EMAIL
const pass = process.env.GOOGLE_USER_PASS

function ContactUs({ }: Props) {

    const sendMailToSupport = async (e: FormData) => {
        'use server'

        const userName = e.get("name")?.toString();
        const userEmail = e.get("email")?.toString();
        const userNumber = e.get("number")?.toString();
        const userMessage = e.get("message")?.toString();

        await transporter.sendMail({
            from: `Colle-Gm Help ${user}`,
            to: `Colle-Gm Help ${user}`,
            subject: `Enquiry Submission from ${userName}`,
            html: `
                <p>Name: ${userName}</p>
                <p>Number: ${userNumber}</p>
                <p>Email: ${userEmail}</p>
                <p>Message: ${userMessage}</p>
            `
        })
    }

    return (
        <main className='p-5 bg-gray-200 dark:bg-zinc-900'>
            <div className='max-w-7xl mx-auto my-12 flex flex-col lg:flex-row lg:justify-between'>
                <div className='flex-[0.5_1_0%]'>
                    <h1 className='text-3xl font-bold text-slate-800 dark:text-zinc-100'>
                        Get In Touch
                    </h1>
                    <p className='text-slate-600 dark:text-zinc-400 mt-4'>Ask us everything and we would love to hear from you.</p>

                    <div className='mt-10 text-zinc-700 dark:text-zinc-100 space-y-6'>
                        <p className='flex items-start'>
                            <FontAwesomeIcon icon={faLocationDot} className='h-7 w-7 mr-3 text-zinc-800 dark:text-zinc-100 flex-shrink-0' />
                            FA- 12, 1st Floor Crown Plaza Mall, Sector 15A, Main Mathura Road, Faridabad, Haryana - 121007.
                        </p>

                        <p className='flex items-center'>
                            <FontAwesomeIcon icon={faPhone} className='h-7 w-7 mr-3 text-zinc-800 dark:text-zinc-100 flex-shrink-0' />
                            +91 8448770864
                        </p>

                        <p className='flex items-start'>
                            <FontAwesomeIcon icon={faEnvelope} className='h-7 w-7 mr-3 text-zinc-800 dark:text-zinc-100 flex-shrink-0' />
                            help@collegm.com
                        </p>
                    </div>
                </div>

                <form action={sendMailToSupport} className='mt-12 lg:mt-0 p-5 bg-white dark:bg-zinc-800 rounded-xl flex-[0.5_1_0%]'>
                    <h3 className='text-2xl font-semibold text-zinc-700 dark:text-zinc-100'>
                        Contact Form
                    </h3>

                    <div className='mt-5 space-y-2'>
                        <p className='text-zinc-700 dark:text-zinc-100'>Full Name</p>
                        <input
                            className='contactInput'
                            name='name'
                            type="text"
                            placeholder='Jhon Doe'
                        />
                    </div>
                    <div className='mt-5 space-y-2'>
                        <p className='text-zinc-700 dark:text-zinc-100'>Email Address</p>
                        <input
                            className='contactInput'
                            name='email'
                            type="text"
                            placeholder='jhon@example.com'
                        />
                    </div>
                    <div className='mt-5 space-y-2'>
                        <p className='text-zinc-700 dark:text-zinc-100'>Contact</p>
                        <input
                            className='contactInput'
                            name='number'
                            type="text"
                            placeholder='9991122255'
                        />
                    </div>
                    <div className='mt-5 space-y-2'>
                        <p className='text-zinc-700 dark:text-zinc-100'>Message</p>
                        <textarea
                            className='contactInput'
                            name='message'
                            placeholder='Message'
                        />
                    </div>

                    <button
                        type='submit'
                        className='text-white bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-800 font-semibold py-3 px-4 rounded-lg w-full mt-6'
                    >
                        Get In Touch
                    </button>
                </form>
            </div>
        </main>
    )
}

export default ContactUs