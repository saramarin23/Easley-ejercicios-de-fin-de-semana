'use strict';

// ### 1/ Listado de noticias
// Hay que pintar en el html un listado a partir del array:
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
// 1/ Listado de noticias

const newsList = document.querySelector('.news');
for (let i=0; i<data.length; i++) {
  newsList.innerHTML += '<li class="news__item"></li>';
  const newsItem = document.querySelectorAll('.news__item')
  newsItem[i].innerHTML += '<h2 class="news__title"></h2><img class="news__image" src="" alt="">';
  const newsTitle = document.querySelectorAll('.news__title');
  const newsImg = document.querySelectorAll('.news__image');
  newsTitle[i].innerHTML += data[i].title;
  newsImg[i].src = data[i].image;
}

// 2/ 
