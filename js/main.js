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

const ulEl = document.querySelector('.news');


//Añadir contenido usando innerHTML

// for (const news of data) {
//   ulEl.innerHTML+= `
//   <li class="news__item">
//       <h2 class="news__title">${news.title}</h2>
//       <img class="news__image" src="${news.image}" alt="${news.title}">
//   </li>
//   `;
// }

//Añadir contenido usando DOM avanzado

for (const news of data) {
  const newLi = document.createElement('li');
  const newH2 = document.createElement('h2');
  const newImg = document.createElement('img');
  const title = document.createTextNode (news.title);
  newH2.appendChild(title);
  newH2.classList.add('news__title');
  newImg.classList.add('news__image');
  newLi.classList.add('news__item');
  newImg.src = news.image;
  newImg.alt = news.title;
  newLi.appendChild(newH2);
  newLi.appendChild(newImg);
  ulEl.appendChild(newLi);
}

