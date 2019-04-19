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
    title: 'Humans aren\'t real',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];
//Recoger de HTML los elementos
const container = document.querySelector('.news');

for(let i=0 ; i<data.length; i++){
  //Crear un li por cada elemento del array que tenga clase news__item y contenga:
  const item= document.createElement('li');
  item.setAttribute('class', 'news__item');
  //titulo h2 clase news__title
  const title =  document.createElement('h2');
  title.setAttribute('class', 'news__title');
  const titleText = document.createTextNode(data[i].title);
  title.appendChild(titleText);
  //imagen news__image
  const image = document.createElement('img');
  image.src = data[i].image;
  image.setAttribute('class', 'news__image');
  image.setAttribute('alt', data[i].title);

  //put img and h2 inside li and li inside ul
  item.appendChild(title);
  item.appendChild(image);
  container.appendChild(item);
}

