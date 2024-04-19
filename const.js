// const a = 10 ;
//  a = 11;  we can not reassigned the value to const
// const a = 13 // we can not redeclared const
//  console.log(a)

const x = 10 ;
{
    const x = 11 ;
    console.log(x);
}
{
    const x = 12 ;
    console.log(x);
}
console.log(x)
//output 10

//overall output 11 12 10
