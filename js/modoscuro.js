document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('#toggleMode');
    const modeIcon = document.querySelector('#modeIcon');
    const navbar = document.querySelector('#header');
    const footer = document.querySelector('#footer');
    const estudiosSection = document.querySelector('.estudios');
    const projectSection = document.querySelector('.trabajos');

    // Comprobar si el usuario ya tenía un modo guardado en localStorage
    const isDarkMode = localStorage.getItem('theme') === 'dark';

    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        modeIcon.classList.replace('fa-moon', 'fa-sun'); // Cambia a sol
        toggleButton.style.color = 'yellow'; // Hace visible el icono en modo oscuro
        navbar.style.backgroundColor = 'black';
        footer.style.backgroundColor = 'black';
        if (estudiosSection) {
            estudiosSection.style.backgroundColor = '#212529';
            estudiosSection.style.color = 'white';
            projectSection.style.backgroundColor = '#212529';
            projectSection.style.color = 'white';
        }
    } else {
        toggleButton.style.color = 'black'; // Hace visible el icono en modo claro
    }

    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.getAttribute('data-theme') === 'dark';

        if (isDarkMode) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light'); // Guarda preferencia
            modeIcon.classList.replace('fa-sun', 'fa-moon'); // Cambia a luna
            toggleButton.style.color = 'white'; // Ajusta el color en modo claro
            navbar.style.backgroundColor = '#2c3e50';
            footer.style.backgroundColor = '#2c3e50';
            if (estudiosSection) {
                estudiosSection.style.backgroundColor = '#f8f9fa';
                estudiosSection.style.color = 'black';
                projectSection.style.backgroundColor = '#f8f9fa';
                projectSection.style.color = 'black';
            }
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Guarda preferencia
            modeIcon.classList.replace('fa-moon', 'fa-sun'); // Cambia a sol
            toggleButton.style.color = 'yellow'; // Ajusta el color en modo oscuro
            navbar.style.backgroundColor = 'black';
            footer.style.backgroundColor = 'black';
            if (estudiosSection) {
                estudiosSection.style.backgroundColor = '#212529';
                estudiosSection.style.color = 'white';
                projectSection.style.backgroundColor = '#212529';
                projectSection.style.color = 'white';
            }
        }
    });
});
