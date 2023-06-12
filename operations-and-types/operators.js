let a = 30;
console.log(a);

//Arithmetiac operators

const num = 10;
const num2 = 30;
// addition +
console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);
console.log(num % num2);

let age = 39;
let newAge = ++age;

console.log({age});  // adding identity
age --;
console.log("age",age);  // adding identity

age += 5;
console.log("newAge",age);

let powerNum = num ** num2; // adding power to a number
console.log(powerNum);

let b = 10;
let c = "10";
let comparison = b == c;
let notEqual = b != c;   // false becoz the values are not the same     
console.log("comparison",comparison); // checking the values, it doesnot check data type
console.log("notEqual",notEqual);

let strictly = b === c;
console.log("strictly",strictly); // false becox checks the data types
let strictlyNot = b !== c;
console.log({strictlyNot}) // true

//logical operators
const age1 = 25;
const age2 = 38;

 if(age1 < age2 && num > num2){ // 
    console.log(true)

}
else{
    console.log(false)
}


