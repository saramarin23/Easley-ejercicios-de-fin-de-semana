'use strict';

const newUl = document.querySelector('.news');
let liArray = [];
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
  liArray = newUl.querySelectorAll ('.news__item');

}

// 2/ Marte, el planeta rojo
// Una vez tenemos nuestra lista de noticias vamos a destacar los resultados "marcianos" aplicando la clase .news__item--from-mars.

// Aplicaremos esta clase a los <li> cuyo título contenga “Mars” o “Martian”, para ello:

// Buscaremos todos los elementos con clase .news__item.
// Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
// Usando el método includes() comprobaremos si contienen “Mars” o “Martian” y aplicaremos al licorrespondiente la clase .news__item--from-mars
// Tada!!

for( let item of liArray){
  if (item.firstChild.innerHTML.includes('Mars') ||item.firstChild.innerHTML.includes('Martian')){
    item.classList.add('news__item--from-mars');
  }
}
