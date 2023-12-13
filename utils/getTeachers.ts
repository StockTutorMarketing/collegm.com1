import { groq } from 'next-sanity'
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == 'teachers'] {
        ...,
    }
`;

export default async function getTeachers() {
    const teachers = await sanityClient.fetch(query)
    return teachers
}