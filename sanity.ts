import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export const config: any = {
    projectId,
    dataset,
    apiVersion: '2023-05-03',
    useCdn: false
}

export const sanityClient = createClient(config);

export const urlFor = (source: Image) =>
    createImageUrlBuilder(config).image(source)