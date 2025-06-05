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

    {href: "https://drive.google.com/drive/u/0/folders/1HMM4jhvt8OFYnwSaLTp3KVNaxM50qyHE", text: 'Download CV', icon: FileText},
    {href: "#Portofolio",text: 'View Projects',  icon: Code,},
]

const TECH_STACK_PORTFOLIO = [
    { icon: "spring.svg", language: "Spring" },
    { icon: "django.svg", language: "Django" },
    { icon: "java.svg", language: "Java" },
    { icon: "python.svg", language: "Python" },
    { icon: "nodejs.svg", language: "NodeJS" },
    { icon: "SQL.svg", language: "MySQL" },
    { icon: "AWS.svg", language: "AWS" },
    { icon: "reactjs.svg", language: "ReactJS" },
    { icon: "FLUTTER.svg", language: "Flutter" },
    { icon: "tailwind.svg", language: "TailwindCSS" },
    { icon: "nextjs.svg", language: "NextJS" },
    { icon: "vercel.svg", language: "Vercel" },
    { icon: "vite.svg", language: "Vite" },
    { icon: "figma.svg", language: "Figma" },
    { icon: "firebase.svg", language: "Firebase" },
    { icon: "type.svg", language: "TypeScript" },
    { icon: "javascript.svg", language: "JavaScript" },
    { icon: "html.svg", language: "HTML" },
    { icon: "css.svg", language: "CSS" },
];

const PROJECTS = [
    {
        id: 1,
        Img: "Traxxo.jpg",
        Title: " Traxxo Mobile App",
        Description: "Mobile application to optimize the logistics allocation of heavy-duty transport in Pasto, Nariño. Developed with Flutter, Django, and MySQL, and integrated with Google Maps. It implements JWT, Firebase, and is structured with Clean Architecture. Deployed on AWS using a client-server architecture.",
        Link: "",
        LinkGitHub: "https://github.com/Diego-9612/App-Movil-Traxxo/tree/master",
    },
    {
        id: 2,
        Img: "Tunota.png",
        Title: "TuNota Web App",
        Description: "Web application developed in the Web Development course, focused on academic management. It uses React on the front end and Django with PostgreSQL on the back end. Authentication is implemented using JWT and deployment is done on AWS. It follows a client-server architecture.",
        Link: "",
        LinkGitHub: "https://github.com/Diego-9612/TuNota-ISWElectiva110202",
    },
    {
        id: 3,
        Img: "Matpy.png",
        Title: "Matpy Web App",
        Description: "Matpy is a web application developed with JavaScript (ES6+), HTML5, CSS3, that allows you to record running and cycling workouts on an interactive map using Leaflet.js, Geolocation API and LocalStorage.",
        Link: "https://matpy.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/Matpy",
    },
    {
        id: 4,
        Img: "URL.png",
        Title: "URLShortener Web App",
        Description: "URL Shortener is a backend application built with Java 21, Spring Boot 3, and Gradle that generates short links and redirects to the original URLs. It uses MySQL for persistence, Docker/Docker Compose for deployment, and provides a REST API to manage links. The project also leverages Spring Data JPA and Lombok to streamline development.",
        Link: "https://www.youtube.com/watch?v=y2RO0EewYBM",
        LinkGitHub: "https://github.com/Diego-9612/URLShortener"
    },
    {
        id: 5,
        Img: "eco.png",
        Title: "E-commerce Web App",
        Description: "E-commerce Web App built with React, Vite, and Tailwind CSS, allowing users to browse products, apply filters, manage a shopping cart, and simulate orders. It consumes a Fake REST API, follows a frontend-adapted MVC pattern, and is deployed on Vercel.",
        Link: "https://ecommerce-codeweb-studio-react.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/Ecommerce-webapp"
    },
    {
        id: 6,
        Img: "For.png",
        Title: "CookinCode Web App",
        Description: "CookinCode is a web app built with JavaScript, HTML, and CSS that lets users search for recipes via an external API, save favorites, and upload custom recipes—featuring a fast, interactive UI with persistent localStorage support.",
        Link: "",
        LinkGitHub: "https://github.com/Diego-9612/CookinCode-WebApp"
    },
    {
        id: 7,
        Img: "port.png",
        Title: "Personal Portfolio Web App",
        Description: "Personal Portfolio built with React, Vite, and Tailwind CSS, showcasing my projects, skills, and experience as a Software Engineer. The site is fully responsive, follows the MVC pattern, and includes dynamic routing and reusable components.",
        Link: "https://portafolio-ing-software-diego-guerr.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/Portafolio-Ing-Software-Diego-Guerrero"
    },
    {
        id: 8,
        Img: "sb.png",
        Title: "RESTful API",
        Description: "This project is a RESTful API built with Spring Boot, Hibernate, and MySQL, designed for efficient data management and backend services.",
        Link: "",
        LinkGitHub: "https://github.com/Diego-9612/SpringBoot_API_RESTful_CRUD"
    },
    {
        id: 9,
        Img: "P5.png",
        Title: "MusicPlayer Web App",
        Description: "Music Player Web App is a responsive music player built with HTML, CSS, and JavaScript. It features volume control, shuffle/repeat modes, progress bar, favorites with localStorage, and smooth CSS animations for an engaging user experience.",
        Link: "https://reproductor-musical-codeweb-studio.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/MusicPlayer-WebApp"
    },
    {
        id: 10,
        Img: "antlr.png",
        Title: "Mini compiler DSL",
        Description: "Mini compiler built with Python, ANTLR, and pandas, featuring a custom DSL to query hotel bookings from CSV files. Supports logical filters, real-time aggregations, parse tree visualization, and robust syntax and semantic error handling.",
        Link: "",
        LinkGitHub: "https://github.com/Diego-9612/MiniCompiladorDSL"
    },
    {
        id: 11,
        Img: "P7.png",
        Title: "Investment Calculator Web App",
        Description: "Investment calculator built with React that lets users simulate long-term returns using inputs like interest, duration, and annual contributions — ideal for practicing state, props, and conditional rendering.",
        Link: "https://calculadora-inversiones-ten.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/calculadora-inversiones"
    },
    {
        id: 12,
        Img: "tick.png",
        Title: "TicTrack Web App",
        Description: "TicTrack is a Tic Tac Toe game built with React, perfect for practicing state, props, and event handling. Features alternating turns, win detection, and game reset in a clean, responsive interface.",
        Link: "https://game-tic-track-react.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/Game_TicTrack_React"
    },
    {
        id: 13,
        Img: "bn.png",
        Title: "Bankist Web App",
        Description: "Bankist is a minimalist banking web app built with JavaScript, focused on data handling through the use of arrays.",
        Link: "",
        LinkGitHub: "https://github.com/Diego-9612/Bankist"
    },
    {
        id: 14,
        Img: "mcc.png",
        Title: "Nariño Climate Change Committee",
        Description: "Developed as part of a project for Coorponariño and the Nariño Climate Change Committee, this website was built to enhance institutional communication and promote regional climate action.",
        Link: "https://blog-tratamiento-aguas.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/Cambio-Climatico-Nari-o"
    },
    {
        id: 15,
        Img: "P6.png",
        Title: "Timer Challenge Game",
        Description: "Timer Challenge Game is a mini-game built with React, Vite, and JavaScript, where players must stop a timer as close as possible to the target time. It showcases advanced React concepts like useRef, Portals, precise interval control, and optimized rendering—perfect for learning DOM interaction and modal component architecture.",
        Link: "https://gametemporizadorreact.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/TimerChallengeGame"
    },
    {
        id: 16,
        Img: "ecom.png",
        Title: "Ecometric Web App",
        Description: "Ecometric is a web platform built with Next.js and Tailwind CSS for assessing the environmental impact of industrial, urban, or agricultural projects. It provides interactive data visualizations, eco-friendly suggestions, and regulatory filters to support more sustainable decisions",
        Link: "https://impacto-ambiental.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/Ecometric-WebApp"
    },
    {
        id: 17,
        Img: "mp.png",
        Title: "Tailwind CSS Mini Components",
        Description: "Collection of mini UI projects built with React, Vite, and Tailwind CSS, focused on practicing modern, responsive, and reusable frontend components.",
        Link: "https://tailwind-css-mini-proyect.vercel.app/",
        LinkGitHub: "https://github.com/Diego-9612/Tailwind-CSS-Mini-Proyect"
    },
    {
        id: 18,
        Img: "ucc.jpg",
        Title: "Web Development Exam",
        Description: "Fullstack task manager built with Django and React in 1.5 hours, allowing users to create, list, and toggle tasks. Developed as a final exam project to demonstrate API and state management skills.",
        Link: "",
        LinkGitHub: "https://github.com/Diego-9612/ApiRestCrud-Tareas"
    },
    {
        id: 19,
        Img: "jsp.webp",
        Title: "JS Mini Games",
        Description: "Set of 3 mini-games (Guess the Number, Snake, and Memory) built with HTML, CSS, and JavaScript to practice DOM manipulation, game logic, and interactive UI design.",
        Link: "",
        LinkGitHub: "https://github.com/Diego-9612/JS-Mini-Games"
    },


];

const CERTIFICATES = [
    {
        id: 2,
        Img: "menci.png",
    }, 
    {
        id: 1,
        Img: "diplo.png",
    }, 
    {
        id: 4,
        Img: "SENA.jpg",
    },
    {
        id: 5,
        Img: "spring.jpg",
    }, 
    {
        id: 6,
        Img: "js.jpg",
    }, 
    {
        id: 7,
        Img: "C1.png",
    },
    {
        id: 8,
        Img: "twn.jpg",
    },
    {
        id: 9,
        Img: "CP.png",
    }, 
    {
        id: 10,
        Img: "c3.png",
    },
    {
        id: 11,
        Img: "c4.png",
    },
    {
        id: 12,
        Img: "c5.png",
    },
    {
        id: 13,
        Img: "c6.png",
    },
    {
        id: 14,
        Img: "c7.png",
    },
    {
        id: 15,
        Img: "c8.png",
    },
    {
        id: 16,
        Img: "c9.png",
    }
]


export { WORDS, TECH_STACK, SOCIAL_LINKS, LINKS_BUTTONS, TECH_STACK_PORTFOLIO, PROJECTS, CERTIFICATES };