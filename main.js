'use strict';


alert('Я – JavaScript! с внешнего файла');


next:
  for (var a = 2; a <= 10; a++) {
    for (var b = 2; b < a; b++) {
      if (a % b === 0) continue next;
    }
    alert( a ); 
  }