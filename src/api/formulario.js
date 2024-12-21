const btnEnviar = document.querySelector("#enviar");
const URL = "https://sample-dogs-api.netlify.app/api/v1/dogs";
const inputNombre = document.querySelector("#nombre");
const inputBreed = document.querySelector("#raza");
const inputImagen = document.querySelector("#imagen");

let data = {
  name: "",
  breed: "",
  image: "",
};
function obtenerDatos(evento) {
  const eventoNombre = evento.target.name;
  const eventoValue = evento.target.value

  const newData = {...data, [eventoNombre] : eventoValue }
  data = newData
}
inputNombre.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputBreed.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputImagen.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  if(!data.name || !data.image || !data.breed){
    alert("Debes llenar todos los campos para crear un perro")
    return
  }
    fetch(URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => {
      window.location.assign("index.html")
    });
});