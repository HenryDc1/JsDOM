document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario y los elementos relevantes
    const form = document.querySelector("form");
    const cursoRadios = document.querySelectorAll('input[name="cursos"]');
    const otrosInput = document.createElement("input");
    const otrosLabel = document.createElement("label");
    const inputs=document.querySelector("input");
  
    // Configurar el nuevo input para "Otro"
    otrosInput.type = "text";
    otrosInput.name = "otros_input";
    otrosInput.style.display = "none"; // Inicialmente oculto
  
    // Configurar el nuevo label para "Otro"
    otrosLabel.textContent = "Especificar:";
    otrosLabel.htmlFor = otrosInput.name;
    otrosLabel.style.display = "none"; // Inicialmente oculto
  
    // Insertar el nuevo input y label en el formulario
    form.insertBefore(otrosLabel, form.lastElementChild);
    form.insertBefore(otrosInput, form.lastChild);
  
    // Manejar el evento de cambio en los radios
    form.addEventListener("change", function(event) {
      // Verificar si la opción "Otro" está seleccionada
      if (event.target.value === "otro") {
        // Mostrar el input y el label si "Otro" está seleccionado
        otrosInput.style.display = "block";
        otrosLabel.style.display = "block";
      } else {
        // Ocultar el input y el label si "Otro" no está seleccionado
        otrosInput.style.display = "none";
        otrosLabel.style.display = "none";
      }
    });
  });
  