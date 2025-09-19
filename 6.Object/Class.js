/*
1. Create a Person class with a constructor that takes name and age.
 Add a method introduce() that prints "My name is John and I am 20 years old".

2.Create a Student class that extends Person.
 Add a new property grade and override the introduce() method to also mention the grade.
  Use super.introduce() inside it.

3.Write a function to demonstrate how the this keyword changes behavior when used inside a regular 
function vs an arrow function inside a class method.*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
}
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // call parent constructor
    this.grade = grade;
  }

  introduce() {
    return `${super.introduce()}, and my grade is ${this.grade}`;
  }
}
const p1 = new Person("mugisha", 21);
const s1 = new Student('Tuyizere',25,'B+');
console.log(p1.introduce());
console.log(s1.introduce());


class Demo {
  constructor(name) {
    this.name = name;
  }

  // Regular function method
  regularFunction() {
    setTimeout(function () {
      console.log("Regular function this.name:", this?.name);
    }, 1000);
  }

  // Arrow function method
  arrowFunction() {
    setTimeout(() => {
      console.log("Arrow function this.name:", this.name);
    }, 1000);
  }
}

const obj = new Demo("Mugisha");

obj.regularFunction(); //  undefined (or error in strict mode) because "this" is lost
obj.arrowFunction();   //  Mugisha (arrow function inherits this from class)
