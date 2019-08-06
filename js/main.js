'use strict';

const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Humans aren\'t real',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];

// Elementos del HTML
const news = document.querySelector('.news');

function putList() {
  let lis = '';
  for (let item of data) {
    lis += `
      <li class="news__item">
        <h2 class="news__title">${item.title}</h2>
        <img class="news__image" src="${item.image}" alt="${item.title}">
      </li>
    `;
    news.innerHTML = lis;
  }
}

putList();


// Destacar los resultados "marcianos"

//1. Buscamos todos los eltos con clase .news__item
const newsItem = document.querySelectorAll('.news__item');

//2. Recorremos la lista de eltos almacenando en una variable
//el contenido del título de cada elto.
/*
* Función que recorre la lista de elementos del array data
* y almacena el título en un array nuevo y lo devuelve
*/
function getTitle() {
  let title = [];
  for(let i=0; i<data.length; i++) {
    title[i] = data[i].title;
  }
  //3. Usando el método includes() comprobaremos si contienen “Mars” o “Martian” y aplicaremos al li correspondiente la clase .news__item--from-mars
  for(let i=0; i<title.length; i++) {
    if(title[i].includes('Mars') || title[i].includes('Martian')) {
      /* newsItem[i].classList.remove('news__item'); */
      newsItem[i].classList.add('news__item--from-mars');
    }
  }
  return title;
}

getTitle();
