import obtenerUnSoloDog from "./obtenerUnSoloDog.js";
const btnEnviar = document.querySelector("#enviar");
const URL = "https://sample-dogs-api.netlify.app/api/v1/dogs";
const inputNombre = document.querySelector("#nombre");
const inputRaza = document.querySelector("#raza");
const inputImagen = document.querySelector("#imagen");
const urlParams = new URLSearchParams(window.location.search).get("id");
const contenedor = document.querySelector("#contenedor")

obtenerUnSoloDog(urlParams, URL, contenedor)

let data = {};
function obtenerDatos(evento) {
  const eventoNombre = evento.target.name;
  const eventoValue = evento.target.value;

  const newData = { ...data, [eventoNombre]: eventoValue };
  data = newData;
}
inputNombre.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputRaza.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputImagen.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  if (!data.name && !data.image && !data.breed) {
    alert("Debes de completar por lo menos un dato para actualizar");
    return;
  }
  alert("unicornio actualizado");
  fetch(`${URL}/${urlParams}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    window.location.assign("index.html");
  });
});