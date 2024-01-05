import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { transporter } from '@/lib/transporter'
import Submit from '@/components/ui/Submit'
import { getWebInfo } from '@/utils/getWebInfo'

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined };
}

const user = process.env.GOOGLE_USER_EMAIL

async function ContactUs({ searchParams }: Props) {

    const webInfo = await getWebInfo();

    const sendMailToSupport = async (e: FormData) => {
        'use server'

        const userName = e.get("name")?.toString();
        const userEmail = e.get("email")?.toString();
        const userNumber = e.get("number")?.toString();
        const userMessage = e.get("message")?.toString();
        const mentorSubject = e.get("teachingField")?.toString();
        const mentorSocialLink = e.get("socialLink")?.toString();

        if (!userEmail || !userName || !userMessage) return

        if (searchParams?.name === "query_mentor") {
            await transporter.sendMail({
                from: `Colle-Gm Help ${user}`,
                to: `Colle-Gm Help ${user}`,
                subject: `Enquiry to become a mentor`,
                html: `
                    <p>Name: ${userName}</p>
                    <p>Number: ${userNumber}</p>
                    <p>Email: ${userEmail}</p>
                    <p>Subject I Want to teach: ${mentorSubject}</p>
                    <p>Social Link: ${mentorSocialLink}</p>
                    <p>Message: ${userMessage}</p>
                `
            });
        }
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
                        Teach with us
                    </h1>
                    <p className='text-slate-600 dark:text-zinc-400 mt-4'>Ask us everything and we would love to hear from you.</p>

                    <div className='mt-10 text-zinc-700 dark:text-zinc-100 space-y-6'>
                        <p className='flex items-start'>
                            <FontAwesomeIcon icon={faLocationDot} className='h-7 w-7 mr-3 text-zinc-800 dark:text-zinc-100 flex-shrink-0' />
                            {webInfo?.address}
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
                            required
                            pattern='^[A-Za-z]+\s[A-Za-z]+$'
                            title="Name should not contain numbers"
                        />
                    </div>
                    <div className='mt-5 space-y-2'>
                        <p className='text-zinc-700 dark:text-zinc-100'>Email Address</p>
                        <input
                            className='contactInput'
                            name='email'
                            type="text"
                            placeholder='jhon@example.com'
                            required
                            pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
                            title="Please enter a correct email ID"
                        />
                    </div>
                    <div className='mt-5 space-y-2'>
                        <p className='text-zinc-700 dark:text-zinc-100'>Contact</p>
                        <input
                            className='contactInput'
                            name='tel'
                            type="tel"
                            placeholder='9991122255'
                            title="Please verify the number once again"
                        />
                    </div>
                    {searchParams?.name === 'query_mentor' &&
                        <>
                            <div className='mt-5 space-y-2'>
                                <p className='text-zinc-700 dark:text-zinc-100'>Subject you would like to teach</p>
                                <input
                                    className='contactInput'
                                    name='teachingField'
                                    type="text"
                                    placeholder='Topic'
                                />
                            </div>
                            <div className='mt-5 space-y-2'>
                                <p className='text-zinc-700 dark:text-zinc-100'>Social Links</p>
                                <input
                                    className='contactInput'
                                    name='socialLink'
                                    type="url"
                                    placeholder='linkedin.com/JhonDoe'
                                />
                            </div>
                        </>
                    }
                    <div className='mt-5 space-y-2'>
                        <p className='text-zinc-700 dark:text-zinc-100'>Message</p>
                        <textarea
                            className='contactInput'
                            name='message'
                            placeholder='Message'
                            required
                        />
                    </div>

                    <Submit />
                </form>
            </div>
        </main>
    )
}

export default ContactUs