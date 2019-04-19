'use strict';

/*const data = [
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


//ejercicio1

const container_list = document.querySelector('.news');

for (const arr of data) {
  //elementos
  const item_list = document.createElement('li');
  item_list.classList.add('news__item');
  const item_h2 = document.createElement('h2');
  item_h2.classList.add('news__title');
  const item_img = document.createElement('img');
  item_img.classList.add('news__image');

  //contenido
  const itemCont_h2 = document.createTextNode(arr.title);
  item_h2.appendChild(itemCont_h2);

  item_img.src = arr.image;
  item_img.alt = arr.title;

  item_list.appendChild(item_h2);
  item_list.appendChild(item_img);

  container_list.appendChild(item_list);
}

//ejercicio2

const arr_title = document.querySelectorAll('.news__item, .news__title');

for (const martians of arr_title) {
  
  if (martians.classList.contains('news__item') && martians.innerHTML.includes('Mars') || martians.innerHTML.includes('Martians')) {
    martians.classList.add('news__item--from-mars');
  }

}

//ejercicio3

const container_list = document.querySelector('.news');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(response => response.json())
  .then(data => {
    for (const arr of data.news) {
      const item_list = document.createElement('li');
      item_list.classList.add('news__item');
      const item_h2 = document.createElement('h2');
      item_h2.classList.add('news__title');
      const item_img = document.createElement('img');
      item_img.classList.add('news__image');

      const itemCont_h2 = document.createTextNode(arr.title);
      item_h2.appendChild(itemCont_h2);

      item_img.src = arr.image;
      item_img.alt = arr.title;

      item_list.appendChild(item_h2);
      item_list.appendChild(item_img);

      container_list.appendChild(item_list);

//ejercicio4

      item_list.classList.add('news__item--no-image-visible');
      console.log(item_list);

      function noImage() {
        item_list.classList.toggle('news__item--no-image-visible');
      }

      item_list.addEventListener('click', noImage);
    }
  })*/


//ejercicio5

// for (let i=0; i<5; i++) {
//   const colors = document.createElement('div');
//   colors.classList.add('color');
//   console.log(colors);
// }

const container = document.querySelector('.container');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
  .then(res => res.json())
  .then(data => {
    for (const arr of data.palettes) {
      //titulo
      const title = document.createElement('h2');
      const title_cont = document.createTextNode(arr.name);
      title.appendChild(title_cont);
      container.appendChild(title);
      //colores
      for (const array_colors of arr.colors) {

        const item = document.createElement('div');
        item.classList.add('color__item');
        
        item.setAttribute('style', `background-color: #${array_colors}`);
        console.log(item);

        container.appendChild(item);
      }

    }

  })