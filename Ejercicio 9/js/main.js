'use strict';

//elements to use
const spaceships = document.querySelector('.spaceships');
const palettesUrl = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
const input = document.querySelector('.input');
const savedData = JSON.parse(localStorage.getItem('palettes'));

//function to create coloured boxes within each spaceship
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

//function to add checkbox options
const addChoices = (array, container) => {
  const name1 = array[0].split(' ');
  const newOption = document.createElement('input');
  newOption.setAttribute('type', 'checkbox');
  newOption.classList.add('checkbox');
  newOption.setAttribute('id', `${name1[0]}`);
  newOption.setAttribute('name', 'spaceshipOptions');
  newOption.addEventListener('change', selectChoice);
  container.appendChild(newOption);
};

//function to add 'selected' class to event target
const selectChoice = event => {
  const chosen = event.currentTarget;
  chosen.classList.toggle('selected');
};

//function to create each spaceship
const makeSpaceships = array => {
  for (let i = 0; i < array.length; i++) {
    const newBox = document.createElement('div');
    newBox.classList.add('ssContainer');
    newBox.classList.add('hidden');
    newBox.setAttribute('data-id', i);
    const newName = document.createElement('h3');
    const newNameContent = document.createTextNode(array[i][0]);
        
    newName.appendChild(newNameContent);
    newBox.appendChild(newName);
    spaceships.appendChild(newBox);
  
    const paletteData = array[i][1];
    createBoxes(paletteData, newBox);
    addChoices(array[i], newBox);
  }
};

//function to save fetched data
const saveData = array => {
  localStorage.setItem('palettes', JSON.stringify(array));
};

//handler function to call other functions and add listener to input box
const doEverything = data => {
  const paletteList = data.palettes;
  const palettes = [];

  for (const item of paletteList) {
    const palette = [];
    palette.push(item.name);
    palette.push(item.colors);
    palettes.push(palette);
  }
  makeSpaceships(palettes);
  const checkSearch = event => {
    const search = event.currentTarget.value;
    const boxes = document.querySelectorAll('.ssContainer');
    for (let i = 0; i < data.palettes.length; i++) {
      const item = data.palettes[i];
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
};

//function to call handler with saved data OR fetch new data
const printPalettes = () => {
  if (savedData) {
    console.log('yay, you have saved data');
    doEverything(savedData);
  }
  else {
    fetch(palettesUrl)
      .then(res => res.json())
      .then(data => {
        console.log('nay, you have no saved data... Let me call it now!', data);
        doEverything(data);
        saveData(data);
      });
  }
};

printPalettes();
