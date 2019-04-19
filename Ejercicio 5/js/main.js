'use strict';

const spaceship = document.querySelector('.spaceship');
const paletteUrl = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';


const createBoxes = palette => {
  for (let i = 0; i < palette.length; i++) {
    console.log(palette[i]);
    const box = document.createElement('div');
    box.classList.add('color__item');
    box.style.height = '100px';
    box.style.width = '100px';
    box.style.backgroundColor = `#${palette[i]}`;

    spaceship.appendChild(box);
  }
};

const printPalette = () => {
  fetch(paletteUrl)
    .then(res => res.json())
    .then(data => {
      const paletteData = data.palettes[0].colors;
      console.log(paletteData);
      createBoxes(paletteData);
    });
};

printPalette();
