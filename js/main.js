'use strict';

//Array of objects
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

// EJERCICIO 01

//Get elements
const newsList = document.querySelector(".news");

//Create list items based on the data array:
for (const news of data) {
  const title = news.title;
  const imageUrl = news.image;

  //Create a list item with its class and subelements
  const newItemEl = document.createElement('li');
  newItemEl.classList.add('news__item');

  const newH2El = document.createElement('h2');
  newH2El.classList.add('news__title');
  newItemEl.append(newH2El);

  const newImgEl = document.createElement('img');
  newImgEl.classList.add('news__image');
  newItemEl.append(newImgEl);

  const titleContent = document.createTextNode(title);

  //Appends the elements to their content
  newH2El.appendChild(titleContent);
  newImgEl.setAttribute('src', imageUrl);
  newImgEl.setAttribute('alt', title);

  //Append each item to the main list
  newsList.appendChild(newItemEl);
}

// EJERCICIO 02
//Get all li elements (array)
const itemsArr = document.querySelectorAll('.news__item');

//Iterate over the array
for (const myItem of itemsArr){
  //Aply class '.news__item--from-mars' to li if matching a condition: its title contains "Mars" or "Martian"

  //Get title content
  // const titleEl = myItem.childNodes[0];
  const titleEl = myItem.querySelector('.news__title');
  const titleContent = titleEl.innerHTML;

  // Conditions that will return a true/false
  const containsMars = titleContent.includes("Mars");
  const containsMartian = titleContent.includes("Martian");

  if(containsMars || containsMartian){
    myItem.classList.add('news__item--from-mars');
  }
}

