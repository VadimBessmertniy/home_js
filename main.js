'use strict';


alert('Я – JavaScript! с внешнего файла');


var name = 'Василий';
var admin = name;
alert( admin );


var planet_name = 'Земля';
var user_name = 'Петя';


var years = prompt('Сколько вам лет?', 18);
alert ('Вам ' + years + ' лет');


var name = prompt('Каково «официальное» название JavaScript?');
if (name == 'ECMAScript' ) {
    alert('Верно!');
}   else {
    alert('Не знаете ECMAScript?');
}


var number = prompt('Введите число');
if (number == 0) {
    alert('0');
}   else if (number < 0) {
    alert('-1');
}   else {
    alert('1');
}


/*
большое задание не смог сделать, не догадался что нужно было сделать еще одну переменную  внутри, как подсмотрел решение - стало ясно...
*/

var number = prompt('a + b < 4 = ?');
var massage = (number == 1) ? 'Очень мало':
    (number == 2) ? 'Все равно мало':
    (number == 3) ? 'Верно!':
    'Вы очень ошиблись';
alert(massage);


var login = prompt('Введите ваш логин');
var massage = (login == 'Вася') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте':
    'Нет логина';
alert(massage);