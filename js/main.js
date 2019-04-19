'use strict';

const news = document.querySelector('.news');
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

const paintNews = (array) => {
 for (const item of array) {
   //creo elementos
   const newLi = document.createElement('li');
   const newTitle = document.createElement('h2');
   const newImg = document.createElement('img');

   //creo contenidos
   const newTitleContent = document.createTextNode(item.title);

   //agrego contenido a elementos
   newTitle.appendChild(newTitleContent);
   newImg.src = item.image;
   newImg.alt = item.title;

   //agrego clases a los elementos
   newLi.classList.add('news__item');
   newTitle.classList.add('news__title');
   newImg.classList.add('news__image');

   //meto elementos dentro de otros
   newLi.appendChild(newTitle);
   newLi.appendChild(newImg);

   //añado elementos a la página
   news.appendChild(newLi);
 }
}

paintNews(data);


const martianNews = () => {
  const allNews = document.querySelectorAll('.news__item');
  for (const item of allNews) {
    const titleContent = item.querySelector('.news__title').innerHTML;
    if (titleContent.includes('Mars') || titleContent.includes('Martian')) {
      item.classList.add('news__item--from-mars'); 
    }
  }
}

martianNews();