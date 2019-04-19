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

//ex01
function listNews() {
  const listNew = document.querySelector(".news");
  const listData = Object.keys(data);

  //recorremos el objeto data
  for (let list of listData) {
    let eachObj = data[list];

    const newItem = document.createElement("li");
    const newTitleContent = document.createElement("h2");
    const imgItem = document.createElement("img");

    newItem.classList.add("news__item");
    newTitleContent.classList.add("news__title");
    imgItem.classList.add("news__image");

    imgItem.src = eachObj.image;
    imgItem.title = eachObj.title;

    newItem.appendChild(newTitleContent);
    newItem.appendChild(imgItem);
    newTitleContent.innerHTML = eachObj.title;

    listNew.appendChild(newItem);
  }

  //ex02
  const allLi = document.querySelectorAll(".news__item");
  const allLiTitle = document.querySelectorAll(".news__item > .news__title");
  
  for (let i = 0; i < allLi.length; i++) {
    const liConstentTitle = allLiTitle[i].innerHTML;

    if (liConstentTitle.includes("Mars") || liConstentTitle.includes("Martians")) {
      allLi[i].classList.add("news__item--from-mars");
    }
  }
}
listNews();