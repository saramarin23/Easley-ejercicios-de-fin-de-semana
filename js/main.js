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
//LISTADO DE NOTICIAS
// Hay que pintar en el html un listado a partir del array que tenemos en el js. En index.html hay un ejemplo de como debe quedar cada li, con sus clases y tal para que nadie se pierda en estilos o en algo que no sea js.

//recojo los elementos del HTML,  los verifico


const ulElement = document.querySelector('.news');

for(let i = 0; i< data.length; i++){
  ulElement.innerHTML = ulElement.innerHTML + `<li class="news__items> <h2 class"news__title">${data[i].title}</h2><img class="news__image" src="${data[i].image}" alt="${data[i].title}"></li>`;
}