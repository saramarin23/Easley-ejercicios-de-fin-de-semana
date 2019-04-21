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


const ulElement = document.querySelector('.news');

for(let i = 0; i< data.length; i++){
  ulElement.innerHTML = ulElement.innerHTML + `<li class="news__items"> <h2 class"news__title">${data[i].title}</h2><img class="news__image" src="${data[i].image}" alt="${data[i].title}"></li>`;
}

//MARTE, EL PLANETA ROJO

//buscar los elementos con clase .news__item.
//  creo un nuevo array vacío donde meter los elementos

//const arrNewsItems = document.querySelectorAll(".news__items");
const arrNewsItems = ulElement.children;
console.log(arrNewsItems);
//recorro el nuevo array
for(let i = 0; i< arrNewsItems.length ; i++){
  if(arrNewsItems[i].innerHTML.includes("Mars") || arrNewsItems[i].innerHTML.includes("Martians")){
    arrNewsItems[i].classList.add("news__items--from-mars");
    //arrNewsItems[i].classList.remove("news__items");

  }
}