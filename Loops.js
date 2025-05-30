// For Loop
// console.log("hello"); This is not a good aporoch to write the nultipul line
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello"); we work wth loop

// for (let i = 1; i < 101; i++) {  Hello print 100 times
//  console.log("hello");
// }

// Write 1 to 100
// for (let i = 1; i < 101; i++) {
//  console.log(i);
// }

// write 44 to 222
// for (let i = 44; i < 223; i++) {
//  console.log(i);
// }

// 600-100
// for (let i = 600; i > 101; i--) {
//  console.log(i);
// }
// var i = 1
// for (; i <= 10; i++) {
//  console.log(i);
// }
// console.log(i, "failed"); // 11 failed
// for (let i = 1; i < 10; i++) {
//  console.log(i)
// }
// console.log(i);

// Question Starting

// Question No 1
// Sum of Natural Number and Factoral of  Number

// var num = (prompt("Enter a natural number"))
// if (num === null) {
//  console.log("cancelled");

// }
// else {
//  var num = Number(num)
//  if (isNaN(num)) {
//   console.log("Please Enter teh correct number")
//  }
//  else {
//   if (num > 0) {
//    var sum = 0
//    for (var i = 1; i <= num; i++) {
//     sum = sum + i
//    }
//    console.log( sum);
//   }
//   else {
//    console.log("  The number should be positive and greater then 0");
//   }
//  }

// }
// var fact = prompt("Enter thw fact number")
// if (fact === null) {
//  console.log("cancelled");
// }
// else {
//  var factNum = Number(fact)
//  if (factNum > 0) {
//   var addfact = 1
//   for (var i = 1; i <= factNum; i++) {
//    addfact = addfact * i
//   }
//   console.log(addfact);
//  }
//  else {
//   console.log("please Enetr the correct");

//  }
// }


// Question No 4

// factors of Number

// var factor = prompt("enter the factor number")
// if (factor === null) {
//  console.log('CANCELLED');

// }
// else {
//  var factorNum = Number(factor)
//  if (factorNum > 0) {
//   for (var i = 1; i <= Math.floor(factorNum / 2); i++) {
//    if (factorNum % i === 0) {
//     console.log(i);

//    }
//   }
//  }
// }

// Prime Number

// const prime = prompt("Enter Prime number")
// if (prime === null) {
//  console.log("cancelled");
// }
// else {
//  var primeNum = Number(prime)
//  if (primeNum > 0) {

//   var C = true
//   for (let i = 2; i <= Math.floor(primeNum) / 2; i++) {
//    if (primeNum % i === 0) {
//     C = false
//     break
//    }
//   }

//   console.log(C);

//  }
//  else {
//   console.log("Inter the valid number");

//  }
// }

// Prime Number Throgh Function
// var prime = prompt("Enter  the Prime Nhumber")
// if (prime === null) {
//  console.log("cancelled");
// }
// else {
//  var primeNu = Number(prime)

//  if (isNaN(primeNu)) {
//   console.log("Invalid Input");

//  }
//  else {
//   if (primeNu > 0) {
//    x = true
//    for (let i = 3; i <= (primeNu) / 2; i += 2) {
//     x = true
//     if (primeNu % i == 0) {
//      x = false
//     }
//    }

//   }
//   else {
//    console.log("Number should be greater the 0");

//   }
//  }
// }
// function primeNum(n) {
//  if (n <= 1) return false
//  if (n == 2) return true
//  if (n % 2 == 0) return false
//  for (i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//   if (i == 0) return false
//  }
//  return true
// }

// Break and continue
// Break Stope the loop
//  continue skip and move to the next value
// Break
// for (var i = 1; i < 23; i++) {
//  if (i === 11) break
//  else console.log(i);
// }
// continue
// for (var i = 1; i < 12; i++) {
//  if (i === 3) continue // skip the 3 and move on the other value
//  else console.log(i);

// }
// While Loop

// var nameCheck = prompt("Hello Waledd kahn ")
// while (nameCheck !== "waleed") {
//  nameCheck = prompt("Enter the age")
// }

// Question No 10
// Sum of digit
// var sum = prompt("Enter the digit num which you wanna sum")
// if (sum == null) {
//  console.log("You cancelled The Alter");

// }
// else {
//  var sumNum = Number(sum)
//  if (isNaN(sumNum)) {
//   console.log("invalid input");


//  }
//  else {
//   if (sumNum > 0) {
//    var sumDigit = 0;
//    while (sumNum > 0) {
//     var rem = sumNum % 10
//     var sumDigit = rem + sumDigit
//     sumNum = Math.floor(sumNum / 10)


//    }
//    console.log(sumDigit);
//   }
//   else {
//    console.log("sorry bro i am tired from linkedin jiv serch");

//   }

//  }
// }

// var n = prompt("Helloe please inter the number")
// if (n == null) {
//  console.log("cancelled");


// }
// else {
//  var nNum = Number(n)
//  if (isNaN(nNum)) {
//   console.log("invalid sentence");

//  }
//  else {
//   if (nNum > 0) {
//    var sum = 0
//    while (nNum > 0) {
//     var rem = nNum % 0
//     sum = rem + sum
//     nNum = Math.floor(nNum / 10)
//    }
//    console.log(sum);

//   }
//   else {
//    console.log("Please Inter the correct Name and number should be grater the 0");

//   }
//  }
// }

// swapping 
// var a = 12
// var b = 17

// a = a ^ b
// b = a ^ b
// a = a ^ b
// console.log("a = ", a, b);


Revers

// var num = prompt("Enter the number")
// if (num == null) {
//  console.log("cancelled");

// }
// else {
//  var Num = Number(num)
//  if (isNaN(Num)) {
//   console.log("invalid Syntax");
//  }
//  else {
//   if (Num > 0) {
//    var Reve = 0
//    while (Num > 0) {
//     var rem = Num % 10
//     Reve = Reve * 10 + rem
//     Num = Math.floor(Num / 10)
//    }
//    console.log(Reve);


//   }
//   else {
//    console.log("Num must be Greater then 0");

//   }
//  }
// }


// Strong Number 

var Stro = prompt("Enter Strong NUmber")
if (Stro == null) {
 console.log("Cancelled");

}
else {
 var stroNum = Number(Stro)
 if (isNaN(Number)) {
  console.log("Invalid Syntax");

 }
 else {
  if (stroNum > 0) {
   var sum = 0
   while (stroNum > 0) {
    var rem = stroNum % 10
    var fact = 1
    for (var i = 1; i <= rem; i++) {
     fact = fact * i
    }
    sum = sum + fact
    stroNum = Math.floor(stroNum / 10)
   }
   console.log(sum);

  }
  else {
   console.log("The number Should Be Greater then 0");

  }
 }
}