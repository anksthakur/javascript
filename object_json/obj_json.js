// singleTon - agar hum `` m declare krte hai to singleton nhi bnta hai

// constructor method - isme singleton banta hai
// Object.create

// Object Literals
// const mySmb = Symbol("Key1") 
// const JsUser = {
//     name : "Anup" ,// name key hai aur "Anup" value
//     "full name" : "Anup Thakur",
//     age : 28, // number m bhi efine kar skte hai
//     location : "Mohali",
//     email : "anksthakur7@gmail.com",
//     isLoggedIn : false, // boolean values bhi define kar skte hai
//     lastLoginDays : ["Monday","Saturday"], // array m define kar skte hai object ko
//     [mySmb] : "Key1"
// }
// // console.log(JsUser.lastLoginDays); // . se object ko access krne ka trika

// //console.log(JsUser."full name")//. se hum agar key string hai to uhsko access nhi kar skte hai

// console.log(JsUser["full name"])// way access the key if it's string

// // values ko change krna ho object m 
// // JsUser.email = "anksthakur7@google.com" // = to overwrite kar skte hai values ko
// console.log(JsUser);

// // agar hum chahte hai hmare object ko koi change na kre to hum freeze method use krenge
// // Object.freeze(JsUser);// Object.freeze(jis obj ko freeze krna hai uhsko yha put krna hai)
// // JsUser.email = "anksthakur7@facebook.com"
// // console.log(JsUser);

// // function JsUser ke sath greeting add krni hai pure object ke ley
// JsUser.greeting = function(){
//     return ("Hello JS Users")
// }
// // console.log(JsUser.greeting);
// // [Function (anonymous)] //function execute nhi huya hai khali refrence aaya hai fun ka
// console.log(JsUser.greeting());
// // Hello JS User

// //particular ek key ke ley execute krna ho function 
// JsUser.greeting2 = function(){
//    return (`hello Js User ${this.name}`)// `${this. lgakar jo obj ke andar property hai o mil jati hai}`
// }
// console.log(JsUser.greeting2());


// symbol ki key ko object ki key m add krke kaise print kre

// const mySmb = Symbol("Key1") 
// const JsUser = {
//     name : "Anup" ,
//     "full name" : "Anup Thakur",
//     [mySmb] : "Key1" // symbol ko object m declare krne ka way, [ key ko square bracket ke andar rkhna hai]
// }
// console.log(JsUser[mySmb]) // symbol ko print krne ka trika
// console.log(JsUser["full name"]);// agar key string m ho to usko print krne ka trika

//singleton object
// const tinderUser = new Object()
// console.log(tinderUser);//{}

//non singleton object
// const tinderUser = {}
// console.log(tinderUser);// {}

// const userDetails = {}
// userDetails.id = "123abc",
// userDetails.email = "some@gmail.com",
// userLoggedIn = false
// // console.log(userDetails);//{ id: '123abc', email: 'some@gmail.com' }

// // const tinderUser = {
// //     email : "abc@gmail.com",
// //     fullName : {
// //         userFullName : {
// //             firstName : "Anup",
// //             lastName : "Thakur"
// //         }
// //     }
// // }
// // // console.log(tinderUser);
// // //{email: 'abc@gmail.com',fullName: { userFullName: { firstName: 'Anup', lastName: 'Thakur' } }}
// // // console.log(tinderUser.fullName);
// // //{ userFullName: { firstName: 'Anup', lastName: 'Thakur' } }
// // // console.log(tinderUser.fullName.userFullName);
// // //{ firstName: 'Anup', lastName: 'Thakur' }
// // // console.log(tinderUser.fullName.userFullName.firstName);
// // //Anup

// // // ********* object ko combine krne ke ley ************
// // const obj1 = {1:"a",2:"b"};
// // const obj2 = {3:"c",4:"d"};
// // // const obj3 = Object.assign({},obj1,obj2);// {empty object leya taki perfect value aaye}
// // // console.log(obj3);
// // //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// // // jo jyada use krenge hum object ko jodne ke ley 
// // const obj3 = {...obj1,...obj2}
// // console.log(obj3);
// //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// // in live project
// // array ke andar object hote hai
// const users = [
//     {
// name : "Anup",
// email:"anup@gmail.com"
// },
// {
//     name : "Kanu",
//     email:"Kanu@gmail.com"
//     }
// ]
// // value access krna hai , lekin array hai to
// // console.log(users[1].email);
// // Kanu@gmail.com

// // console.log(userDetails);
// // object ki sari keys get krne ke ley
// console.log(Object.keys(userDetails))//Object.keys(jis object ki key chahey uhska name)
// // object ki sari values get krne ke ley
// console.log(Object.values(userDetails))//Object.values(jis object ki values chahey uhska name)

// // value check krni ho ki object ke pss hai ya nhi
// console.log(userDetails.hasOwnProperty("email"));// (objectName.hasOwnProperty.("jo check krna eg email"))

//         JSON           

// json ke structure  m key ko bhi string ki trh type krte hai 
// JSON ko hmesa " double quotes , likha jata hai"
// const user = {
//     "id": 13,
// "title": "Fog Scent Xpressio Perfume",
// "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
// "price": 13,
// "discountPercentage": 8.14,
// "rating": 4.59,
// "stock": 61,
// "brand": "Fog Scent Xpressio",
// "category": "fragrances"
// }
// console.log(user.id);
// 13

// let obj = {
//     name :"Anup",
//     lastName:"Thakur"
// }
// // console.log(obj.name);
// // Anup
// //baar baar hume obj na linke pde uske ley
// let {name,lastName} =  obj;
// // console.log(name)
// console.log(...name,...lastName)

const obj = {
    fullName : "anup",
    age : 28,
    email : "anup@gmail.com"
}
obj.greeting = function (){
    return (" Hello user welcome to app")
}
console.log(obj.greeting());
obj.greetingUser = function (){
    return (` Hello ${this.fullName} welcome to app `)
}
console.log(obj.greetingUser())
console.log(obj.fullName);
// const {fullName} = obj; // de-structure kiya
// console.log(fullName);
// const { fullName:name} = obj; // full name ko bhi short kar deya 
// console.log(name);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

obj.fullName = "Kanu";
console.log(obj);
// Object.freeze(obj);