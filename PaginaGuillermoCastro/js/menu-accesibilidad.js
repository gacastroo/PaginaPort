document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos
    const toggleMenuButton = document.getElementById('toggleMenuButton');
    const menuOpciones = document.getElementById('menuOpciones');
    const btnAumentarTexto = document.getElementById('btnAumentarTexto');
    const btnReducirTexto = document.getElementById('btnReducirTexto');
    const btnAltoContraste = document.getElementById('btnAltoContraste');
    const btnResetearEstilos = document.getElementById('btnResetearEstilos');

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
