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

const printNews = array => {
  for (const item of array) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('news__item');
    const newListTitle = document.createElement('h2');
    newListTitle.classList.add('news__title');
    const newListTitleContent = document.createTextNode(item.title);
    const newListImage = document.createElement('img');
    newListImage.classList.add('news__image');
    newListImage.src = item.image;
    newListImage.alt = item.title;

    newListTitle.appendChild(newListTitleContent);
    newListItem.appendChild(newListTitle);
    newListItem.appendChild(newListImage);

    list.appendChild(newListItem);
  }
};

printNews(data);
