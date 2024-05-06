
// eg ye data server se aaya tha uhsko variable m store karwaya 
let data = `{"name":"Anup",
"lastName":"Thakur",
"age":28,
"address":{
    "city":"Mohali",
    "state":"Punjab"
}
}`;
// string ko object m covert krne ke ley JSON.parse(variable jisme data store hai)
// string ko java script object m covert krta hai
// d variable m store karwaya jo data convert hoke hume obj m mila
let d = JSON.parse(data);
console.log(d);
//{ name: 'Anup', lastName: 'Thakur', age: 28 }
// data ko access krne ke ley
console.log(d["name"])
//Anup
console.log(d["address"]["city"]);
//Mohali