import Image from "next/image"
import { urlFor } from "@/sanity"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className='relative h-52 w-80 xl:h-80 xl:w-[28rem] mt-7'>
                    <Image
                        className='absolute max-w-full h-auto object-contain'
                        src={urlFor(value).url()}
                        alt=''
                        fill
                    />
                </div>
            )
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ol className="list-decimal pl-8">{children}</ol>
        ),
        number: ({ children }: any) => (
            <ol className='list-disc pl-8'>
                {children}
            </ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-3xl font-semibold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-2xl font-semibold">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-xl font-semibold">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-2xl font-semibold inline-flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className='h-5 w-5 mr-2' />
                {children}
            </h4>
        ),

        customHeading: ({ children }: any) => (
            <p className="text-lg text-primary text-purple-700">{children}</p>
        ),
    }
}