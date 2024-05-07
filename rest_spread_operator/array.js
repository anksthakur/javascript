//rest & spread array ke sath
// rest m jo bhi element hum pass kar rhe hai o combine ho jayenge
function addNumber(a,b,...other){
    //console.log(other)// other number ko access krne ke ley
    return a+b ;
}
const res = addNumber(1,2,3,4,5,6,7,8,9)
//console.log(res);

// spread
// jo combine hai uhnko divide(todte) hai
var name = ["Anup","anku","kanu"];
function getName(n1,n2,n3){
    console.log(n1,n2,n3);
}
//getName(name[0],name[1],name[2])// old way
getName(...name);// new way
getName(name)// other way