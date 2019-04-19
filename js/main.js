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



function addElement() {
  for(let i = 0; i < data.length; i++) {
    // Crear elementos en HTML
    const news = document.querySelector('.news');
    const newLi = document.createElement('li');
    const newH2 = document.createElement('h2');
    const newItemContent = document.createTextNode(data[i].title);
    const newImg = document.createElement('img');
    newImg.src = data[i].image;
    newImg.alt = data[i].title;
    // Añadir contenido a elementos de HTML
    newH2.appendChild(newItemContent);
    newLi.appendChild(newH2);
    news.appendChild(newLi);
    newLi.appendChild(newImg);
    // Añadir clases a elementos de HTML
    newLi.classList.add('news__item');
    newH2.classList.add('news__title');
    newImg.classList.add('news__image');
  }
}

addElement();