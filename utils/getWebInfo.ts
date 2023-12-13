import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == 'webInfo'][0] {
        ...,
    }
`
export async function getWebInfo() {
    const webInfo = await sanityClient.fetch(query)
    return webInfo
}