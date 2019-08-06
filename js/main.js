'use strict';

// //1/
// const list = document.querySelector('.news');

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
// let imageLis = '';

// for (const item of data) {
//   imageLis += `
//     <li class="news__item">
//       <h2 class="news__title">${item.title}</h2>
//       <img class="news__image" src="${item.image}" alt="${item.title}">
//     </li>
//     `;
// }
// list.innerHTML = imageLis;

// //2/
// const newsItem = document.querySelectorAll('.news__item');

// for (const li of newsItem) {
//   const h2 = li.querySelector('h2');
//   const text = h2.innerText;

//   if (text.includes('Mars') || text.includes('Martian')) {
//     li.classList.add('news__item--from-mars');
//   }
// }


//3/
const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

const list = document.querySelector('.news');

fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => data.news)
  .then(news => {
    printImages(news);
  });

function printImages(data) {
  let imageLis = '';
  for (const item of data) {
    imageLis += `
    <li class="news__item">
      <h2 class="news__title">${item.title}</h2>
      <img class="news__image" src="${item.image}" alt="${item.title}">
    </li>
    `;
  }
  list.innerHTML = imageLis;
  selectMars();
}

function selectMars() {
  const newsItem = document.querySelectorAll('.news__item');

  for (const li of newsItem) {
    const h2 = li.querySelector('h2');
    const text = h2.innerText;

    if (text.includes('Mars') || text.includes('Martian')) {
      li.classList.add('news__item--from-mars');
    }
  }
}



