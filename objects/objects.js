//Creat an object

let person ={
    name: "Anne",
    age: 20,

    friend:{
        name: "Amanda",
        age: 25,
        myFriend:{
            name: "Susan",
            age: 21,
        }
    }
}
let person2 = new Object();
person2.name = "Anne"; //adding properties
person2['age']=30;
console.log({person2});
person.age = 46;      // updating properties     // string. gives you a metthod
console.log({person}); //

console.log(person.name);  //access a property

console.log(person.friend.myFriend.name);  // dot notation   // friend valjue is an object it can iuse dot notation
console.log(person['friend']['myFriend']['name']);  // another method to access values in my frien

delete person.age;
console.log({person});


let person3 = Object.assign(person);
console.log({person3});  //cloning into an object
let keys = Object.keys(person3);  // looping
console.log({keys});

