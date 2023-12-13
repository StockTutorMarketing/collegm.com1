import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'courses',
    title: 'Available Courses',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the course'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          }),
        defineField({
            name: 'thumbnail',
            title: 'Course Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'isFeaturedCourse',
            title: 'IsFeaturedCourse',
            type: 'boolean',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'Description of the course'
        }),
        defineField({
            name: 'teachers',
            title: 'Teachers',
            type: 'array',
            of: [{ type: "reference", to: { type: "teachers" } }]
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            description: 'Rating of the course'
        }),
        defineField({
            name: 'discountedPrice',
            title: 'Discount Price',
            type: 'number',
            description: 'Current Price of the course'
        }),
        defineField({
            name: 'actualPrice',
            title: 'Actual Price',
            type: 'number',
            description: 'Stike through price'
        }),
        defineField({
            name: 'startingDate',
            title: 'Starting Date',
            type: 'string',
            description: "Starting Date of the course"
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
            description: 'Duration of the course (in days)'
        }),
        defineField({
            name: 'overview',
            title: 'Overview of the course',
            type: 'blockContent',
        }),
        defineField({
            name: 'cirriculum',
            title: 'Cirriculum',
            type: 'array',
            of: [{ type: 'string' }]
        }),

    ],
})