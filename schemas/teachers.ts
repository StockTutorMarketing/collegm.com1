import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'teachers',
    title: 'Teachers',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the Teachers'
        }),
        defineField({
            name: 'image',
            title: 'Image of the Teacher',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'skill',
            title: 'Skill',
            type: 'string',
            description: 'Type of trading (experties)'
        }),
        defineField({
            name: 'joining',
            title: 'Joining Date',
            type: 'string',
            description: 'Joining Date of the teacher'
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
    ],
})