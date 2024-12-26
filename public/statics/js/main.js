import obtenerDog from "./api/obtenerDog.js";
const contenedor = document.querySelector("#contenedor")
const URL = "https://sample-dogs-api.netlify.app/api/v1/dogs";

obtenerDog(contenedor, URL)