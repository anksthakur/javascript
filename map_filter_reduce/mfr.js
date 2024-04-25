// ***********   MAP ***********

const arr = [2,1,4,6]
let a = arr.map((b,index,array)=>{
    console.log(b,index,array)
    return index + 1
})
console.log(a)
// output 2 1 4 6

// const arr = [4,2,5,7]
// let a = arr.map((value , index , array)=>{
//     console.log(value,index,array)
// return krne se new array bnta hai
//     return value + 1 // isme hum agar value + index krenge to index output m add hoke milega 4 3 7 10 
// })
// console.log(a);
//output 4 0 [ 4, 2, 5, 7 ]
// 2 1 [ 4, 2, 5, 7 ]
// 5 2 [ 4, 2, 5, 7 ]
// 7 3 [ 4, 2, 5, 7 ]
// [ 5, 3, 6, 8 ]

// const str = [1,2,3,4,5]
// const a = str.map((b)=>{
// return b+10
// })
// console.log(a)

// ***************** Filter method **************
// const arr = [3,6,1,7,3,4]
// let a = arr.filter((value)=>{
// return value>3 // ye filter lga deya ki 3 se bdi jo bhi value hogi o print kr de
// })
// console.log(a);
// [6,7,4]

//*********API *************** */

// const data = [{
// title:"Anup",
// age:28,
// job: "full stack developer"
// },
// {
// title:"kanika",
// age:28,
// job: "full stack developer"
// },
// {
//     title:"thakur",
//     age:31,
//     job:" frontend developer"
// }
// ]
// const newData = data.filter((item)=>{
// return item.age >27
// })
// console.log(newData)
//[
//     { title: 'Anup', age: 28, job: 'full stack developer' },
//     { title: 'kanika', age: 28, job: 'full stack developer' },
//     { title: 'thakur', age: 31, job: ' frontend developer' }
//   ]

// ************** Reduce method **************
// const arr = [2,4,3,1]
// const a = arr.reduce((a,b)=>{
// return a+b
// },0) //  }, yha comma ke baad jo bhi value denge bha se add krna start hoga)
// //eg humne yha 2 value di to hmari output 12 ho jayegi 
// console.log(a);
//output 10

// Shopping Cart
// const mobile = [{
//     itemName: "iphone",
//     price:90000
// },
// {
//     itemName: "samsung",
//     price:67999
// },
// {
//     itemName: "vivo",
//     price:27999
// },
// {
//     itemName: "nokia",
//     price:31999
// }
// ]
// const priceToPay = mobile.reduce((acc,item)=>{
// return acc + item.price
// },0)
// console.log(priceToPay);
// 217997

//************************for each ******************

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const a = []
// arr.forEach((d)=>{
// if(d>4){
// a.push(d)
// }
// })
// console.log(a);
// output [ 5, 6, 7, 8, 9, 10 ]