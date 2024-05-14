// factorial with recurssion
// function fact(data){
//     // data check ki 0 aaye to 1 return kar de
//     // recursion m condition na lgaye to ye infinite loop chl DETA HAI HAI
// if(data==0){
//     return 1;  
// }
// // fact return data m se har ek baar -1 hota rhe
// // 5-1=4,4-1=3,3-1=2,2-1=1 aur jab o aa jaye toh uhske ley condition lga rkhi hai
// // data har baar multiply ho jayega -1 krne ke baad jo value aayegi
// return data*fact(data-1);
// }
// let factorial = 3;
// console.log(fact(factorial));// factorial ko as a parameter get kiya


//power

// let number = 5;
// let power = 3;
//console.log(Math.pow(number,power));

// Prime number
// let i ;
// function prime(num){
//     // prime number 2 se start hote hai
//     if(num < 2)
//         return console.log(" it is not a prime number")
//     for (i = 2 ; i < num ; i ++){// loop 2 se start krega divide krna aur  jab tak i=17and num 17 na ho jaye,  fir check krega agar divisible huya kisi num se bhi 1 se 16 tak to loop bhi stop ho jayega
//         if(num % i === 0){ //Agar i se input number num ko divide kiya jata hai aur agar remainder 0 ho toh matlab num prime nhi hai 
//             return console.log("it is not a prime number")
//         }
//     }
//     return console.log("it is a prime number")
// }
// prime(2);


// Object sort

const data1 = [
  {
    name: "anup",
    id: 1,
  },
  {
    name: "cnku",
    id: 3,
  },
  {
    name: "banu",
    id: 2,
  },
];
data1.sort((a,b)=>a.id - b.id);
console.log(data1)

 // factorial 
//5*4*3*2*1
function fa(f){
    if(f==0){
        return 1;
}
    return f*fa(f-1)
}
let factr = 5 ;
console.log(fa(factr))

// prime with recursion 
// jo khud se divisible ho aur 1 se bhi and reminder uhnka 0 aaye
let i;
function prime(x){
    if (x < 2)
        return console.log("it is not a prime no")
    for( i = 2 ; i < x ; i++){
        if( x % i  === 0){
            return console.log(" it is not a prime no")
        }
    }
    return console.log("it is a prime number")
}
prime(8)

// let y ;

// Prime without recursion
// let z = 20;
// let i = 1;
// while(i <= z){
// for(j=2; j<=20; j++){
//   if(i%j !== 0){
//     //console.log(i);
//   }
// }
// i++
// }

// fibonacci numbers
//0+1=1,1+1=2,1+2=3,3+5=8,8+5=13,13+8=21...
let num = 100;
let x = 0;
let y = 1;
let fn = x+y;
while (fn < num) {
  console.log(fn);
  fn = x+y;
  x=y;
  y=fn;
}

// sort arrary - without sort method data.sort((a,b)=>{return a-b})
// swap value
let data = [2, 45, 23, 1];
let newData;
for (i = 0; i < data.length; i++) {
for(j = i; j < data.length; j++) {
  // condition check ki agar i > j se bda hai to temp store ho jaye newData m value
if(data[i] > data[j]) {
  //temp store karwa di value
newData = data[i];
// i ki value j m swap kra di
data[i] = data[j];
// j ki value temp store karwa di
data[j] = newData;
}
}
}
console.log(data);

//power - Math.pow(enterNumber,enterPower)
// without Math.pow() and **
let enterNumber = 5;
let enterPower  = 4;
let output = 1 ;// power jab bhi 0 ho to 1 ho jaye
for (i = 0 ; i < enterPower ; i++){
 output = output*enterNumber;
}
console.log(output)