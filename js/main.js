const MAX_PHOTO_COUNT = 25;

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
]

function getRandomPositiveInteger (a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  }

const makePhotos = (count) => {
    const photos = [];
    for (let i = 1; i <= count; i++) {
        photos.push(makePhoto(i));
    }
    return photos;
};

function makePhoto(arg) {
    return ({
        id: arg,
        url: 'photos' + arg + '.jpg',
        description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length -1)],
        likes: getRandomPositiveInteger(15, 200),
        comments: createComment(arg),
    });
}

const makeComments = function () {
    const COMMENTS_PHOTO = [];
    const COMMENTS_COUNT = getRandomPositiveInteger(1, 2);
    for (let i = 0; i < COMMENTS_COUNT; i++) {
        COMMENTS_PHOTO.push(COMMENTS[getRandomPositiveInteger(0, COMMENTS.length - 1)])
    }
    return COMMENTS_PHOTO;
}

const createComment = function (num) {
    return {
        id: getRandomPositiveInteger((num*num),(num*num*2)),
        avatar: 'img/avatar-' + getRandomPositiveInteger(1, 6) + '.svg',
        message: (makeComments()).join(' '),
        name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
    }
}

const photos = makePhotos(MAX_PHOTO_COUNT);




