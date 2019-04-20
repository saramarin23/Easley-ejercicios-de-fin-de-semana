'use strict';

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

// creamos los elementos del html
function createLi(data) {
  for (const obj of data) {
    const news = document.querySelector('.news');
    const newItem = document.createElement('li');
    newItem.classList.add('news__item');
    newItem.classList.add('news__item--no-image-visible');
    const newTitle = document.createElement('h2');
    newTitle.classList.add('news__title');
    const  titleContent = document.createTextNode(`Title: ${obj.title}`);
    const newImg = document.createElement('img');
    newImg.classList.add('news__image');
    newImg.src = obj.image;
    newImg.alt = obj.title;
    newTitle.appendChild(titleContent);
    newItem.appendChild(newTitle);
    newItem.appendChild(newImg);
    news.appendChild(newItem);
  }
}

// creamos los estilos
function changeStyles() {
  const allNews = document.querySelectorAll('.news__item');
  for (let i = 0; i < allNews.length; i ++) {
    const allTitles = allNews[i].firstChild;
    const titleContent = allTitles.innerHTML;
    if (titleContent.includes('Mars') || titleContent.includes('Martian')) {
      allNews[i].classList.add('news__item--from-mars');
    }
    // trigger para ocultar/mostrar la imagen
    allNews[i].addEventListener('click', function(){allNews[i].classList.toggle('news__item--no-image-visible');});
  }
}

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(response => response.json())
  .then (data => {
    createLi(data.news);
    changeStyles();

  });

// ejercicio 5


function createPalettes(container, palettes) {
  for (const palette of palettes) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const title = document.createElement('h2');
    title.classList.add('title');
    const titleContent = document.createTextNode(palette.name);
    title.appendChild(titleContent);
    wrapper.appendChild(title);
    container.appendChild(wrapper);
    for (const color of palette.colors) {
      const div = document.createElement('div');
      wrapper.appendChild(div);
      div.classList.add('color__item');
      div.style.backgroundColor = `#${color}`;
      container.appendChild(wrapper);
    }
    wrapper.addEventListener('click', function(){wrapper.classList.toggle('selected');});
  }
}


fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
  .then(response => response.json())
  .then(data => {
    const palette = document.querySelector('.palette');
    createPalettes(palette, data.palettes);
  });

//ejercicio 6

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(data => {
    const morePalettes = document.querySelector('.more__palettes');
    createPalettes(morePalettes, data.palettes);
  });

// ejercicio 8

const input = document.querySelector('.input');

function filterItems () {
  const wrappers = document.querySelectorAll('.wrapper');

  for (const wrapper of wrappers) {
    const title = wrapper.firstChild;
    const titleText = title.innerHTML.toUpperCase();
    const inputValue = input.value.toUpperCase();
    if (!(titleText.includes(inputValue))){
      wrapper.classList.add('hidden');
    }else {
      wrapper.classList.remove('hidden');
    }
  }
}

input.addEventListener('keyup', filterItems);

