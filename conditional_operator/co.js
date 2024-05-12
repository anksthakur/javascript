var a = 100;
var b;
//(a==500)? b="true":b="false";
//b = (a == 400) ? "true" : "false";
b = "Value is " + ( a ==100 ? "True" :"False")// message bhi sath m likh skte hai

//console.log(b)

// ??
let user = {
    student : {
        name:"",
        age:12
    }
}
//console.log(user.student.name || 'Thakur');
// Thakur

//console.log(user.student.age ?? '28');
//12

// ?

let users = {
    name :"Anup",
    address:{
        city : "Mohali",
    }
}
console.log(users.name.pincode);
//undefine
//console.log(users.pincode.name)
//error
// error na aaye uhske ley
console.log(users.pincode?.name);
//undefined
