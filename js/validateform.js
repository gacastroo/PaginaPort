document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    // Verificar que el formulario esté presente en el DOM
    if (!form) {
      console.error("⚠️ Error: El formulario no se encontró en el DOM.");
      return;
    }
  
    // Verificar existencia de los campos del formulario
    const nombre = document.getElementById("nombre");
    const mensaje = document.getElementById("mensaje");
  
    if (!nombre || !email || !mensaje) {
      console.error("⚠️ Error: Uno o más campos del formulario no existen en el DOM.");
      return;
    }
  
    console.log("✅ Todos los campos han sido encontrados correctamente.");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validateForm()) {
        console.log("✅ Formulario enviado correctamente.");
        alert("✅ Formulario enviado correctamente.");
        form.reset();
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      // Validación del nombre
      if (!nombre.value.trim()) {
        setError(nombre, "⚠️ El nombre es requerido.");
        isValid = false;
      } else {
        clearError(nombre);
      }
  
      // Validación del mensaje
      if (!mensaje.value.trim()) {
        setError(mensaje, "⚠️ El mensaje es requerido.");
        isValid = false;
      } else {
        clearError(mensaje);
      }
  
      return isValid;
    }
  
    function setError(input, message) {
      if (!input) return;
      input.classList.add("is-invalid");
  
      let errorDiv = input.nextElementSibling;
      if (!errorDiv || !errorDiv.classList.contains("invalid-feedback")) {
        errorDiv = document.createElement("div");
        errorDiv.className = "invalid-feedback";
        input.parentNode.appendChild(errorDiv);
      }
  
      errorDiv.textContent = message;
    }
  
    function clearError(input) {
      if (!input) return;
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
  
      const errorDiv = input.nextElementSibling;
      if (errorDiv && errorDiv.classList.contains("invalid-feedback")) {
        errorDiv.remove();
      }
    }
  
    // Función para validar el email con regex
    function isValidEmail(email) {
      // Expresión regular para validar email
      const re =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    }
  });
  