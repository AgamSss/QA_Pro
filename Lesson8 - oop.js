// //oop in js

class Person {
    #type = 'Hi'

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
    get type() {
        return console.log(this.type + '!');
    }
    set type(value) {
        this.type = value;
    }
}

const newPerson = new Person('John', 30);
newPerson.type;


class Student extends Person {
    constructor(name, university) {
        super(name);
        this.university = university;
    }
    #getUniversity() {
        super.sayHello();
        console.log(`I study at ${this.university}`);
    }

    getUniversity() {
        this.#getUniversity();
    }
}

const student = new Student('Bob', 'Oxford');
//student.sayHello();
student.getUniversity();

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age);
//         this.subject = subject;
//     }
//     getSubject() {
//         console.log(`I teach ${this.subject}`);
//     }
// }

// const teacher = new Teacher('Alice', 40, 'Math');
// teacher.sayHello();
// teacher.getSubject();

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     makeSound() {
//         console.log('Animal sound');
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log('Bark');
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         console.log('Meow');
//     }
// }

// const dog = new Dog('Dog');
// dog.makeSound();

// const cat = new Cat('Cat');
// cat.makeSound();

// class Car {
//     constructor(model) {
//         this.model = model;
//     }
//     drive() {
//         console.log('Car is driving');
//     }
// }

// class BMW extends Car {
//     drive() {
//         console.log('BMW is driving');
//     }
// }

// class Mercedes extends Car {
//     drive() {
//         console.log('Mercedes is driving');
//     }
// }


// const bmw = new BMW('X5');
// bmw.drive();

// const mercedes = new Mercedes('S500');
// mercedes.drive();

// Прототипи та спадкування
// В JavaScript об'єкти мають спеціальну приховану властивість [[Prototype]] (відома як '__proto__' у браузерному коді),
// яка посилається на інший об'єкт. Цей об'єкт називається "прототипом".

var animal = {
    eats: true,
  };

var rabbit = {
    jumps: true,
    eats: false,
    __proto__: animal
};

//rabbit.__proto__ = animal; // Наслідуємо властивості з animal
console.log(rabbit.eats2); // true
//console.log(animal.toString())