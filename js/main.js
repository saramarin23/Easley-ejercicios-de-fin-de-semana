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
let dataNews = [];
const listEl = document.querySelector('.news');
function query(){
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json').then(response => response.json()).then(data => {
    dataNews = data.news;
    addHtml();
    addTitleStyles();
  })
};
query();

function addHtml() {
  for (const news of dataNews) {
    const newsItem = document.createElement('ĺi');
    const newsTitle = document.createElement('h2');
    const newsTitleContent = document.createTextNode(news.title);
    const newsImage = document.createElement('img');
    newsItem.classList.add('news__item');
    newsTitle.classList.add('news__title');
    newsImage.classList.add('news__image');
    listEl.appendChild(newsItem);
    newsItem.appendChild(newsTitle);
    newsItem.appendChild(newsImage);
    newsImage.src = news.image;
    newsImage.alt = news.title;
    newsTitle.appendChild(newsTitleContent);

  }
}
function addTitleStyles() {
  const titlesList = document.querySelectorAll('.news__item');
  for (const titleEl of titlesList) {
    const title = titleEl.querySelector('.news__title').innerHTML;
    if (title.includes('Mars')||title.includes('Martian')) {
      titleEl.classList.add('news__item--from-mars');
    }
  }
}


