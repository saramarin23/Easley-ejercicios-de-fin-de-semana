'use strict';

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

//necesito funciones para sacar li(tag) y append dentro h2 y img.
//el resultado se mete como inner en ul class news
//tengo un array de cinco objetos 
//selecciono el ul al que voy a meterle la chicha
const newsMain = document.querySelector('.news');

//funciones para crear elementos
//creo un elemento con clase
function createElement (tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}
//creo texto
function createText(text){
  return document.createTextNode(text);
}
//unir el elemento de createElement y el createText, ojo los parametros de ambas se unen porque necesito esos 3 argumentos para rellenarlos
function appendElementText (tag, className, text) {
  const element = createElement(tag, className);
  element.appendChild(createText(text));
  return element;
}
//crear elemento img y setear src y alt
function createImg(src, alt){
  const image = createElement('img', 'news__image');
  image.setAttribute('src', src);
  image.setAttribute('alt', alt);
  return image;
}

//unir funciones anteriores. Que lleva dentro mi elemento de noticia? una fuente de imagen y un titulo
//title me sirve para el tercer parametro de appendElementText, y el segundo de createImg
//los apendo entre si y retorno newlisEl
function createNewsItem (image, title) {
  const newListEl = createElement('li', 'news__item');
  const newsTitle = appendElementText('h2', 'news__title', title);
  const newImage = createImg(image, title);
  newListEl.appendChild(newsTitle);
  newListEl.appendChild(newImage);
  return newListEl;
}
//FUNCION FINAL 1ER EJERCICIO Recorro los objetos del array para sacar los valores de los objetos. los asigno a lets. esos lets seran los argumentos de createNewsItem, la megafuncion. Apendo esto al ul
for(let i = 0; i < data.length; i++){
  let dataImgSrc = data[i].image;
  let dataAlt = data[i].title;
  const newsItem = createNewsItem( dataImgSrc, dataAlt);
  newsMain.appendChild(newsItem);
}

// Una vez tenemos nuestra lista de noticias vamos a destacar los resultados "marcianos" aplicando la clase .news__item--from-mars.
// Aplicaremos esta clase a los <li> cuyo título contenga “Mars” o “Martian”, para ello:
// Buscaremos todos los elementos con clase .news__item.
// Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
// Usando el método includes() comprobaremos si contienen “Mars” o “Martian” y aplicaremos al licorrespondiente la clase .news__item--from-mars


//saco todos los lis con class news__item y me salen en array
const newsItemList = document.querySelectorAll('.news__item');
//recorro ese array con la intencion de buscar dentro de los lis si su interior tiene palabra clave. Por eso creo variable que me lleva hasta dentro del contenido del li *innerText*, y le pongo el indice para seguir el recorrido de todos los interiores de los lis. Ahora, si ese interior incluye la palabra clave, volvemos un paso atras con newsItemList[i], porque ese es el elemento li, y le metemos la clase nueva
for(let i =0; i < newsItemList.length; i++) {
  let newsItemTitle = newsItemList[i].innerText;
  if(newsItemTitle.includes('Mars') || newsItemTitle.includes('Martian') ){
    newsItemList[i].classList.add('news__item--from-mars');
  }
}


