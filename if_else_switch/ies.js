// if else

let x = 20;
if (x > 40) {
    //console.log("x is greater");
}else{
    //console.log("X is smaller")
}

let y = 100;
if (y == 100) {
    //console.log("y is same")
} else {
    //console.log("y is not same")
}

let name = "Anup";
let gender = "male";

if (gender == "male") {
   // console.log("Hello Mr. " + name)
} else {
   // console.log("Hello Miss " + name)
}

// switch

// syntx
// switch (expression) {
//     case value:
        //statement
//         break;

//     default:
//         break;
// }

// let day = 4;
// switch (day) {
//     case 1:// yha case add kr skte hai case 2 : case 3 multiple cases ko ek he line m check kar skte hai
//         console.log("Today is Monday")
//         // jitni mrji statement likh skte hai
//         break;
//         case 2:
//         console.log("Today is Tuesday")
//         break;
//         case 3:
//         console.log("Today is Wednesday")
//         break;
//         case 4:
//         console.log("Today is Thursday")
//         break;
//         case 5:
//         console.log("Today is Friday")
//         break;
//         case 6:
//         console.log("Today is Saturday")
//         break;
//         case 7:
//         console.log("Today is Sunday")
//         break;
//     default:
//         console.log("Enter a valid day")
//         break;
// }

var age = 8;

switch (true) { // true means ye switch case chle he chle
    case (age >= 18):
        console.log("You are eligible")
        break;
case( age <=21):
console.log("You are not eligible")
    default:
        console.log("Enter the valid age")
        break;
} 

