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

const ulEl = document.querySelector('.news');

//EJERCICIO 1
//Añadir contenido usando innerHTML

// for (const news of data) {
//   ulEl.innerHTML+= `
//   <li class="news__item">
//       <h2 class="news__title">${news.title}</h2>
//       <img class="news__image" src="${news.image}" alt="${news.title}">
//   </li>
//   `;
// }

//Añadir contenido usando DOM avanzado

// function paintNews(allNews) {
//   for (const news of allNews) {
//     const newLi = document.createElement('li');
//     const newH2 = document.createElement('h2');
//     const newImg = document.createElement('img');
//     const title = document.createTextNode (news.title);
//     newH2.appendChild(title);
//     newH2.classList.add('news__title');
//     newImg.classList.add('news__image');
//     newLi.classList.add('news__item');
//     newImg.src = news.image;
//     newImg.alt = news.title;
//     newLi.appendChild(newH2);
//     newLi.appendChild(newImg);
//     ulEl.appendChild(newLi);
//   }
// }


//EJERCICIO 2

function martianNews() {
  const newsEl = document.querySelectorAll('.news__item');
  for (const news of newsEl) {
    const titleEl = news.querySelector('h2').innerHTML;
    const containsMars = titleEl.includes('Mars');
    const containsMartians = titleEl.includes('Martians');
    if (containsMars || containsMartians) {
      news.classList.add('news__item--from-mars');
    }
  }
}


//EJERCICIO 3

fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(response => response.json())
  .then(function (data){
    const {news:allNews} = data;
    paintNews(allNews);
    martianNews();
    addListenersToLi(); // para el ej4, función definida más adelante
  });


//EJERCICIO 4
//modifico la función paintNews para que también añada la clase que oculta las imagenes al crear los 'li'.

function paintNews(allNews) {
  for (const news of allNews) {
    const newLi = document.createElement('li');
    const newH2 = document.createElement('h2');
    const newImg = document.createElement('img');
    const title = document.createTextNode (news.title);
    newH2.appendChild(title);
    newH2.classList.add('news__title');
    newImg.classList.add('news__image');
    newLi.classList.add('news__item');
    newLi.classList.add('news__item--no-image-visible');
    newImg.src = news.image;
    newImg.alt = news.title;
    newLi.appendChild(newH2);
    newLi.appendChild(newImg);
    ulEl.appendChild(newLi);
  }
}

//para añadir listeners a todos los 'li' que se creen
function addListenersToLi () {
  const newsEl = document.querySelectorAll('.news__item');
  for (const news of newsEl){
    news.addEventListener('click', toggleImage);
  }
}

function toggleImage (event) {
  const currentNews = event.currentTarget;
  currentNews.classList.toggle('news__item--no-image-visible');
}

//EJERCICIO 5

// fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
//   .then(response => response.json())
//   .then(function(data){
//     const {palettes} = data;
//     const [ship] = palettes;
//     createPalette(ship);
//   });

function createPalette (ship) {
  const palettesUlEl = document.querySelector('.palettes');
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

//EJERCICIO 6

fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(function(data){
    const {palettes} = data;
    for (const ship of palettes){
      createPalette(ship);
    }
  });