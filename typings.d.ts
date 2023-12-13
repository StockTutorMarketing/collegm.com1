interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

interface Slug {
    current: string;
    _type: "slug"
}

interface BodyChildren {
    _type: "span";
    marks: any[];
    text: string;
    _key: string; 
}

interface CourseBody {
    _type: "block";
    style: string;
    _key: string;
    children:  BodyChildren[]
} 

export interface TeamMembers extends SanityBody {
    _type: "teamMembers";
    name: "string";
    link?: "string";
    image: Image_2
}

export interface Teachers extends SanityBody {
    _type: "teachers";
    joining: "string";
    skill: "string";
    name: "string"
    image: Image_2
    bio: string;
}

export interface Courses extends SanityBody {
    _type: "courses";
    description: 'string';
    title: string;
    thumbnail: Image;
    teachers: Teachers;
    isFeaturedCourse: boolean;
    slug: Slug;
    actualPrice: number;
    discountedPrice: number;
    cirriculum: string[];
    startingDate: string;
    rating: number;
    duration: string
    overview: CourseBody[]
}