
type Curriculum = {
    name: string;
    description: string;
    socialMedia: SocialMedia[];
    photo: string;
    experiences: Experience[];
    projects: Project[];
}

type SocialMedia = {
    name: string;
    icon: string;
    url: string;
}

type Technologies = {
    name: string;
    icon: string;
}

type Experience = {
    company: string;
    role: string;
    date: string;
    description: string;
    technologies: Technologies[];
    url?: string;
}

type Project = {
    name: string;
    description: string;
    image: string;
    technologies: Technologies[];
    code: string;
}

