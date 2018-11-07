'use strict';

/*
var browser = prompt('Какой у вас браузер?');

if (browser == 'IE') {
    alert('О, да у вас IE!');
} else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем');
} else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
}



var a = +prompt('a?', '');
switch (a) {
    case 0:
        alert( '0' );
        break;
        
    case 1:
        alert( '1' );
        break;
        
    case 2:
    case 3:
        alert( '2,3' );
        break;
    
    default:
    alert('Not number');
}

*/


var age = prompt('Введите свой возраст..');
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
alert(checkAge(age));


var a = prompt('Enter number A');
var b = prompt('Enter number B');
function min(a, b) {
  return a < b ? a : b;
}
alert (min(a, b));


var x = prompt('Enter x');
var n = prompt('Enter n');
function pow(x,n) {
    
}