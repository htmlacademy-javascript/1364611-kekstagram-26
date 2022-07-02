import {photoCards} from './data.js';

const picturesListFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');
const elementTemplate = document.querySelector('#picture')
  .content
  .querySelector('a');

photoCards.forEach((photo) => {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.picture__likes').textContent=photo.likes;
  element.querySelector('.picture__comments').textContent=[photo.comments].length;
  picturesListFragment.appendChild(element);
});
picturesContainer.appendChild(picturesListFragment);
