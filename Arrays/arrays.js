// ARRAYS
let items = [2,5,"sweet",false,45];
// Arrays methods

items.push(62);
console.log(items); // add at the end 
items.unshift(6.5); // add at  the start
console.log(items); 
items.pop(); // removes item from the end
console.log(items);
items.shift(); // removes items at the start 
console.log(items);

// Array sorting(ascending or descending)

let num = [1, 9, 10, 12, 5, 30];
let sorted =  num.sort((a,b)=> a -b);  // sorts array in ascending order
console.log(sorted);

//Give an array x element return an array with each element in x multiplied by 2
         //create an array of x go through an array x multiply each element

const result = num.map(
    (item)=>{
        return item * 2
    }

)
// console.log(result);
// let newArray = []
// const result2 = num.foreach((item,index)=>{newArray.push(item*2)})
// console.log(newArray);
// console.log({result2});

// concatination
let a = [1,2,3];
let b = [4,5,6];

let joined1 = a.concat(b);
console.log({joined1});

//spread operators
let c =[1,...a];
console.log({c});
// destructuring storing a array element into new varaibles 
let [z,x, ...e] = c;
console.log({z});
console.log({x});
console.log({e});


