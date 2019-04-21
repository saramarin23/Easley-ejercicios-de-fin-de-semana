'use strict';
const contentList = document.querySelector('.news');

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

function renderNews () {
  for(const itemNew of data) {
  const newItem = document.createElement('li');
  newItem.classList.add('news__item');
  const newTitle = document.createElement('h2');
  newTitle.classList.add('news__title');
  const newImage = document.createElement('img');
  newImage.classList.add('news__image');
  newImage.src = itemNew.image;
  newImage.alt = itemNew.title;
  const newContentTitle = document.createTextNode(itemNew.title);
  newTitle.appendChild(newContentTitle);
  newItem.appendChild(newImage);
  newItem.appendChild(newTitle);
  contentList.appendChild(newItem);
  }
  console.log(data);
}

renderNews();
