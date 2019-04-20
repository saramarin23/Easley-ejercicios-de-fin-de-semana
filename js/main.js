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

const listContainer = document.querySelector('.news');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const dataApi = data.news;
    for (let listElement of dataApi) {
      const newItem = document.createElement('li');
      const newTitle = document.createElement('h1');
      const newImg = document.createElement('img');
      const newContent = document.createTextNode(listElement.title);
      newItem.classList.add('news__item');
      newTitle.classList.add('news__title');
      newImg.classList.add('news__img');
      newImg.src = listElement.image;
      newImg.alt = "imagen de la película " + listElement.title;

      newTitle.appendChild(newContent);
      listContainer.appendChild(newItem);
      newItem.appendChild(newTitle);
      newItem.appendChild(newImg);
    }
    const newsItem = document.querySelectorAll('.news__item');

    for (let item of newsItem) {
      const newsTitle = item.firstChild;
      const titleContent = newsTitle.innerHTML;
      if (titleContent.includes('Mars') || titleContent.includes('Martians')) {
        item.classList.add('news__item--from-mars');
        console.log('hola');
      }
      else {
      }
    }

    return console.log(data.news);

  });




