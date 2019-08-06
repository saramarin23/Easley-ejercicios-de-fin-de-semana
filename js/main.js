'use strict';

const newUl = document.querySelector('.news');
let liArray = [];
// const data = [
//   {
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Humans aren\'t real',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];
const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => {
    for (let item of data.news){
      const newimg = document.createElement('img');
      newimg.setAttribute('src', item.image);
      newimg.setAttribute('alt', item.title);
      newimg.classList.add('news__image');
      const newtitle = document.createElement('h2');
      newtitle.classList.add('news__title');
      const titletext = document.createTextNode(item.title);
      newtitle.appendChild(titletext);
      const newli = document.createElement('li');
      newli.appendChild(newtitle);
      newli.appendChild(newimg);
      newli.classList.add('news__item');
      newli.classList.add('news__item--no-image-visible');
      newUl.appendChild(newli);
      liArray = newUl.querySelectorAll ('.news__item');

    }
    for( let item of liArray){
      if (item.firstChild.innerHTML.includes('Mars') ||item.firstChild.innerHTML.includes('Martian')){
        item.classList.add('news__item--from-mars');
      }
    }
  });
