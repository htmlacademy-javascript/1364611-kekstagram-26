import {makePhoto, MAX_PHOTO_COUNT} from './data.js';

const createPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(makePhoto(i));
  }
  return photos;
};

createPhotos(MAX_PHOTO_COUNT);
