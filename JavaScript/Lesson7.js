//Регулярные выражения

//RegExp - це об'єкт, який можна створити літералом
/*var str = "миші, щури, знову миші, хом'яки, ховрахи";
var re = /щури/;
console.log(typeof re);
console.log(str.search(re)); // Шукаємо шаблон у рядку
console.log(str.search(/кіт/)); // А якщо не знайшли ?
console.log(re.test(str)); //Тестуємо рядок на наявність шаблону*/


//Однак поки що не сталося нічого, чого не міг би зробити indexOf();
/*var str1 = "vasja@yahoo.com";
var str2 = "petja@gmail .com";
var re = /@gmail|@yandex/ // значок | - внутрішній оператор мови регулярних виразів, що позначає "або"
console.log(str1 + ': ' + str1.search(re)); // Не знайшли
console.log(str2 + ': ' + str2.search(re)); // Знайшли, хоча там лише @gmail

console.log("Тестуємо перший рядок: " + re.test(str1)); //І у зворотний бік
console.log("Тестуємо другий рядок: " + re.test(str2)); //Якось менш інформативно – тільки так чи ні.*/

//Перелік альтернативних варіантів можна укласти в дужки
/*var str1 = "vasja@yahoo.com";
var str2 = "petja@gmail.com"; //зверніть увагу: тут помилка!
var re = /(@gmail|@yandex).com/; // З точкою тут не все так просто
console.log(str1 + ': ' + re.test(str1));
console.log(str2 + ': ' + re.test(str2));*/

//Спеціальні символи. Крапка "." - будь-який символ
/*var str = "ivanov_ruslan@yahoo.com";
var re = /.com/;
console.log(str + " - " + re.test(str)); //Очікувано повертає true
//Змінимо адресу
str = "ivanov_commer@gmail";
console.log(str + " - " + re.test(str)); //????*/

/*var str = "У цьому вся тексті зустрічається символ \" | \". Як знайти його через регулярний вираз?";
console.log(str);
var re = /\||\./; //Звичайно ж - екранувати
console.log("Тестуємо:" + re.test(str));*/

//Можемо шукати діапазони значень
/*var str = "vasja@mail.ru";
var re = /[bcdi]/;
console.log(re.test(str)); //Поверне правду, якщо у рядку є хоча б один символ із зазначеного набору
console.log(str.search(re));*/

// /[a-z]/ діапазон значень від a до z. Тобто - всі малі англійські літери
// /[0-9]/ всі цифри
// /[a-zA-Z0-9]/ загалом усі літери латинського алфавіту, а разом із ними ще й цифри
// Скорочення
// /\d/ Те саме, що і [0-9]
// /\w/ те ж, що [a-zA-Z0-9_] всі літери англійського алфавіту, цифри та знак підкреслення
// /\s/ різні "пробільні" символи


//Спокійно можемо комбінувати обидва підходи – і це вже цікаво
/*var str = "Сьогодні 6 день неділі";
var re = /[1-7asd] день неділі/;
console.log(re.test(str));*/

//діапазон "крім"
//var str = "Дуже довгий рядок, в якому немає англійських букв і цифр";
/*var re = /[^\w]/; // Чи є щось, крім англійського алфавіту та цифр?
console.log(re.test(str));
console.log(str.search(re));*/ // І справді, перший (нульовий) символ не підходить під шаблон.

/*var re = /[^а-я]/;
console.log("Друга спроба: " + re.test(str));
console.log(str.search(re)); // І справді, перша літера - велика!*/

/*var re = /[^а-яД]/;
console.log("Третя спроба: " + re.test(str));
console.log(str.search(re)); // І справді, п'ятий символ - пробіл.*/

/*var re = /[^а-яД\s]/;
console.log("Четверта спроба: " + re.test(str));//Та що ж таке?*/

/*var re = /[^а-я,єіД\s]/;
console.log("Четверта спроба: " + re.test(str));//Та що ж таке?
console.log(str.search(re))*/

// \ D - все, крім цифр
// \ W - Крім букв, цифр і _
// \S - крім пробілових символів

// Однак усередині групи точка – це лише точка.
// /[.+()]/  просто символи
// /[-[^]/  теж просто символи, хоча все могло бути інакше, якби вони стояли на інших місцях!

//Можемо вказати кількість повторень
// console.log(/abc/.test("abbc")); //false
// console.log(/ab{2,4}c/.test("abc")); //false - занадто мало b
// console.log(/ab{2,4}c/.test("abbbbbc")); //false - занадто багато b
// console.log(/ab{2,4}c/.test("abbbc")); //true -в самий раз
// console.log(/ab{2,}c/.test("abbbbbbbbbbbbc"));//два і більше
// console.log(/ab{2}c/.test("abc")); //Строго два

//Для часто використовуваних є скорочення
/*console.log(/ab?c/.test("abc")); //{0,1} - або є (але тільки один), або взагалі немає
console.log(/ab?c/.test("ac")); // теж годиться
console.log(/ab?c/.test("abbc"));//ні вже ні*/

/*var re = /ab+c/; //{1,} один чи більше
console.log(re.test("abc"));
console.log(re.test("abbbbbbbbbbbbbbbbbbbbc"));
console.log(re.test("ac")); //false*/


/*var re = /ab*c/; //{0,} Або немає, або є скільки завгодно
console.log(re.test("abc"));
console.log(re.test("abbbbbbbbbbbbbbbbbbbbc"));
console.log(re.test("ac"));*/

//Модифікатори, відповідальні за " кількість " , називаються квантифікаторами.
// Отже, знаємо: +, ?, * {}

//Практика: формати дат
/*var strs = '31-05-2017';


var re = /(0[1-9]|[12]\d|3[01])-(0[1-9]|1[12])-\d{4}/; // Помилка ?
console.log(re.test(strs));
console.log(strs.search(re));*/


/*var str = '14-04-2017';
var re = /(0[1-9]|[12]\d|3[01])-(0[1-9]|1[12])-\d{4}/;
console.log(re.test(str));

var str = '14-04-2017xcvxcvcv'; //А якщо так?
console.log(re.test(str));

var re = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[12])-\d{4}$/; //Знайома нам галочка - але вже зовсім іншому значенні
console.log(re.test(str));*/

//Якщо у нас досить складний шаблон, нам часто може бути цікаво - що ж ми знайшли?
/*var str = " a--a abda acca ajttta ahgta avbga";
var re = /a[a-z]{2}a/;
console.log('Зразок: ' + str);
console.log(str.search(re));
var res = str.match(re);
console.log(res); //замість просто цифри нам приїхало щось досить складне.*/

//Шукаємо щось, укладене у лапки
/*var str = 'У цьому рядку "рядку" буде два "місця", відзначені лапками';
var re = /".+"/;
console.log("Зразок: " + str);
console.log(str.match(re)[0]);*/
// Можливо, ми хотіли побачити інший результат.

// Звичайно, ми можемо скласти шаблон інакше:
/*var str = 'У цьому рядку "рядку" буде два "місця", відзначені лапками';
var re = /"[^"]+"/;
console.log("Зразок: " + str);
console.log(str.match(re)[0]);*/

//Але є ще один варіант - включити "лінивий" пошук
/*
var str = 'У цьому "рядку" буде два "місця", відзначені лапками';
var re = /".+?"/; // Ох вже цей "?", адже він сам є квантифікатором!
console.log("Зразок: " + str);
console.log(str.match(re)[0]);
*/

// Ще приклад
/*const text = "aabab";
const regex = /a.*?b/; // лінивий пошук
const result = text.match(regex);
console.log(result); //  ['aab']*/


//Прапори регулярних виразів

//Найпростіший випадок: реєстронезалежний пошук.
/*var str = "Ох вже ця вічна ВОзНЯ з регістром"
var re = /возня/i;

console.log("Знайшли щось? " + re.test(str));
console.log("А що саме? " + str.match(re));*/

//Знайдеться все. Наш перший приклад:
/* var str = "миші, щури, знову миші, хом'яки, ховрахи";
var re = /миші/;

var res = str.replace(re, "ховрахи");
console.log("Було: " + str + "\nСтало: " + res); // Заміна тільки перших мишей*/

/*var str = "миші, щури, знову миші, хом'яки, ховрахи";
var re = /миші/g;

var res = str.replace(re, "ховрахи");
console.log("Було: " + str + "\nСтало: " + res); // Заміна тільки перших мишей*/

// Ще один прапор - m (multiline)
/*var str = "abc\ndef\nghi";
var re = /^[a-z]/g;
var res = str.replace(re, "*");
console.log(res); */// Як не крути, а "початок рядка" у нас тільки один

/*var str = "a\nd\ng";
re = /^[a-z]/gm
res = str.replace(re, "*");
console.log(res); //Чи ні?!*/


//Цікаво впливає прапор g на match
/*var str = "шалені миші, щури, знову Миші, хом'яки, вуха, Суші, ховрахи";
var re = /[а-я]+ші/gi;
var res = str.match(re);
console.log(res);*/

//Посилання у регулярних виразах
/*
var re = /['"][^'"]*['"]/; // Шукаємо щось, укладене в лапки (подвійні чи одинарні);
//var str="abc\"def\"ghijk";
//var str="abc\'def\'ghijk";
//var str = "abc\"def\'ghijk"; // А вот это непорядок
console.log(re.test(str));
*/


// Скобочні групи. Наш рядок має закінчитися так само, як і почався
/*var re = /(['"])[^'"]*\1/; // Екранована одиниця це вже не цифра - а номер посилання!
//var str = "abc\"def\"ghijk";
//var str = "abc'def'ghijk";
//var str = "abc\"def\'ghijk"; // вже не працює
console.log(re.test(str));
var res = str.match(re);
console.log(res); //І знову результат match змінив формат*/

// Ще приклад
/*var str ="шалені 'миші', \"щури\", знову 'миші', 'хом'яки', \"вуха\", Суші, ховрахи";
var re=/(['"])[^'"]+\1/g;
var res = str.match(re);
console.log(res);*/


//Складніші посилання - зовнішні
//Згаданий вище replase працює не тільки (і не стільки) з рядками, а й з регулярними виразами
/*var str = "12aaa54dfhj5546b4mn56bmi456mn456";
console.log("Зразок: " + str);*/

/*var re = /\d+[a-z]+/;
var res = str.replace(re, '-+++-');
console.log(res);*/

// А тепер ми хочемо не просто замінити знайдену групу, а поміняти місцями цифри та літери.
/*var re = /(\d+)([a-z]+)/g;
var res = str.replace(re, "|$2-$1|");
console.log(res);*/

//Ще кілька слів про дужні групи
/*var str = "Великий і жахливий Вася Пупкін вийшов на ґанок";
var re = /(Вася) (Пупкін)/;
console.log("Зразок: " + str);
//var res = str.replace(re, "$2 $1");

//var res = str.replace(re, "$1 $`"); // Частина рядка до збігу (символ ` над Ё)
//var res = str.replace(re, "$1 _$'_"); // Частина рядка після збігу
//var res = str.replace(re, "$1 _$&_"); //Збіг цілком

console.log(res);*/


//Якщо скобочна група потрібна нам тільки для угруповання елементів і ми не хочемо "запам'ятовувати" її, спочатку потрібно поставити умовний знак "?:" (Так, знову він):
/*var str = "Великий і жахливий Петя Пяточкін вийшов на ґанок";
var re = /(?:Вася|Петя) (?:Пупкін|Пяточкін)/;
var res = str.match(re);
console.log(res);*/

//До речі, split теж вміє працювати з регулярними виразами
/*var str = "миші щури: знову миші, вуші, Суші. ховрахи";
var re = /[:,.]/i;
console.log(str.search(re))
var res = str.split(re);
console.log(res);*/