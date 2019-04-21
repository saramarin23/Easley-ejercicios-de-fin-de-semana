'use strict';

const spaceships = document.querySelector('.spaceships');
const palettesUrl = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
const input = document.querySelector('.input');


const createBoxes = (palette, container) => {
  const spaceshipBox = document.createElement('div');
  spaceshipBox.classList.add('spaceship');
  for (let i = 0; i < palette.length; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color__item');
    colorBox.style.height = '100px';
    colorBox.style.width = '100px';
    colorBox.style.backgroundColor = `#${palette[i]}`;

    spaceshipBox.appendChild(colorBox);
    container.appendChild(spaceshipBox);
  }
};

const addChoices = (array, container) => {
  const name1 = array.name.split(' ');
  const newOption = document.createElement('input');
  newOption.setAttribute('type', 'checkbox');
  newOption.classList.add('checkbox');
  newOption.setAttribute('id', `${name1[0]}`);
  newOption.setAttribute('name', 'spaceshipOptions');
  newOption.addEventListener('change', selectChoice);
  container.appendChild(newOption);
};

const selectChoice = event => {
  const chosen = event.currentTarget;
  chosen.classList.toggle('selected');
};

const printPalettes = () => {
  fetch(palettesUrl)
    .then(res => res.json())
    .then(data => {
      const paletteList = data.palettes;

      for (let i = 0; i < paletteList.length; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('ssContainer');
        newBox.classList.add('hidden');
        newBox.setAttribute('data-id', i);
        const newName = document.createElement('h3');
        const newNameContent = document.createTextNode(paletteList[i].name);
      
        newName.appendChild(newNameContent);
        newBox.appendChild(newName);
        spaceships.appendChild(newBox);

        const paletteData = paletteList[i].colors;
        createBoxes(paletteData, newBox);
        addChoices(paletteList[i], newBox);
      }
      
      const checkSearch = event => {
        const search = event.currentTarget.value;
        const boxes = document.querySelectorAll('.ssContainer');
        for (let i = 0; i < paletteList.length; i++) {
          const item = paletteList[i];
          const lowerName = item.name.toLowerCase();
          if (lowerName.includes(search.toLowerCase()) === true) {
            boxes[i].classList.remove('hidden');
          }
          else {
            boxes[i].classList.add('hidden');
          }
        }
      };

      input.addEventListener('keyup', checkSearch);
    });
};

printPalettes();




