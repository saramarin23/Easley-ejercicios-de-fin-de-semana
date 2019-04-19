'use strict';

// const data = [
//   {
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100',
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100',
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100',
//   },
//   {
//     title: "Humans aren't real",
//     image: 'https://via.placeholder.com/200x100',
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100',
//   },
// ];

const urlData =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

//Listado de noticias
//Pinta array en el html.

const newsList = document.querySelector ('.news');

function fetchData (url) {
  fetch (url).then (response => response.json ()).then (dataAll => {
    const data = dataAll.news;
    // Crear contenido

    for (let i = 0; i < data.length; i++) {
      const newItem = document.createElement ('li');
      newItem.setAttribute ('class', 'news__item');

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
      newsList.appendChild (newItem);

      //Añade clase a los elementos que contengan Martian o Mars.
      const titles = document.querySelectorAll ('.news__title');
      for (let i = 0; i < titles.length; i++) {
        const titlesText = titles[i].innerHTML;
        if (
          titlesText.includes ('Martian') ||
          titlesText.includes ('Mars')
        ) {
          titles[i].parentElement.setAttribute ('class', 'news__item--from-mars');
        }
      }
    }
  });
}

fetchData (urlData);