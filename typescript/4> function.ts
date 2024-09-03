function addNum(a:number, b: number){ //normal method
    return a+b;
}

function toUC(str: string){
    return str.toUpperCase();
}

function login(name: string, password: string, premium: boolean) : null{
    console.log(`logged in for name ${name}`);
    return null;
}

let add = (num1:number, num2: number) => { //arrow function
    return num1+num2;
}

console.log(add(19,1));
console.log(addNum(3,6));
console.log(toUC("pratik"));
login("Pratik","123",true);