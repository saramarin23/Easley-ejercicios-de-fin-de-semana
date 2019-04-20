'use strict';

const news = document.querySelector('.news');
const paletteSpaceShip = document.querySelector('.palette-space-ship');
const allPalettes = document.querySelector('.spaceship-colors');

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
};

const getColors = () => {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
    .then(response => response.json())
    .then(data => {
      const palettes = data.palettes;
      const color = palettes[0].colors;
      paintPalette(color);
    });
};

getColors();


// EJERCICIO 6

function createColors(colorsArr, parent){
  for (let i = 0; i < colorsArr.length; i++) {
    const oneColor = document.createElement('li');
    oneColor.classList.add('color__item');
    oneColor.setAttribute('style', `background-color:#${colorsArr[i]}`);
    parent.appendChild(oneColor);
  }
}

const getAllSpaceShipColors = () => {
  fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.palettes.length; i++) {
        console.log(data.palettes[i]);
        //creo LI para el UL que tengo en el HTML
        const newLi = document.createElement('li');
        newLi.classList.add('spaceship-colors__item');
        allPalettes.appendChild(newLi);

        //añado contenido a los LI con un h2 con el nombre de las naves
        const liTitle = document.createElement('h2');
        const liTitleContent = document.createTextNode(data.palettes[i].name);
        liTitle.appendChild(liTitleContent);
        newLi.appendChild(liTitle);

        //creo nuevo UL para meter dentro de los LI para organizar los colores
        const newUl = document.createElement('ul');
        newUl.classList.add('spaceship-colors__container');
        newLi.appendChild(newUl);

        //añado array de colores a los LI mediante una función porque si hacía aquí dentro el for, no funcionaba
        const colorsArr = data.palettes[i].colors;
        createColors(colorsArr, newUl);
      }
  })
};

getAllSpaceShipColors();

