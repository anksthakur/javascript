// ************this and arrow *************
// this.jiski bhi value chahey eg(this.username) - current m jo bhi username ki value hogi bo aa jayegi
// const user = {
//     username : "Anup",
//     price : "999",
//     welcomeMessage : function (){
//         console.log(`${this.username},welcome to website`);
//     }
// }
// user.welcomeMessage();
// // Anup,welcome to website
// user.username = "kanu" // yha pe humne context change kar deya 
// user.welcomeMessage();
//kanu,welcome to website

//arrow function m this
// const a = () =>{
//     let username = "Anup"
//     console.log(this)
// }
// a()
// {} blank object

// function m this
// const b = function (){
//     let username = "Kanu"
//     console.log(this)
// }
// b()
// Object [] {
    //yha data}

// ************* arrow function *************

// jab ek line se jyada code ho tab return krna pdata hai ya {ye bracket use kiye} to return likna pdega
// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(4,6));
// 10

// jab ek he line ka code ho
// const addTwo = (num1,num2)=> num1+num2;
// console.log(addTwo(34,17));
//51

// aur agar object ko return krna ho aur return word use na krna ho to (ye use krna hai)
// const a = ()=>({name:"Anup"})
// console.log(a())
//{ name: 'Anup' }
