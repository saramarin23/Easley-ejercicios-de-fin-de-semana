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

const newsList = document.querySelector ('.news');

const createItem = (type, text, className) => {
  const newItem = document.createElement(type);
  const newText = document.createTextNode(text);
  newItem.setAttribute('class', className);
  newItem.appendChild(newText);
  return newItem;
};

const createImg = (source, altTitle, className) => {
  const newImage = document.createElement('img');
  newImage.src = source;
  newImage.alt = altTitle;
  newImage.setAttribute('class', className);
  return newImage;
};

const createList = array => {
  for (let i = 0; i < array.length; i++) {
    
    const newItem = document.createElement('li');
    newItem.setAttribute('class', 'news__item');

    const newTitle = createItem('h2', array[i].title, 'news__title');
    const newImage = createImg(array[i].image, array[i].title, 'news__image');
    
    newItem.appendChild(newTitle);
    newItem.appendChild(newImage);
    newsList.appendChild(newItem);
  }
  // // const newParagraph = document.createElement('p')
  // // const newParagraphText = document.createElement(title);
};

createList(data);
