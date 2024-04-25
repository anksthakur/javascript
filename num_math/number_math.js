const a = 10000000;
// console.log(a.toFixed(2));//decimal ke baad kitni zero chahey
// // 100.00
// console.log(a.toString().length)// numbeer ki length ke ley
// // 3
// console.log(a.toLocaleString('en-IN'))//number ke vich m , lga deta hai indian standrad ke according
// 1,00,00,000


//    ****************  MATH *************** //
// console.log(Math);
// //Object [Math] {}

// console.log(Math.abs(-3));
// 3 ye negtive value ko he positive m convert krta hai

// console.log(Math.round(3.6));
// 4 ye roundof kar deeta hai decimal value ko

// console.log(Math.min(1,3,6,2,8,7))// sbse choti value
// 1

// console.log(Math.max(1,3,6,2,8,7))// sbse bdi value
//8

// console.log(Math.random()); // 0-1 ke bich value deta hai decimal . bhi ho skti hai

// console.log(Math.random()*10+1) //*10 krne se value left m shift ho jati hai +1 taki 0 value na aaye

// console.log(Math.floor(Math.random()*10+1))// decimal ki ko round off kr dega 

const min = 1;
const max = 100;
console.log(Math.floor(Math.random()*(max-min +1))+min ) // max - min isley ki itne digit tak value mil ske