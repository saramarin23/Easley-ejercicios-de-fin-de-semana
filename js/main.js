'use strict';

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
// //------------------EJERCICIO 1
// for (const item of data) {
//   const list = document.querySelector('.news');
//   const listItem = document.createElement('li');
//   const h2 = document.createElement('h2');
//   const img = document.createElement('img');
//   const image = item.image;

//   const title = document.createTextNode(item.title);
//   listItem.setAttribute('class', 'news__item');
//   h2.setAttribute('class', 'news__title');
//   img.setAttribute('class', 'news__image');
//   img.setAttribute('src', `${image}`);

//   h2.appendChild(title);
//   listItem.appendChild(h2);
//   listItem.appendChild(img);
//   list.appendChild(listItem);
// }
// //-----------------------EJERCICIO 2
// const martians = document.querySelectorAll('.news__item');

// for (let i = 0; i < martians.length; i++) {
//   const martiansItems = martians[i];

//   if(martiansItems.innerHTML.includes('Mars')) {
//     martiansItems.classList.add('news__item--from-mars');
//   } else if(martiansItems.innerHTML.includes('Martians')) {
//     martiansItems.classList.add('news__item--from-mars');}
// }

//---------------EJERCICIO 3
const api =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

fetch(api)
  .then(response => response.json())
  .then(data => {
    for (const item of data.news) {
      const list = document.querySelector('.news');
      const listItem = document.createElement('li');
      const h2 = document.createElement('h2');
      const img = document.createElement('img');
      const image = item.image;

      const title = document.createTextNode(item.title);
      // listItem.setAttribute('class', 'news__item');
      listItem.setAttribute('class', 'news__item--no-image-visible');
      h2.setAttribute('class', 'news__title');
      img.setAttribute('class', 'news__image');
      img.setAttribute('src', `${image}`);

      h2.appendChild(title);
      listItem.appendChild(h2);
      listItem.appendChild(img);
      list.appendChild(listItem);
//----------------------- EJERCICIO 4
      const showImages = e => {
        console.log(e.currentTarget);
        const trigger = e.currentTarget.parentElement;
        console.log(trigger);
        // const triggerPE = trigger.parentElement;
        if (trigger.classList.contains('news__item--no-image-visible')) {
          trigger.classList.remove('news__item--no-image-visible');
        } else {
          trigger.classList.add('news__item--no-image-visible');
        }
      };
      h2.addEventListener('click', showImages);
    }
  });
