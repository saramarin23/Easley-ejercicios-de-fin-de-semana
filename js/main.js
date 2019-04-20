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

function selectPalette (event) {
  event.currentTarget.classList.toggle('selected__palette');
}

function addListenersToPaletteContainers () {
  const paletteContainers = document.querySelectorAll('.palette__container');
  for (const container of paletteContainers){
    container.addEventListener('click', selectPalette);
  }
}

const palettesStorage = JSON.parse(localStorage.getItem('palettes'));

const palettesFetch = () => 
  fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then(response => response.json())
    .then(function(data){
      const {palettes} = data;
      return palettes;});
    

var promises = [palettesStorage, palettesFetch()];

Promise.all(promises)
  .then(function (promises){
    const palettes = promises[0] || promises[1];
    console.log(palettes, promises);
    for (const ship of palettes){
      createPalette(ship);
    }
    const paletteContainers = document.querySelectorAll('.palette__container');
    addListenersToPaletteContainers();
    function searchShip (){
      const searchText = inputEl.value;
      for (const container of paletteContainers){
        const search = searchText.toLowerCase();
        const shipNameUpper = container.querySelector('h2').innerHTML;
        const shipName = shipNameUpper.toLowerCase();
        if(shipName.includes(search)){
          container.classList.remove('hidden');
        }else {
          container.classList.add('hidden');
        }
      }
    }
    inputEl.addEventListener('keyup', searchShip);
    localStorage.setItem('palettes',JSON.stringify(palettes));
  });
  

// console.log(palettesData);

// if (localStorage.getItem('palettes')){
//   const palettes = JSON.parse(localStorage.getItem('palettes'));
//   for (const ship of palettes){
//     createPalette(ship);
//   }
// }else {
//   fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
//     .then(response => response.json())
//     .then(function(data){
//       const {palettes} = data;
//       for (const ship of palettes){
//         createPalette(ship);
//       }
//       const paletteContainers = document.querySelectorAll('.palette__container');
//       addListenersToPaletteContainers();
//       function searchShip (){
//         const searchText = inputEl.value;
//         for (const container of paletteContainers){
//           const search = searchText.toLowerCase();
//           const shipNameUpper = container.querySelector('h2');
//           const shipName = shipNameUpper.toLowerCase();
//           if(shipName.includes(search)){
//             container.classList.remove('hidden');
//           }else {
//             container.classList.add('hidden');
//           }
//         }
//       }
//       inputEl.addEventListener('keyup', searchShip);
//       localStorage.setItem('palettes',JSON.stringify(palettes));
//     });
// }
