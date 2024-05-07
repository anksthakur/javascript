// array destructing

//1
//array ko access krna
// let books = ["advance js" , 200 , "Anup"];
// console.log(books[2]);

//2
// har ek array ki value ke ley alg se variable bnana
// lekin ye lengthy hai
//let books = ["advance js" , 200 , "Anup"];
// array ki [0] value ko name assign ho gya
// let name = books[0];
// let price = books[1];
// let created = books[2];
// console.log(name);

//3
// destructing ES6
// let books = ["advance js" , 200 , "Anup"];
// let [name,price,created] = books;
// console.log(price);

//4
// default value dena arrary m value nhi hai aur hume add krna hai page (etc)
// default value tab kaam nhi krta hai jab hmare pass value ho phle se arrary m
// let books = ["advance js" , 200 , "Anup"];
// let [name,price,created,page=150] = books;
// console.log(page);

//5 
//arrary ke andar se array ko nikalana
// let books = ["advance js" , 200 , 150,["thakur",2024]];
// let [name,price,page,[createdBy,year]] = books;
// console.log(year);

//6
//use of arrary // jab fun hume array reeturn kar rha ho to use krte hai array destruncting
function book(){
    return ["advance JS",200]
}
// in values ko humne variable assign kr dey
let [book_title,price] = book();// agar isko destructing nhi krenge toh
//output 
//let name = book();
//console.log(name);//["advance JS",200]
console.log(book_title);
//advance JS