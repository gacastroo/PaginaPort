document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos con querySelector
    const toggleMenuButton = document.querySelector('#toggleMenuButton');
    const menuOpciones = document.querySelector('#menuOpciones');
    const btnAumentarTexto = document.querySelector('#btnAumentarTexto');
    const btnReducirTexto = document.querySelector('#btnReducirTexto');
    const btnAltoContraste = document.querySelector('#btnAltoContraste');
    const btnResetearEstilos = document.querySelector('#btnResetearEstilos');
    const btnModoNoche = document.querySelector('#toggleMode');

    // Verificar si los elementos existen antes de añadir los event listeners
    if (toggleMenuButton && menuOpciones) {
        // Mostrar/ocultar el menú
        toggleMenuButton.addEventListener('click', () => {
            if (menuOpciones.style.display === 'block') {
                menuOpciones.style.display = 'none';
            } else {
                menuOpciones.style.display = 'block';
            }
        });
    }


    if (btnAumentarTexto && btnReducirTexto) {
        let clickCount = 0; // Contador total de cambios (tanto aumentar como reducir)
        const maxClicks = 2; // Máximo de cambios permitidos en cualquier dirección
    
        // Función para cambiar el tamaño del texto en todos los elementos
        function cambiarTamanoTexto(factor) {
            document.querySelectorAll("body, h1, h2, h3, h4, h5, h6, p, a, li, span, button").forEach(elemento => {
                let currentSize = window.getComputedStyle(elemento).fontSize;
                let newSize = parseFloat(currentSize) * factor;
                elemento.style.fontSize = newSize + 'px';
            });
        }
    
        btnAumentarTexto.addEventListener('click', () => {
            if (clickCount < maxClicks) {
                cambiarTamanoTexto(1.1); // Aumenta un 10%
                clickCount++;
    
                // Habilitar el botón de reducir si estaba deshabilitado
                btnReducirTexto.disabled = false;
            }
    
            // Deshabilitar aumentar si se alcanza el límite
            if (clickCount >= maxClicks) {
                btnAumentarTexto.disabled = true;
            }
        });
    
        btnReducirTexto.addEventListener('click', () => {
            if (clickCount > -maxClicks) {
                cambiarTamanoTexto(0.9); // Reduce un 10%
                clickCount--;
    
                // Habilitar el botón de aumentar si estaba deshabilitado
                btnAumentarTexto.disabled = false;
            }
    
            // Deshabilitar reducir si se alcanza el límite en la dirección opuesta
            if (clickCount <= -maxClicks) {
                btnReducirTexto.disabled = true;
            }
        });
    }
    
    

    if (btnAltoContraste) {
        btnAltoContraste.addEventListener('click', () => {
            document.body.classList.toggle('alto-contraste'); // Agrega o quita la clase CSS
    
            const isActive = document.body.classList.contains('alto-contraste');
    
            console.log(`Modo alto contraste ${isActive ? 'activado' : 'desactivado'}.`);
        });
    }
    
if (btnResetearEstilos) {
    btnResetearEstilos.addEventListener('click', () => {
        // Remover la clase alto-contraste
        document.body.classList.remove('alto-contraste');

        // Restablecer el modo claro desactivando el modo oscuro
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light'); // Guardar preferencia como modo claro

        // Restaurar el icono del botón de modo oscuro
        const modeIcon = document.querySelector('#modeIcon');
        if (modeIcon) {
            modeIcon.classList.replace('fa-sun', 'fa-moon'); // Asegurar que vuelva a la luna
        }

        // Restablecer estilos generales
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        document.body.style.fontSize = '';

        // Resetear el tamaño de fuente de todos los elementos de texto
        document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li, span, button").forEach(elemento => {
            elemento.style.fontSize = '';
        });

        // Habilitar los botones de aumentar y reducir texto si estaban deshabilitados
        if (btnAumentarTexto) btnAumentarTexto.disabled = false;
        if (btnReducirTexto) btnReducirTexto.disabled = false;

        console.log('Estilos y modo oscuro restablecidos.');
    });
}
   
});
