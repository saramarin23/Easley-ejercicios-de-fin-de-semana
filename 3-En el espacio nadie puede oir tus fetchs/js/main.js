'use strict';

const webApi = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';
const list = document.querySelector('.news');

function writeList() {
  fetch(webApi)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.news.length; i++) {

        list.innerHTML += `<li class="news__item"><h2 class="news__title">${data.news[i].title}</h2> <img class="news__image" src= "${data.news[i].image}" alt="${data.news[i].title}"> </li>`;
      }
      martians();
    }
    );
}

writeList();

function martians() {
  const listItems = document.querySelectorAll('.news__item');
  for (const listTitleMarsorMartians of listItems){
    const title = listTitleMarsorMartians.querySelector('.news__title').innerHTML;
    if(title.includes('Mars') || title.includes('Martians')){
      listTitleMarsorMartians.classList.add('news__item--from-mars');
    }
  }
};
