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

for (const item of data) {
  const list = document.querySelector('.news');
  const listItem = document.createElement('li');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const image = item.image;

  const title = document.createTextNode(item.title);
  listItem.setAttribute('class', 'news__item');
  h2.setAttribute('class', 'news__title');
  img.setAttribute('class', 'news__image');
  img.setAttribute('src', `${image}`);

  h2.appendChild(title);
  listItem.appendChild(h2);
  listItem.appendChild(img);
  list.appendChild(listItem);

}
