//  lexical scoping
// outer(); // outer fun ko hum call top pe bhi kar skte hai

// function outer (){
//     let a = 20;
    
//     function inner(){
//         let b = 20
//         console.log("inner outside ",a)//inner fun baccess kr skte hai outer ko
    
//     }
//     inner();
// function inner2 (){
//     console.log("inner2 ",a)//inner 2 bhi access kr skta outer fun ko
//     console.log("inner",b)// inner2 access nhi kr skta inner fun ko
// }
// inner2();
// console.log("outer",a) // isko na phle define kar skte na fun ke bahar
// console.log("inner",b)// outer fun inner fun ko access nhi kar skta hai
// }
//outer()

// ************* CLosure *************

// function outer (){
//     const name = "Anup"
//     function inner(){
//         console.log(name)
//     }
//     return inner;// pura fun he return kar deya 
// }
// const newOuter = outer(); // new jgh store kiya
// newOuter();

// reverse

// let a = [3,2,6,4,5]
// let b = [...a].reverse()
// console.log(b);
// [ 5, 4, 6, 2, 3 ]

// alphabetically

const ab = ["a","f","t","y"]
const bc = ab.sort();
console.log(ab);

