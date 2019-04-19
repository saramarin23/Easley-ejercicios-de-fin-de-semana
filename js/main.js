'use strict';

const news = document.querySelector('.news');
// const palette = document.querySelector('.palette');
const paletteSpaceShip = document.querySelector('.palette-space-ship');

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

const paintNews = (array) => {
 for (const item of array) {
   //creo elementos
   const newLi = document.createElement('li');
   const newTitle = document.createElement('h2');
   const newImg = document.createElement('img');

   //creo contenidos
   const newTitleContent = document.createTextNode(item.title);

   //agrego contenido a elementos
   newTitle.appendChild(newTitleContent);
   newImg.src = item.image;
   newImg.alt = item.title;

   //agrego clases a los elementos
   newLi.classList.add('news__item');
   newLi.classList.add('news__item--no-image-visible');
   newTitle.classList.add('news__title');
   newImg.classList.add('news__image');

   //meto elementos dentro de otros
   newLi.appendChild(newTitle);
   newLi.appendChild(newImg);

   //añado elementos a la página
   news.appendChild(newLi);

   //añado listener al elemento AQUÍ DENTRO que es donde existe el elemento... Que si no no funciona!!
   newLi.addEventListener('click', showPic);
 }
}

const martianNews = () => {
  const allNews = document.querySelectorAll('.news__item');
  for (const item of allNews) {
    const titleContent = item.querySelector('.news__title').innerHTML;
    if (titleContent.includes('Mars') || titleContent.includes('Martian')) {
      item.classList.add('news__item--from-mars'); 
    }
  }
}

const fetchNews = () => {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(response => response.json())
    .then(data => {
      paintNews(data.news);
      martianNews();
    });
};

fetchNews();

const showPic = () => {
  event.currentTarget.classList.toggle('news__item--no-image-visible');
};

const paintPalette = (colors) => {
  // creo elementos
  const titlePalette = document.createElement('h2');
  const listColors = document.createElement('ul');

  //creo contenidos
  const titlePaletteContent = document.createTextNode('Space Ship');

  //agrego contenido a elementos
  titlePalette.appendChild(titlePaletteContent);

  //agrego clase a la lista para añadirle estilos después
  listColors.classList.add('space-ship-colors');

  //agrego elementos a elementos
  paletteSpaceShip.appendChild(titlePalette);
  paletteSpaceShip.appendChild(listColors);

  //agrego li a ul mediante un bucle
  for (const color of colors) {
    const listColor = document.createElement('li');
    listColor.classList.add('color__item');
    listColor.setAttribute('style', `background-color:#${color}`);
    listColors.appendChild(listColor);
  }
}

const getColors = () => {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
    .then(response => response.json())
    .then(data => {
      const palettes = data.palettes;
      const color = palettes[0].colors;
      console.log(palettes);
      console.log(palettes[0].colors);
      paintPalette(color);
    });
};

getColors();