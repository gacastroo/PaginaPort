const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const cFe30 = document.querySelector(".c-fe30");
  const footer = document.querySelector("footer"); // Asegúrate de que tu footer esté en el DOM
  let popupObserver = null;
  let popupTimeout = null;
  const initialTimeoutDuration = 30000; // 30 segundos para la activación inicial
  const cooldownDuration = 20000; // 20 segundos de cooldown

  // Función para mostrar el popup
  function showPopup() {
    if (!cFe30.classList.contains("visible")) {
      cFe30.classList.add("visible");
    }
  }

  // Función para inicializar los triggers
  // Si 'initial' es true se activa el timeout; de lo contrario (después de cerrar) se activa solo el observer
  function initPopupTrigger(initial = false) {
    // Limpia triggers previos
    if (popupObserver) {
      popupObserver.disconnect();
      popupObserver = null;
    }
    if (popupTimeout) {
      clearTimeout(popupTimeout);
      popupTimeout = null;
    }

    // IntersectionObserver para detectar cuándo el footer es visible
    if (footer) {
      popupObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            showPopup();
            observer.disconnect(); // Se desconecta para evitar activaciones múltiples
          }
        });
      }, { threshold: 0.1 });
      popupObserver.observe(footer);
    }
  
    // Si es la activación inicial, también activa el timeout para mostrar el popup
    if (initial) {
      popupTimeout = setTimeout(() => {
        showPopup();
      }, initialTimeoutDuration);
    }
  }

  // Inicializa los triggers al cargar la página (incluyendo timeout)
  initPopupTrigger(true);

  // Listener para el botón de cierre
  const closeButton = document.querySelector('.c-fe30__close');
  closeButton.addEventListener('click', () => {
    // Oculta el popup removiendo la clase 'visible'
    cFe30.classList.remove('visible');

    // Limpia triggers existentes
    if (popupObserver) {
      popupObserver.disconnect();
      popupObserver = null;
    }
    if (popupTimeout) {
      clearTimeout(popupTimeout);
      popupTimeout = null;
    }

    // Inicia el cooldown y luego reactivamos los triggers solo para el observer
    setTimeout(() => {
      initPopupTrigger(false);
    }, cooldownDuration);
  });
});
