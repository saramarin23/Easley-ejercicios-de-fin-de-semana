'use strict';

const news = document.querySelector('.news');
const colorsContainer = document.querySelector('.palette__list-container');
const palettesContainer = document.querySelector('.palettes__container');
const urlData =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';
const urlPalette =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';
const urlPalettes =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
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
    title: "Humans aren't real",
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];

// Ejercicio 1 - Listado de noticias
/*for (let i = 0; i < data.length; i++) {
  const newItem = document.createElement('li');
  newItem.classList.add('news__item');
  const subtitle = document.createElement('h2');
  subtitle.classList.add('news__title');
  const image = document.createElement('img');
  image.classList.add('news__image');
  image.setAttribute('src', data[i].image);
  image.setAttribute('alt', data[i].title);

  const newContentTitle = document.createTextNode(data[i].title);
  const newContentImage = document.createTextNode(data[i].image);

  subtitle.appendChild(newContentTitle);
  image.appendChild(newContentImage);

  newItem.appendChild(subtitle);
  newItem.appendChild(image);
  news.appendChild(newItem);
};*/

// Ejercicio 2 - Marte, el planeta rojo
const mars = () => {
  const listNews = document.querySelectorAll('.news__item');
  for (const item of listNews) {
    const title = item.querySelector('.news__title').innerHTML;
    if (title.includes('Mars') || title.includes('Martian')) {
      item.classList.add('news__item--from-mars');
    }
  }
};

//mars();

// Ejercicio 3 - En el espacio nadie puede oir tus fetchs
const fetchData = url => {
  fetch(url)
    .then(response => response.json())
    .then(dataNews => {
      const data = dataNews.news;
      for (let i = 0; i < data.length; i++) {
        const newItem = document.createElement('li');
        newItem.classList.add('news__item', 'news__item--no-image-visible');
        const subtitle = document.createElement('h2');
        subtitle.classList.add('news__title');
        const image = document.createElement('img');
        image.classList.add('news__image');
        image.setAttribute('src', data[i].image);
        image.setAttribute('alt', data[i].title);

        const newContentTitle = document.createTextNode(data[i].title);
        const newContentImage = document.createTextNode(data[i].image);

        subtitle.appendChild(newContentTitle);
        image.appendChild(newContentImage);

        newItem.appendChild(subtitle);
        newItem.appendChild(image);
        news.appendChild(newItem);

        // Ejercicio 4 - Ahora me ves...
        function handElementClick(event) {
          const selectImage = event.currentTarget;
          selectImage.classList.toggle('news__item--no-image-visible');
        }
        newItem.addEventListener('click', handElementClick);
      }

      mars();
    });
};

fetchData(urlData);

// Ejercicio 5 - Todo es color entre tú y tus arrays...
const fetchPalette = url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const titlePalette = document.createElement('h2');
      titlePalette.classList.add('title__palette');
      const listColor = document.createElement('ul');
      listColor.classList.add('list__color');

      const titlePaletteContent = document.createTextNode(
        data.palettes[0].name
      );

      titlePalette.appendChild(titlePaletteContent);

      colorsContainer.appendChild(titlePalette);
      colorsContainer.appendChild(listColor);

      const colorsPalette = data.palettes[0].colors;
      for (const color of colorsPalette) {
        const newPalette = document.createElement('li');
        newPalette.classList.add('color__item');
        newPalette.setAttribute('style', `background-color:#${color}`);
        listColor.appendChild(newPalette);
      }
    });
};

fetchPalette(urlPalette);

// Ejercicio 6 - Episodio VI: El retorno de las paletas
const fetchPalettes = url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.palettes.length; i++) {
        const colorsContainer = document.createElement('li');
        colorsContainer.classList.add('colors__container');
        const titlePalette = document.createElement('h2');
        titlePalette.classList.add('title__palette');
        const listColor = document.createElement('ul');
        listColor.classList.add('list__color');

        const titlePaletteContent = document.createTextNode(
          data.palettes[i].name
        );

        titlePalette.appendChild(titlePaletteContent);
        addCircle(titlePalette);

        const colors = data.palettes[i].colors;
        for (const color of colors) {
          const newPalette = document.createElement('li');
          newPalette.classList.add('color__item');
          newPalette.setAttribute('style', `background-color:#${color}`);
          listColor.appendChild(newPalette);
        }

        colorsContainer.appendChild(titlePalette);
        colorsContainer.appendChild(listColor);

        palettesContainer.appendChild(colorsContainer);
      }
    });
};

fetchPalettes(urlPalettes);

// Ejercicio 7 - Mis paletas preferidas
function addCircle(element) {
  const circle = document.createElement('div');
  circle.classList.add('selected', 'circle');
  circle.addEventListener('click', () => {
    toggleCircle(circle);
  });
  element.appendChild(circle);
}

function toggleCircle(element) {
  element.classList.toggle('circle');
  element.classList.toggle('circle-selected');
}
