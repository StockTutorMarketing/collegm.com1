
type Props = {}

function Refund({ }: Props) {
    return (
        <div className='bg-gray-200 dark:bg-zinc-900 h-screen'>
            <div className='p-5 max-w-7xl mx-auto bg-white dark:bg-zinc-900 rounded-lg space-y-5'>
                <h1 className='uppercase text-3xl lg:text-5xl font-bold text-center'>Refund and Cancellation Policy</h1>
                <div className='space-y-2'>
                    <h3 className='text-3xl'>
                        Cancellation
                    </h3>
                    <p className='border-l-2 border-zinc-900 dark:border-zinc-100 p-2'>
                        Cancellation of any subscription is valid if requested before 14 days from the start of the course or program.
                    </p>
                    <p className='border-l-2 border-zinc-900 dark:border-zinc-100 p-2'>
                        After this period, no refunds will be applicable.
                    </p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-3xl'>
                        Refunds for Partial Access
                    </h3>
                    <p className='border-l-2 border-zinc-900 dark:border-zinc-100 p-2'>
                        If any access is given to the user (e.g., videos, PDFs, codes, community, or any textual study material), a deduction of 30% will be applicable on the refund amount.
                    </p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-3xl'>
                        Cancellation Process
                    </h3>
                    <p className='border-l-2 border-zinc-900 dark:border-zinc-100 p-2'>
                        To cancel your subscription, please contact our support team at help@collegm.com with your request.
                    </p>
                    <p className='border-l-2 border-zinc-900 dark:border-zinc-100 p-2'>
                        Please provide your payment details and the reason for cancellation.
                    </p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-3xl'>
                        Refund Process
                    </h3>
                    <p className='border-l-2 border-zinc-900 dark:border-zinc-100 p-2'>
                        Refunds will be processed within 7-10 business days after the cancellation request is approved.
                    </p>
                    <p className='border-l-2 border-zinc-900 dark:border-zinc-100 p-2'>
                        Refunds will be issued to the original payment method used during the purchase.
                    </p>
                </div>
                <div className='space-y-2 mt-2'>
                    <p className='text-lg p-2'>
                        <span className="font-semibold">
                            Note: {" "}
                        </span>
                        This refund and cancellation policy is subject to change without notice. Please refer to our website for the most up-to-date policy.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Refund