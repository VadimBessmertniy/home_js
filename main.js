'use strict';


alert('Я – JavaScript! с внешнего файла');


// big
// small

// small
// big

// big
// small



var name = 'Василий';
var admin = name;
alert(admin);

// Ответ: x = 5

var planet_name = 'Земля';
var user_name = 'Петя';

var name = prompt('Введите ваше имя');
alert(name);


var years = prompt('Сколько вам лет?', 18);
alert('Вам ' + years + ' лет');


var name = prompt('Каково «официальное» название JavaScript?');
if (name == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете ECMAScript?');
}


var number = prompt('Введите число');
if (number == 0) {
    alert('0');
} else if (number < 0) {
    alert('-1');
} else {
    alert('1');
}


/* 
большое задание не смог сделать, не догадался что нужно было сделать еще одну переменную  внутри, как подсмотрел решение - стало ясно... 
*/


var number = prompt('a + b < 4 = ?');
var massage = (number == 1) ? 'Очень мало' :
    (number == 2) ? 'Все равно мало' :
    (number == 3) ? 'Верно!' :
    'Вы очень ошиблись';
alert(massage);


var login = prompt('Введите ваш логин');
var massage = (login == 'Вася') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    'Нет логина';
alert(massage);


// Выведет 2, так как это первое положительное значение.

// Выведет alert(1) 

// Выведет 2, остановиться на последнем правильном.

// Выведет 3, до 4 дело не дойдет. 


var age1 = (age >= 14 && age = < 90);

var age2 = (age < 14 || age > 90);


// какой второй вариант - не знаю.

// Выполниться - 1 и 3 выражения.



// 1
// -1
// true
// 2
// 6 
// 9px
// $9
// null
// 4px2
// 7
// -
// -
// 2
// 5
// 5
// 5
// 1
// -
// -
// -



// выведет 1 последним, 

// все до 4 включительно
// все до 5 вкл

// так же само первый до 4,
// второй до 5.


var i = 2;
for (; i <= 10; i++) {
    if (i % 2 == 0) {
    alert( i );
    }
}


var i = 0;
while (i < 3){
    alert ('номер ' + i + '!' );
    i++;
}


var userInput = 0;
while (userInput < 101 && userInput !== null) {
  userInput = prompt("Enter number:")
}


next:
  for (var a = 2; a <= 10; a++) {
    for (var b = 2; b < a; b++) {
      if (a % b === 0) continue next;
    }
    alert( a ); 
  }