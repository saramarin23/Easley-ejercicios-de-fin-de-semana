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

function paintNews (arr) {
  for (const item of arr) {
    const newsList = document.createElement('li');
    newsList.classList.add('news__item');

    const newsListTitle = document.createElement('h2');
    newsListTitle.classList.add('news__title');

    const titleContent = document.createTextNode(item.title)

    const image = document.createElement('img');
    image.classList.add('news__image');
    image.src = item.image;
    image.alt = item.title;

    newsListTitle.appendChild(titleContent);
    newsList.appendChild(newsListTitle);
    newsList.appendChild(image);

    list.appendChild(newsList);
  }
};    
paintNews(data);