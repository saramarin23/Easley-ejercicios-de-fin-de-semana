 'use strict';

// // ejercicio 1
// const list = document.querySelector('.news');

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

// function paintNews (arr) {
//   for (const item of arr) {
//     const newsList = document.createElement('li');
//     newsList.classList.add('news__item');

//     const newsListTitle = document.createElement('h2');
//     newsListTitle.classList.add('news__title');

//     const titleContent = document.createTextNode(item.title)

//     const image = document.createElement('img');
//     image.classList.add('news__image');
//     image.src = item.image;
//     image.alt = item.title;

//     newsListTitle.appendChild(titleContent);
//     newsList.appendChild(newsListTitle);
//     newsList.appendChild(image);

//     list.appendChild(newsList);
//   }
// };    
// paintNews(data);

// // ejercicio 2

// function marsMartian () {
//   const titleMars = document.querySelectorAll('.news__item');
//   for (const martian of titleMars) {
//     let titleElement = martian.querySelector('.news__title').innerHTML;
//     if (titleElement.includes('Mars') || titleElement.includes('Martian')){
//       martian.classList.add('news__item--from-mars');
//     }
//   } 
// };
// marsMartian();

// // ejercicio 3
const list = document.querySelector('.news');
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
 fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
 .then(response => response.json())
 .then(dataNews => {
    const arr = dataNews.news;
    for (const item of arr) {
        
        const newsList = document.createElement('li');
        newsList.classList.add('news__item');
    
        const newsListTitle = document.createElement('h2');
        newsListTitle.classList.add('news__title');
    
        const titleContent = document.createTextNode(item.title)
    
        const image = document.createElement('img');
        image.classList.add('news__image');
        image.src = item.image;
        image.alt = item.title;
    
        newsListTitle.appendChild(titleContent);
        newsList.appendChild(newsListTitle);
        newsList.appendChild(image);
    
        list.appendChild(newsList);
     
   

    //Ejercicio 4
    newsList.classList.add('news__item--no-image-visible');

    function invisible () {
      newsList.classList.toggle('news__item--no-image-visible');
    }
    newsList.addEventListener('click', invisible);
  }//llave que cierra el ejercicio 3
})//llave y paréntesis que cierra el ejercicio 3
    








