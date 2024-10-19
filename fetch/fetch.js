/*
  fetch: Función nativa de JavaScript para realizar solicitudes HTTP asíncronas.
  Promesas: fetch devuelve una promesa que se resuelve con la respuesta de la solicitud.
  Sintaxis Limpia: Más fácil de leer y escribir en comparación con XMLHttpRequest.
  Manejo de Errores: Facilita el manejo de errores usando .then() y .catch().
  fetch es una herramienta poderosa y flexible para realizar solicitudes de red en aplicaciones web modernas.
*/

const url = "https://rickandmortyapi.com/api/character/";

const fetchData = () => {
  fetch(url)
    .then((data) => data.json())
    .then((resp) => renderImgs(resp.results))
    .catch((err) => {
      console.log(err);
    });
  console.log("Fetching data...");
};

const renderImgs = (data) => {
  const container = document.querySelector(".container");
  data.forEach((character) => {
    console.log(character.image);
    const img = document.createElement("img");
    img.src = character.image;
    container.appendChild(img);
  });
};
