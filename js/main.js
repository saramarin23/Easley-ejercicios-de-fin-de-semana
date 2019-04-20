"use strict";

const data = [
  {
    title: "Asteroids 101",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Life on Mars",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Martians invade Earth",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Humans aren't real",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Space The Final Frontier",
    image: "https://via.placeholder.com/200x100"
  }
];

//EJERCICIO 1
const ulEl = document.querySelector(".news");

for (let i = 0; i < data.length; i++) {
  ulEl.innerHTML += `<li class="news__item">
      <h2 class="news__title"> ${data[i].title}</h2>
      <img class="news__image" src=${data[i].image}
      alt=${data[i].title}>
    </li>`;
}

//EJERCICIO 2

// Buscaremos todos los elementos con clase .news__item.
const arrNewsItems = document.querySelectorAll(".news__item");

for (let i = 0; i < arrNewsItems.length; i++) {
  if (
    arrNewsItems[i].innerText.includes("Martians") ||
    arrNewsItems[i].innerText.includes("Mars")
  ) {
    arrNewsItems[i].classList.add("news__item--from-mars");
  }
}

