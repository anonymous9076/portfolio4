const logotext = "Tushar Kumar";
const meta = {
    title: "Tushar Kumar",
    description: "I'm Tushar Kumar, Full Stack Developer with 1.5+ years of experience, currently working at BoffinBlocks",
};

const introdata = {
    title: "I'm Tushar Kumar",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop Highly Interactive WebPages",
    },
    description: "Full Stack Developer building scalable, user-focused web applications. From responsive UIs to backend architecture.",
    your_img_url: "./images/myimg.jpeg",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: `I'm Tushar Kumar, a Full Stack Developer with 1.5+ years of hands-on experience building scalable, user-focused web applications. I work across the full development lifecycle — from designing responsive UIs to implementing backend logic and database architecture.`,
    aboutme2: "I'm comfortable handling solo projects, team-based development, and freelance work, always focusing on clean code and practical solutions. I've built and contributed to multiple real-world projects including e-commerce platforms, AI-powered chatbots, educational & portfolio websites, and admin dashboards. Currently working as a Software Developer at BoffinBlocks, where I actively use Angular, TypeScript, and modern web development practices to deliver production-ready solutions."
};

const worktimeline = [
    {
        jobtitle: "Software Developer",
        where: "BoffinBlocks",
        date: "Sep 2024 - Present · 1 yr 6 mos",
        location: "Mohali district · On-site",
        employmentType: "Full-time",
        description: "Working as a Software Developer contributing to the development and maintenance of web applications.",
        responsibilities: [
            "Developing frontend features using Angular & TypeScript",
            "Building reusable UI components and improving application performance",
            "Collaborating with team members to implement business requirements",
            "Writing clean, maintainable, and scalable code"
        ],
        techStack: ["Next.js", "TypeScript", "JavaScript", "MongoDB", "Tailwind CSS", "React.js", "MySQL"]
    },
    {
        jobtitle: "Freelance Developer",
        where: "Self-Employed",
        date: "2023 - Present",
        location: "Remote",
        employmentType: "Freelance",
        description: "Building custom web applications for clients worldwide. Specializing in full-stack development with React, Next.js, Node.js, and MongoDB.",
        responsibilities: [
            "Delivering end-to-end web solutions for diverse clients",
            "Managing project timelines and client communications",
            "Building e-commerce platforms and business applications"
        ],
        techStack: ["React.js", "Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"]
    },
];

const skills = [
    {
        name: "JavaScript",
        value: 90,
    },
    {
        name: "TypeScript",
        value: 85,
    },
    {
        name: "React.js",
        value: 90,
    },
    {
        name: "Next.js",
        value: 90,
    },
    {
        name: "Angular",
        value: 80,
    },
    {
        name: "Node.js",
        value: 75,
    },
    {
        name: "Express.js",
        value: 70,
    },
    {
        name: "MongoDB",
        value: 75,
    },
    {
        name: "MySQL",
        value: 65,
    },
    {
        name: "Tailwind CSS",
        value: 95,
    },
];

const services = [{
    title: "FRONTEND DEVELOPMENT",
    description: "Building dynamic and responsive web applications using React, Angular, Next.js, and TypeScript. Creating user-friendly interfaces with modern design principles, ensuring seamless user experience across all devices. Implementing best practices for performance optimization, accessibility, and maintainable code architecture."
},
{
    title: "BACKEND DEVELOPMENT & APIs",
    description: "Developing robust server-side solutions using Node.js and Express.js. Building RESTful APIs, implementing secure authentication systems, and integrating payment gateways. Expertise in database design and optimization with MongoDB and MySQL, ensuring scalable and efficient data management.",
},
{
    title: "FULL STACK SOLUTIONS",
    description: "End-to-end web application development from concept to deployment. Specializing in MERN and MEAN stack development, creating e-commerce platforms, admin dashboards, and custom business solutions. Delivering production-ready applications with clean architecture and comprehensive testing.",
},
{
    title: "FREELANCE PROJECTS",
    description: "Providing custom web development services for clients worldwide. From portfolio websites to complex business applications, delivering tailored solutions that meet specific requirements. Experienced in client communication, project management, and delivering projects on time and within budget.",
},
];

const dataportfolio = [
    {
        img: "./images/youruniverse.png",
        description: "YourUniverse - AI Character Platform",
        category: "Web App",
        technologies: ["React.js", "Next.js", "JavaScript", "CSS"],
        fullDescription: "An AI-powered web platform where users can interact with AI characters through a modern and intuitive conversational interface. Features responsive UI design, smooth user experience, and scalable architecture with future backend integration in mind.",
        link: "https://youruniverse.vercel.app",
        status: "In Progress",
        association: "BoffinBlocks"
    },
    {
        img: "./images/gsons-new.png",
        description: "GSONS India - Full Stack Brand Portfolio",
        category: "Business",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
        fullDescription: "Designed and developed a full-stack brand portfolio website for GSONS India as a solo developer. Built with the MERN stack, the platform focuses on performance, responsiveness, and modern UI design, delivering a production-ready solution for a real business client.",
        link: "https://gsonsindia.com",
        date: "Jan 2026 - Present"
    },
  
    {
        img: "./images/thecollegeway.png",
        description: "JessicaWay - Business Portfolio",
        category: "Business",
        technologies: ["React.js", "Next.js", "Firebase", "Tailwind CSS", "emailjs"],
        fullDescription: "Developed a full-stack business website with authentication and dynamic content management using Firebase as the backend. Focused on building a clean user interface, real-time data handling, and secure integration of backend services.",
        link: "https://thejessicaway.com",
        date: "Jan 2026"
    },
    {
        img: "./images/diginotes-new.png",
        description: "CourseHub - Online Learning Platform",
        category: "Educational",
        technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "React.js"],
        fullDescription: "Built a full-stack learning platform that allows users to explore and access educational courses through a modern web interface. Implemented scalable frontend architecture using Next.js and handled backend APIs and database operations for course management.",
        link: "https://course-hub-alpha.vercel.app",
        date: "Oct 2025 - Nov 2025"
    },
    {
        img: "./images/frost.png",
        description: "Frost - Modern Web App",
        category: "Web App",
        technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
        fullDescription: "A sleek and modern web application with stunning UI/UX design. Built with Next.js for optimal performance and featuring smooth animations and responsive design.",
        link: "https://frost-master.vercel.app/customer/home",
    },
    {
        img: "./images/brave_screenshot_69airline.vercel.app.png",
        description: "69 Airline - Booking System",
        category: "Web App",
        technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
        fullDescription: "Airline ticket booking system with flight search, seat selection, and booking management. Features real-time availability updates and secure payment processing.",
        link: "https://69airline.vercel.app",
    },
    {
        img: "./images/brave_screenshot_bdslogistics.vercel.app.png",
        description: "BDS Logistics - Business Site",
        category: "Business",
        technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
        fullDescription: "Professional business website for a logistics company showcasing services, tracking capabilities, and company information. Features modern design and smooth animations.",
        link: "https://bdslogistics.vercel.app",
    },
    {
        img: "./images/brave_screenshot_freezy.vercel.app.png",
        description: "Freezy - Ice Cream Shop",
        category: "E-commerce",
        technologies: ["React.js", "CSS3", "JavaScript"],
        fullDescription: "Delightful e-commerce website for an ice cream shop with product showcase, online ordering, and delivery options. Features vibrant design and smooth user experience.",
        link: "https://freezy.vercel.app",
    },
    {
        img: "./images/brave_screenshot_headsetmart.vercel.app.png",
        description: "Headset Mart - E-commerce",
        category: "E-commerce",
        technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
        fullDescription: "E-commerce platform specialized in audio equipment with product filtering, reviews, and secure checkout. Includes wishlist functionality and user accounts.",
        link: "https://headsetmart.vercel.app",
    },
    {
        img: "./images/brave_screenshot_osm-mosam.netlify.app.png",
        description: "Weather App",
        category: "Web App",
        technologies: ["React.js", "Weather API", "CSS3", "JavaScript"],
        fullDescription: "Real-time weather application providing current conditions, forecasts, and weather alerts. Features location-based weather data and clean, intuitive interface.",
        link: "https://osm-mosam.netlify.app",
    },
    {
        img: "./images/brave_screenshot_therealplace.netlify.app.png",
        description: "Real Estate Platform",
        category: "Business",
        technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
        fullDescription: "Comprehensive real estate platform for property listings, searches, and virtual tours. Features advanced filtering, map integration, and contact management.",
        link: "https://therealplace.netlify.app",
    },
];

const contactConfig = {
    YOUR_EMAIL: "tushar32234@gmail.com",
    YOUR_FONE: "+91 8264829755",
    description: "Let's build something amazing together. I'm always open to discussing new projects and opportunities.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/anonymous9076",
    instagram: "https://instagram.com/__tushar__4369/",
    linkedin: "https://linkedin.com/in/tushar-kumar-903636280",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};