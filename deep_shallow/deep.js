let obj = {
    name:"Anup",
    address:{
        city:"Mohali",
        state:"Punjab"
    }
}
let user = JSON.parse(JSON.stringify(obj));
user.address.city = "Chandigarh";
console.log("object is :",obj);
console.log("user is :",user);