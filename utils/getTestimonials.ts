import { groq } from 'next-sanity'
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == 'testimonials'] {
        ...,
    }
`;

export default async function getTestimonials() {
    const testimonials = await sanityClient.fetch(query)
    return testimonials
}