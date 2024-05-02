// javaScript sync hothi hai
// phle ek code run hota hai frr doosra code
// single thread hai
// blocking code (sync)= block the flow of program
//means code one by one execute hota hai

// non-blocking code (async) = does not block the flow of programm
// means side by side kaam krta rhta hai

// javaScript engine => JS engine work krta hai 2 ways m
// 1 memory heap = memory allocation hota hai isme
//2 call stack = jab bhi code execute hota hai uhska call ctack bnta hai

// async function getAllUser (){
//     try {
//         const response = await fetch("https://dummyjson.com/carts");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUser();


// async function getUsers(){
//     try {
//         const response = await fetch("https://dummyjson.com/carts")
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getUsers();

console.log("one");
setTimeout(function(){
console.log("two")
},2000)
console.log(three);