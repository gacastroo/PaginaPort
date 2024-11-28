// Obtenemos el slider, imágenes, títulos y descripciones
const slider = document.getElementById('slider');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const title3 = document.getElementById('title3');
const desc1 = document.getElementById('desc1');
const desc2 = document.getElementById('desc2');
const desc3 = document.getElementById('desc3');

// Imágenes para "3D"
const images3D = [
  '/imagenes/project1-3d.jpg',
  '/imagenes/project2-3d.jpg',
  '/imagenes/project3-3d.jpg',
];

// Imágenes para "WEB"
const imagesWeb = [
  '/imagenes/project1-web.jpg',
  '/imagenes/project2-web.jpg',
  '/imagenes/project3-web.jpg',
];

// Títulos para "3D"
const titles3D = ['Laura Kinney', 'Wolverine', 'Deadpool'];

// Títulos para "WEB"
const titlesWeb = ['Memory Game ', 'Bizum app', 'Pagina X-MEN'];

// Descripciones para "3D"
const descs3D = [
  'Descripción breve del proyecto 3D 1.',
  'Descripción breve del proyecto 3D 2.',
  'Descripción breve del proyecto 3D 3.',
];

// Descripciones para "WEB"
const descsWeb = [
  'Descripción breve del proyecto web 1.',
  'Descripción breve del proyecto web 2.',
  'Descripción breve del proyecto web 3.',
];

// Evento para escuchar cambios en el slider
slider.addEventListener('change', () => {
  if (slider.checked) {
    // Cambiar a "WEB"
    img1.src = imagesWeb[0];
    img2.src = imagesWeb[1];
    img3.src = imagesWeb[2];
    title1.textContent = titlesWeb[0];
    title2.textContent = titlesWeb[1];
    title3.textContent = titlesWeb[2];
    desc1.textContent = descsWeb[0];
    desc2.textContent = descsWeb[1];
    desc3.textContent = descsWeb[2];
  } else {
    // Cambiar a "3D"
    img1.src = images3D[0];
    img2.src = images3D[1];
    img3.src = images3D[2];
    title1.textContent = titles3D[0];
    title2.textContent = titles3D[1];
    title3.textContent = titles3D[2];
    desc1.textContent = descs3D[0];
    desc2.textContent = descs3D[1];
    desc3.textContent = descs3D[2];
  }
});