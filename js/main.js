'use strict';
const news = document.querySelector('.news');

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
function addElementslist() {
  for (const item of data) {

    const newItem = document.createElement('li');
    const newh2 = document.createElement('h2');
    const newimg = document.createElement('img');
    const newContent = document.createTextNode(item.title);
    newItem.setAttribute('class', 'news__item');
    newimg.setAttribute('class', 'news__image');
    newimg.setAttribute('src', `${item.image}`);
    newimg.setAttribute('alt', `${item.title} imagen`);
    newh2.setAttribute('class', 'news__title');
    newh2.appendChild(newContent);
    newItem.appendChild(newh2);
    newItem.appendChild(newimg);
    news.appendChild(newItem);
  }
}
addElementslist();
const itemsElements = document.querySelectorAll('.news__item');
const classTitle = document.querySelectorAll('.news__title');

function resaltmarcianos() {
  for (let i = 0; i < itemsElements.length; i++) {
    if (classTitle[i].innerHTML.includes('Mars') | classTitle[i].innerHTML.includes('Martian')) {
      itemsElements[i].classList.add('news__item--from-mars');
    }
  }
}

resaltmarcianos();

/*for (const item of data){
  news.innerHTML += `<li class="news__item">
  <h2 class="news__title">${item.title}</h2>
  <img class="news__image" src="${item.image}" alt="${item.title}">
  </li>
  `;
}*/
