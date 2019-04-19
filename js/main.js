'use strict';

//05.Todo es color entre tu y tus arrays
const container =  document.querySelector('.colors');

// fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
//   .then(response => response.json())
//   .then(colorsData => {
//     const colorsObject = colorsData.palettes;
//     const colorsArray = colorsObject[0];
//     console.log(colorsArray);
//     const title = document.createElement('h2');
//     title.innerHTML = colorsArray.name;
//     container.appendChild(title);

//     const colors = colorsArray.colors;
//     for(let i = 0; i<colors.length; i++){
//       const oneColor = document.createElement('div');
//       oneColor.setAttribute('class', 'color__item');

//       container.appendChild(oneColor);
//       oneColor.setAttribute('style', `background-color:#${colors[i]}`);
//     }
//   });

//06.El retorno de las paletas
fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(colorsData => {
    console.log(colorsData);
    const palObject = colorsData.palettes;
    console.log(palObject);

    for(let i = 0; i < palObject.length; i++){
      console.log(palObject[i]);

      const list = document.createElement('li');
      list.setAttribute('class', 'item');
      container.appendChild(list);

      const title = document.createElement('h1');
      title.innerHTML = palObject[i].name;
      list.appendChild(title);

      const subtitle = document.createElement('h2');
      subtitle.innerHTML = palObject[i].from;
      list.appendChild(subtitle);

      const colorArr = palObject[i].colors;
      createColors(colorArr, list);
    }
    const palettes = document.querySelectorAll('.item');
    handlerClick(palettes);

  });

function createColors(colorArr, parent){
  for (let i = 0; i < colorArr.length; i++) {
    const oneColor = document.createElement('div');
    oneColor.setAttribute('class', 'color__item');
    oneColor.setAttribute('style', `background-color:#${colorArr[i]}`);
    parent.appendChild(oneColor);
    
  }
}

//07.Mis paletas preferidas
function selectedEl(event){
  const selected = event.currentTarget;
  selected.classList.toggle('selected');
}

function handlerClick(palArr){
  for(let i = 0; i < palArr.length; i++){
    palArr[i].addEventListener('click', selectedEl);
  }
}