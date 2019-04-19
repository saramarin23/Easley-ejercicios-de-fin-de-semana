"use strict";

//ex05

function colorPalette() {
  const ulPalette = document.querySelector(".color-palette");

  fetch(
    `https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const listPalette = Object.keys(data.palettes);
      const everyPalette = data.palettes[0];

      const newTitle = document.createElement("h2");
      const newTitleInner = document.createTextNode(everyPalette.name);
     
      newTitle.appendChild(newTitleInner);
      ulPalette.appendChild(newTitle);
 

      for (let color of listPalette) {
        const allColors = data.palettes[color];
        const everyColor = allColors.colors;

        for (let i = 0; i < everyColor.length; i++) {
          let newLi = document.createElement("li");
          let bgColor = everyColor[i];

          newLi.classList.add("color__item");
          ulPalette.appendChild(newLi);

          newLi.style.background = `${bgColor}`;
          newLi.setAttribute("style", `background-color:#${bgColor}`);
        }
      }
    });
}
colorPalette();
