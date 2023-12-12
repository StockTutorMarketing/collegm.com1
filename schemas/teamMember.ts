import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'teamMembers',
    title: 'Team Members',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the team member'
        }),
        defineField({
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'Role of the team member'
        }),
        defineField({
            name: 'link',
            title: 'LinkedIn Link',
            type: 'string',
            description: 'LinkedIn Link of the member'
        }),
    ],
})