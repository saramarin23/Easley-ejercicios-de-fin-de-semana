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
console.log('hola');

const list = document.querySelector(".news");

let listEl = "";
for ( const item of data) {
    
    listEl += `<li class="news__item"><h2 class="news__title">${item.title}</h2><img class="news__image" src="${item.image}" alt="${item.title}"></li>`;  
    
}
list.innerHTML = listEl;

const newsItems = document.querySelectorAll(".news__item");
console.log(newsItems);

for ( let i = 0; i < newsItems.length; i++) {
    const title = newsItems[i].querySelector(".news__title").innerHTML;
    console.log(title);

    if (title.includes('Mars') || title.includes('Martians')) {
        newsItems[i].classList.add("news__item--from-mars");
    }
}
