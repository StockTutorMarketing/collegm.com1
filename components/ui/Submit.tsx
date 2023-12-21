'use client';

import React from 'react'

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormStatus } from 'react-dom'

type Props = {}

function Submit({ }: Props) {

    const { pending } = useFormStatus();

    return (
        <button
            type='submit'
            className={`text-white bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-800 font-semibold py-3 px-4 rounded-lg w-full mt-6 ${pending && 'opacity-70 cursor-wait'}`}
            aria-disabled={pending}
        >
            {pending
                ? <>
                    <p className=''>
                        <FontAwesomeIcon icon={faCircleNotch} className='animate-spin mr-2' />
                        Submitting
                    </p>
                </>
                : 'Get In Touch'
            }
        </button>
    )
}

export default Submit