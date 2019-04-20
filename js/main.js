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

function createLi(data) {
  for (const obj of data) {
    const news = document.querySelector('.news');
    const newItem = document.createElement('li');
    newItem.classList.add('news__item');
    newItem.classList.add('news__item--no-image-visible');
    const newTitle = document.createElement('h2');
    newTitle.classList.add('news__title');
    const  titleContent = document.createTextNode(`Title: ${obj.title}`);
    const newImg = document.createElement('img');
    newImg.classList.add('news__image');
    newImg.src = obj.image;
    newImg.alt = obj.title;
    newTitle.appendChild(titleContent);
    newItem.appendChild(newTitle);
    newItem.appendChild(newImg);
    news.appendChild(newItem);
  }
}

function changeStyles() {
  const allNews = document.querySelectorAll('.news__item');
  for (let i = 0; i < allNews.length; i ++) {
    const allTitles = allNews[i].firstChild;
    const titleContent = allTitles.innerHTML;
    if (titleContent.includes('Mars') || titleContent.includes('Martian')) {
      allNews[i].classList.add('news__item--from-mars');
    }
    allNews[i].addEventListener('click', function(){allNews[i].classList.toggle('news__item--no-image-visible');});
  }
}

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(response => response.json())
  .then (data => {
    createLi(data.news);
    changeStyles();

  });

