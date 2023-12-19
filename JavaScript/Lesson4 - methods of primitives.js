"use strict";
// Методи примітивів!
// Але давайте трохи згадаємо про об'єкти
/*let houseAddress = {
    country: "Ukraine",
    city: "Odessa",
    street: "Kanatna 22",
    getFullHouseAddress: function () {
        console.log("My address is - country:", houseAddress.country,
            ", city:", houseAddress.city,
        ", street:", houseAddress.street);
    }
}
houseAddress.getFullHouseAddress();*/


// Методи Number
// Способи запису чисел
//console.log("hex FF=" + 0Xff); // 0x вказує на те, що число записане у шістнадцятковому форматі.
//console.log("науковий формат: " + 2e3); // Це можна розшифрувати так: 2 * 10^3, що дорівнює 2000.

//Нічого страшного, якщо ми всі перемішаємо до купи
/*var res = 0Xff + 1e1 + 5;
console.log(res);*/

/*
Метод isNaN (is Not-a-Number) в JavaScript використовується для перевірки, чи є передане значення нечисловим (NaN) типом.
Цей метод повертає true, якщо значення є NaN, і false, якщо значення може бути конвертовано в число.
 */
//let a = 'qwerty' / 10;
/*console.log(a);
console.log(isNaN(a));
console.log(isNaN(undefined)); // Цікаво. Все тому що цей тип не можна конвертувати в число
console.log(isNaN(NaN));
console.log(isNaN("qwerty"));*/


// Але, ми будемо використовувати це трохи інакше
/*console.log(Number.isNaN(a));
console.log(Number.isNaN(undefined)); // Цікаво. Все тому що цей тип не можна конвертувати в число
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("qwee"));*/

/* Метод isNaN спробує перетворити передане значення в число,
 метод Number.isNaN() не перетворює значення, а просто перевіряє, чи воно є NaN
 */
// Number.isInteger - використовується для перевірки, чи є передане значення цілим числом.
// console.log(Number.isInteger(42));
// console.log(Number.isInteger(42.3));
// console.log(Number.isInteger("qwer"));
// console.log(Number.isInteger(true));
// console.log(Number.isInteger(NaN));
// console.log(Number.isInteger(Infinity));

// Number.isFinite - використовується для перевірки, чи є передане значення скінченим числом
/*console.log(Number.isFinite(5));
console.log(Number.isFinite(5.5));
console.log(Number.isFinite("5"));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite("abc"));*/

//Number.isSafeInteger - перевіряє, чи є передане число "безпечним цілим числом".
// Безпечне ціле число включає в себе всі цілі числа від -2^53 + 1 до 2^53 - 1

/*console.log(Number.isSafeInteger(5));
console.log(Number.isSafeInteger(5.5));
console.log(Number.isSafeInteger("5"));
console.log(Number.isSafeInteger(2 ** 53));
console.log(Number.isSafeInteger(2 ** 53 - 1));*/

//Number.parseInt() - його призначення конвертувати рядок в ціле число,
// використовуючи десяткову систему числення.
/*console.log(Number.parseInt('12.45'));
console.log(Number.parseFloat('12.3.4'));
console.log(Number.parseInt('12px'));
console.log(Number.parseInt('a123'));
console.log(Number.parseInt('11', 2)); // Двійкова система
console.log(Number.parseInt('ff', 16));
console.log(Number.parseInt('100', 32));*/

// Number.parseFloat - його призначення конвертувати рядок в число з плаваючою точкою
/*console.log(Number.parseFloat("3.14"));
console.log(Number.parseFloat("0.5"));
console.log(Number.parseFloat("123.456"));
console.log(Number.parseFloat("3.14abc"));*/

//Хотілось би також розібрати бібліотеку Math
//Округлення
/*console.log("floor: из 3.6 до " + Math.floor(3.6)); //вниз
console.log('ceil: из 3.1 до ' + Math.ceil(3.1)); //вгору
console.log('round: из 3.4 до ' + Math.round(3.4)); //до найближчого
console.log('round: из 3.7 до ' + Math.round(3.7)); //до найближчого*/


//заокруглення до заданого знака.
/*var n = 12.66467;
var str = n.toFixed(1); //скільки знаків після коми залишити
console.log(n + ' => ' + str);*/


//Генератор случайных чисел.
/*var rnd = Math.random();
console.log('rnd=' + rnd);*/

//Більш практична задача: ціле випадкове число від 1 до 10:
/*
var rnd = Math.random();
rnd *= 10;
console.log(rnd)
rnd = Math.round(rnd);
console.log(rnd);
*/

/*
//Корисні функції з бібліотеки Math
Math.sqrt(x)		Повертає квадратний корінь із x.
Math.pow(x, exp)	Зводить число до ступеня
Math.abs(x)			Повертає абсолютне значення числа (модуль)
Math.max(a, b, c...)Повертає найбільший із списку аргументів
Math.min(a, b, c...)Повертає найменший зі списку аргументів
*/

//Пару слів про точність
/*var s = 0.1 + 0.2;
var round = s.toFixed(1);
console.log(s === 0.3);
console.log(round == 0.3);
console.log("До десятого знака: s =" + s.toFixed(10));
console.log("До двадцятого знака: s =" + s.toFixed(20));
console.log(0.3 === s.toFixed(1)); //а що не так ?
console.log(Number.isFinite(s.toFixed())); // Дуже цікаво
console.log(0.3 === Number.parseFloat(s.toFixed(1)));*/
//Усі математичні операції в JavaScript виконуються у двійковому вигляді.
// Не всякий десятковий дріб, що красиво виглядає в десятковому вигляді, так само красиво виглядає в бінарному.
//Спосіб "підвищити точність" обчислення:
/*var res = (0.1 * 10 + 0.2 * 10) / 10;
console.log(res);
console.log("Is it 0.3? " + (0.3 === res));*/


// Методи String
//Найпростіший рядок
/*var str = "Бачиш лапки - значить це рядок";
console.log(str);
console.log('І не важливо, які саме лапки');
console.log(str);*/

/*
\b - backspace
\t - tab
\n - New line
\r - Carriage return
\f - Form feed
\u00A9 -символ юнікоду
*/

/*var str = "Тестуємо \f різні спецсимволи";
console.log(str);*/
/*var str = "Тестуємо \n різні спецсимволи";
console.log(str);*/

//Екранування спеціальних символів
/*var str = "Особливі символи на кшталт \"лапок\"\n" +
    "або, власне, символу \\";
console.log(str);*/

// length - вказує на кількість символів (для рядка)
/*const myString = "Hello";
console.log(myString.length);*/

// charAt - дозволяє отримати символ за певним індексом у рядку.
/*const str = "Hello, world!";
console.log(str.charAt(0));
console.log(str.charAt(6));
console.log(str.charAt(13));*/ // Пустий рядок

//А тепер докладніше. charAt()
/*var str = "Якийсь рядок просто для прикладу";
console.log(str);
console.log("Символ номер три: " + str.charAt(3));
console.log("Те саме по іншому: " + str[3]);*/

//І не обов'язково бути змінною

/*console.log("я також рядок".charAt(20)); //пустий рядок
console.log("я також рядок"[20]); //undefined*/

// repeat - дозволяє повторити вміст рядка декілька разів і створити новий рядок
/*const str = "QA pro ";
const repeatStr = str.repeat(3);
console.log(repeatStr);*/

// Всім відома конкатенація
/*let str = 'QA ';
console.log(str.concat('Pro!'));
console.log(str.concat('Pro!', ' in Hillel school!'));*/

// endWith - використовується для перевірки, чи закінчується рядок заданим підрядком.
// const str = "script.js";
// console.log(str.endsWith(".js"));
// console.log(str.endsWith("script"));
//console.log(str.endsWith("js", 6)); //  параметр, який вказує довжину основного рядка, яку слід враховувати при пошуку.
//console.log(str.endsWith("js", 9));
//console.log(str.endsWith('ript',6))

// includes - дозволяє перевірити, чи міститься певний підрядок (для рядків)
//const str = "Hello, world!";
/*console.log(str.includes("world"));
console.log(str.includes("World"));*/
/*console.log(str.includes("world", 8)); // позицію, з якої почати пошук
console.log(str.includes("world", 7));*/

// indexOf - дозволяє знайти індекс першого входження певного підрядка у вихідному рядку.
//const str = "Hello, world!";
/*console.log(str.indexOf("world"));
console.log(str.indexOf("World"));*/ // А ось тут цікаво !
/*console.log(str.indexOf("o", 5));
console.log(str.indexOf("o", 9));*/

//lastIndexOf
/*const str = "Hello, world!";
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));*/

//padStart/padEnd - - це методи для рядків в JavaScript,
// які використовуються для додавання додаткових символів
// (зазвичай пробіли) до початку або кінця рядка
console.log('example'.padStart(8));
console.log('example'.padEnd(8));
/*console.log('example'.padStart(8,'*'));
console.log('example'.padEnd(8,'*'));*/

// trim, trimStart, trimEnd - це методи для рядків які використовуються
// для видалення пробілів.
/*console.log('   hello'.trimStart());
console.log('hello   '.trimEnd());
console.log('  hello  '.trim());*/

// toLowerCase/toUpperCase - це методи для рядків які використовуються для зміни регістру символів у рядку.
//var str = "Ось така дивна строчка";
/*console.log(str.toUpperCase());
console.log(str.toLowerCase());*/
/*console.log("І один у полі воїн"[3].toUpperCase());
console.log("  А ще можна Ось так  ".toUpperCase().trim().concat("!"))*/



// replace -  використовується для заміни певного підрядка або паттерну
// у вихідному рядку іншим рядком або значенням
//У рядку не можна нічого змінити
/*var str = "рядок";
console.log("str[4]=" + str[4]);
str[5] = "F";   //Помилка
console.log(str);*/
//Ну а якщо ДУЖЕ хочеться? (практика)
//var str = "Якийсь рядок просто для прикладу";
/*var res = str.replace(' ', '_');
console.log(res);
console.log(str);*/
/*var replaceAll = str.replaceAll('','*');
console.log(replaceAll);*/

//substring/substr/slice - ці методи дозволяють вам вирізати частину рядка,
// починаючи з певного індексу і закінчуючи іншим індексом.
//У найпростішому випадку всі три працюють однаково
/*var str = "стрибок з хитроперепідвивертом";
console.log(str.substr(9));
console.log(str.substring(9));
console.log(str.slice(9));*/


//Негативний аргумент
/*var str = "стрибок з хитроперепідвивертом";
console.log(str.substr(-9)); //відраховує з кінця
console.log(str.substring(-9)); //з нуля
console.log(str.slice(-9)); //відраховує з кінця*/


//Другий аргумент
/*var str = "стрибок з хитроперепідвивертом";
console.log(str.substr(10, 14)); // другий аргумент - довжина
console.log(str.substring(10, 14)); // другий аргумент – номер символу
console.log(str.slice(10, 14)); //  другий аргумент – номер символу*/

// А якщо відємне ?
/*var str = "стрибок з хитроперепідвивертом";
console.log(str.substring(9, -1)); //  -1<9 вони міняються місцями. Крім того -1 наводиться до 0
console.log(str.substr(9, -2)); //Взагалі гадає не розуміє відємне число, тобто в мене міє 9 та -2 нічого не має - пустий рядок
console.log(str.slice(9, -1)); // Бере значення з кінця*/

//Два слова про юнікод
/*console.log(String.fromCharCode("97"));
console.log("qbc".charCodeAt(0));*/






