"use strict";

// const data = [
//   {
//     title: "Asteroids 101",
//     image: "https://via.placeholder.com/200x100"
//   },
//   {
//     title: "Life on Mars",
//     image: "https://via.placeholder.com/200x100"
//   },
//   {
//     title: "Martians invade Earth",
//     image: "https://via.placeholder.com/200x100"
//   },
//   {
//     title: "Humans aren't real",
//     image: "https://via.placeholder.com/200x100"
//   },
//   {
//     title: "Space The Final Frontier",
//     image: "https://via.placeholder.com/200x100"
//   }
// ];

//Ejercicio 1

const lists = document.querySelector(".news");

// lists.innerHTML += `<li class="news__item"><h2 class="news__title"><img class="news__image" src="${
//   data[0].image
// }" alt="${data[0].title}">${
//   data[0].title
// }</h2></li><li class="news__item"><h2 class="news__title"><img class="news__image" src="${
//   data[1].image
// }" alt="${data[1].title}">${
//   data[1].title
// }</h2></li><li class="news__item"><h2 class="news__title"><img class="news__image" src="${
//   data[2].image
// }" alt="${data[2].title}">${
//   data[2].title
// }</h2></li><li class="news__item"><h2 class="news__title"><img class="news__image" src="${
//   data[3].image
// }" alt="${data[3].title}">${
//   data[3].title
// }</h2></li><li class="news__item"><h2 class="news__title"><img class="news__image" src="${
//   data[4].image
// }" alt="${data[4].title}">${data[4].title}</h2></li>`;

//Ejercicio 2

// const newsItem = document.querySelectorAll(".news__item");

// for (let i = 0; i < newsItem.length; i++) {
//   const elementNewsItem = newsItem[i].innerHTML;
//   if (elementNewsItem.includes("Mars") || elementNewsItem.includes("Martian")) {
//     newsItem[i].classList.add("news__item--from-mars");
//   }
//}

//Ejercicio 3

const url =
  "https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json";

function getImage() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let item of data.news) {
        const newList = document.createElement("li");
        const newImage = document.createElement("img"); //Creamos la imagen
        const newh2 = document.createElement("h2"); //Creamos el titular
        const titleText = document.createTextNode(item.title); //Creamos la variable con el texto del título recogido en la API
        newList.classList.add("news__item"); //Le ponemos la clase necesaria para el siguiente apartado
        newList.classList.add("news__item--no-image-visible"); //Necesario para el ejercicio 4
        newImage.setAttribute("src", `${item.image}`);
        newImage.setAttribute("alt", `${item.title}`);
        newImage.classList.add("news__image");
        newh2.classList.add("news__title");
        newh2.appendChild(titleText); //Al titular le agregamos el texto recogido
        newList.appendChild(newh2); //A la lista creada le agregamos el titular creado
        newList.appendChild(newImage); //También la imagen creada
        lists.appendChild(newList); //Al ul del html le añadimos lo anterior
      }

      const lis = document.querySelectorAll(".news__item"); //Recogemos todos los li
      let title = "";

      for (let i = 0; i < lis.length; i++) {
        //Buscamos en todos los li
        let martianNew = lis[i]; //Recopilamos
        title = lis[i].firstChild.innerHTML; //Almacenamos en una variable los títulos
        if (title.includes("Mars") || title.includes("Martian")) {
          martianNew.classList.add("news__item--from-mars"); //Si ese título incluye x, añádeme esta clase
        }
      }

      for (const item of lis) {
        item.addEventListener("click", showImage); //Evento necesario para ejercicio 4
      }
    });
}

getImage();

//Ejercicio 4
function showImage(event) {
  const ct = event.currentTarget;
  console.log(ct);
  ct.classList.toggle("news__item--no-image-visible");
}
