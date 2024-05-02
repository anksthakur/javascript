// // promise create krna
// promise ek fun leta hai fun ke 2 part hote hai resolve and reject

const promiseOne = new Promise(function(resolve,reject){
    // do any async task
    // db calls , cryptography , network
    setTimeout(function(){
        console.log("async task is complete")
        resolve()
    },2000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})

// new Promise (function(resolve,reject){// resolve directly connected hai .then ke sath
//     setTimeout((function(){
//         console.log('async task complete')
//         resolve()
//     }),1000)
// }).then(function(){ // setTimeout task hone ke baad .then wala task run hoga
//     console.log("async resolved")
// })
 
//.then m he sari value return hoti hai
// promise se .then m value resolve ke through he pass hoti hai
// const thakur = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         // jo parameter resolve m pass krte hai o ,then m access kr skte hai
//         resolve({userName:"Anup",email:"anup@gmail.com"})
//     },1000)
// })
// thakur.then(function(print){
// console.log(print)
// })

// const data = new Promise (function(resolve,reject){
//     setTimeout((function(){
//         let error = false;
//         // agar error nhi hai to 
//         if(!error){
//             resolve({username:"Anup",id:23})
//         }else{ // agar error hai to
//             reject("!ERROR")
//         }
//     }),1000)
// })
// // destructure krna hai username he chahey
// data.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>console.log("ye to run hoga he hoga"))

//promise ko handle krne ke ley async await
//wait krta hai kaam ke hone ka jab kaam ho jata hai tbhi aage bdta hai nhi to bhi pe error de deta hai
// jaise khi database connection huya he nhi to aage bdna he nhi uhs case m

// const data = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // ye error throw kiya hai true 
//         // false kiya to mtlb error nhi aani thi to sab thik chlta
//         let error = true
//         if(!error){
//             resolve({username:"Thakur",age:28})
//         }else{
//             reject("!Error:Thakur went wrong")
//         }
//     },1000)
// });
// // async await drictly error ko handle nhi karte hai
// // uhske ley hume try catch krna pdta hai
// async function consumePromise(){
//     try {
//         const response = await data;// data ko await karwa  rhe hai
//     console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromise();

// live data fetch and  handle with async await
// async function getAllUser(){
//     try {
//         // fetch hone m time lgta hai toh ise bhi await karwana pdta hai
//         const response = await fetch("https://dummyjson.com/products") 
//         // response.json bhi convert hone m time leta hai to isko bhi await karwana pdega
//     const data = await response.json();
//     console.log(data)
//     } catch (error) {
//         console.log("Error :" , error)
//     }
// }
// getAllUser();


// .then and .catch syntx ke through
// fetch("https://dummyjson.com/products")
// // response promise m aayega to uhsko handle krne ke ley .then
// .then((response)=>{
//     // return kiya response.json m
// return response.json()
// })
// // isko handle krne ke ley response ko
// // isme data upar wale .then se aayega uhsko name deya data
// .then((data)=>{
//     console.log(data);
// })
// // error bhi aa skta hai uhsko handle krne ke ley .catch
// .catch((error)=>console.log(error))