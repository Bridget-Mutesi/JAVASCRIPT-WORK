

let student ={
    name: "Steven",
    age: 19,
    greet:function(){
        console.log("Hello")
        console.log(`Hello my name is ${student.name} and I am ${student.age} year old`)
        console.log(`Hello my name is ${this.name} and I am ${this.age} year old`)
    }

};
student.greet();
student.talk = function(){
    console.log("Hello there");
    console.log(student.name);
};
student.talk();

// Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people who are 18 years old or older.
//  const people = [
//    { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//    { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },

//   older:function(){
//     newArray: [],
    


//   }
//  ];

