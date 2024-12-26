import obtenerUnSoloDog from "./obtenerUnSoloDog.js";
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const contenedor = document.querySelector("#contenedor");
const URL = "https://sample-dogs-api.netlify.app/api/v1/dogs"; 


async function obtenerUnSoloDog(id) {
  try {

    contenedor.innerHTML = `
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `;

    const response = await fetch(`${URL}/${id}`); // Llamada a la API con el ID del perro
    if (!response.ok) {
      throw new Error("Perro no encontrado.");
    }

    const dog = await response.json(); // Parsear los datos del perro

    // Renderizar el perro
    contenedor.innerHTML = `
      <div class="card mb-3" style="width: 18rem;">
        <img src="${dog.image}" class="card-img-top" alt="${dog.name}">
        <div class="card-body">
          <h5 class="card-title">${dog.name}</h5>
          <p class="card-text">Raza: ${dog.breed}</p>
          <p class="card-text">ID: ${dog._id}</p>
        </div>
      </div>
    `;
  } catch (error) {
    // Mostrar mensaje de error si el perro no existe o hay otro problema
    contenedor.innerHTML = `
      <div class="alert alert-danger" role="alert">
        ${error.message}
      </div>
    `;
  }
}

// Evento para manejar la búsqueda
searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  const id = searchInput.value.trim(); // Obtener el valor ingresado en el campo
  if (!id) {
    alert("Por favor ingresa un ID válido.");
    return;
  }
  obtenerUnSoloDog(id); // Llamar a la función de búsqueda
});
