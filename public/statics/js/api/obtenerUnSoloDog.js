async function obtenerUnSoloDog(id, URL, contenedor) {
  try{
      const respuesta = await fetch(`${URL}/${id}`)
      const dog = await respuesta.json()
      if(!dog){
          alert("Perro no encontrado")
      }
      contenedor.innerHTML = `<div class=" card mb-3">
        <img
          src=${dog.image}
          class="Perro-img"
          alt="..."
        />
        <div class="card-body">
          <h5 id="nombre-Perro" class="card-title">${dog.name}</h5>
          <p id="desc" class="card-text">
            ${dog.breed}
          </p>
      </div>`
  }catch(error){
      console.log(error);
  }
}
export default obtenerUnSoloDog