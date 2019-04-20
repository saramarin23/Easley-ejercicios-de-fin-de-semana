'use strict';

// const data = [
//   {
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Humans aren\'t real',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];

// const listContainer = document.querySelector('.news');
const divContainer = document.querySelector('.palette');
// fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     const dataApi = data.news;
//     for (let listElement of dataApi) {
//       const newItem = document.createElement('li');
//       const newTitle = document.createElement('h1');
//       const newImg = document.createElement('img');
//       const newContent = document.createTextNode(listElement.title);
//       newItem.classList.add('news__item');
//       newItem.classList.add('news__item--no-image-visible');
//       newTitle.classList.add('news__title');
//       newImg.classList.add('news__image');
//       newImg.src = listElement.image;
//       newImg.alt = "imagen de la película " + listElement.title;

//       newTitle.appendChild(newContent);
//       listContainer.appendChild(newItem);
//       newItem.appendChild(newTitle);
//       newItem.appendChild(newImg);
//     }
//     const newsItem = document.querySelectorAll('.news__item');

//     for (let item of newsItem) {
//       const newsTitle = item.firstChild;
//       const titleContent = newsTitle.innerHTML;
//       if (titleContent.includes('Mars') || titleContent.includes('Martians')) {
//         item.classList.add('news__item--from-mars');
//       }
//       else {
//       }
//       item.addEventListener('click', handleItemClick);
//       function handleItemClick(event){
//         const news = event.currentTarget;
//         //const currentImage = news.childNodes[1];
//         news.classList.toggle('news__item--no-image-visible');
//         console.log(news);
//       }
//     }
//     return console.log(data.news);
//   });

  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const ships = data.palettes;

    for (let ship of ships){
    
    const dataColors = ship.colors;
    const dataName = ship.name;
    const shipDiv = document.createElement('div')
    const shipName = document.createElement('h1');
    const newName = document.createTextNode(dataName);
    shipDiv.classList.add('ship');
    shipName.classList.add('ship-name');
    shipName.appendChild(newName);
    shipDiv.appendChild(shipName);
    divContainer.appendChild(shipDiv);

    for (let color of dataColors){
      const newColor = document.createElement('div');
      newColor.classList.add('color');
      newColor.setAttribute('style',`background-color:#${color}`);
      shipDiv.appendChild(newColor);
    } 
    }
    const shipDiv = document.querySelectorAll('.ship');
    for (let ship of shipDiv)
    ship.addEventListener('click', handleShipClick);
    function handleShipClick(event){
    const shipElement = event.currentTarget;
    shipElement.classList.toggle('like');
    }
    const shipNames = document.querySelectorAll('.ship-name');
    const inputEl = document.querySelector('.search');
    function handleInputKey(){
      for (let ship of shipNames){
        if (ship.innerHTML.includes(inputEl.value)){
          ship.parentElement.classList.remove('hidden');
        } 
        else {
          ship.parentElement.classList.add('hidden');
        }
      }
      
    }
  inputEl.addEventListener('keyup', handleInputKey);
  });

 



