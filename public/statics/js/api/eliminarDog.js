import obtenerDog from "./obtenerDog.js";

const eliminarDog = function(botones,URL,identificadores, contenedor){
    botones.forEach((boton, indice) => {
    boton.addEventListener("click", async () => {
      try {
        const res = await fetch(`${URL}/${identificadores[indice].id}`, {
          method: "DELETE",
        });
        if (!res) {
          alert("Hubo un error");
          return;
        }
        obtenerDog(contenedor, URL);
      } catch (error) {
        console.log(error);
      }
    });
  });
}

export default eliminarDog