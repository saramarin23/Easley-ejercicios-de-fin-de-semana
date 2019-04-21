"use strict";

//ex05

// function colorPalette() {
//   const ulPalette = document.querySelector(".color-palette");

//   fetch(
//     `https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json`
//   )
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       const listPalette = Object.keys(data.palettes);
//       const everyPalette = data.palettes[0];

//       const newTitle = document.createElement("h2");
//       const newTitleInner = document.createTextNode(everyPalette.name);

//       newTitle.appendChild(newTitleInner);
//       ulPalette.appendChild(newTitle);

//       for (let color of listPalette) {
//         const allColors = data.palettes[color];
//         const everyColor = allColors.colors;

//         for (let i = 0; i < everyColor.length; i++) {
//           let newLi = document.createElement("li");
//           let bgColor = everyColor[i];

//           newLi.classList.add("color__item");
//           ulPalette.appendChild(newLi);

//           newLi.style.background = `${bgColor}`;
//           newLi.setAttribute("style", `background-color:#${bgColor}`);
//         }
//       }
//     });
// }
// colorPalette();

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

        //ex07. to add a new class to selected pallete
        function selectItem(e) {
          e.currentTarget.classList.toggle("selected--palete");
        }
        newUl.addEventListener("click", selectItem);

        //ex08. Add filter list
        const inputEl = document.querySelector(".form__input");

        inputEl.addEventListener("keyup", function showFilter() {
          
          const filterValue = inputEl.value.toUpperCase();
          const listPalette = document.querySelector('.color-palette');
          const listNave = listPalette.getElementsByTagName('ul');
          
          for (let z = 0; z < listNave.length; z++) {
            const nameEl = listNave[z].getElementsByTagName("h2")[0];          
            const nameValue = nameEl.innerText || nameEl.textContent;            
            
            if (nameValue.indexOf(filterValue) > -1) {
              listNave[z].style.display = "";
            } else {
              listNave[z].style.display = "none";
            }
          }
        });
      }
    });
}
colorPalette();
