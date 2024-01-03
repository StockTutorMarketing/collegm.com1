import React from 'react'

type Props = {}

function Refund({ }: Props) {
    return (
        <div className='bg-gray-200 dark:bg-zinc-900 h-screen'>
            <div className='p-5 max-w-7xl mx-auto bg-white dark:bg-zinc-900 rounded-lg'>
                <h1 className='uppercase text-3xl lg:text-5xl font-bold text-center'>REFUND</h1>
                <div>
                    <h3>Refund & Cancellation Policy</h3>
                    <p className='border-l-2 border-zinc-900 dark:border-zinc-100 p-2'>
                        We don&apos;t provide refunds in any case. If you are not sure about the bootcamp, checkout the testimonials, read more about the trainer and take an informed decision. In case you miss out on attending the live bootcamp, we can move you to the next batch.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Refund