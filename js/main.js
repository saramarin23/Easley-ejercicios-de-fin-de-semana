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
// 1/ Listado de noticias

const newsList = document.querySelector('.news');
for (let i = 0; i < data.length; i++) {
  newsList.innerHTML += '<li class="news__item"></li>';
  const newsItem = document.querySelectorAll('.news__item')

  newsItem[i].innerHTML += '<h2 class="news__title"></h2><img class="news__image" src="" alt="">';
  const newsTitle = document.querySelectorAll('.news__title');

  const newsImg = document.querySelectorAll('.news__image');
  newsTitle[i].innerHTML += data[i].title;
  newsImg[i].src = data[i].image;
}

// 2/ Marte, el planeta rojo

// Una vez tenemos nuestra lista de noticias vamos a destacar los resultados "marcianos" aplicando la clase `.news__item--from-mars`.

// Aplicaremos esta clase a los `<li>` cuyo título contenga “Mars” o “Martian”, para ello:

  // 1. Buscaremos todos los elementos con clase `.news__item`.
  const newsItem = document.querySelectorAll('.news__item')
// 2. Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
for (let i=0; i<newsItem.length; i++) {
  const newsTitle = document.querySelectorAll('.news__title');
  let newsTitleContent = newsTitle[i].innerHTML;
  // console.log(newsTitleContent.includes('Mars'));para comprobar si me miraba cuál tenía ese contenido y qué devolvía---> devuelve true si lo tiene
  // 3. Usando el método `includes()` comprobaremos si contienen “Mars” o “Martian” y aplicaremos al `li`correspondiente la clase `.news__item--from-mars`
  if (newsTitleContent.includes('Mars')) {
    newsItem[i].classList.add('news__item--from-mars');
  }
  else if (newsTitleContent.includes('Martians')) {
    newsItem[i].classList.add('news__item--from-mars');
  }
// 4. Tada!!
}
