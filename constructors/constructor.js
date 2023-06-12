//Constructor 
function Person(name,age,height){
    this.name = name;
    this.age = age;
    this.height = height;
};
//Creating Instances // property to objct
let person = new Person('Agnes',23,'4ft');
console.log({person});
console.log(person);

let person2 = new Person('Anne',20, '6ft');
// Property is an object
Person.prototype.weight = 50;
console.log(Person.prototype);
console.log({person});
console.log(person instanceof Person);

//classes