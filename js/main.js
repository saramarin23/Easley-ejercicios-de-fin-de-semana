'use strict';

const urlData =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

//Listado de noticias
//Pinta array en el html.

const newsList = document.querySelector ('.news');
const paletteList = document.querySelector ('.palettes');
const newPaletteList = document.querySelector ('.new__palettes');
const searchInput = document.querySelector ('.search');

const toggleClass = event => {
  const trigger = event.currentTarget;
  trigger.classList.toggle ('news__item--no-image-visible');
};

const createSquares = array => {
  for (let i = 0; i < array.length; i++) {
    const newItem = document.createElement ('li');
    newItem.setAttribute ('class', 'news__item news__item--no-image-visible');

    const newTitle = document.createElement ('h2');
    const newText = document.createTextNode (array[i].title);
    newTitle.setAttribute ('class', 'news__title');
    newTitle.appendChild (newText);

    const newImage = document.createElement ('img');
    newImage.src = array[i].image;
    newImage.alt = array[i].title;
    newImage.setAttribute ('class', 'news__image');

    newItem.appendChild (newTitle);
    newItem.appendChild (newImage);
    newItem.addEventListener ('click', toggleClass);
    newsList.appendChild (newItem);
  }
};

const searchTitle = () => {
  const titles = document.querySelectorAll ('.news__title');
  for (let i = 0; i < titles.length; i++) {
    const titlesText = titles[i].innerHTML;
    if (titlesText.includes ('Martian') || titlesText.includes ('Mars')) {
      titles[i].parentElement.classList.add ('news__item--from-mars');
    }
  }
};

const getStorage = objName => JSON.parse (localStorage.getItem (objName));

window.addEventListener ('load', fetchOrNot);

function fetchData (url) {
  fetch (url).then (response => response.json ()).then (dataAll => {
    const data = dataAll.news;
    // Crear contenido
    createSquares (data);
    //Añade Clase a los elementos que contengan Martian o Mars.
    searchTitle ();
    // Crea localStorage
    localStorage.setItem ('dataMartians', JSON.stringify (data));
  });
}

const urlPalette =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';

const firstPalettes = data => {
  for (const color of data) {
    const newPalette = document.createElement ('li');
    newPalette.setAttribute ('class', 'color__item');
    newPalette.style.backgroundColor = `#${color}`;
    paletteList.appendChild (newPalette);
  }
};

function fetchOrNot () {
  const storageData = getStorage ('dataMartians');
  const storageDataPalette = getStorage ('firstPalette');
  if (storageData === true && storageDataPalette === true) {
    firstPalettes ('dataMartians');
    createSquares (storageData);
    searchTitle ();
  } else {
    fetchData (urlData);
    paletteFetch (urlPalette);
  }
}

function paletteFetch (urlToFetch) {
  fetch (urlToFetch).then (response => response.json ()).then (data => {
    const colorsPalette = data.palettes[0].colors;
    localStorage.setItem ('firstPalette', JSON.stringify (colorsPalette));
    firstPalettes (colorsPalette);
  });
}

const secondUrlPalette =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

function secondPalette (urlToFetch) {
  fetch (urlToFetch).then (response => response.json ()).then (data => {
    const newPalettes = data.palettes;
    for (const palette of newPalettes) {
      const newPaletteRow = document.createElement ('li');
      newPaletteRow.setAttribute ('class', 'palette__item');

      const newInput = document.createElement ('input');
      newInput.setAttribute ('name', 'chooseTheme');
      newInput.setAttribute ('class', 'input__palette');
      newInput.setAttribute ('value', palette.name);
      newInput.type = 'checkbox';
      newPaletteRow.appendChild (newInput);

      newInput.addEventListener ('click', selectedItem);

      const newPaletteText = document.createTextNode (palette.name);
      newPaletteRow.appendChild (newPaletteText);

      const newListColors = document.createElement ('ul');
      newListColors.setAttribute ('class', 'palette__item');

      for (const color of palette.colors) {
        const newPalette = document.createElement ('li');
        newPalette.setAttribute ('class', 'color__item');
        newPalette.style.backgroundColor = `#${color}`;
        newListColors.appendChild (newPalette);
      }

      newPaletteRow.appendChild (newListColors);
      newPaletteList.appendChild (newPaletteRow);
    }
  });
}

secondPalette (secondUrlPalette);

function selectedItem (event) {
  const selected = event.currentTarget.parentElement;
  selected.classList.toggle ('selected__item');
}

//Búsqueda de elementos

function searchItem (event) {
  const titlesQuery = document.querySelectorAll ('.input__palette');
  const searchText = event.currentTarget.value;

  for (const titles of titlesQuery) {
    const searchContent = searchText.toLowerCase ();
    const titlesContent = titles.value.toLowerCase ();

    if (titlesContent.includes (searchContent)) {
      titles.parentElement.classList.remove ('hidden');
    } else {
      titles.parentElement.classList.add ('hidden');
    }
  }
}
// searchInput.addEventListener('keyup', searchItem);
