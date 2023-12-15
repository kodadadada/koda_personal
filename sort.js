var sortNumber = function (number) {
    number.sort(function (a, b) {
 <<<<<<< HEAD
       if (a === b) {
 =======
       if (a == b) {
 >>>>>>> 839396c5383737ec06b9c2a842bfccc28f3996ef
          return 0;
       }
       return a < b ? -1 : 1;
    });
 };
 
 var number = [19, 3, 81, 1, 24, 21];
 sortNumber(number);
 console.log(number);