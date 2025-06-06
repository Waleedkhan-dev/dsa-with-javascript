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
let n = 20
for (let i = 1; i <= n; i++) {
 for (let j = 1; j <= i; j++) {
  process.stdout.write(`${j} `)
 }
 console.log();

}