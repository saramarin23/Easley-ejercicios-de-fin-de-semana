'use strict';

const list = document.querySelector('.news');
const searchTerms = ['Mars', 'Martian'];

const printNews = array => {
  for (const item of array) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('news__item');
    newListItem.classList.add('news__item--no-image-visible');
    const newListTitle = document.createElement('h2');
    newListTitle.classList.add('news__title');
    const newListTitleContent = document.createTextNode(item.title);
    const newListImage = document.createElement('img');
    newListImage.classList.add('news__image');
    newListImage.src = item.image;
    newListImage.alt = item.title;

    newListTitle.appendChild(newListTitleContent);
    newListItem.appendChild(newListTitle);
    newListItem.appendChild(newListImage);
    newListItem.addEventListener('click', showImage);

    list.appendChild(newListItem);
  }
};

const searchTitles = (listItems, titles, strings) => {
  for (let i = 0; i < titles.length; i++) {
    for (const term of strings) {
      if (titles[i].toLowerCase().includes(term.toLowerCase())) {
        listItems[i].classList.add('news__item--from-mars');
      }
    }
  }
};

const getTitles = () =>  {
  const allNews = document.querySelectorAll('.news__item');
  let titlesList = [];
  for (let i = 0; i < allNews.length; i++) {
    titlesList.push(allNews[i].childNodes[0].innerHTML);
  }
  searchTitles(allNews, titlesList, searchTerms);
};

const getNews = () => {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(newsResponse => newsResponse.json())
    .then(newsData => {
      const data = newsData.news;
      console.log(data);
      printNews(data);
      getTitles();
    });
};

getNews();

const showImage = event => {
  event.currentTarget.classList.toggle('news__item--no-image-visible');
};