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

var factor = prompt("enter the factor number")
if (factor === null) {
 console.log('CANCELLED');

}
else {
 var factorNum = Number(factor)
 if (factorNum > 0) {
  for (var i = 1; i <= Math.floor(factorNum / 2); i++) {
   if (factorNum % i === 0) {
    console.log(i);

   }
  }
 }
}




