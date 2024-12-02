 // Simple form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            alert('Formulario enviado con éxito!');
            form.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
;

