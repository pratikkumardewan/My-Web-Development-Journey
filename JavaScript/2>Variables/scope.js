var a=76
let b = 57
const c =32
{
    let d =7 //this d will be only present in this scope 
    console.log("inside local scope")
    console.log("value of var a",a)
    console.log("value of let b",b) //this b is also present in this block becase this b is present in global scope and a global variable is also prent in any local scope
    console.log("value of const c",c)
    console.log("value of var d",d)
}

console.log("inside global scope")
console.log("value of var a",a)
console.log("value of let b",b)
console.log("value of const c",c)
console.log("value of var d",d) //this line will throw error because d is not present in global scope