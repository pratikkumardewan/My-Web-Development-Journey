alert("hello world!!");

console.log("This is a project to understand how to use javascript file in html website");
let age = 22;
console.log(`My age is ${age}.`);

let arr = [1,2,3,4,5,7,8,0,22];
let strArr=["Pratik","Kumar","Dewan"];

console.log(arr);
console.log(strArr);

console.log(typeof arr);

let sum =0;
for(let value of arr){
    sum += value;
}
let average = sum/arr.length;
console.log(`the average value of ${arr} elements is ${average}`);
arr.push(111);
arr.push(567);

for(let index=0; index<arr.length; index++){
    console.log(arr[index]);
}
arr.pop();
arr.pop();

for(let index=0; index<arr.length; index++){
    console.log(arr[index]);
}
console.log(arr.toString());
console.log(arr.concat([77,88,99]));
for(let index in strArr){
    console.log(`index of element ${strArr[index]} is ${index}.`);
}