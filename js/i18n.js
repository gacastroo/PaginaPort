document.addEventListener("DOMContentLoaded", function () {
    i18next.init({
        lng: "es", // Idioma inicial (Español)
        resources: {
            es: {
                translation: {
                    "changeLanguage": "Cambiar idioma ",
                    "title": "Mi Portafolio",
                    "studies": "Estudios",
                    "projects": "Proyectos",
                    "about": "Sobre mí",
                    "contact": "Contacto",
                    "seeProjects": "Ver Proyectos",
                    "quote": "La imaginación es más importante que el conocimiento. El conocimiento es limitado, mientras que la imaginación no",
                    "quote2": "Bienvenidos a mi portfolio",
                    "author": "Donal Knuth",
                    "accessibility": "Accesibilidad",
                    "increaseText": "Aumentar Texto",
                    "decreaseText": "Reducir Texto",
                    "highContrast": "Alto Contraste",
                    "resetStyles": "Restablecer",
                    "github": "GitHub",
                    "name": "Guillermo Castro",
                    "send": "Enviar",
                    "degree1": "Grado Superior: <strong>Animación 3D, juegos y entornos interactivos</strong>",
                    "degree2": "Grado Superior: <strong>Desarrollo de Aplicaciones Web</strong>",
                    "aboutMe": "Soy un desarrollador web y animador 3D con pasión por crear experiencias visuales impactantes y funcionales.",
                    "name2": "Nombre: ",
                    "email": "Correo Electrónico: ",
                    "message": "Mensaje: ",
                    "copyr": "2025 Portafolio. Todos los derechos reservados.",
                    "textoPopUpEn": "Hey 👋 &nbsp; <strong>Muchas gracias</strong> por ver <strong>mi portfolio</strong>. No olvides seguirme en las <strong>redes</strong> &#128513;<br> ⬅️"
                }
            },
            en: {
                translation: {
                    "changeLanguage": "Change Language",
                    "title": "My Portfolio",
                    "studies": "Studies",
                    "projects": "Projects",
                    "about": "About Me",
                    "contact": "Contact",
                    "seeProjects": "See Projects",
                    "quote": "Imagination is more important than knowledge. Knowledge is limited, whereas imagination is not",
                    "quote2": "Welcome to my portfolio",
                    "author": "Donal Knuth",
                    "accessibility": "Accessibility",
                    "increaseText": "Increase Text",
                    "decreaseText": "Decrease Text",
                    "highContrast": "High Contrast",
                    "resetStyles": "Reset",
                    "github": "GitHub",
                    "name": "Guillermo Castro",
                    "send": "Send",
                    "degree1": "Higher Degree: 3D Animation, Games and Interactive Environments",
                    "degree2": "Higher Degree: Web Application Development",
                    "aboutMe": "I am a web developer and 3D animator passionate about creating visually striking and functional experiences.",  
                    "name2": "Name: ",
                    "email": "Email: ",
                    "message": "Message: ",
                    "studiesFooter":"Studies",
                    "proyectosFooter":"Proyectos",
                    "copyr": "2025 Portafolio. All rights reserved.",
                    "textoPopUpEn": "Hey 👋 &nbsp; <strong>Thank you so much</strong> for checking out <strong>my portfolio</strong>. Don't forget to follow me on <strong>social media</strong> 😁 </br> ⬅️"
                }
            }
        }
    }, function (err, t) {
        updateContent();
    });

    function updateContent() {
        document.title = i18next.t("title");
        document.querySelector(".trabajos-title").textContent = i18next.t("projects");
        document.querySelector(".about-title").textContent = i18next.t("about");
        document.querySelector(".contacto-title").textContent = i18next.t("contact");
        document.querySelector("#Verproyectos").textContent = i18next.t("seeProjects");
        document.querySelector(".quote blockquote").textContent = i18next.t("quote");
        document.querySelector("#quote").textContent = i18next.t("quote2")
        document.querySelector(".name").textContent = i18next.t("author");
        document.querySelector("#nombre1").textContent = i18next.t("name2")
        document.querySelector("#email1").textContent = i18next.t("email")
        document.querySelector("#mensaje1").textContent = i18next.t("message")
     
        
        document.querySelector("a[href='#estudios']").textContent = i18next.t("studies");
        document.querySelector("a[href='#trabajos']").textContent = i18next.t("projects");
        document.querySelector("a[href='#about']").textContent = i18next.t("about");
        document.querySelector("a[href='#contacto']").textContent = i18next.t("contact");
        document.querySelector("#changeLanguage").textContent = i18next.t("changeLanguage");
        document.querySelector("#toggleMenuButton").textContent = i18next.t("accessibility");
        
        document.getElementById("btnAumentarTexto").textContent = i18next.t("increaseText");
        document.getElementById("btnReducirTexto").textContent = i18next.t("decreaseText");
        document.getElementById("btnAltoContraste").textContent = i18next.t("highContrast");
        document.getElementById("btnResetearEstilos").textContent = i18next.t("resetStyles");

        document.querySelector("a[href='https://github.com']").textContent = i18next.t("github");
        document.querySelector(".contact-form button").textContent = i18next.t("send");

        document.querySelector("#Estudiostt").textContent = i18next.t("studies")
        
        document.querySelector("#degree1").textContent = i18next.t("degree1");
        document.querySelector("#degree2").textContent = i18next.t("degree2");
        document.querySelector(".about-text").textContent = i18next.t("aboutMe");
        
        document.querySelector("#estudiosFooter").textContent = i18next.t("studies"),
        document.querySelector("#trabajosFooter").textContent = i18next.t("projects"),
        document.querySelector("#contactoFooter").textContent = i18next.t("contact"),

        document.querySelector("#copyr").textContent = "©" + i18next.t("copyr")
        document.querySelector("#textoPopUp").textContent = i18next.t("textoPopUpEn")
        document.querySelector("#textoPopUp").innerHTML = i18next.t("textoPopUpEn");
        document.querySelector("#textoPopUp").innerHTML = i18next.t("textoPopUpEn");
        document.querySelector("#degree1").innerHTML = i18next.t("degree1");
        document.querySelector("#degree2").innerHTML = i18next.t("degree2");

    }

    document.getElementById("changeLanguage").addEventListener("click", function () {
        let newLang = i18next.language === "es" ? "en" : "es";
        i18next.changeLanguage(newLang, updateContent);
    });
});