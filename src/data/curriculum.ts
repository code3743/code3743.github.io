const curriculum: Curriculum = {
    name: 'Jota López',
    description: '+2 años de experiencia. Desarrollador de Aplicaciones Móviles y Estudiante de Ingeniería de Sistemas. Aunque mi pasión principal es el desarrollo móvil, también disfruto realizando web scraping para crear APIs por diversión. Además, he trabajado en el backend con Node.js. Preste servicio militar y me encanta estar en constante aprendizaje.',
    socialMedia: [
        {
            name: 'Instagram',
            icon: '/brand-instagram.svg',
            url: 'https://www.instagram.com/jotalopezr/'        
        },
        {
            name: 'LinkedIn',
            icon: '/brand-linkedin.svg',
            url: 'linkedin.com/in/jota-lópez-ramirez-899604231'
        },
        {
            name: 'GitHub',
            icon: '/brand-github.svg',
            url: 'https://github.com/code3743'
        },
        {
            name: 'Email',
            icon: '/mail.svg',
            url: 'mailto:jota.lopez@correounivalle.edu.co'
        },
        {
            name: 'Twitter',
            icon: '/brand-x.svg',
            url: 'https://x.com/Jota3743'
        }
    ],
    photo: 'https://avatars.githubusercontent.com/u/102370043?v=4',
    experiences: [
        {
            company: 'Integra',
            role: 'Desarrollador mobile',
            date: '2023',
            description: 'Desarrollo de una aplicación móvil para un proyecto de cuidado del rio Dagua, la aplicación permite a los usuarios reportar problemas ambientales, muestra información sobre el rio y permite a los usuarios ver los reportes.',
            technologies: [
                {
                    name: 'Flutter',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg'
                },
                {
                    name: 'Firebase',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg'
                },
                {
                    name: 'Google Cloud',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg'
                },
                {
                    name: 'Astro',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/astro/astro-original.svg'
                }
            ],
            url: 'https://play.google.com/store/apps/details?id=app.miriodagua.mi_rio_dagua&hl=es'
        },
        {
            company: 'VPRO Soluciones',
            role: 'Desarrollador mobile',
            date: '2022',
            description: 'Desarrollo de una aplicación móvil tipo Uber para una empresa de transporte local de la ciudad de Tuluá, Valle del Cauca. La aplicación permite a los usuarios solicitar un servicio de transporte y a los conductores aceptar o rechazar la solicitud.',
            technologies: [
                {
                    name: 'Flutter',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg'
                },
                {
                    name: 'Firebase',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg'
                },
                {
                    name: 'Node.js',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
                
                },
                {
                    name: 'Google Cloud',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg'
                }
            ],
        },
        {
            company: 'Universidad del Valle',
            role: 'Desarrollador mobile',
            date: '2022',
            description: 'Desarrollo de la aplicación móvil de la emisora Univalle Estéreo. La aplicación permite a los oyentes escuchar la emisora en vivo y acceder a los post publicados en la página web.',
            technologies: [
                {
                    name: 'Flutter',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg'
                },
                {
                    name: 'Node.js',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
                }
            ],
            url: 'https://play.google.com/store/search?q=univalle+estereo&c=apps&hl=es'
        },
        {
            company: 'Team Dream',
            role: 'Desarrollador - Soporte técnico',
            date: '2020 - 2021',
            description: 'Soporte técnico a clientes de la empresa, resolución de problemas, actualización de sitios web y migración de hosting.',
            technologies: [
                {
                    name: 'WordPress',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg'
                },
                {
                    name: 'PHP',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-plain.svg'
                },
                {
                    name: 'MySQL',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'
                }
            ],
        }
    ],
    projects: [
        {
            name: "Univalle App",
            description: "Univalle App es una aplicación móvil para estudiantes de la Universidad del Valle (Colombia) que ofrece servicios esenciales del sistema SIRA, permitiendo acceder a diversas funciones desde un solo lugar.",
            image: "/univalle_app_project.webp",
            technologies: [
                {
                    name: 'Flutter',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg'
                },
                {
                    name: 'Node.js',
                    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
                }
            ],
            code: 'https://github.com/code3743/univalle_app'
        }
    ]
}

export default curriculum;