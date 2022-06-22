//Функция для проверки максимальной длины строки
function commentLengthCheck (stringComment, maxLength){
  return stringComment.length <= maxLength;
}
//Функция возвращающая случайное целое число из указанного диапазона
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
//Функция возвращающая случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
commentLengthCheck();
export {getRandomPositiveInteger, getRandomArrayElement};
