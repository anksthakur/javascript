// Lexical Scope

// function outer(){
// let user = "Anup";
// }
// console.log(user);
// outer();
// ref error user is not define

// function outer(){
//     let user = "Anup";
// function inner(){
//     console.log("inner",user)
// }
// inner();
// }
// outer();
// console.log("outer" + user)
// inner Anup //inner function ke pass outer function ke variable ka access hota hai
// outer ref error dega  user is not define kyuki outer inner ke variable ko access nhi kar skta



// function outer(){
//     let user = "Anup";
// function inner(){
//     console.log("inner",user)
// }
// function innerTwo(){
//     console.log("inner Two",user)
// }
// inner();
// innerTwo();
// }
// outer();
// console.log("outer" , user)
//output inner Anup 
// inner Two Anup - inner two wala bhi outer fun ko access kar skta hai
// outer ref error user is not define

function outer(){
    let user = "Anup";
function inner(){
    let secret = "my123"
    console.log("inner",user,secret)
}
function innerTwo(){
    console.log("inner Two",user,secret)
}
inner();
innerTwo();
}
outer();
console.log("outer" , user, secret)
// inner Anup my123
// inner Two ref error dega kyuki inner fun inner fun ke variable ko access nhi kar skta hai
// ref error secret is not define