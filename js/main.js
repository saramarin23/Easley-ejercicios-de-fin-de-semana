'use strict';

const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: "Humans aren't real",
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100',
  },
];

//Listado de noticias
//Pinta array en el html.

const newsList = document.querySelector ('.news');

const createItem = (type, text, className) => {
  const newItem = document.createElement (type);
  const newText = document.createTextNode (text);
  newItem.setAttribute ('class', className);
  newItem.appendChild (newText);
  return newItem;
};

const createImg = (source, altTitle, className) => {
  const newImage = document.createElement ('img');
  newImage.src = source;
  newImage.alt = altTitle;
  newImage.setAttribute ('class', className);
  return newImage;
};

const createList = array => {
  for (let i = 0; i < array.length; i++) {
    const newItem = document.createElement ('li');
    newItem.setAttribute ('class', 'news__item');

    const newTitle = createItem ('h2', array[i].title, 'news__title');
    const newImage = createImg (array[i].image, array[i].title, 'news__image');

    newItem.appendChild (newTitle);
    newItem.appendChild (newImage);
    newsList.appendChild (newItem);
  }
};

createList (data);

// Marte, el planeta rojo:
// añadir clase a elementos que contengan Martian o Mars.

const titles = document.querySelectorAll('.news__title');

const setTitleClass = (array, firstSearch, secondSearch, className) => {
  for (let i = 0; i < array.length; i++) {
    const titlesText = array[i].innerHTML;
    if (titlesText.includes(firstSearch) || titlesText.includes(secondSearch))  {
      array[i].parentElement.setAttribute('class', className);
    }
  }
};

setTitleClass(titles, 'Mars', 'Martian', 'news__item--from-mars');

