"use strict";
//ex07
function colorPalette() {
  fetch(
    `https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const listPalette = Object.keys(data.palettes);

      for (let i = 0; i < listPalette.length; i++) {
        const everyPalette = data.palettes[i];
        const ulPalette = document.querySelector(".color-palette");

        let newUl = document.createElement("ul");
        newUl.classList.add("color__list");
        const newTitle = document.createElement("h2");
        const newTitleInner = document.createTextNode(everyPalette.name);

        const newFrom = document.createElement("h3");
        const newFromInner = document.createTextNode(everyPalette.from);

        newTitle.appendChild(newTitleInner);
        newFrom.appendChild(newFromInner);
        ulPalette.append(newUl);

        const allColors = data.palettes[i];
        const everyColor = allColors.colors;
        newUl.append(newTitle, newFrom);

        //loop for colors
        for (let y = 0; y < everyColor.length; y++) {
          let newLi = document.createElement("li");
          let bgColor = everyColor[y];

          newLi.classList.add("color__item");
          newUl.appendChild(newLi);

          newLi.style.background = `${bgColor}`;
          newLi.setAttribute("style", `background-color:#${bgColor}`);
        }

        // to add a new class to selected pallete
        function selectItem(e) {
            e.currentTarget.classList.toggle('selected--palete');
        }
        newUl.addEventListener("click", selectItem);
      }
    });
}
colorPalette();
