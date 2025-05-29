import { Github, Linkedin, Mail, ExternalLink, Instagram, Youtube, FileText, Code, Award, Globe, UserCheck } from "lucide-react"

const WORDS = ["Network & Telecom Student", "Tech Enthusiast"];

const TECH_STACK = ["React", "Javascript", "Node.js", "Tailwind"];

const SOCIAL_LINKS = [
    { icon: Github, link: "https://github.com/Diego-9612" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/diego-guerrero-software/" },
    { icon: Instagram, link: "https://www.instagram.com/codeweb_studio/" },
    { icon: Youtube, link: "https://www.youtube.com/@CodewebStudio" }
];

const LINKS_BUTTONS = [

    {href: "https:", text: 'Download CV', icon: FileText},
    {href: "#Portofolio",text: 'View Projects',  icon: Code,},
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
        Img: "Traxxo.jpg",
        Title: "App Movil Trasporte de Carga",
        Description: "Este proyecto fue desarrollado como trabajo de grado en Ingeniería de Software",
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
        Img: "P5.png",
        Title: "Reproductor de música",
        Description: "Interfaz de usuario intuitiva y responsive, Lista de reproducción dinámica.",
        Link: "https://reproductor-musical-codeweb-studio.vercel.app/",
    },
    {
        id: 6,
        Img: "P6.png",
        Title: "Timer Challenge Game",
        Description: "Está diseñado para practicar y comprender el uso de Refs y Portals en React",
        Link: "https://gametemporizadorreact.vercel.app/",
    },
    {
        id: 7,
        Img: "P7.png",
        Title: "Timer Challenge Game",
        Description: "XXXXXXX",
        Link: "https://gametemporizadorreact.vercel.app/",
    },

];

const CERTIFICATES = [
    {
        id: 1,
        Img: "C1.png",
    },
    {
        id: 2,
        Img: "c2.png",
    }, 
    {
        id: 3,
        Img: "c3.png",
    },
    {
        id: 4,
        Img: "c4.png",
    },
    {
        id: 5,
        Img: "c5.png",
    },
    {
        id: 6,
        Img: "c6.png",
    },
    {
        id: 7,
        Img: "c7.png",
    },
    {
        id: 8,
        Img: "c8.png",
    },
    {
        id: 9,
        Img: "c9.png",
    }
]


export { WORDS, TECH_STACK, SOCIAL_LINKS, LINKS_BUTTONS, TECH_STACK_PORTFOLIO, PROJECTS, CERTIFICATES };