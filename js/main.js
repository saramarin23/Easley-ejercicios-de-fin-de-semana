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
//Ahora que sabemos pintar paletas vamos a ver las paletas de las mejores naves de ciencia ficción, en esta URL https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json tenemos a las mejores: ¡¡¡Píntalas todas!!

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
//Una vez las tengas todas pintadas vamos a permitir que la usuaria seleccione sus paletas preferidas. Al hacer clic en cualquiera de ellas tenemos que añadirle alguna clase que la marque como seleccionada. Como hay mucha gente a la que le cuesta decidir dejaremos que marquen como preferidas tantas paletas como quieran.
function selectedEl(event){
  const selected = event.currentTarget;
  selected.classList.toggle('selected');
}

function handlerClick(palArr){
  for(let i = 0; i < palArr.length; i++){
    palArr[i].addEventListener('click', selectedEl);
  }
}

//8.Ahora vamos a dejar que la usuaria filtre por nombre de nave, para ello tenemos que añadir una caja de búsqueda. Cada vez que se escriba una letra filtraremos. Si la usuaria escribe 'a' solo pintaremos las naves cuyo nombre contengan 'a', si escribe 'ac' as que contengan 'ac'. Y así!
const inputEl = document.querySelector('#name');


function handlerKey(){
  search();
}

function search(){
  const searchValue = inputEl.value;
  const palArr = document.querySelectorAll('.item');
  for(let i = 0; i < palArr.length; i++){
    const title = palArr[i].querySelector('h1').innerHTML;
    
    if(!title.includes(searchValue)){
      palArr[i].classList.add('hidden');
    }else{
      palArr[i].classList.remove('hidden');
    }
  }
}
inputEl.addEventListener('keyup', handlerKey);