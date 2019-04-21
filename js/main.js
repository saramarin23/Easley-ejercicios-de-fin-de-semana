"use strict";

const data = [
  {
    title: "Asteroids 101",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Life on Mars",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Martians invade Earth",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Humans aren't real",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Space The Final Frontier",
    image: "https://via.placeholder.com/200x100"
  }
];

// //**** EJERCICIO 4 *****
// const ulEl = document.querySelector(".news");

// function showImages(){
// for (let i = 0; i < data.length; i++) {
//   ulEl.innerHTML += `<li class="news__item news__item--no-image-visible'">
//       <h2 class="news__title"> ${data[i].title}</h2>
//       <img class="news__image" src=${data[i].image}
//       alt=${data[i].title}>
//     </li>`;
  

// }
// }
// showImages();



//EJERCI0 4 FAIL 

// function addListener(){
//   const liEl=document.querySelectorAll('.news__item');
// for (const list of liEl){
//   list.addEventListener('click', addToggle);
// }
// }
// function addToggle(event){
//   const selectedImage= event.currentTarget;
//   selectedImage.classList.toggle('news__item--no-image-visible');
// }
// addListener();
// addToggle();



// //**** EJERCICIO 2 *****

// // Buscaremos todos los elementos con clase .news__item.
// const arrNewsItems = document.querySelectorAll(".news__item");

// for (let i = 0; i < arrNewsItems.length; i++) {
//   if (
//     arrNewsItems[i].innerText.includes("Martians") ||
//     arrNewsItems[i].innerText.includes("Mars")
//   ) {
//     arrNewsItems[i].classList.add("news__item--from-mars");
//   }
// }

//**** EJERCICIO 3 *****

// const ulEl = document.querySelector(".news");

// function showNews(){
//   fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
//   .then(response=> response.json())
//   .then(dataArrNews=>{
//       const arrNews = dataArrNews.news;
//       console.log(arrNews);
//          for (let i = 0; i < arrNews.length; i++) {
//            ulEl.innerHTML += `<li class="news__item news__item--no-image-visible">
//                <h2 class="news__title"> ${arrNews[i].title}</h2>
//                <img class="news__image" src=${arrNews[i].image}
//                alt=${arrNews[i].title}>
//              </li>`;   
//          }
//     }   
//   )
// }
// showNews();


//Ejercicio 5
// let ulEl = document.querySelector(".news");

// function createElements1(){
// fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
// .then(response=> response.json())
// .then(data=>{
//   const palette=data.palettes;
//   const arrColors= palette[0].colors;
//   console.log(arrColors);
// for (let i=0; i<arrColors.length; i++){ 
//   ulEl.innerHTML += `<li class="new-item">
//                <div class="color-container" style="background-color:#${arrColors[i]}"> </div> </li>`;
// //                
// }
// })
// }
// createElements1();

//Ejercicio 5 DOM

// function createElements(){
// fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
//  .then(response=>response.json())
//  .then(data=>{
//    const arrPalette= data.palettes;
//    const arrColors= arrPalette[0].colors;
//    console.log(arrColors);
  
// //hacemos el for
//    for(let color of arrColors){
//      //creamos nuestro li  
//     const newItem=document.createElement('li');
//     //Creamos contenido del li
//    const newDiv=document.createElement('div');
//    //añadimos atributos  al contenido de li
//    newDiv.setAttribute('style', 'background-color:#' + color);
//    newDiv.setAttribute('class', 'color-container');
//  //se lo añadimos a nuestro Li
//  newItem.appendChild(newDiv);
//  //añadir nuestro Li con todo a UL
//  ulEl.appendChild(newItem);
// }
//  })
//  }
//  createElements();

//ejercicio 6 
// const ulEl = document.querySelector(".news");
// function createElements(){
//   fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
//    .then(response=>response.json())
//    .then(data=>{
//      const arrPalette= data.palettes;
//      const arrColors= arrPalette[0].colors;
//      console.log(arrColors);  
//   //hacemos el for
//      for(let color of arrColors){
//        //creamos nuestro li  
//       const newItem=document.createElement('li');
//       //Creamos contenido del li
//      const newDiv=document.createElement('div');
//      //añadimos atributos  al contenido de li
//      newDiv.setAttribute('style', 'background-color:#' + color);
//      newDiv.setAttribute('class', 'color-container');
//    //se lo añadimos a nuestro Li
//    newItem.appendChild(newDiv);
//    //añadir nuestro Li con todo a UL
//    ulEl.appendChild(newItem);
//   }
//    })
//    }
//    createElements();

//Ejercicio 7
const ulEl = document.querySelector(".news");
function createElements(){
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
   .then(response=>response.json())
   .then(data=>{
     const arrPalette= data.palettes;
     const arrColors= arrPalette[0].colors;
     console.log(arrColors);  
  //hacemos el for
     for(let color of arrColors){
       //creamos nuestro li  
      const newItem=document.createElement('li');
      newItem.addEventListener('click', addSelected); //le agrego event litener a cada li.
      //Creamos contenido del li
     const newDiv=document.createElement('div');
     //añadimos atributos  al contenido de li
     newDiv.setAttribute('style', 'background-color:#' + color);
     newDiv.setAttribute('class', 'color-container');
   //se lo añadimos a nuestro Li
   newItem.appendChild(newDiv);
   //añadir nuestro Li con todo a UL
   ulEl.appendChild(newItem);
  }
   })
   }
   createElements();
   addSelected();


   //añadir clase de selected a cada una de ellas. 
   function addSelected(event){
     const selectedItem=event.currentTarget;
     selectedItem.classList.toggle('selected');
   }
