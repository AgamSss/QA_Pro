"use strict"
// Цикли
//while - спочатку думаємо - потім робимо
/*let i = 0;
while (i < 3) {
    console.log('i= ' + i++);
}*/


// Пару слів про "локальні" змінні
/*let local = "Зовнішня змінна";
var i = 5;
while (i) {
    i--;
    let local = "внутрішня змінна";
    console.log("всередині циклу local=\"" + local + "\"");
}
console.log("Після закінчення циклу i =" + i);
console.log("А змінна local=\"" + local + "\"");*/

//Цикл while може закінчитися, так і не розпочавшись
/*while(false){
    console.log('А я все одно щось зроблю ?');
}
console.log('Кінець завдання');*/

//А може й затягнутися (не треба так робити)

// while(true){
// 	console.log('А я все одно щось зроблю ');
// }
// console.log('Кінець завдання');

//do...while - спочатку робимо, потім думаємо
/*var i = 0;
do {
    i += 2;
    console.log("i=" + i);
} while (i < 5);
console.log("Після закінчення циклу i =" + i);*/
// while (i < 5) {
//     console.log("i=" + i);
//     i += 2;
// }
// do...while обов'язково відпрацює хоча б раз!
/*do{
    console.log("А я все одно щось зроблю");
}while(false);*/

// Цикл For
// Класика
/*for (var i = 0; i < 9; i++) {
    console.log('лічильник циклу i= ' + i);
}
console.log("Після закінчення циклу i = " + i);*/

//Секції в оголошенні циклу можна використовувати по-різному
/*var j;
for (var i = 3, j = "hello"; i > 0; j += "+") {
    console.log('Зворотній відлік. лічильник циклу i=' + i);
    i -= 3;
}
console.log("Після закінчення циклу i = " + i);
console.log("Після закінчення циклу j = " + j);*/

//Вот тут нам пригодится локальная переменная:
/*for (var x = 0; x < 5; x++) {
    console.log("Усередині циклу x =" + x);
}
console.log("А зовні x=" + x);*/

//break, continue - ручне керування циклом
/*var i = 0;
for (; ;) {
    if (i === 7) {
        console.log("Дійшли до сімки");
        break;
    }
    console.log(i);
    i++;
}
console.log("Після закінчення циклу i =" + i);*/

// Можна і так
/*for (let i = 5; i--;){
    console.log(i); // Так, а чому 4 ?
}*/

// continue – пропускаємо хід. Виводимо лише парні

/*for (let x = 0; x < 10; x++) {
    if (x % 2) continue;
    console.log('тільки парні: х = ' + x);
}
console.log("Як це ще може виглядати");*/

/*for (let x = 0; x < 10; x++) {
    if (x % 2 === 0) console.log('тільки парні: х = ' + x);
}*/

//Цікаво, а що буде якщо ми покладемо один for, до іншого!
// Уявімо що ми хочемо створити таблицю множення на 5
/*let number = 5;
for (let i = 1; i <= 9; i++){
    console.log("Результат множення " + number + " * " + i + " = " + number * i);
}*/

// Тепер я хочу зробити всю таблицю множення
/*for (let i = 1; i <= 9; i++){
    for (let j = 1; j <= 9; j++){
        console.log("Результат множення " + i + " * " + j + " = " + i * j);
    }
    console.log("----------------------------")
}*/

// А якщо я хочу множити тільки парне значення
/*for (let i = 1; i <= 9; i++){
    if (i % 2) continue;
    for (let j = 1; j <= 9; j++){
        console.log("Результат множення " + i + " * " + j + " = " + i * j);
    }
    console.log("----------------------------")
}*/

//Мітки для циклів
/*label: for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (j === 5) {
            console.log("----------------------------")
            continue label;
        }
        console.log("Результат множення " + i + " * " + j + " = " + i * j);
    }
}*/

/*label: for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (j === 5) {
            break label;
        }
        console.log("Результат множення " + i + " * " + j + " = " + i * j);
    }
    console.log("----------------------------")
}*/

/**
 Functions
 Функції - це блоки коду, які можна викликати з будь-якого місця у програмі.
 Вони дозволяють згрупувати певний фрагмент коду і використовувати його в багатьох місцях
 без необхідності повторювати сам код.
 У JavaScript є кілька способів визначення функцій:
 - Function Declaration
 - Function Expression
 - Arrow Functions
 */

// Класичний випадок - Function Declaration
/*function test() {   //Оголошення функції
    console.log("Привіт із функії!");  //Тіло функції
}

console.log("Зараз викличемо функцію");
test(); // виклик функції
console.log("І ще раз викличемо функцію");
test(); // виклик функції*/



//Як і зі змінною, оголошення функції "спливає"
/*
test();
function test(){
	console.log("Привіт із функції!");
}
*/

//Додамо щось цікавіше ніж console.log. Давайте розрахуэмо площу квадрату
/*function squareAreaCalculation() {
    let a = prompt("Ввести сторону квадрату");
    console.log(a * a);
}
squareAreaCalculation();*/

//Функція – єдиний спосіб створити локальну область видимості
/*var ext = "Зовнішня змінна";

function test() {
    var inner = "Тільки для внутрішнього користування";
    console.log('Бачу: ext=' + ext);
    console.log('Бачу: inner=' + inner);
}
test();*/
/*console.log('А тепер – зовні:')
console.log('Бачу: ext='+ext);
console.log('Бачу: inner='+inner);*/

//Своя сорочка ближче до тіла (народна мудрість)
//var ext = "Зовнішня змінна";
/*
function test() {
    var ext = "Внутрішня змінна";
    console.log('Змінна ext=' + ext);
}

test();
console.log('Змінна ext=' + ext);*/

//Усередині функції змінні "спливають" точно так, як і в основному скрипті
// function test() {
//     console.log('Спочатку myVar дорівнювала ' + myVar);
//     myVar = "Я маю значення!";
//     console.log('потім myVar=' + myVar);
//     var myVar;
// }

// test();


// Function Expression
/*let squareArea = function () {
    let a = prompt("Ввести сторону квадрату");
    console.log(a * a);
}
squareArea();*/

// А в чому тоді різниця
/*printGreeting(); // І в нас ніяких проблем;
function printGreeting() {
    console.log("Hello world")
}*/

// А що ми тут отримаємо ?
// printGreeting()
// let printGreeting = function () {
//     console.log("Hello world")
// }

// А якщо так ?
// var printGreeting = function () {
//     console.log("Hello world")
// }
// printGreeting();


// Function Expression корисно використовувати коли ми хочемо в змінній зберігати різні функції
// let autoBrand = "ТАВРІЯ";
// let accelerateСar;
// switch (autoBrand) {
//     case "Audi":
//         accelerateСar = function () {
//             let audiSpeedIndex = 100;
//             console.log("Розганяємо авто до 150км: " + audiSpeedIndex * 1.5);
//         }
//         break;
//     case "ТАВРІЯ":
//         accelerateСar = function () {
//             let audiSpeedIndex = 0;
//             console.log("Розганяємо авто до 150км")
//             for (let i = 0; i < 60; i += 10) {
//                 audiSpeedIndex += i;
//                 console.log(audiSpeedIndex);
//             }
//         }
//         break;
// }

// accelerateСar();

// Це все чудово, але є певні загальні рекомендації що і як повинна містити функція.
/*function squareAreaCalculation() {
    let a = prompt("Ввести сторону квадрату"); // Нечиста функція через побічний ефект
    let result = a * a;
    console.log(result);  // Нечиста функція через побічний ефект
}*/

// Тепер трохи краще, але...
/*let a = prompt("Ввести сторону квадрату");

function squareAreaCalculation() {
    let result = a * a;
}

console.log(result);*/ // Але ми тут не бачимо нашу змінну.

// Поняття return
// Розглянемо що повертає функція за замовчуванням
/*let a = 5;
function squareAreaCalculation() {
    let result = a * a;
}
console.log(squareAreaCalculation())*/
/*
let a = 5;

function squareAreaCalculation() {
    let result = a * a; // Але все одно погано що ми маємо залежність через використання зовнішньої змінної:
    return result;
}

let result = squareAreaCalculation();
console.log(result);*/

//return - це безумовний вихід із функції
/*let a = 5;

function squareAreaCalculation() {
    let result = a * a; // Але все одно погано що ми маємо залежність через використання зовнішньої змінної:
    return result;
    console.log("After return");
}

let result = squareAreaCalculation();
console.log(result);*/

// Передача значень у функцію
/*let a = 5;

function squareAreaCalculation(side) {
    return side * side;
}

let result = squareAreaCalculation(a);
console.log(result);*/

// А що буде якщо я не передам нічого
//let a = 5;

/*function squareAreaCalculation(side) {
    console.log(side);
    return side * side;
}

let result = squareAreaCalculation();
console.log(result);*/

// Параметрів можна вказувати скільки завгодно
/*function hello(name, surname, age){
    console.log("Hello " + name + " " + surname + ", your age is " + age);
}
hello('Name', 'Surname', 123 );*/

//А можна якось встановити параметри за замовчуванням, або що робити якщо нам нічого не передали
/*function hello(name, surname) {
    let greet = 'Hello ';
    name = name || 'John Snow';
    if (surname)
        greet += name + ' ' + surname;
    else
        greet += name;
    return greet;
}*/
// console.log(hello());
// console.log(hello('Vsevolod'));
// console.log(hello('Dmytro', 'Sirko'));

// Інший варіант як можна задати значення за замовчуванням
/*function hello(name= 'default') {
    return   'Hello ' + name;
}
console.log(hello());
console.log(hello('Volodimir'));*/

// Круто!!! А можу я щось передавати окрім значень! Так - callback function!
//Функція розганяє нашу автівку
/*function accelerateCar(callbackFunction, maxSpeed) {
    let carSpeed = 0;
    while (carSpeed <= maxSpeed){
        callbackFunction(carSpeed++);
    }
}

accelerateCar(console.log, 200);*/





