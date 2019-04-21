'use strict';
const contentList = document.querySelector('.news');
const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

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

// function renderNews () {
//   for(const itemNew of data) {
//     const newItem = document.createElement('li');
//     newItem.classList.add('news__item');
//     const newTitle = document.createElement('h2');
//     newTitle.classList.add('news__title');
//     const newImage = document.createElement('img');
//     newImage.classList.add('news__image');
//     newImage.src = itemNew.image;
//     newImage.alt = itemNew.title;
//     const newContentTitle = document.createTextNode(itemNew.title);
//     newTitle.appendChild(newContentTitle);
//     newItem.appendChild(newImage);
//     newItem.appendChild(newTitle);
//     contentList.appendChild(newItem);
//     const contentTitleMars = itemNew.title;
//       if (contentTitleMars.includes('Mars') || contentTitleMars.includes('Martians')){ 
//         newItem.classList.add('news__item--from-mars');
//         console.log(contentTitleMars);
//       } 
//   }
//   console.log(data);
// }

// renderNews();

function renderNews () {
fetch (api)
  .then(response => response.json())
    .then(data => {
      for (const itemNew of data.news) {
        const newItem = document.createElement('li');
        newItem.classList.add('news__item');
        const newTitle = document.createElement('h2');
        newTitle.classList.add('news__title');
        const newImage = document.createElement('img');
        newImage.classList.add('news__image');
        newImage.src = itemNew.image;
        newImage.alt = itemNew.title;
        const newContentTitle = document.createTextNode(itemNew.title);
        newTitle.appendChild(newContentTitle);
        newItem.appendChild(newImage);
        newItem.appendChild(newTitle);
        contentList.appendChild(newItem);
        const contentTitleMars = itemNew.title;
          if (contentTitleMars.includes('Mars') || contentTitleMars.includes('Martians')){ 
            newItem.classList.add('news__item--from-mars');
          }
        newItem.classList.add('news__item--no-image-visible');
        function appearImage () {
        newItem.classList.toggle('news__item--no-image-visible')
        }
        newItem.addEventListener('click', appearImage);
  } 
});
}
renderNews();
