// for of
// to get the values of array and string
let myName = "Anup";
for (let char of myName){
    //console.log("Char of : " + char);
}
// A n u p

let myNumber = [1,2,3,4,5];
for (let num of myNumber){
    console.log("My Num : " + num);
}
//1 2 3 4 5
const object1 = {a:1,b:2,c:3};
object1.d = 4;// add kiya 
for (let key of Object.keys(object1)){
    //console.log(key);
}
//a b c d

// for in 
//use hota hai arrary ka index find krna ho
// to get the keys of array and strings
const object = {
    name : "Anup",
    age : 28
}
for(let key in object){
    //console.log(`the keys are : ${key}`);
}
// name age

const number = [ 1,2,3,4,5];
for (let num in number){
    //console.log(`Number in : ${num}`);
}
// 0 1 2 3 4


// for await of
async function* foo() {
    yield 1;
    yield 2;
  }
  
  (async function () {
    for await (const num of foo()) {
      //console.log(num);
      //  output 1
  
      break; // Closes iterator, triggers return
    }
  })();