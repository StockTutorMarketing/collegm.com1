import { groq } from 'next-sanity'
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == 'courses'] | order(priority asc) {
        ...,
        teachers[0] ->
    }
`;

export default async function getCourses() {
    const courses = await sanityClient.fetch(query)
    return courses
}