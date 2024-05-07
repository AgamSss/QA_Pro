
// Об'єктно-орієнтоване програмування (ООП) в JavaScript

// 1. Основи об'єктів у JavaScript
// В JavaScript об'єкти можуть бути створені за допомогою фігурних дужок {…} з необов'язковим списком властивостей.
// Властивість - це пара "ключ: значення", де ключ - це рядковий ідентифікатор, а значення може бути будь-якого типу.

var person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Привіт, мене звати " + this.name);
  }
};

person.greet(); // Виводить: Привіт, мене звати John

// 2. Конструктори та 'this' ключове слово
// Конструктори - це звичайні функції, які використовуються для ініціалізації нових об'єктів.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var myCar = new Car("Toyota", "Corolla", 2005);
console.log(myCar.model); // Виводить: Corolla


// 4. Класи ES6 як синтаксичний цукор
// Синтаксис 'class' в ES6 - це синтаксичний цукор над існуючим прототипним спадкуванням JavaScript.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' видає звук.');
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Виклик методу батьківського класу
    console.log(this.name + ' гавкає.');
  }
}

var d = new Dog('Маркс');
d.speak(); // Маркс видає звук.
           // Маркс гавкає.

// 5. Приклади створення класів, методів, і спадкування
// Давайте створимо клас 'Rectangle' і наслідуємо його в класі 'Square'.

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

var square = new Square(5);
console.log(square.area()); // 25
