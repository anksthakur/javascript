// const regex = ""; // single word he change hoga
// const text = "Anup is a very very good boy"
// console.log(text.replace("very","VERY"))
//Anup is a ver VERY good boy

const regex = /very/g;
const text = "Anup is a very very good boy"
console.log(text.replace(regex,"VERY"))
//Anup is a VERY VERY good boy