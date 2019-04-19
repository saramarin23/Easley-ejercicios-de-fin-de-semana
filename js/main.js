"use strict";

//ex03

function listNews() {
  const listNew = document.querySelector(".news");

  fetch(
    `https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //accedemos al objeto y cuantos arrays tiene
      const listData = Object.keys(data.news);

      for (let list of listData) {
        //accedemos a cada objeto del array news
        const everyObj = data.news[list];

        let newItem = document.createElement("li");
        const newItemTitle = document.createElement("h2");
        const newItemImg = document.createElement("img");

        //2 classes at the same time
        newItem.classList.add("news__item", "news__item--no-image-visible", "heightDefault");
        newItemTitle.classList.add("news__title");
        newItemImg.classList.add("news__image");

        newItemTitle.innerHTML = newItemImg.title = everyObj.title;
        newItemImg.src = everyObj.image;

        newItem.append(newItemTitle, newItemImg);
        listNew.appendChild(newItem);

        //ex04
        function handleLiClick(event) {
          newItem = event.currentTarget;
          this.classList.toggle("news__item--no-image-visible");
          this.classList.toggle("heightDefault");
        }
        newItem.addEventListener("click", handleLiClick);
      }
    });
}
listNews();