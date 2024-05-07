// call by ref
// let obj1 = {
//     name:"Anup",
//     pass : "Thakur"
// }
// let obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
//{ name: 'Anup', pass: 'Thakur' }
//{ name: 'Anup', pass: 'Thakur' }

// Object ke sath
let obj1 = {
    name:"Anup",
    pass : "Thakur"
}
let obj2 = obj1;
obj2.pass = "Anks";
console.log(obj1);
console.log(obj2);
//{ name: 'Anup', pass: 'Anks' }
//{ name: 'Anup', pass: 'Anks' }
// obj and array m agar hum change krte hai to bo original array and obj ko he change krta hai
// call by ref m dono variable sath m kaam krte hai m means kisi ek variable ki value change kri to dono ki ho jayegi

// array ke sath
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);
//[ 1, 2, 3 ]
//[ 1, 2, 3 ]