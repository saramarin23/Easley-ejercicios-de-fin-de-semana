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

function elementData() {
  for (let element of data) {
    const newItem = document.createElement('li');
    const newTitle = document.createElement('h2');
    const newContent = document.createTextNode(element.title);
    const newImage = document.createElement('img');
    newImage.src = element.image;
    newTitle.appendChild(newContent);
    newItem.appendChild(newTitle);
    newItem.appendChild(newImage);
    list.appendChild(newItem);
  }
}
elementData();


