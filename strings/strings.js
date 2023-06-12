// work with texts
let trial = "Hello";
trial = 'Hello';
trial = `Hello`; // add one string to another

let a = "Hey";
let b = "there";

let c = a + " " +b;
console.log(c);
let d = `${a} ${b} human`; // we use this metthod.
console.log(d);

console.log(a[1]); // index
let e = a[0] = "h";
console.log("a",a);  // cannot rplace a string

const t = "T";
const z = "z";
if (t < z){
    console.log(`${t} is less than ${z}`);
}else if (t > z){
    console.log(`${t} is greater than ${z}`);
} else{
    console.log(`${t} and ${z} are equal`);
}

let me = "am not \f you";
console.log(me);

let nam = (2);
if (nam > 0){
    console.log("the nam is positve");
}
else if( nam == 0){
    console.log("nam is 0");

}
else{
    console.log("the nam is negative");
}
// console.log("The if...elseif...else statement is easy");

// for loop
for (let i = 1; i <= 5; i++){
    console.log("my name is me");
    console.log("I love JavaScript");

    console.log(i);
}
// Extracting the last four
let text = "beautiful"
let result = text.slice(0,5);
console.log(result);

//inserting a value at a given string
const food = "I was feeling hungry today"
// const x = "eat"
const output = (food.slice(0,4) + "eat" + food.slice(4,food.length));
console.log(output);

//counting the number of times a string appears
//"the"
//"brown"
const story= "The quick brown fox jumps over the lazy dog"
const count = (story.match(/the/g) || []).length;
console.log(count);

const word = (story.match(/brown/g) || []).length;
console.log(word);

//finding the following words
// "now"
// "sitting"
const string1 = "We are now going to school";
const substr = "now"
console.log(string1.includes(substr));

const string2 = "The child was sitting on the table before it fell"
const str = "from"
console.log(string2.includes(str));

//1. UpperCase: "wonderful"
//2. LowerCase: "amazing", "BEneath"
//3. Title case "A beautiful wedding"
let y = "wonderful"
let upperY = y.toUpperCase();
console.log(upperY);

let m = "AMAZING"
let v = m.toLowerCase();
console.log(v)

function toTitleCase(str){
    return str.replace(
        /\w\S*/g,
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }

    );
        
}
console.log(toTitleCase("A beautiful wedding"));

