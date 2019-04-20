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

const ulEl = document.querySelector('.news');

console.log (data[1].title);


for (let i=0; i<data.length; i++){
  ulEl.innerHTML+=
  `<li class="news__item">
      <h2 class="news__title"> ${data[i].title}</h2>
      <img class="news__image" src=${data[i].image}
      alt=${data[i].title}>
    </li>`
}