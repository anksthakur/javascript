// ******** fetch ********//

// node js ka feature hai
// network base request hai
// promise return krta hai
// Q :-> promise se request kari aur bha se error aa gya  404 to bo resolve m milega reject m ?
//ans :-> bo hmesa as a response he milega , error sirf tab hoga jab bo request kar he ni paya browser ko .


// response = fetch("" ,{})// fetch m hum response bhi bhej skte hai

// fetch 2 way m req krta hai
// 1 data: kuch variables aur memories m data space reserve krne ke ley . isme do type hote hai onFulFilled[] = resolve -> onRejection[] = reject
// 2 webBrowser / node API access krega => network request successful huye to onFullFeilled[] m jayegi aur reject huye to onRejection m

fetch("https://dummyjson.com/carts")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
}).catch((Error)=>console.log(Error))