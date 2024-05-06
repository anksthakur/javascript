// jab hum ek object ko copy krte hai to uhski memory location copy hoti hai
// let obj = {
//     name:"Anup"
// }

// let user = obj;
// // user ka name change kra
// user.name = "kanu"
// console.log(obj);
// kanu jabki yha anup he milna chahey tha kyuki humne name to user ka change kra hai
// aisa isley huya kyuki jab bhi hum javascript ke andar ek object ko doosre object m assign krte hai to data copy nhi hota hai  uhska reference copy hota hai
// isko thik krne ke 2 trike hai deep copy and shallow copy

// let x = "Anup";
// let y = x ;
// y="Kanu";
// console.log(x)
// Anup
// jab hum ek variable ko copy krte hai to uhski value copy hoti hai


//jab hum second ki object ki value change krte hai to vo 1st object pe bhi reflect hota hai 
// to isko thik krne ke ley 

// Shallow copy - se iski actual value copy hogi
let obj = {
    name:"Anup"
}
// 1st way in shallow copy
//Object.assign({},objectNameHere)
//let user = Object.assign({},obj) ;
// 2nd way using shallow copy
let user = {...obj}
user.name = "kanu"
console.log("Object is : ",obj);
console.log("User is :",user)
//Object is :  { name: 'Anup' }
//User is : { name: 'kanu' }