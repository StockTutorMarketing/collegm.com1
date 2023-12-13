import { groq } from 'next-sanity'
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == 'teamMembers'] {
        ...,
    }
`;

export default async function getTeamMembers() {
    const teamMembers = await sanityClient.fetch(query)
    return teamMembers
}