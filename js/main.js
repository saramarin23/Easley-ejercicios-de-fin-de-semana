'use strict';
//Ejercicio 1,2,3
// const contentList = document.querySelector('.news');
// const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

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


//Ejercicio 4

// function renderNews () {
// fetch (api)
//   .then(response => response.json())
//     .then(data => {
//       for (const itemNew of data.news) {
//         const newItem = document.createElement('li');
//         newItem.classList.add('news__item');
//         const newTitle = document.createElement('h2');
//         newTitle.classList.add('news__title');
//         const newImage = document.createElement('img');
//         newImage.classList.add('news__image');
//         newImage.src = itemNew.image;
//         newImage.alt = itemNew.title;
//         const newContentTitle = document.createTextNode(itemNew.title);
//         newTitle.appendChild(newContentTitle);
//         newItem.appendChild(newImage);
//         newItem.appendChild(newTitle);
//         contentList.appendChild(newItem);
//         const contentTitleMars = itemNew.title;
//           if (contentTitleMars.includes('Mars') || contentTitleMars.includes('Martians')){ 
//             newItem.classList.add('news__item--from-mars');
//           }
//         newItem.classList.add('news__item--no-image-visible');
//         function appearImage () {
//         newItem.classList.toggle('news__item--no-image-visible')
//         }
//         newItem.addEventListener('click', appearImage);
//   } 
// });
// }
// renderNews();
const recipy = document.querySelector('body');
const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';

function paletteColors (){
  fetch (api)
  .then(response => response.json())
     .then(data =>{
      const title = document.createElement('h1');
      const contentTitle = document.createTextNode(data.palettes[0].name);
      title.appendChild(contentTitle);
      recipy.appendChild(title);
      for(let i=0; i<data.palettes[0].colors.length; i++){
        const box = document.createElement('div');
        box.classList.add('color_item');
        const boxContent = document.createTextNode(data.palettes[0].colors[i]);
        box.style.backgroundColor = '#'+ data.palettes[0].colors[i];
        box.style.height = '80px';
        box.style.width = '80px';
        box.style.display = 'inline-block';
        recipy.appendChild(box);
        box.appendChild(boxContent);
        console.log(boxContent);
      }
    });
  }

paletteColors();

