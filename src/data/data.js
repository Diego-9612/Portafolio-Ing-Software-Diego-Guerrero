import { Github, Linkedin, Mail, ExternalLink, Instagram, Youtube, FileText, Code, Award, Globe, UserCheck } from "lucide-react"

const WORDS = ["Network & Telecom Student", "Tech Enthusiast"];

const TECH_STACK = ["React", "Javascript", "Node.js", "Tailwind"];

const SOCIAL_LINKS = [
    { icon: Github, link: "https:" },
    { icon: Linkedin, link: "https:/" },
    { icon: Instagram, link: "https:/" },
    { icon: Youtube, link: "https:/" }
];

const LINKS_BUTTONS = [

    { icon: FileText, text:'Download CV', colorFrom: 'blue-dark', colorTo: 'bg-dark', link: "https:"  },
    { icon: Code, text:'View Projects', colorFrom: 'blue-dark', colorTo: 'bg-dark', link: "https:/" },
]


export { WORDS, TECH_STACK, SOCIAL_LINKS, LINKS_BUTTONS };