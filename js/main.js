'use strict';

const newUl = document.querySelector('.news');
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
// <!--
// Dentro de este ul hay que meter el contenido del array data
// y cada elemento tiene que tener las siguientes clases:
// <li class="news__item">
//   <h2 class="news__title">AQUÍ-VA-EL-TÍTULO</h2>
//   <img class="news__image" src="AQUÍ-VA-LA-RUTA-DE-LA-IMAGEN" alt="AQUÍ-VA-EL-TÍTULO">
// </li>
// -->

for (let item of data){
  const newimg = document.createElement('img');
  newimg.setAttribute('src', item.image);
  newimg.setAttribute('alt', item.title);
  newimg.classList.add('news__image');
  const newtitle = document.createElement('h2');
  newtitle.classList.add('news__title');
  const titletext = document.createTextNode(item.title);
  newtitle.appendChild(titletext);
  const newli = document.createElement('li');
  newli.appendChild(newtitle);
  newli.appendChild(newimg);
  newli.classList.add('news__item');
  newUl.appendChild(newli);

}
