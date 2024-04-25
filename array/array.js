// const myArr = [1,2,3,4,5];
// console.log(myArr[0]);// array ko access krte variable [ konse elemnt ko access krna hai ]
// output 1 - arr 0 se start hota hai isley 0 pe 1 hai to output 1 aayi

//how many ways to define arrary
// const way1 = [1,2,3];
// const way2 = ["anup","thakur"]
// const way3 = new wayArr(1,2,3)
// console.log(way1[1])
// output 2

// array methods
//1 .push(argument)
// const myArr = [1,2,3];
// hum array m number string add karwa skte hai - .push method use hai hai array m elements ko add krne ke ley
// myArr.push("Anup"); // string ke ley ("Anup") 
// myArr.push(10); //number ke ley (1)
// console.log(myArr);
// output [1,2,3,'Anup',10]

//2 .pop(no argument) use hota hai array ke last element ko remove krne ke ley
// const myArr = [1,2,3];
// myArr.pop();
// console.log(myArr);
// output [1,2]

// 3 .includes(argument) jaise pta krna ho ki isme  value hai ya nhi isme result true and false m he aata hai
// const myArr = [1,2,3,4,5]
// console.log(myArr.includes(4)); // ye btata hai hmara element  hai ya nhi arrary m
// output true

// 4 .indexOf(argumnet) isme result number m aata hai 
// const myArr = [1,2,3,4,5]
// console.log(myArr.indexOf(5)); // ye btata hai hmare array m konse index pe konsa element hai
// output 4

// 5 .join() hmare arrary ko sting m convert kr deta hai aur bind bhi
// const myArr = [1,2,3,4,5]
// const newArr = myArr.join()
// console.log(newArr);
// output 1,2,3,4,5

// .slice()
// const myArr = [1,2,3,4,5];
// const newArr1 = myArr.slice(1,3)//.slice(2 argument dete hai eg 1,3- 1 and 2nd include krega 3rd ko include nhi kiya)
// console.log(myArr);
// console.log(newArr1);
// output [1,2,3,4,5]
// output [2,3]

// const myArr = [1,2,3,4,5];
// const newArr1 = myArr.splice(1,2)// ye array ke 1 aur 2 elements ko remove kar dega
// console.log(myArr);
// console.log(newArr1);
// output [1,4,5] ye reh gye
//output[2,3] remove ho gye ye

// shift() remove the first element of array
// const myArr = [1,2,3,4,5]
// const newArr = myArr.shift()
// console.log(myArr)
// output 1
// [2,3,4,5]

//unshift(kya add karwana hai starting m)
// const myArr = [1,2,9,6,5]
// const newArr = myArr.unshift(3)
// console.log(myArr)
// output [3,1,2,9,6,5]

//at(konse element ko get krna hai array m se)
// const myArr = [1,2,3,4,5]
// console.log(myArr.at(3))
// output 5

//concat() 2 array ko apas m connect karwane ke ley
// const a = ["Anup"];
// const b = ["Thakur"]
// const c = a.concat(b)
// console.log(c);
// output ['Anup','Thakur']

// copyWithin(1agr kha copy krna hai , 2agr kha se copy krna hai)
// const myArr = [1,2,3,4,5]
// console.log(myArr.copyWithin(2,0));
// output [1,2,1,2,3]

// flat()
// const myArr = [[1,2],[3,4]]
// const newArr = myArr.flat();
// console.log(newArr)
// output [1,2,3,4]

// isArray
// console.log(Array.isArray("Anup"));// ye ques put kiya tha ki array hai "Anup" ya nhi
//output false

//string ko array m convert krne ke ley
// console.log(Array.from("Anup"));
// output ['A','n','u','p']

//number ko array m convert krne ke ley
// let a = 100;
// let b = 200;
// let c = 300;
// console.log(Array.of(a,b,c));
// output [100,200,300]

// sort method for alphabet
// const a = ["x" ,"w","b","c","s"]
// console.log(a.sort())
//output ['b','c','s','w','x']

// const a = ["X" ,"w","B","c","s"]
// console.log(a.sort())
//[ 'B', 'X', 'c', 's', 'w' ]

// sort method for number
// const a = [4,2,7,6,1,3]
// console.log(a.sort((a,b)=>{
//     return a-b;
// }))
// output [ 1, 2, 3, 4, 6, 7 ]

// const a = [3,4,2,1]
// console.log(a.reverse())// array ko reverse krne ke ley
// [ 1, 2, 4, 3 ]

// const a = ["s","f","e","a","b"]
// console.log(a.sort())
//[ 'a', 'b', 'e', 'f', 's' ]