'use strict';

const list = document.querySelector('.news');


function changeClass(event) {
  if(event.currentTarget.classList.contains('news__item--no-image-visible')) {
    event.currentTarget.classList.remove('news__item--no-image-visible');
  } else {
    event.currentTarget.classList.add('news__item--no-image-visible');
  }
}

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(response => response.json())
  .then(data => {
    for (let element of data.news) {
      const newItem = document.createElement('li');
      newItem.classList.add('news__item');
      newItem.classList.add('news__item--no-image-visible');
      newItem.addEventListener('click', changeClass);

      const newTitle = document.createElement('h2');
      const newContent = document.createTextNode(element.title);
      newTitle.classList.add('news__title');

      const newImage = document.createElement('img');
      newImage.src = element.image;
      newImage.classList.add('news__image');

      newTitle.appendChild(newContent);
      newItem.appendChild(newTitle);
      newItem.appendChild(newImage);
      list.appendChild(newItem);
    }
  }
  );


/*const data = [
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
    newItem.classList.add('news__item');
    const newTitle = document.createElement('h2');
    const newContent = document.createTextNode(element.title);
    newTitle.classList.add('news__title');
    const newImage = document.createElement('img');
    newImage.src = element.image;
    newImage.classList.add('news__image');
    newTitle.appendChild(newContent);
    newItem.appendChild(newTitle);
    newItem.appendChild(newImage);
    list.appendChild(newItem);
  }
}

elementData();

const allNews = document.querySelectorAll('.news__item');
let liName = [];

function findElement() {
  for (let li of allNews) {
    const title = li.querySelector('.news__title');
    liName.push(title.innerHTML);
    if (title.innerHTML.includes('Mars') || title.innerHTML.includes('Martian')) {
      li.classList.add('news__item--from-mars');
    }
  }
}

findElement();
*/

