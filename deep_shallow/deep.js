let obj = {
    name:"Anup",
    address:{
        city:"Mohali",
        state:"Punjab"
    },
   getData: function(){
return "this is a function"
    }
}
// JSON.parse(JSON.stringify(obj)) lekin agar function ya date to ye kaam nhi krta hai

let user = JSON.parse(JSON.stringify(obj));
// uske ley hume CDN ki library use krni pdti hai
// let user = _.cloneDeep(obj);
user.address.city = "Chandigarh";
console.log("object is :",obj);
//object is : {
//     name: 'Anup',
//     address: { city: 'Mohali', state: 'Punjab' },
//     getData: [Function: getData]
//   }
console.log("user is :",user);// isme function nhi aayega to uhske ley CDN ya NPM package
//user is : { name: 'Anup', address: { city: 'Chandigarh', state: 'Punjab' } }