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

    { icon: FileText, text: 'Download CV', colorFrom: 'blue-dark', colorTo: 'bg-dark', link: "https:" },
    { icon: Code, text: 'View Projects', colorFrom: 'blue-dark', colorTo: 'bg-dark', link: "https:/" },
]

const TECH_STACK_PORTFOLIO = [
    { icon: "html.svg", language: "HTML" },
    { icon: "css.svg", language: "CSS" },
    { icon: "javascript.svg", language: "JavaScript" },
    { icon: "tailwind.svg", language: "Tailwind CSS" },
    { icon: "reactjs.svg", language: "ReactJS" },
    { icon: "vite.svg", language: "Vite" },
    { icon: "nodejs.svg", language: "Node JS" },
    { icon: "bootstrap.svg", language: "Bootstrap" },
    { icon: "firebase.svg", language: "Firebase" },
    { icon: "MUI.svg", language: "Material UI" },
    { icon: "vercel.svg", language: "Vercel" },
    { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

const PROJECTS = [
    {
        id: 1,
        Img: "Photo.png",
        Title: "Landing Page de Agencia",
        Description: "Sitio web responsive para una agencia digital, construido con React y Tailwind CSS.",
        Link: "https://example.com/proyecto-agencia",
    },
    {
        id: 2,
        Img: "html.svg",
        Title: "Dashboard Administrativo",
        Description: "Dashboard interactivo con autenticación, gráficos y CRUD usando Firebase y MUI.",
        Link: "https://example.com/dashboard-admin",
    },
    {
        id: 3,
        Img: "html.svg",
        Title: "App de Clima",
        Description: "Aplicación que consume la API de OpenWeather para mostrar el clima en tiempo real.",
        Link: "https://example.com/clima-app",
    },
    {
        id: 4,
        Img: "html.svg",
        Title: "Calculadora Financiera",
        Description: "Calculadora de inversiones desarrollada en React con lógica personalizada y diseño modular.",
        Link: "https://example.com/calculadora-financiera",
    },
    {
        id: 5,
        Img: "html.svg",
        Title: "E-commerce Demo",
        Description: "Sitio de comercio electrónico con funcionalidades como carrito, filtros y pasarela de pago.",
        Link: "https://example.com/ecommerce-demo",
    },
];

const CERTIFICATES = [
    {
        id: 1,
        Img: "html.svg",
    },
    {
        id: 1,
        Img: "html.svg",
    }, 
    {
        id: 1,
        Img: "html.svg",
    },
    {
        id: 1,
        Img: "html.svg",
    },
    {
        id: 1,
        Img: "html.svg",
    }
]


export { WORDS, TECH_STACK, SOCIAL_LINKS, LINKS_BUTTONS, TECH_STACK_PORTFOLIO, PROJECTS, CERTIFICATES };