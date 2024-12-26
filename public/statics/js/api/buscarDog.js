import obtenerDog from "./obtenerDog.js";
document.addEventListener("DOMContentLoaded", () => {
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
  
        const response = await fetch(`${URL}/${id}`);
        if (!response.ok) {
          throw new Error("Perro no encontrado.");
        }
  
        const dog = await response.json(); 
  
        contenedor.innerHTML = `
          <div class="card mb-3" style="width: 18rem;">
            <img src="${dog.image}" class="card-img-top" alt="${dog.name}">
            <div class="card-body">
              <h5 class="card-title">${dog.name}</h5>
              <p class="card-text">Raza: ${dog.breed}</p>
            </div>
          </div>
        `;
      } catch (error) {
        contenedor.innerHTML = `
          <div class="alert alert-danger" role="alert">
            ${error.message}
          </div>
        `;
      }
    }
  
  
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const id = searchInput.value.trim();
      if (!id) {
        alert("Por favor ingresa un ID válido.");
        return;
      }
      obtenerUnSoloDog(id); 
    });


  searchInput.addEventListener("input", () => {
    const id = searchInput.value.trim();
    if (!id) {
      obtenerDog(contenedor, URL);
    }
  });
});
  