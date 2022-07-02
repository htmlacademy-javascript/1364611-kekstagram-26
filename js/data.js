import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

const DESCRIPTION = [
  'Дома',
  'На улице',
  'Чем меня кормят',
  'С друзьями',
  'На чиле',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Кекс',
  'Шуша',
  'Кеша',
  'Чарли',
  'Васька',
];
const MAX_PHOTO_COUNT = 25;

const createMessages = function () {
  const COMMENTS_PHOTO = [];
  const COMMENTS_COUNT = getRandomPositiveInteger(1, 2);
  for (let i = 0; i < COMMENTS_COUNT; i++) {
    COMMENTS_PHOTO.push(getRandomArrayElement(COMMENTS));
  }
  return COMMENTS_PHOTO;
};

const makeComment = function (num) {
  return {
    id: getRandomPositiveInteger((num*num),(num*num*2)),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: (createMessages()).join(' '),
    name: getRandomArrayElement(NAMES),
  };
};

function makePhoto(arg) {
  return ({
    id: arg,
    url: `photos${arg}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: makeComment(arg),
  });
}

const createPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(makePhoto(i));
  }
  return photos;
};

const photoCards = createPhotos(MAX_PHOTO_COUNT);

export {photoCards};


