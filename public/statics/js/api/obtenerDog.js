import eliminarDog from "./eliminarDog.js";

async function obtenerDog(contenedor, URL) {
  let currentHtml = "";
  const res = await fetch(URL);
  const dogsDB = await res.json();
  const dogs = dogsDB.map((dog) => {
    return {
      id: dog._id,
      nombre: dog.name,
      raza: dog.breed,
      imagen: dog.image,
    };
  });
  dogs.forEach((dog) => {
    currentHtml += `<div class=" card mb-3">
          <img
            src=${dog.imagen}
            class="card-image-top"
            alt="..."
          />
          <div class="card-body">
            <h5 id="nombre-dog" class="card-title">${dog.nombre}</h5>
            <p id="desc" class="card-text">
              ${dog.raza}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">#Devf</small>
              <small class="text-body-secondary">#Devf</small>
              <small class="text-body-secondary">#Devf</small>
            </p>
          </div>
            <div class="botones"><button id="btn-eliminar">Eliminar</button> 
            <button id="btn-actualizar">Actualizar</button>
            </div>
        </div>`;
      
  });
  contenedor.innerHTML = currentHtml;


  const btnEliminar = document.querySelectorAll("#btn-eliminar");
  const btnActualizar = document.querySelectorAll("#btn-actualizar");
  btnActualizar.forEach((btn, index) => {
    btn.onclick = ()=>{
      window.location.assign(`actualizar.html?id=${dogs[index].id}`)
    }
  });
  eliminarDog(btnEliminar, URL, dogs, contenedor);
  
}

export default obtenerDog;