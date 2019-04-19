'use strict';

const spaceships = document.querySelector('.spaceships');
const palettesUrl = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';


const createBoxes = palette => {
  const spaceshipBox = document.createElement('div');
  spaceshipBox.classList.add('spaceship');
  for (let i = 0; i < palette.length; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color__item');
    colorBox.style.height = '100px';
    colorBox.style.width = '100px';
    colorBox.style.backgroundColor = `#${palette[i]}`;

    spaceshipBox.appendChild(colorBox);
    spaceships.appendChild(spaceshipBox);
  }
};

const printPalettes = () => {
  fetch(palettesUrl)
    .then(res => res.json())
    .then(data => {
      for (const item of data.palettes) {
        const newName = document.createElement('h3');
        const newNameContent = document.createTextNode(item.name);
      
        newName.appendChild(newNameContent);
        spaceships.appendChild(newName);

        const paletteData = item.colors;
        createBoxes(paletteData);
      }
    });
};

printPalettes();

