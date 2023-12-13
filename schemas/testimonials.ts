import { defineField, defineType } from 'sanity'

export default defineType({
    name: "testimonials",
    title: 'Client Testimony',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Client Name',
            type: 'string',
            description: 'Name of the client'
        }),
        defineField({
            name: 'image',
            title: 'Client Image',
            type: 'image',
            description: 'Display Picture of the client',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'statement',
            title: 'Client Statement',
            type: 'string',
            description: 'The statement of the client',
        })
    ]
})