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
// //------------------EJERCICIO 1
// for (const item of data) {
//   const list = document.querySelector('.news');
//   const listItem = document.createElement('li');
//   const h2 = document.createElement('h2');
//   const img = document.createElement('img');
//   const image = item.image;

//   const title = document.createTextNode(item.title);
//   listItem.setAttribute('class', 'news__item');
//   h2.setAttribute('class', 'news__title');
//   img.setAttribute('class', 'news__image');
//   img.setAttribute('src', `${image}`);

//   h2.appendChild(title);
//   listItem.appendChild(h2);
//   listItem.appendChild(img);
//   list.appendChild(listItem);
// }
// //-----------------------EJERCICIO 2
// const martians = document.querySelectorAll('.news__item');

// for (let i = 0; i < martians.length; i++) {
//   const martiansItems = martians[i];

//   if(martiansItems.innerHTML.includes('Mars')) {
//     martiansItems.classList.add('news__item--from-mars');
//   } else if(martiansItems.innerHTML.includes('Martians')) {
//     martiansItems.classList.add('news__item--from-mars');}
// }

//---------------EJERCICIO 3
// const api =
//   'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

// fetch(api)
//   .then(response => response.json())
//   .then(data => {
//     for (const item of data.news) {
//       const list = document.querySelector('.news');
//       const listItem = document.createElement('li');
//       const h2 = document.createElement('h2');
//       const img = document.createElement('img');
//       const image = item.image;

//       const title = document.createTextNode(item.title);
//       // listItem.setAttribute('class', 'news__item');
//       listItem.setAttribute('class', 'news__item--no-image-visible');
//       h2.setAttribute('class', 'news__title');
//       img.setAttribute('class', 'news__image');
//       img.setAttribute('src', `${image}`);

//       h2.appendChild(title);
//       listItem.appendChild(h2);
//       listItem.appendChild(img);
//       list.appendChild(listItem);
//----------------------- EJERCICIO 4
//     const showImages = e => {
//       console.log(e.currentTarget);
//       const trigger = e.currentTarget.parentElement;
//       console.log(trigger);
//       // const triggerPE = trigger.parentElement;
//       if (trigger.classList.contains('news__item--no-image-visible')) {
//         trigger.classList.remove('news__item--no-image-visible');
//       } else {
//         trigger.classList.add('news__item--no-image-visible');
//       }
//     };
//     h2.addEventListener('click', showImages);
//   }
// });
//-------------------------EJERCICIO 5
// const api =
//   'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';
// fetch(api)
//   .then(response => response.json())
//   .then(data => {
//     const array = data.palettes;

//     for (let i = 0; i < array.length; i++) {
//       const items = array[i];
//       const colors = items.colors;
//       console.log('array de colores', colors);

//       for (const colorsItems of colors) {
//         console.log('hola', colorsItems);
//       }

//       for (let i = 0; i < colors.length; i++) {
//         const body = document.querySelector('body');
//         const container = document.createElement('div');
//         body.appendChild(container);
//         container.setAttribute('class', 'color__item');
//         container.setAttribute('style', `background-color: #${colors[i]}`);
//         console.log('pri', colors[i]);
//       }
//     }
//   });

//-----------------EJERCICIO 6

// const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

// fetch(api)
//     .then(response => response.json())
//     .then(data => {
//         const array = data.palettes;

//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             const colors = element.colors;
//             console.log('holaaaaa', colors);
//             const list = document.createElement('li');
//             list.setAttribute('class', 'container');
//             console.log('NAME', element.name);
//             console.log('FROM', element.from);
//             const name = document.createTextNode(`Name: ${element.name}`);
//             const from = document.createTextNode(`. From: ${element.from}`);
//             list.appendChild(name);
//             list.appendChild(from);
//             for (const eachColor of colors) {
//                 console.log('chao', eachColor);
//                 const body = document.querySelector('body');
//                 const colorContainer = document.createElement('div');
//                 colorContainer.setAttribute('class', 'color__item');
//                 colorContainer.setAttribute('style', `background-color: #${eachColor}`);
//                 list.appendChild(colorContainer);
//                 body.appendChild(list);
//             }
//         }
//     });
//--------------------EJERCICIO 7

const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
//---------------------EJERCICIO 9
if(localStorage.getItem('array') === null) {
    fetch(api)
    .then(response => response.json()).then(data => {
        processData(data)
        localStorage.setItem('array', JSON.stringify(data))
    });
} else {
    processData(JSON.parse(localStorage.getItem('array')));
}

function processData(data) {

    const array = data.palettes;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const colors = element.colors;

        const list = document.createElement('li');
        list.setAttribute('class', 'container');

        const elementName = element.name;
        const name = document.createTextNode(`Name: ${element.name}`);
        const from = document.createTextNode(`. From: ${element.from}`);
        list.appendChild(name);
        list.appendChild(from);
        for (const eachColor of colors) {

            const body = document.querySelector('body');
            const colorContainer = document.createElement('div');
            colorContainer.setAttribute('class', 'color__item');
            colorContainer.setAttribute('style', `background-color: #${eachColor}`);
            list.appendChild(colorContainer);
            const ul = document.querySelector('.news');
            ul.appendChild(list);
        }
            const favouriteShip = e => {
                const trigger = e.currentTarget;
                if (trigger.classList.contains('container')) {
                    trigger.classList.remove('container');
                    trigger.classList.add('selected');
                } else {
                    trigger.classList.add('container');
                    trigger.classList.remove('selected');
                }
            }
            list.addEventListener('click', favouriteShip);
        //----------------EJERCCIO8
        const input = document.querySelector('input');
        const filter = () => {
            // console.log(input.value);
            if (elementName.includes(input.value)) {
                list.classList.remove('hidden');
                list.classList.add('container');
            } else {
                list.classList.remove('container');
                list.classList.add('hidden');
            }
        }
        input.addEventListener('keyup', filter);
    }
}
// console.log(localStorage.getItem('array'));
// fetch(api)
//     .then(response => response.json())
    // .then(data => {
        // const array = data.palettes;

        // for (let i = 0; i < array.length; i++) {
        //     const element = array[i];
        //     const colors = element.colors;

        //     const list = document.createElement('li');
        //     list.setAttribute('class', 'container');

        //     const elementName = element.name;
        //     const name = document.createTextNode(`Name: ${element.name}`);
        //     const from = document.createTextNode(`. From: ${element.from}`);
        //     list.appendChild(name);
        //     list.appendChild(from);
        //     for (const eachColor of colors) {

        //         const body = document.querySelector('body');
        //         const colorContainer = document.createElement('div');
        //         colorContainer.setAttribute('class', 'color__item');
        //         colorContainer.setAttribute('style', `background-color: #${eachColor}`);
        //         list.appendChild(colorContainer);
        //         const ul = document.querySelector('.news');
        //         ul.appendChild(list);
        //     }
        //         const favouriteShip = e => {
        //             const trigger = e.currentTarget;
        //             if (trigger.classList.contains('container')) {
        //                 trigger.classList.remove('container');
        //                 trigger.classList.add('selected');
        //             } else {
        //                 trigger.classList.add('container');
        //                 trigger.classList.remove('selected');
        //             }
        //         }
        //         list.addEventListener('click', favouriteShip);
        //     //----------------EJERCCIO8
        //     const input = document.querySelector('input');
        //     const filter = () => {
        //         console.log(input.value);
        //         if (elementName.includes(input.value)) {
        //             list.classList.remove('hidden');
        //             list.classList.add('container');
        //         } else {
        //             list.classList.remove('container');
        //             list.classList.add('hidden');
        //         }
        //     }
        //     input.addEventListener('keyup', filter);
        // }
        //--------------EJERCICIO 9
        
        
    

   
    