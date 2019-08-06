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
    <li class="news__item news__item--no-image-visible">
      <h2 class="news__title">${item.title}</h2>
      <img class="news__image" src="${item.image}" alt="${item.title}">
    </li>
    `;
  }
  list.innerHTML = imageLis;
  selectMars();
}

const newsItem = document.querySelectorAll('.news__item');

function selectMars() {
  const newsItem = document.querySelectorAll('.news__item');

  for (const li of newsItem) {
    li.addEventListener('click', function () {
      li.classList.toggle('news__item--no-image-visible');
    });

    const h2 = li.querySelector('h2');
    const text = h2.innerText;

    if (text.includes('Mars') || text.includes('Martian')) {
      li.classList.add('news__item--from-mars');
    }
  }
}

//4
//listener to li inside for of newsItem
//add .toogle to li.


//5
const paletteContainer = document.querySelector('.palette');

const PALETTE = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';

fetch(PALETTE)
  .then(response => response.json())
  .then(data => {
    const paletteName = document.createElement('h3');
    const paletteNameText = document.createTextNode(data.palettes[0].name);
    paletteName.appendChild(paletteNameText);
    paletteContainer.appendChild(paletteName);

    return data.palettes[0].colors;
  })
  .then(colors => {
    for (const color of colors) {
      console.log(color)
      const box = document.createElement('div');

      box.classList.add('palette__box');
      box.style.backgroundColor = `#${color}`;

      paletteContainer.appendChild(box);
    }
  });
