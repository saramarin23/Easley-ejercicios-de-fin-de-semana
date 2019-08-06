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

function writeData(){
  for (let i=0; i<data.length; i++){
    const newLi = document.createElement('li');
    newLi.classList.add('news__item');

    const newTitle = document.createElement('h2');
    newTitle.classList.add('news__title');
    const newContent = document.createTextNode(data[i].title);
    newTitle.appendChild(newContent);

    const newImage = document.createElement('img');
    newImage.classList.add('news__image');
    newImage.setAttribute('src', data[i].image);
    newImage.setAttribute('alt', data[i].title);

    newLi.appendChild(newTitle);
    newLi.appendChild(newImage);
    list.appendChild(newLi);
  }
}

writeData();
