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
            name: 'termsAndConditions',
            title: 'Terms & Conditions',
            type: 'url',
        }),
        defineField({
            name: 'privacyPolicy',
            title: 'Privacy Policy',
            type: 'url',
        }),
        defineField({
            name: 'refundAndCancellation',
            title: 'Refund & Cancellation',
            type: 'url',
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