var student = [
    {name:"Anup", age:"28"},
    {name:"kanu", age:"30"}
]

console.log(student[1].name);
student[1].name = "Kanika";
console.log(student);

// ************** Nested object & updating value ************
// var user = {
//     id:100,
//     email:"abc@gmail.com",
//     personalInfo:{
//         name:"abc",
//         address:{
//             city : "CHD",
//             country:"INDIA"
//         }
//     }
// };
// // console.log(user);
// console.log(user.personalInfo);
// console.log(user.personalInfo.address)
// console.log(user.personalInfo.address.city);
// user.personalInfo.address.city = "Mandi";
// console.log(user);