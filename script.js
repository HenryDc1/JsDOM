document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");
  const botonEnvio = document.querySelector('form input[type="submit"]');

  function manejarCambioOpcion(evento) {
    if (evento.target.value === "otro") {
      agregarOtroInput();
    } else {
      eliminarOtroInput();
    }
  }

  function agregarOtroInput() {
    const otroInput = document.createElement("input");
    const otroLabel = document.createElement("label");

    configurarOtroInput(otroInput);
    configurarOtroLabel(otroLabel);

    formulario.insertBefore(otroLabel, botonEnvio);
    formulario.insertBefore(otroInput, botonEnvio);
  }

  function configurarOtroInput(input) {
    input.type = "text";
    input.name = "otros_input";
    input.style.display = "block";
  }

  function configurarOtroLabel(label) {
    label.textContent = "Especificar:";
    label.htmlFor = "otros_input";
    label.style.display = "block";
  }

  function eliminarOtroInput() {
    const otroInput = formulario.querySelector('input[name="otros_input"]');
    const otroLabel = formulario.querySelector('label[for="otros_input"]');

    if (otroInput) {
      formulario.removeChild(otroInput);
    }

    if (otroLabel) {
      formulario.removeChild(otroLabel);
    }
  }

  formulario.addEventListener("change", manejarCambioOpcion);
});
