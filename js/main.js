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

//Ejercicio 1

const lists = document.querySelector(".news");

lists.innerHTML += `<li class="news__item"><h2 class="news__title"><img class="news__image" src="${
  data[0].image
}" alt="${data[0].title}">${
  data[0].title
}</h2></li><li class="news__item"><h2 class="news__title"><img class="news__image" src="${
  data[1].image
}" alt="${data[1].title}">${
  data[1].title
}</h2></li><li class="news__item"><h2 class="news__title"><img class="news__image" src="${
  data[2].image
}" alt="${data[2].title}">${
  data[2].title
}</h2></li><li class="news__item"><h2 class="news__title"><img class="news__image" src="${
  data[3].image
}" alt="${data[3].title}">${
  data[3].title
}</h2></li><li class="news__item"><h2 class="news__title"><img class="news__image" src="${
  data[4].image
}" alt="${data[4].title}">${data[4].title}</h2></li>`;

//Ejercicio 2
const newsItem = document.querySelectorAll(".news__item");

for (let i = 0; i < newsItem.length; i++) {
  const elementNewsItem = newsItem[i].innerHTML;
  if (elementNewsItem.includes("Mars") || elementNewsItem.includes("Martian")) {
    newsItem[i].classList.add("news__item--from-mars");
  }
}
