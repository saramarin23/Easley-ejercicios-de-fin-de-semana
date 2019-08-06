'use strict';
const list = document.querySelector('.news');

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
let imageLis = '';

for (const item of data) {
  imageLis += `
    <li class="news__item">
      <h2 class="news__title">${item.title}</h2>
      <img class="news__image" src="${item.image}" alt="${item.title}">
    </li>
    `;
}
list.innerHTML = imageLis;

