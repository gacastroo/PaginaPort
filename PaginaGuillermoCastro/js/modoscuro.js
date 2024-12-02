const toggleButton = document.getElementById('toggleMode');
const navbar = document.getElementById('header')
const footer = document.getElementById('footer')

toggleButton.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme'); // Si está en modo oscuro, lo quita.
        navbar.style.backgroundColor = '#2c3e50'
        footer.style.backgroundColor = '#2c3e50'
       
    } else {
        document.body.setAttribute('data-theme', 'dark'); // Si no está, lo pone en modo oscuro.
        toggleButton.style.color = 'white';
        navbar.style.backgroundColor = 'black'
        footer.style.backgroundColor = 'black'
    }
});
