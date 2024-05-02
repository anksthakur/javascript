//jab koi event hota hai ya koi task background mein chal raha hota hai, toh hum ek function ko doosre function ke roop mein pass karke, usko baad mein execute karne ke liye keh dete hain.

// Jab button click hota hai, tab yeh callback function execute hota hai. Isi tarah, agar hum asynchronous kaam kar rahe hain jaise ki ek file download karna, tab bhi hum ek callback function ko use karte hain jo tab execute hota hai jab download complete ho jaata hai

// function outer (inner){
// // Call the callback function
//     inner();
// }
// function inner (){
//     console.log("call back function is executed")
// }
// // Passing the callback function to the higher-order function
// outer(inner);

// hum ek high order fun m kitne bhi function ko call kr skte hai

// function outer (inner,inner2){
//     // Call the callback function
//         inner();
//         inner2();
//     }
//     function inner (){
//         console.log("call back function is executed")
//     }
//     function inner2(){
//         console.log("call back function 2 is executed")
//     }
//     // Passing the callback function to the higher-order function
//     outer(inner , inner2);

    // hum ek call back function m callback ko bhi call kar skte hai

    // function outer (inner){
    //     // Call the callback function
    //         inner();
            
    //     }
    //     function inner (){
    //         console.log("call back function is executed")
    //         inner2();
    //     }
    //     function inner2(){
    //         console.log("call back function 2 is executed")
    //     }
    //     // Passing the callback function to the higher-order function
    //     outer(inner);

    // function outer(callback){
    //     inner1();
    //     function inner1(){
    //         console.log("inner function")
    //     }
    // }
    // outer();

    // call back use hota hai eg waiting for user input like name 
    function askName(greetUser){
        let name = prompt("what is your name");
        greetUser(name);
    }
    function greetUser(name){
        console.log(name + "welcome to our website")
    }
    askName(greetUser);