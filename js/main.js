'use strict';

const container =  document.querySelector('body');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
  .then(response => response.json())
  .then(colorsData => {
    const colorsObject = colorsData.palettes;
    const colorsArray = colorsObject[0];
    console.log(colorsArray);
    const title = document.createElement('h2');
    title.innerHTML = colorsArray.name;
    container.appendChild(title);

    const colors = colorsArray.colors;
    for(let i = 0; i<colors.length; i++){
      const oneColor = document.createElement('div');
      oneColor.setAttribute('class', 'color__item');

      container.appendChild(oneColor);
      oneColor.setAttribute('style', `background-color:#${colors[i]}`);
    }
  });