'use strict';

const news = document.querySelector('.news');

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

function writeNews () {
  for (const item of data) {
    const newNotice = document.createElement('li');
    newNotice.classList.add('news__item');

    const noticeTitle = document.createElement('h2');
    noticeTitle.classList.add('news__title');
    const newTitle = document.createTextNode(item.title);
    noticeTitle.appendChild(newTitle);

    const noticeImg = document.createElement('img');
    noticeImg.classList.add('news__image');
    noticeImg.setAttribute('src', item.image);
    noticeImg.setAttribute('alt', item.title);

    newNotice.appendChild(noticeTitle);
    newNotice.appendChild(noticeImg);
    news.appendChild(newNotice);
  }
}

writeNews();

const martians = document.querySelectorAll('.news__item');
let title = '';

for (let i=0; i<martians.length; i++) {
  let martianNew = martians[i];
  title = martians[i].firstChild.innerHTML;
  if (title.includes('Mars')){
    martianNew.classList.add('news__item--from-mars');
  }
  if (title.includes('Martian')) {
    martianNew.classList.add('news__item--from-mars');
  }
}
