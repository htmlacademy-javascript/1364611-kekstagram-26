//Функция, возвращающая случайное целое число из переданного диапазона включительно
function randomNumber (firstNumber, secondNumber){
  if (firstNumber < 0 || secondNumber < 0) {
    return 'Числа должны быть положительным!';
  } else if ( !(Number.isInteger(firstNumber)) || !(Number.isInteger(secondNumber))){
    return 'Числа должны быть целыми!';
  } else if (firstNumber === secondNumber) {
    return 'Числа не должны быть равны!';
  } else {
    if (firstNumber<secondNumber){
      const random = Math.floor(Math.random()*(secondNumber-firstNumber + 1) + firstNumber);
      return random;
    } else {
      //если первое число меньше второго, меняем их местами
      const random = Math.floor(Math.random()*(firstNumber - secondNumber + 1)+ secondNumber);
      return random;
    }
  }
}
//Тест функции
randomNumber(1,100);

//Функция для проверки максимальной длины строки
function commentLengthCheck (stringComment, maxLength){
  return stringComment.length <= maxLength;
}
//Тест функции
commentLengthCheck('abc',3);
