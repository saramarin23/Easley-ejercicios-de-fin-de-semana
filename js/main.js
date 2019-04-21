'use strict';

const news = document.querySelector('.news');
const urlData =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';
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
