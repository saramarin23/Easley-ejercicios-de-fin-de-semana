'use strict';

// ### 1/ Listado de noticias
// Hay que pintar en el html un listado a partir del array:
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
// En el ul del index hay que pintar cada objeto del siguiente modo:
    // <li class="news__item">
    //   <h2 class="news__title">AQUÍ-VA-EL-TÍTULO</h2>
    //   <img class="news__image" src="AQUÍ-VA-LA-RUTA-DE-LA-IMAGEN" alt="AQUÍ-VA-EL-TÍTULO">
    // </li>

function pictureOnHtml () {
  // constante para seleccionar la ul
  const newsList = document.querySelector('.news');
  // bucle para GENERAR un li por cada objeto del array
  for (let i=0; i<data.length; i++) {
    newsList.innerHTML += '<li class="news__item"></li>';
  }
  // // guardo en una constante cada li con Selector All, que me genera un array
  const newsItem = document.querySelectorAll('.news__item')
  // console.log(newsItem);
  // con un bucle, recorro el array de lis y guardo en cada li el h2 y la img
  for (let i=0; i<data.length; i++) {
    newsItem[i].innerHTML += '<h2 class="news__title"></h2><img class="news__image" src="" alt="">';
  }
  // // // constantes para todos los h2 y img
  const newsTitle = document.querySelectorAll('.news__title');
  const newsImg = document.querySelectorAll('.news__image');
  console.log(newsImg);
  // // // // pintamos el primer objeto del array en el li
  newsTitle[0].innerHTML = data[0].title;
  newsImg[0].src = data[0].image;

  // pintamos con un bucle los valores de todos los objetos en su correspondiente etiqueta de los lis
  for (let i=0; i<data.length; i++) {
    newsTitle[i].innerHTML += data[i].title;
    newsImg[i].src = data[i].image;
  }
}
pictureOnHtml()
console.log(data);
