let student = {
    name:"Anup",
    lastName:"Thakur",
    age:28
}

let jData = JSON.stringify(student);
console.log(jData);
// output 
// JSON ka pta tab lgata hai jab "" m sara data ho
// object ko string  convert krta hai
// {"name":"Anup","lastName":"Thakur","age":28}