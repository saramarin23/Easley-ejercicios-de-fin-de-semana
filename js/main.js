'use strict';

const urlData =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

//Listado de noticias
//Pinta array en el html.

const newsList = document.querySelector ('.news');
const paletteList = document.querySelector ('.palettes');
const newPaletteList = document.querySelector ('.new__palettes');

function fetchData (url) {
  fetch (url).then (response => response.json ()).then (dataAll => {
    const data = dataAll.news;
    // Crear contenido

    for (let i = 0; i < data.length; i++) {
      const newItem = document.createElement ('li');
      newItem.setAttribute ('class', 'news__item news__item--no-image-visible');

      const newTitle = document.createElement ('h2');
      const newText = document.createTextNode (data[i].title);
      newTitle.setAttribute ('class', 'news__title');
      newTitle.appendChild (newText);

      const newImage = document.createElement ('img');
      newImage.src = data[i].image;
      newImage.alt = data[i].title;
      newImage.setAttribute ('class', 'news__image');

      newItem.appendChild (newTitle);
      newItem.appendChild (newImage);
      newItem.addEventListener ('click', toggleClass);
      newsList.appendChild (newItem);
    }

    //Añade clase a los elementos que contengan Martian o Mars.
    const titles = document.querySelectorAll ('.news__title');
    for (let i = 0; i < titles.length; i++) {
      const titlesText = titles[i].innerHTML;
      if (titlesText.includes ('Martian') || titlesText.includes ('Mars')) {
        titles[i].parentElement.classList.add ('news__item--from-mars');
      }
    }

    //Quita las imagenes
    function toggleClass (event) {
      const trigger = event.currentTarget;
      trigger.classList.toggle ('news__item--no-image-visible');
    }
  });
}

fetchData (urlData);

const urlPalette =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';

function paletteFetch (urlToFetch) {
  fetch (urlToFetch).then (response => response.json ()).then (data => {
    const colorsPalette = data.palettes[0].colors;
    for (const color of colorsPalette) {
      const newPalette = document.createElement ('li');
      newPalette.setAttribute ('class', 'color__item');
      newPalette.style.backgroundColor = `#${color}`;
      paletteList.appendChild (newPalette);
    }
  });
}

paletteFetch (urlPalette);

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
      newInput.type = 'checkbox';
      newPaletteRow.appendChild (newInput);

      newInput.addEventListener('click', selectedItem);

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

function selectedItem(event) {
  const selected = event.currentTarget.parentElement;
  selected.classList.toggle('selected__item');
}