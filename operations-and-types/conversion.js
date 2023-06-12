let a = "10";
let b = a *10;
console.log(b);
console.log(typeof(b));  // implicity turning a string into a number internally
console.log(typeof(+a)) // another method 

// explicit
// use JS metheod
let c = Number(a);
console.log("c",typeof(c));

let d =  String(c);
console.log("d",typeof(d)); // using inbuilt JS methods

let e = new Array(d);  // turning it into array
console.log(e);

let f = "45";
console.log(parseFloat(f)) // turning it into float