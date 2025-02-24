document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const item = document.querySelector("#item");
    const projectCards = document.querySelectorAll('.trabajo-card');

    // Elementos del contenido
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const img3 = document.querySelector("#img3");
    const title1 = document.querySelector("#title1");
    const title2 = document.querySelector("#title2");
    const title3 = document.querySelector("#title3");
    const desc1 = document.querySelector("#desc1");
    const desc2 = document.querySelector("#desc2");
    const desc3 = document.querySelector("#desc3");

    // Contenidos para 3D y WEB
    const images3D = ["./imagenes/project1-3d.jpg", "./imagenes/project2-3d.jpg", "./imagenes/project3-3d.jpg"];
    const imagesWeb = ["./imagenes/project1-web.jpg", "./imagenes/project2-web.jpg", "./imagenes/project3-web.jpg"];
    const titles3D = ["Laura Kinney", "Wolverine", "Deadpool"];
    const titlesWeb = ["Memory Game", "Bizum App", "Página X-MEN"];
    const descs3D = ["Lorem ipsum dolor sit amet...", "Lorem ipsum dolor sit amet...", "Lorem ipsum dolor sit amet..."];
    const descsWeb = ["Juego de memoria interactivo...", "Simulación de pagos digitales...", "Explora personajes y habilidades..."];

    //HREF

    let isWeb = false; // Estado del switch
    
    container.addEventListener("click", () => {
        isWeb = !isWeb;
        updateSwitchState();
    });

  
    console.log('Total project cards found:', projectCards.length);
    projectCards.forEach((card, index) => {
      card.addEventListener('mouseenter', function() {
        console.log(`Mouse entered card ${index}`);
        projectCards.forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.classList.add('blur');
          }
        });
      });
      
      card.addEventListener('mouseleave', function() {
        console.log(`Mouse left card ${index}`);
        projectCards.forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.classList.remove('blur');
          }
        });
      });
    });  

    function updateSwitchState() {
        if (isWeb) {
            container.classList.add("select-right");
            container.classList.remove("select-left");
            item.style.transform = "translateX(115px)"; // Mueve el slider a la derecha
            updateContent(imagesWeb, titlesWeb, descsWeb);
        } else {
            container.classList.add("select-left");
            container.classList.remove("select-right");
            item.style.transform = "translateX(0px)"; // Mueve el slider a la izquierda
            updateContent(images3D, titles3D, descs3D);
        }
        item.style.transition = "transform 0.2s ease-in-out";
    }

    function updateContent(images, titles, descriptions) {
        document.querySelectorAll(".trabajo-card").forEach(card => {
            card.style.transition = "opacity 0.5s ease-in-out";
            card.style.opacity = "0";
        });
        setTimeout(() => {
            img1.src = images[0];
            img2.src = images[1];
            img3.src = images[2];
            title1.textContent = titles[0];
            title2.textContent = titles[1];
            title3.textContent = titles[2];
            desc1.textContent = descriptions[0];
            desc2.textContent = descriptions[1];
            desc3.textContent = descriptions[2];
            document.querySelectorAll(".trabajo-card").forEach(card => card.style.opacity = "1");
        }, 400);
    }

    updateSwitchState();
});
