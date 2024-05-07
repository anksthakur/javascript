// object ke sath rest & spread
// value ko overwrite krna

//REST

let student = {
    name:"anup",
    age:28,
    hobbies:["boxing","cricket"]
}
// age ke alawa baki sari chijen mil jayengi ...rest opreator
//let {age,...rest} = student;
// aur hum chahte hai ki sari property student ki access krni ho
const {...rest} = student;
//console.log(rest);

// Spread
// eg age change krni hai

let newStudent= {
    ...student,
    age:"29"
}
console.log(newStudent);