// call back hell

// sync means one by one code run ho
// eg
// console.log("Hello");
// console.log("Anup");
// console.log("Thakur");
//Hello
//Anup
//Thakur

// setTimeOut function
//setTimeout() method calls a function after a number of a milliseconds

// console.log("Hello");
// setTimeout(function (){
//     console.log(" this will execute later")
// },3000)
// console.log("Anup");
// console.log("Thakur");

// call back hell
// function ke andar function function ke andar callBack to ye lengthy process hai isse bachne ke ley hum promise use krte hai
function getCheese(callBack){
    setTimeout(() => {
        const cheese = "🧀";
        console.log("Here is Your Cheese",cheese);
        callBack(cheese)
    }, 3000);
}
function makeDough(cheese,callBack){
    setTimeout(()=>{
        const dough = cheese + '🍩';
        console.log("Here is the dough",dough)
        callBack(dough)
    },3000)
}
function bakePizza(dough,callBack){
    setTimeout(()=>{
        const pizza = dough + '🍕';
        console.log("Here is the pizza",pizza)
        callBack(pizza)
    },3000)
}

getCheese((cheese)=>{
    makeDough(cheese,(dough)=>{
        bakePizza(dough,(pizza)=>{
            console.log("Got the pizza"+ pizza)
        })
    })
});
