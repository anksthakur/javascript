// factorial
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
// console.log(fact(factorial));


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

const data = [
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
data.sort((a,b)=>a.name - b.name);
// const newData = data.sort((n,i) => n.name - i.name);
//const newData = data.map(key=>JSON.stringify(key)).join(',');// join use hot sari json string ko ek string m ektha krna , map new array return krega
//  console.log(newData);
//  let {name,id} = data;
 //console.log(data.sort())
 //console.log(data)



 // fac
// function fa(f){
//     if(f==0){
//         return 1;
// }
//     return f*fa(f-1)
// }
// let factr = 3 ;
//console.log(fa(factr))

// prime with recursion

// let i;
// function prime(x){
//     if (x < 2)
//         return console.log("it is not a prime no")
//     for( i = 2 ; i < x ; i++){
//         if( x % i  === 0){
//             return console.log(" it is not a prime no")
//         }
//     }
//     return console.log("it is a prime number")
// }
// prime(8)

// let y ;

// Prime without recursion

// let z = 20;
// if(z < 2)
//     console.log("it is not a prime number")
// for (i = 2 ; i < z ; i++){
//     if(z % i === 0){
//     console.log("is not a Prime number");
// }
// console.log("Prime number")
// }

// power

let number = 5;
let power = 3;
//console.log(Math.pow(number, power))

// fibonacci numbers

let num = 100;
let x = 0;
let y = 1;
let fn = x+y;
while (fn < num) {
  debugger;
  //console.log(fn);
  fn = x+y;
  x=y;
  y=fn;
}
