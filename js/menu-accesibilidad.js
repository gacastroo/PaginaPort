document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos con querySelector
    const toggleMenuButton = document.querySelector('#toggleMenuButton');
    const menuOpciones = document.querySelector('#menuOpciones');
    const btnAumentarTexto = document.querySelector('#btnAumentarTexto');
    const btnReducirTexto = document.querySelector('#btnReducirTexto');
    const btnAltoContraste = document.querySelector('#btnAltoContraste');
    const btnResetearEstilos = document.querySelector('#btnResetearEstilos');

    // Mostrar/ocultar el menú
    toggleMenuButton.addEventListener('click', () => {
        if (menuOpciones.style.display === 'block') {
            menuOpciones.style.display = 'none';
        } else {
            menuOpciones.style.display = 'block';
        }
    });

    // Aumentar texto
    btnAumentarTexto.addEventListener('click', () => {
        document.body.style.fontSize = 'larger';
    });

    // Reducir texto
    btnReducirTexto.addEventListener('click', () => {
        document.body.style.fontSize = 'smaller';
    });

    // Activar alto contraste
    btnAltoContraste.addEventListener('click', () => {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'yellow';
    });

    // Restablecer estilos
    btnResetearEstilos.addEventListener('click', () => {
        document.body.style.fontSize = '';
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    });
});
