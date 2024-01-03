import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'webInfo',
    title: 'ColleGm Info',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'address',
            title: 'Studio Address',
            type: 'string',
        }),
        defineField({
            name: 'marqueeText',
            title: 'Marquee Text',
            type: 'string',
        }),
        defineField({
            name: 'marqueeLink',
            title: 'Marquee Link',
            type: 'url',
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'number',
        }),
        defineField({
            name: 'whatsappNumber',
            title: 'Whatsapp Number',
            type: 'number',
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
        }),
        defineField({
            name: 'linkedIn',
            title: 'Linked In',
            type: 'url',
        }),
        defineField({
            name: 'twitter',
            title: 'Twitter',
            type: 'url',
        }),
        defineField({
            name: 'facebook',
            title: 'Facebook',
            type: 'url',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
        }),
    ],
})