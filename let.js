// {
//     let x = 5;
// }
// console.log(x);
// output undefined
// x ko ab  {} iske bahar use nhi kar skte hai , kyuki ab ye block scope hai

// {
//     let x = 5;
//     console.log(x)
// }
// output 5
// kyuki humne isko {} block scpoe ke andar he use kar leya hai

// let x = 5;
// let x= 10;
// console.log(x);
// output x has already been declared

let x= 5;
 x= 10;
 console.log(x);
 // output 10 
 // let m variable ko value doabar de skte hai lekin redeclare nhi kar skte hai