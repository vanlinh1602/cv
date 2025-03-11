export interface Skill {
    name: string;
}

export interface WorkExperience {
    title: string;
    company: string;
    period: string;
    achievements: string[];
}

export interface Project {
    name: string;
    year: string;
    description: string;
    technologies: string[];
    link?: string;
    git?: string;
}

export interface SocialLink {
    label: string;
    icon: string;
    url: string;
}

export interface Certification {
    name: string;
    organization: string;
    year: string;
}

export interface UserInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    about: string;
}

export interface Education {
    degree: string;
    school: string;
    period: string;
    description?: string;
}

export const config = {
    userInfo: {
        name: 'Nguyen Van Linh',
        title: 'Software Engineer',
        email: 'linhnv1622@gmail.com',
        phone: '033 754 1878',
        location: 'Vietnam',
        about: 'I am a passionate professional with expertise in Software Engineering. With ' +
            (new Date().getFullYear() - 2023) + ' years of experience, I specialize in Web Development.',
    },

    certifications: [
        {
            name: 'Certification Name',
            organization: 'Issuing Organization',
            year: '2022'
        },
    ],

    skills: [
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'MongoDB' },
    ],

    workExperience: [
        {
            title: 'Software Engineer',
            company: 'Xbot JSC',
            period: 'Oct 2022 - Present',
            achievements: [
                'Develop and maintain web applications using React and Node.js',
                'Collaborate with cross-functional teams to design and implement new features',
                'Optimize application performance and ensure scalability',
            ],
        },
    ],

    projects: [
        {
            name: 'QR Banking',
            year: '2024',
            description: 'A web application that allows users to generate QR Banking codes for their transactions. Also, it supports multiple payment methods such as QR Code, Bank Transfer, and QR Banking.',
            technologies: ['React', 'TailwindCSS', 'Vite'],
            link: 'https://qr.nvlinh.com',
            git: 'https://github.com/vanlinh1602/qr-banking',
        },
    ],

    socialLinks: [
        {
            label: 'LinkedIn',
            icon: 'https://img.icons8.com/?size=100&id=13930&format=png&color=000000',
            url: 'https://linkedin.com/in/linhnv1622'
        },
        {
            label: 'GitHub',
            icon: 'https://img.icons8.com/?size=100&id=62856&format=png&color=000000',
            url: 'https://github.com/vanlinh1602'
        },
        {
            label: 'Twitter',
            icon: 'https://img.icons8.com/?size=100&id=01GWmP9aUoPj&format=png&color=000000',
            url: 'https://twitter.com/linhnv1622'
        },
        {
            label: 'Facebook',
            icon: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000',
            url: 'https://facebook.com/MonsieurKuma'
        }
    ],

    education: [
        {
            degree: 'Software Engineering',
            school: 'University of Information Technology (UIT)',
            period: '2020 - 2024',
            description: 'Relevant coursework, achievements, or GPA if notable'
        }
    ],
};
