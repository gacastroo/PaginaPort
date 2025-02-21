document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('#toggleMode');
    const modeIcon = document.querySelector('#modeIcon');

    // Comprobar si el usuario tenía guardado el modo oscuro previamente
    const isDarkMode = localStorage.getItem('theme') === 'dark';

    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        modeIcon.classList.replace('fa-moon', 'fa-sun'); // Cambia a sol
    }

    // Evento de click para cambiar de modo
    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.getAttribute('data-theme') === 'dark';

        if (isDarkMode) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light'); // Guarda preferencia
            modeIcon.classList.replace('fa-sun', 'fa-moon'); // Cambia a luna
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Guarda preferencia
            modeIcon.classList.replace('fa-moon', 'fa-sun'); // Cambia a sol
        }
    });
});
