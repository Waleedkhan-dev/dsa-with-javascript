// If i wanna the print in the same line of multipul log the we use this mathod
// process.stdout.write("hello  ")
// process.stdout.write("waleed")
// let num = 6
// for (let i = 1; i <= num; i++) {
//  process.stdout.write("* ")
// }

// simple Way
// let numStar = 5
// for (let i = 1; i <= numStar; i++) {
//  process.stdout.write("* ")
// }
// console.log();

// for (let i = 1; i <= numStar; i++) {
//  process.stdout.write("* ")
// }
// console.log();

// for (let i = 1; i <= numStar; i++) {
//  process.stdout.write("* ")
// }
// console.log();

// for (let i = 1; i <= numStar; i++) {
//  process.stdout.write("* ")
// }

// base Pattrens
// let n = 6
// for (let i = 1; i <= n; i++) {
//  for (let j = 1; j <= n; j++) {
//   process.stdout.write("* ")
//  }
//  console.log();
// }

// Pattrens Programming

// Question 1 Right Angile Triangle
// let n = 7
// for (let i = 1; i <= n; i++) {
//  for (let j = 1; j <= i; j++) {
//   process.stdout.write("hello ")
//  }
//  console.log();
// }
// let n = 20
// for (let i = 1; i <= n; i++) {
//  for (let j = 1; j <= i; j++) {
//   process.stdout.write(j + " ")
//  }
//  console.log();
// }

// Right Angle With Charactur
// let CHar = 16
// for (let i = 1; i <= CHar; i++) {
//  let asscii = 65
//  for (let j = 1; j <= i; j++) {
//   process.stdout.write(String.fromCharCode(asscii + "   "))
//   asscii++
//  }
//  console.log();
// }
// inverted Right Angle Triangle
// let n = 5
// for (let i = 1; i <= n; i++) {
//  for (let j = 1; j <= n - i + 1; j++) {
//   process.stdout.write("* ")
//  }
//  console.log();
// }
// second Method

// let n = 5
// for (let i = 1; i <= n; i++) {
//  for (let j = n; j >= i; j--) {
//   process.stdout.write("* ")
//  }
//  console.log();
// }
// mirror angle  Triangle
// let n = 5
// for (let i = 1; i <= n; i++) {
//  for (let j = 1; j <= n - i; j++) {
//   process.stdout.write("  ")
//  }
//  for (let j = 1; j <= i; j++) {
//   process.stdout.write("* ")
//  }
//  for (let j = 1; j <= n - i; j++) {
//   process.stdout.write("  ")
//  }
//  console.log();

// }

// X pattrens
// let n = 5
// for (let i = 1; i <= n; i++) {
//  for (let j = 1; j <= n; j++) {
//   if (i === j || i + j == n + 1) {
//    process.stdout.write("* ")
//   } else {
//    process.stdout.write(" ")
//   }
//  }
//  console.log();

// }

// V type pattrens In PP
// let n = 5
// for (let i = 1; i <= n; i++) {
//  for (let j = 1; j <= 2 * n; j++) {
//   if (i === j || i + j == 2 * n) {
//    process.stdout.write(" *")
//   }
//   else {
//    process.stdout.write(" ")
//   }
//  }
//  console.log();
// }