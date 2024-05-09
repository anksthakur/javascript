const arr = [1,3,2,4,6,2,6,3]
const mySet = new Set(arr);

// arr ka size ya set ka size pta chlega
console.log(mySet.size);//5

// ye duplicate value print nhi krta hai
console.log(mySet)//Set(5) { 1, 3, 2, 4, 6 }

// value exists krti hai ya nhi set m ya arr m
console.log(mySet.has(7));//false

// value add krne ke ley
console.log(mySet.add("Anup"));//Set(6) { 1, 3, 2, 4, 6, 'Anup' }

// value delete krne ke ley
console.log(mySet.delete(6));//true
console.log(mySet)//Set(5) { 1, 3, 2, 4, 'Anup' }

// for of loop
for(let value of mySet){
    console.log(value);
// 1
// 3
// 2
// 4
// Anup
}