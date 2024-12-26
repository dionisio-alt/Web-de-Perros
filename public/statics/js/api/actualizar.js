import obtenerUnSoloDog from "./obtenerUnSoloDog.js"; // Ya importas la función

const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const contenedor = document.querySelector("#contenedor");

const URL = "https://sample-dogs-api.netlify.app/api/v1/dogs"; 

// Evento para manejar la búsqueda
searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  const id = searchInput.value.trim(); // Obtener el valor ingresado en el campo
  if (!id) {
    alert("Por favor ingresa un ID válido.");
    return;
  }
  obtenerUnSoloDog(id, contenedor, URL); // Llamar a la función de búsqueda pasando contenedor y URL
});
