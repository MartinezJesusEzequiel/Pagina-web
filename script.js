document.addEventListener("DOMContentLoaded", function() {
    // Formulario
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Gracias por tu mensaje!");
    });

    // --- Modo oscuro ---
    const darkModeBtn = document.getElementById('darkModeToggle');
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // --- Multilenguaje ES/EN ---
    const langBtn = document.getElementById('langToggle');

    const textos = {
        es: {
            titulo: "Hola, soy Ezequiel Martinez",
            subtitulo: "Me apasiona crear software que resuelva problemas reales de forma simple y eficaz.",
            verProyectos: "Ver Proyectos",
            nav: ["Inicio", "Sobre mí", "Proyectos", "Certificados", "Contacto"],
            sobreMi: "Sobre mí",
            sobreMiTexto: "Soy una persona curiosa y creativa, siempre con ganas de aprender algo nuevo. Disfruto el proceso de pensar ideas y convertirlas en soluciones útiles para los demás.<br>Me gusta enfrentar desafíos, trabajar de manera autodidacta y colaborar con otras personas para crecer juntos. Busco superarme día a día y aportar valor en cada proyecto en el que participo.",
            tecnologias: "Tecnologías de desarrollo",
            proyectos: "Proyectos",
            certificados: "Certificados y logros",
            contacto: "Contacto",
            enviar: "Enviar",
            cv: "Descargar CV",
            habilidades: [
                {titulo: "HTML", desc: "Experto en la creación de estructuras web semánticas."},
                {titulo: "CSS", desc: "Diseño responsivo y animaciones modernas."},
                {titulo: "JavaScript", desc: "Desarrollo de funcionalidades dinámicas e interactivas."},
                {titulo: "React", desc: "Creación de interfaces de usuario eficientes."},
                {titulo: "Python", desc: "Lenguaje versátil para desarrollo web, análisis de datos y más."},
                {titulo: "Pandas", desc: "Biblioteca poderosa para análisis y manipulación de datos."}
            ],
            proyectosLista: [
                {titulo: "Proyecto 1", desc: "Descripción breve del proyecto."},
                {titulo: "Proyecto 2", desc: "Descripción breve del proyecto."}
            ],
            certificadosLista: [
                {titulo: "Google - Fundamentos de Marketing Digital", desc: "Certificado oficial de Google Actívate."},
                {titulo: "FreeCodeCamp - Responsive Web Design", desc: "Certificación en diseño web responsivo."},
                {titulo: "Hackathon Python 2024", desc: "Participación destacada en hackathon de desarrollo Python."}
            ]
        },
        en: {
            titulo: "Hi, I'm Ezequiel Martinez",
            subtitulo: "I am passionate about creating software that solves real problems simply and efficiently.",
            verProyectos: "See Projects",
            nav: ["Home", "About me", "Projects", "Certificates", "Contact"],
            sobreMi: "About me",
            sobreMiTexto: "I'm a curious and creative person, always eager to learn something new. I enjoy thinking up ideas and turning them into useful solutions for others.<br>I like facing challenges, working independently and collaborating with others to grow together. I strive to improve every day and add value to every project I participate in.",
            tecnologias: "Development Technologies",
            proyectos: "Projects",
            certificados: "Certificates & Achievements",
            contacto: "Contact",
            enviar: "Send",
            cv: "Download CV",
            habilidades: [
                {titulo: "HTML", desc: "Expert in creating semantic web structures."},
                {titulo: "CSS", desc: "Responsive design and modern animations."},
                {titulo: "JavaScript", desc: "Development of dynamic and interactive features."},
                {titulo: "React", desc: "Building efficient user interfaces."},
                {titulo: "Python", desc: "Versatile language for web development, data analysis and more."},
                {titulo: "Pandas", desc: "Powerful library for data analysis and manipulation."}
            ],
            proyectosLista: [
                {titulo: "Project 1", desc: "Brief project description."},
                {titulo: "Project 2", desc: "Brief project description."}
            ],
            certificadosLista: [
                {titulo: "Google - Fundamentals of Digital Marketing", desc: "Official certificate from Google Actívate."},
                {titulo: "FreeCodeCamp - Responsive Web Design", desc: "Certification in responsive web design."},
                {titulo: "Hackathon Python 2024", desc: "Outstanding participation in Python development hackathon."}
            ]
        }
    };

    let idioma = 'es';

    function cambiarIdioma() {
        // Cambia los textos principales
        document.querySelector('header h1').textContent = textos[idioma].titulo;
        document.querySelector('header p').textContent = textos[idioma].subtitulo;
        document.querySelector('a.btn[href="#proyectos"]').textContent = textos[idioma].verProyectos;

        // Menú navegación
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach((link, i) => link.textContent = textos[idioma].nav[i]);

        // Secciones principales
        document.querySelector('#sobre-mi h2').textContent = textos[idioma].sobreMi;
        document.querySelector('#sobre-mi p').innerHTML = textos[idioma].sobreMiTexto;
        document.querySelector('#habilidades h2').textContent = textos[idioma].tecnologias;
        document.querySelector('#proyectos h2').textContent = textos[idioma].proyectos;
        document.querySelector('#certificados h2').textContent = textos[idioma].certificados;
        document.querySelector('#contacto h2').textContent = textos[idioma].contacto;
        document.querySelector('#formulario button').textContent = textos[idioma].enviar;

        // Botón de CV en el footer
        const cvBtn = document.querySelector('footer .btn');
        if (cvBtn) cvBtn.innerHTML = `<i class="fas fa-file-download"></i> ${textos[idioma].cv}`;

        // Habilidades
        const habilidades = document.querySelectorAll('.habilidad');
        habilidades.forEach((hab, i) => {
            hab.querySelector('h3').textContent = textos[idioma].habilidades[i].titulo;
            hab.querySelector('p').textContent = textos[idioma].habilidades[i].desc;
        });

        // Proyectos
        const proyectos = document.querySelectorAll('.proyecto');
        proyectos.forEach((proy, i) => {
            proy.querySelector('h3').textContent = textos[idioma].proyectosLista[i].titulo;
            proy.querySelector('p').textContent = textos[idioma].proyectosLista[i].desc;
        });

        // Certificados
        const certificados = document.querySelectorAll('.certificado');
        certificados.forEach((cert, i) => {
            cert.querySelector('h3').textContent = textos[idioma].certificadosLista[i].titulo;
            cert.querySelector('p').textContent = textos[idioma].certificadosLista[i].desc;
        });

        // Cambia el texto del botón para mostrar la opción contraria
        langBtn.textContent = idioma === 'es' ? 'EN' : 'ES';
    }

    langBtn.addEventListener('click', () => {
        idioma = idioma === 'es' ? 'en' : 'es';
        cambiarIdioma();
    });

    // Inicializa el idioma al cargar
    cambiarIdioma();
});