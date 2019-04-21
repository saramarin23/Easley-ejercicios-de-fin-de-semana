 'use strict';

// // ejercicio 1
// const list = document.querySelector('.news');

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

// function paintNews (arr) {
//   for (const item of arr) {
//     const newsList = document.createElement('li');
//     newsList.classList.add('news__item');

//     const newsListTitle = document.createElement('h2');
//     newsListTitle.classList.add('news__title');

//     const titleContent = document.createTextNode(item.title)

//     const image = document.createElement('img');
//     image.classList.add('news__image');
//     image.src = item.image;
//     image.alt = item.title;

//     newsListTitle.appendChild(titleContent);
//     newsList.appendChild(newsListTitle);
//     newsList.appendChild(image);

//     list.appendChild(newsList);
//   }
// };    
// paintNews(data);

// // ejercicio 2

// function marsMartian () {
//   const titleMars = document.querySelectorAll('.news__item');
//   for (const martian of titleMars) {
//     let titleElement = martian.querySelector('.news__title').innerHTML;
//     if (titleElement.includes('Mars') || titleElement.includes('Martian')){
//       martian.classList.add('news__item--from-mars');
//     }
//   } 
// };
// marsMartian();

// // ejercicio 3
// const list = document.querySelector('.news');
// const data = [
//     {
//       title: 'Asteroids 101',
//       image: 'https://via.placeholder.com/200x100'
//     },
//     {
//       title: 'Life on Mars',
//       image: 'https://via.placeholder.com/200x100'
//     },
//     {
//       title: 'Martians invade Earth',
//       image: 'https://via.placeholder.com/200x100'
//     },
//     {
//       title: 'Humans aren\'t real',
//       image: 'https://via.placeholder.com/200x100'
//     },
//     {
//       title: 'Space The Final Frontier',
//       image: 'https://via.placeholder.com/200x100'
//     }
//   ];
//  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
//  .then(response => response.json())
//  .then(dataNews => {
//     const arr = dataNews.news;
//     for (const item of arr) {
        
//         const newsList = document.createElement('li');
//         newsList.classList.add('news__item');
    
//         const newsListTitle = document.createElement('h2');
//         newsListTitle.classList.add('news__title');
    
//         const titleContent = document.createTextNode(item.title)
    
//         const image = document.createElement('img');
//         image.classList.add('news__image');
//         image.src = item.image;
//         image.alt = item.title;
    
//         newsListTitle.appendChild(titleContent);
//         newsList.appendChild(newsListTitle);
//         newsList.appendChild(image);
    
//         list.appendChild(newsList);
     
   

//     //Ejercicio 4
//     newsList.classList.add('news__item--no-image-visible');

//     function invisible () {
//       newsList.classList.toggle('news__item--no-image-visible');
//     }
//     newsList.addEventListener('click', invisible);
//   }//llave que cierra el ejercicio 3
// })//llave y paréntesis que cierra el ejercicio 3

//Ejercicio 5
// const container = document.querySelector('.container');
// fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
//   .then(response => response.json())
//   .then(data => {
//     for (const arr of data.palettes) {
//       const title = document.createElement('h2');
//       const contentTitle = document.createTextNode(arr.name);
//       title.appendChild(contentTitle);
//       container.appendChild(title);
//       for (const array_colors of arr.colors) {
//         const item = document.createElement('div');
//         item.classList.add('color__item');
        
//         item.setAttribute('style', `background-color: #${array_colors}`);
//         container.appendChild(item);
//       }
//     }
//   })
//Éstos son los datos de paleta que nos devuelve la petición para el ejercicio 5
                                  // {
                                  //   "name": "Space Ship 1",
                                  //   "colors": [
                                  //     "FFBF2E",
                                  //     "E85E0C",
                                  //     "FF0000",
                                  //     "C70CE8",
                                  //     "330DFF"
                                  //   ]



//Ejercicio 6
const container = document.querySelector('.container');

  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then(response =>response.json())
    .then(data => {
      for (const arr_palettes of data.palettes){
      
        const title = document.createElement('h2');
        title.classList.add('title');
        const from = document.createElement('h3');
        from.classList.add('origin');
        const colors = document.createElement('div');
        colors.classList.add('color');
        const palette = document.createElement('li');
        palette.classList.add('palette');

        const title_cont = document.createTextNode(`Nave: ${arr_palettes.name}`);
        const origin_cont = document.createTextNode(`Saga: ${arr_palettes.from}`);
        
        title.appendChild(title_cont);
        from.appendChild(origin_cont);
        palette.appendChild(title);
        palette.appendChild(from);
        
        const color_container = document.createElement('div');
        color_container.classList.add('color_container');

        for (const colors of arr_palettes.colors) {
          
          const item = document.createElement('div');
          item.classList.add('color__item');
          item.setAttribute('style', `background-color: #${colors}`);
          color_container.appendChild(item);
        }

        palette.appendChild(color_container);
        container.appendChild(palette);

        palette.addEventListener('click', selectPalette);//para ejercicio 7

      }
    });

    //Ejercicio 7
    const selectPalette = (e) => {
      let palette = e.currentTarget;
      palette.classList.toggle('selected');
  }

// Ejercicio 8

// const titleSearch = document.createElement('h1');
//   titleSearch.classList.add('titleSearch');
//   const search_cont = document.createTextNode('Introduce el nombre de tu nave favorita');
//         titleSearch.appendChild(search_cont);
//         container.appendChild(titleSearch);


// const input = document.createElement('input');
//     input.classList.add('field');
//     const input_cont = document.createTextNode('');
        
//         input.appendChild(input_cont);
//         container.appendChild(input);



function search() {
  const arrTitle = document.querySelectorAll('.title');
  //izquierda objeto / derecha array
  for (const title of arrTitle){
    const titleText = title.textContent;
    if(titleText.includes(input.value,6)) {
      title.parentElement.classList.remove('hidden');
    } else {
      title.parentElement.classList.add('hidden');
    }
  }
}
const input = document.querySelector('#field');
input.addEventListener('keyup', search);
          
      
