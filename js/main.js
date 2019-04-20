'use strict';

const inputEl = document.querySelector('.search__input');
const palettesUlEl = document.querySelector('.palettes');


function createPalette (ship) {
  const newLi = document.createElement('li');
  const newH2 = document.createElement('h2');
  newLi.classList.add('palette__container');
  newH2.classList.add('palette__name');
  newH2.innerHTML = ship.name;
  newLi.appendChild(newH2);
  for (const color of ship.colors){
    const newDiv = `<div class="color__item" style="background-color: #${color}"></div>`;
    newLi.innerHTML += newDiv;
    palettesUlEl.appendChild(newLi);
  }
}

function addListenersToPaletteContainers () {
  const paletteContainers = document.querySelectorAll('.palette__container');
  for (const container of paletteContainers){
    container.addEventListener('click', selectPalette);
  }
}

function selectPalette (event) {
  event.currentTarget.classList.toggle('selected__palette');
}

fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(function(data){
    const {palettes} = data;
    for (const ship of palettes){
      createPalette(ship);
    }
    function searchShip (){
      const searchText = inputEl.value;
      const palettesUlEl = document.querySelector('.palettes');
      palettesUlEl.innerHTML = '';
      for (const ship of palettes) {
        const search = searchText.toLowerCase();
        const shipName = ship.name.toLowerCase();
        if(shipName.includes(search)){
          createPalette(ship);
        }
      }
      addListenersToPaletteContainers();
    }
    inputEl.addEventListener('keyup', searchShip);
    addListenersToPaletteContainers();
  });