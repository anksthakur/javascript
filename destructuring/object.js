// object destructing
let book = {
    name:"js",
    page:200,
    price:150,
    published:{
        by:"anup",
        year:2024
    }
}
//1
// object ki property ko access krne ka way
// let name = book.name;
// console.log(name)

//2
// destructing
// {property ke names } = object_name
// let {name,page,price} =  book;
// console.log(name)

//3
// property change krni ho object ki
//{name:title,page,price} = object_name
// let {name : title,page,price} =  book;
// console.log(title)// agar yha name access krna chahey to yha name is undefined aayega

//4
// hmare pass for eg marketPrice property nhi hai aur uhsko destructing m hum add kr rhe hai aur uhse default value de di
// aur destructing m humne default value nhi di marketPrice ko to undefine aayega
// let {name, page , price,marketPrice = 140} = book;
// console.log(marketPrice);

//5
// object ke andar ke object ko access krna
// let {name,price,page,published:{by,year}} = book;
// console.log(by);

//6
// isme name ko change kra - new property add kri - object ke andar ke object ko add kra - object ke andar ke obj ko change kra
let {name:title,price,page,marketPrice=140,published:{by:publishedBy,year}} = book;
console.log(title,publishedBy,marketPrice);