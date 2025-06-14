// Este evento se dispara cuando todo el contenido del HTML ha sido cargado y parseado.
// Es la mejor práctica para asegurarse de que todos los elementos del DOM están disponibles para ser manipulados.
document.addEventListener('DOMContentLoaded', () => {

    // --- SELECCIÓN DE ELEMENTOS DEL DOM ---
    // Guardamos en constantes los elementos que vamos a necesitar manipular para un acceso más rápido y eficiente.
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const languageToggleBtn = document.getElementById('languageToggleBtn');
    const langIcon = document.getElementById('langIcon');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');
    const hireBtn = document.getElementById('hireBtn');

    // --- DATOS DE TRADUCCIÓN (i18n - Internacionalización) ---
    // Usamos un objeto para almacenar todas las cadenas de texto en ambos idiomas.
    // Esto es mucho más limpio y escalable que tener spans duplicados en el HTML.
    // Cada 'key' corresponde al atributo 'data-key' en el HTML.
    const translations = {
        es: {
            pageTitle: "Portafolio - AlejoMB.Dev",
            navHome: "Inicio",
            navPortfolio: "Portafolio",
            navAboutMe: "Sobre Mí",
            navContact: "¡Contáctame!",
            homeGreeting: "Hola, soy ",
            homeDescription: "Me especializo en desarrollar interfaces web atractivas y funcionales; diseñando una experiencia fluida y una interacción amigable en aplicaciones y sitios web; buscando así, una navegación intuitiva, eficiente y agradable para el usuario.",
            homeQuote: '"Mi objetivo es que disfrutes cada interacción en un entorno digital diseñado para ti."',
            homeDownloadCV: "¡Descargar CV!",
            homeFollowMe: "Sígueme en...",
            portfolioTitle: "Mi Trabajo",
            portfolioTechTitle: "Tecnologías Usadas",
            portfolioProjectsTitle: "Proyectos Destacados",
            projectDescription1: "Una aplicación web de una sola página (SPA) que replica visualmente la página de inicio de Mercado Libre",
            projectDescription2: "Herramienta para automatizar búsquedas y recopilar resultados de Google.",
            projectDescription3: "Un bot para extraer y analizar tendencias y datos de perfiles de Twitter/X.",
            projectButton: "Conoce Más...",
            portfolioMoreProjects: "¡Más Proyectos!",
            aboutTitle: "Sobre Mí",
            aboutExperienceTitle: "Experiencia Freelance",
            aboutExperienceDate: "2022 – Actualidad",
            aboutExperienceDesc: "- Desarrollo de sitios y aplicaciones web a medida, basados en diseños de Figma y creados con tecnologías como HTML, CSS, JavaScript, React, Node.js.<br><br>- Creación de sistemas de compra en línea y plataformas interactivas para clientes individuales y pequeños negocios.<br><br>- Implementación de bases de datos SQL (MySQL) para la gestión eficiente de la información.<br><br>- Comunicación directa con clientes para la toma de requerimientos y entrega de soluciones funcionales.<br><br>- Mantenimiento, optimización e instalación de equipos de computo.",
            aboutEducationTitle: "Formación Académica",
            aboutEducationDegree: "Ingeniería de Sistemas",
            aboutEducationUniversity: "Corporación universitaria Remington.<br><i>Año de Graduación: 2021</i>",
            aboutEducationFrontend: "Desarrollo Frontend",
            aboutEducationLearning: "- Desarrollador frontend autodidacta con experiencia en HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, Git, consumo de APIs REST, y manejo básico de Figma. <br><br> - He desarrollado habilidades a través de proyectos personales, documentación oficial y plataformas especializadas, con enfoque en buenas prácticas, desarrollo modular y diseño responsivo.",
        },
        en: {
            pageTitle: "Portfolio - AlejoMB.Dev",
            navHome: "Home",
            navPortfolio: "Portfolio",
            navAboutMe: "About Me",
            navContact: "Contact Me!",
            homeGreeting: "Hi, I'm ",
            homeDescription: "I specialize in developing attractive and functional web interfaces; designing a smooth experience and friendly interaction in applications and websites, thus seeking intuitive, efficient, and pleasant navigation for the user.",
            homeQuote: '"My goal is for you to enjoy every interaction in a digital environment designed for you."',
            homeDownloadCV: "Download CV!",
            homeFollowMe: "Follow me on...",
            portfolioTitle: "My Work",
            portfolioTechTitle: "Technologies Used",
            portfolioProjectsTitle: "Featured Projects",
            projectDescription1: "A single-page application (SPA) that visually replicates the homepage of Mercado Libre.",
            projectDescription2: "A tool to automate searches and collect results from Google.",
            projectDescription3: "A bot to extract and analyze trends and profile data from Twitter/X.",
            projectButton: "Learn More",
            portfolioMoreProjects: "More Projects!",
            aboutTitle: "About Me",
            aboutExperienceTitle: "Freelance Experience",
            aboutExperienceDate: "2022 – Present",
            aboutExperienceDesc: "- Development of custom websites and web applications, based on Figma designs and created with technologies like HTML, CSS, JavaScript, React, Node.js.<br><br>- Creation of online shopping systems and interactive platforms for individual clients and small businesses.<br><br>- Implementation of SQL databases (MySQL) for efficient information management.<br><br>- Direct communication with clients for requirements gathering and delivery of functional solutions.<br><br>- Maintenance, optimization, and installation of computer equipment.",
            aboutEducationTitle: "Academic Background",
            aboutEducationDegree: "Systems Engineering",
            aboutEducationUniversity: "Remington University Corporation.<br><i>Graduation Year: 2021</i>",
            aboutEducationFrontend: "Frontend Development",
            aboutEducationLearning: "- Self-taught frontend developer with experience in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, Git, REST API consumption, and basic Figma handling. <br><br> - I have developed skills through personal projects, official documentation, and specialized platforms, focusing on best practices, modular development, and responsive design.",
        }
    };

    // --- LÓGICA DE CAMBIO DE IDIOMA ---
    const setLanguage = (lang) => {
        // Itera sobre todos los elementos que tienen el atributo 'data-key'.
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key'); // Obtiene la clave de traducción (ej: 'navHome').
            // Verifica si el texto para esa clave existe en el objeto de traducciones para el idioma seleccionado.
            if (translations[lang][key]) {
                // Si la clave existe, actualiza el contenido HTML del elemento.
                // Usamos innerHTML para que las etiquetas como <br> o <i> se rendericen correctamente.
                element.innerHTML = translations[lang][key];
            }
        });
        // Actualiza el atributo 'lang' de la etiqueta <html> para mejorar la accesibilidad y el SEO.
        document.documentElement.lang = lang;
        // Guarda el idioma seleccionado en el almacenamiento local del navegador para recordarlo en futuras visitas.
        localStorage.setItem('language', lang);
        // Actualiza el texto del botón de cambio de idioma.
        langIcon.textContent = lang === 'es' ? 'EN' : 'ES';
        // Reinicia la animación de escritura con las nuevas cadenas de texto.
        initTyped(lang);
    };

    // --- LÓGICA DE MODO OSCURO ---
    const setTheme = (theme) => {
        // Añade o quita la clase 'dark-mode' del body. El CSS se encarga del resto.
        document.body.classList.toggle('dark-mode', theme === 'dark');
        // Actualiza el ícono del botón para reflejar el tema actual.
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        // Guarda la preferencia de tema en el almacenamiento local.
        localStorage.setItem('theme', theme);
    };

    // --- NAVEGACIÓN DE PESTAÑAS (SINGLE PAGE APPLICATION) ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previene el comportamiento por defecto del enlace (no recargar la página).
            const targetSectionId = link.getAttribute('data-section'); // Obtiene el ID de la sección a mostrar.

            // Quita la clase 'active' de la sección y del enlace de navegación actualmente activos.
            document.querySelector('.page-section.active').classList.remove('active');
            document.querySelector('.nav-link.active').classList.remove('active');

            // Añade la clase 'active' a la nueva sección y al enlace correspondiente.
            document.getElementById(targetSectionId).classList.add('active');
            link.classList.add('active');
        });
    });

    // --- ANIMACIÓN DE ESCRITURA (Typed.js) ---
    // Variables para mantener las instancias de Typed.js y poder destruirlas antes de recrearlas.
    let typedTitle, typedSubtitle;

    const initTyped = (lang) => {
        // Si ya existen instancias de Typed, se destruyen para evitar duplicados y errores.
        if (typedTitle) typedTitle.destroy();
        if (typedSubtitle) typedSubtitle.destroy();

        // Define las cadenas de texto para el subtítulo según el idioma.
        const subtitleStrings = lang === 'es' 
            ? ["Ingeniero de Sistemas &", "Desarrollador Frontend."]
            : ["Systems Engineer &", "Frontend Developer."];

        // Crea la primera instancia de Typed.js para el título principal.
        typedTitle = new Typed('#typed-title', {
            strings: ["AlejoMB.Dev"],
            typeSpeed: 60,
            showCursor: false, // No muestra el cursor parpadeante al final.
            // Cuando la animación del título termina, se inicia la del subtítulo.
            onComplete: () => {
                typedSubtitle = new Typed('#typed-subtitle', {
                    strings: subtitleStrings,
                    typeSpeed: 50,  // Velocidad de escritura.
                    backSpeed: 30,  // Velocidad de borrado.
                    backDelay: 2000, // Pausa antes de empezar a borrar.
                    loop: true,     // La animación se repite indefinidamente.
                    showCursor: false // No muestra el cursor parpadeante al final.
                });
            }
        });
    };

    // --- EVENT LISTENERS PARA LOS BOTONES ---

    // Evento para el botón de cambio de tema.
    themeToggleBtn.addEventListener('click', () => {
        // Determina cuál debería ser el nuevo tema basándose en el tema actual.
        const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Evento para el botón de cambio de idioma.
    languageToggleBtn.addEventListener('click', () => {
        // Determina cuál debería ser el nuevo idioma.
        const newLang = localStorage.getItem('language') === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });

    // Evento para el botón de "Contáctame".
    hireBtn.addEventListener('click', () => {
        window.open('https://wa.me/573186750806', '_blank'); // Cambia la URL por la que desees
    });

    document.querySelectorAll('button[data-key="projectButton"]').forEach(function(btn, i) {
        btn.addEventListener('click', function() {
            // Cambia los enlaces según el orden de los botones
            const links = [
                'https://enlace-proyecto-1.com',
                'https://enlace-proyecto-2.com',
                'https://enlace-proyecto-3.com'
            ];
            window.open(links[i], '_blank');
        });
    });


    // --- INICIALIZACIÓN AL CARGAR LA PÁGINA ---

    // Obtiene el idioma guardado, o usa 'es' como predeterminado si no hay ninguno.
    const currentLang = localStorage.getItem('language') || 'es';
    // Obtiene el tema guardado, o usa 'light' como predeterminado.
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Establece el idioma y el tema iniciales al cargar la página.
    setLanguage(currentLang);
    setTheme(currentTheme);

});