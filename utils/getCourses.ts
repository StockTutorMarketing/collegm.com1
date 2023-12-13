import { groq } from 'next-sanity'
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == 'courses'] {
        ...,
        teachers[0] ->
    }
`;

export default async function getCourses() {
    const courses = await sanityClient.fetch(query)
    return courses
}