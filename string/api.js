// ************************* Filter ******************

// const data =  [
// {
// "id": 59,
// "title": "Spring and summershoes",
// "price": 20,
// "quantity": 3,
// "total": 60,
// "discountPercentage": 8.71,
// "discountedPrice": 55,
// "thumbnail": "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
// },
// {
// "id": 88,
// "title": "TC Reusable Silicone Magic Washing Gloves",
// "price": 29,
// "quantity": 2,
// "total": 58,
// "discountPercentage": 3.19,
// "discountedPrice": 56,
// "thumbnail": "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg"
// },
// {
// "id": 18,
// "title": "Oil Free Moisturizer 100ml",
// "price": 40,
// "quantity": 2,
// "total": 80,
// "discountPercentage": 13.1,
// "discountedPrice": 70,
// "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
// }];

// const newData = data.filter((item)=>{
//     return item.quantity > 2;// single condition
// })
// console.log(newData)

// Shopping Cart
// ************************** Reduce ***************************

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