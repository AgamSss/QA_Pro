"use strict"


// Трохи ще про один оператор, це оператор нульового злиття
// expr1 ?? expr2. Оператор нульового злиття вибирає expr1, якщо воно не є null або undefined.
// Якщо expr1 рівне null або undefined, то вибирається expr2.
// console.log(true ?? false);
// console.log(false ?? true);
// console.log(null ?? true);
// console.log(undefined ?? true);
// console.log("" ?? true);
//console.log("Hillel" ?? false)
//console.log(undefined ?? null ?? false)


/**
 Перетворення типів (примітиви)
 - Перетворення до рядка
 - Перетворення до числа
 - Перетворення до логічного значення
 В JavaScript існують два типи перетворень даних: явні (які ви явно вказуєте у коді)
 та неявні (які відбуваються автоматично за певних обставин).
 */

// Перетворення до рядка
/*let text = String(3);
console.log(text);
console.log(typeof text);*/

/*let text = String(undefined);
console.log(text);
console.log(typeof text);*/

/*let text = String(null);
console.log(text);
console.log(typeof text);*/

/*let text = String(false);
console.log(text);
console.log(typeof text);*/

//Перетворення до числа
/*let number = Number('4');
console.log(number, typeof number);*/

/*let number = Number(undefined);
console.log(number, typeof number);*/

/*let number = Number(null);
console.log(number, typeof number);*/

/*let number = Number(true);
console.log(number, typeof number);*/

/*let number = Number('qwerty');
console.log(number, typeof number);*/

// Перетворення до логічного значення
/*let bool = Boolean('2');
console.log(bool, typeof  bool);*/

/*let bool = Boolean(undefined);
console.log(bool, typeof  bool);*/

/*let bool = Boolean(null);
console.log(bool, typeof  bool);*/

/*let bool = Boolean('');
console.log(bool, typeof  bool);*/

/*let bool = Boolean(11);
console.log(bool, typeof  bool);*/

/**
 Умовні конструкції
 У JavaScript є кілька умовних конструкцій, які дозволяють вам виконувати код в залежності від певних умов.
 Основні умовні конструкції включають if, else if, else та switch.
 */

//Найпростіший випадок
/*var age = 22;
if(age > 18) console.log("Є доступ!");*/

//if(true) console.log("Hi bool");

//if ('text') console.log("Hi text");

//if("") console.log("Null"); // ??


// Ще раз NaN, 0, null, undefined, '' це false. Все інше true

//Якщо одним рядком не обійдешся
/*var age = 22;
if (age > 18) {
    age += 10;
    console.log("Тепер мені " + age);
}*/

//можливі варіанти
/*let salary = 1000;
if (salary < 1000){
    console.log("Маленька ЗП")
} else {
    console.log("Вже краще")
}*/

//Повна форма запису
/*let salary = 1000;
if (salary < 1000){
    console.log("Маленька ЗП")
} else if (salary === 1000){
    console.log("Вже краще")
} else {
    console.log("Супер")
}*/

// Терарний оператор
/*let birthday = 25;
let discount = (birthday === 25) ? "30%" : "10%";
console.log(discount);*/

// Як би це виглядало через if. У випадках коли умов мало, та ми одразу хочемо присвоїти чомусь значення,
// краще використати тернарний оператор.
/*let birthday = 25;
let discount;
if (birthday === 25){
    discount = "30%"
} else {
    discount = "10%"
}*/

// І ніхто нам не забороняє робити все разом.
/*let sex = 'male';
let birthday = 25;
let discount;
if (sex === 'male'){
    discount = (birthday === 25) ? "30%" : "10%";
} else if (sex === 'female'){
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
}*/

// перебір варіантів: switch
/*var a = 8;
switch (a) {
    case 1:
        console.log('варіант 1');
        break;
    case 2:
        console.log('варіант 2');
        break;
    case 3:
        console.log('варіант 3');
        break;
    case 4:
        console.log('варіант 4');
        break;
    case 5:
        console.log('варіант 5');
        break;
    default:
        console.log('Що ???');
}*/


//Прибираємо break - групуємо варіанти
/*var a = 3;
switch (a) {
    case 1:
        console.log('варіант 1');
        break;
    case 2:
        console.log('варіант 2');
    case 3:
        console.log('варіант 3');
    case 4:
        console.log('варіант 4');
    case 5:
        console.log('варіант 5');
        break;
    default:
        console.log('Що ???');
}*/


//switch при порівнянні використовує === і це важливо!
/*var num = '1';
//var num = 1;
switch (num) {
    case 1:
        console.log(1)
        break
    case '1':
        console.log('\'1\''); // Дуже цікаво, а що це за знак \
        break;
    case 2:
        console.log(' два');
        break;
    case 3:
        console.log(' три');
        break;
    default:
        console.log('Що ???');
}*/

// На останок ще одна різниця між let/const та var
/*if (true){
    let a = 5;
}
a = 6; // А що трапилося ?*/

// Для виконання ДЗ давайте з вами проговоримо про одне модальне вікно prompt();
// var name = prompt("Вкажіть ваше імя", "18");
// console.log(typeof name, Number(name));



// Практика
// Задача 1: Напишіть програму на JavaScript, яка приймає число від користувача і визначає, чи є введене число парним чи непарним.

// Відповідь
// Запитуємо користувача про число
/*var number = 10;

// Перевіряємо парність числа
if (number % 2 === 0) {
    console.log("Число " + number + " - парне.");
} else {
    console.log("Число " + number + " - непарне.");
}*/


/*
Задачка 2: Калькулятор знижки
Створіть програму, яка запитує в користувача суму покупки і визначає, яка знижка буде застосована в залежності від суми:
- Якщо сума менше або дорівнює 1000 грн, знижка складає 5%.
- Якщо сума більше 1000 грн, але менше або дорівнює 5000 грн, знижка складає 10%.
- Якщо сума більше 5000 грн, знижка складає 15%.
 */

// Сума покупки
var purchaseAmount = 350;

// Ініціалізуємо змінну для знижки
var discount = 0;

// Розраховуємо знижку залежно від суми покупки
if (purchaseAmount <= 1000) {
    discount = 0.05; // 5%
} else if (purchaseAmount > 1000 && purchaseAmount <= 5000) {
    discount = 0.10; // 10%
} else {
    discount = 0.15; // 15%
}

// Розраховуємо суму до оплати
var discountedAmount = purchaseAmount - (purchaseAmount * discount);

// Виводимо результати
console.log("Сума покупки: " + purchaseAmount + " грн");
console.log("Знижка: " + (discount * 100) + "%");
console.log("Сума до оплати: " + discountedAmount + " грн");










