'use strict';

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

//1. Listado de noticias
//Recoger de HTML los elementos
const container = document.querySelector('.news');

// for (let i = 0; i < data.length; i++) {
//   //Crear un li por cada elemento del array que tenga clase news__item y contenga:
//   const item = document.createElement('li');
//   item.setAttribute('class', 'news__item');
//   //titulo h2 clase news__title
//   const title = document.createElement('h2');
//   title.setAttribute('class', 'news__title');
//   const titleText = document.createTextNode(data[i].title);
//   title.appendChild(titleText);
//   //imagen news__image
//   const image = document.createElement('img');
//   image.src = data[i].image;
//   image.setAttribute('class', 'news__image');
//   image.setAttribute('alt', data[i].title);

//   //put img and h2 inside li and li inside ul
//   item.appendChild(title);
//   item.appendChild(image);
//   container.appendChild(item);
// }

//2. Marte el Planeta Rojo
// function addTitleClass() {
//   const list = document.querySelectorAll('.news__item');
//   console.log(list);

//   for (let i = 0; i < list.length; i++) {
//     //Buscaremos todos los elementos con clase `.news__item`
//     const listTitle = list[i].querySelector('.news__title');
//     //Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
//     const titleContent = listTitle.innerHTML;
//     console.log(listTitle);
//     //Usando el método `includes()` comprobaremos si contienen “Mars” o “Martian” y aplicaremos al `li`correspondiente la clase `.news__item--from-mars`
//     if (titleContent.includes('Mars') || titleContent.includes('Martians')) {
//       list[i].setAttribute('class', 'news__item--from-mars');
//     }
//   }
// }

// addTitleClass();

//3. En el espacio nadie puede oir tus fetch

// https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json
// Tendremos que comentar el código anterior y volver a pintar nuestras noticias, pero esta vez las recibidas tras hacer la petición a nuestra API de noticias de casa

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(response => response.json())
  .then(newsData =>{
    console.log(newsData);
    const news = newsData.news;
    console.log(news);
    for(let i=0; i<news.length; i++){
      const item = document.createElement('li');
      item.setAttribute('class', 'news__item');

      const title = document.createElement('h2');
      title.setAttribute('class', 'news__title');
      const titleText = document.createTextNode(news[i].title);
      title.appendChild(titleText);

      const image = document.createElement('img');
      image.src = news[i].image;
      image.setAttribute('class', 'news__image');
      image.setAttribute('alt', news[i].title);

      item.appendChild(title);
      item.appendChild(image);
      container.appendChild(item);
    }
  });

