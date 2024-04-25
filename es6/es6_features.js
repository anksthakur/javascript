// ****************** var ******************

// function test(){
//     if(3>2){
//         var x = 10 ;
//         console.log("value of x " + x)
//     }
//     console.log("outside block " + x)
// }
// test();
// value of x 10
//outside block 10
// var ko hum scope ke bahar bhi use kr skte hai

//  ***************** let & const ************

// function test(){
//     if(3>2){
//         let x = 10 ;
//         console.log("value of x " + x)
//     }
//     console.log("outside block " + x)
// }
// test();
//ReferenceError: x is not defined
// let and const m block scope hota hai jis se hum ise block scope ke bhar use nhi kar skte hai

//  ********* let & const difference *******************

// let x = 10;
// // console.log(x);//10

// x = 11;
// console.log(x)//11

// const x = 10;
// // console.log(x)//10
// x=11;
// console.log(x);
//TypeError: Assignment to constant variable.

// ************ arrow function ************
// old way
// function square (x){
//     return x*x
// }

// // new way
// // limitation hai
// const squareA = (x)=> x*x ;

// console.log(square(7));
// console.log(squareA(9));



// *************** multi line string *************

//2 way two define the string
// let str = ' ';
// let str1 = " ";
// phle hum ek he line m string lik skte the 

// new way to define string in multiline
// let address = `2041 
// sec 45 b
// chandigarh
// 160047 `

// let dynamicHtml = `
// <form>
// <input type=text name='name' />
// <button>Button</button>
// </form>
// `
// console.log(dynamicHtml);

// ********* default parameters ***********
//  const sum = (x,y)=>x+y;
//  let s = sum() // agar yha value pass nhi to hum chahte hai ki by default ek value aa jaye
//  console.log(s)
//NaN - not a number
// const sum = (x=1,y=2)=> x+y;// yha humne by default value de di
// let s = sum()
// console.log(s);
//


// ***************template literals **************
// let x = 23 ;
// let y = 34 ;

// let str = `value of x = ${x} and value of y = ${y}`
// console.log(str);
//value of x = 23 and value of y = 34
// console.log(`sum of ${x} and sum of ${y} is ${x+y}`)
//sum of 23 and sum of 34 is 57

//******************* destructuring assignments************* */
//old way array ko nikalne ka ya destructuring krne ka
// let myArr = [12,23]
// let x = myArr[0];
// let y = myArr[1];
// console.log(x,y)
// 12 23

// new way
// let myArr = [23,45]
// let [x,y] = myArr;
// console.log(x);
// console.log(y);
// 23
//45

// object ko destructuring krte time uhski key value leni hai

// let obj = {
//     name:"javaScript",
//     dbName : "MongoDB"
// }
// let {name,dbName} =obj
// console.log(name);
// console.log(dbName);
// javaScript
//MongoDB

// 2 se jyada value ho destructuring ke ley
// let myArr = [2,5,3,1,4,6,8,7,9,10]
// let [a,b,...rest] = myArr;
// console.log(a)
// console.log(b)
// console.log(rest);
//2
// 5
// [
//   3, 1, 4,  6,
//   8, 7, 9, 10
// ]

//   ... rest oprator
// let myArr = [ 1,2,3,4,5];
// let [x,y,...rest] = myArr
// console.log(x);
// console.log(y);
// console.log(rest);
// 1
//2
//[3,4,5]

//Math
//1 - Math.trunc(x)
Math.trunc(4.9)//4
Math.trunc(4.4)//4
Math.trunc(-4.9)//-4

//2 - Math.sign(x)
Math.sign(-4)// -1
Math.sign(0)//0
Math.sign(6)//1

// 3 - Math.cbrt(x)
Math.cbrt(8)//2
Math.cbrt(64)//4
Math.cbrt(125)//5