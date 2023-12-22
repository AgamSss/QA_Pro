"use strict"
/**
 Об'єкт в JavaScript - це складний тип даних, який дозволяє зберігати колекцію значень та функцій,
 що пов'язані між собою. Об'єкти дозволяють організовувати дані у вигляді пар ключ-значення,
 де кожен ключ - це рядок (іноді називають "властивість"),
 а значення може бути різного типу даних, включаючи інші об'єкти, масиви, числа, рядки, функції тощо.
 */

/*var user = {
    name: "John",
    sName: "Snow"
};*/

/*console.log(user.name);
console.log(user["sName"]);*/

//"через точку" можна не тільки звертатися до властивостей, але і "створювати" їх
/*user.age = 25;

console.log(typeof user);
console.log(user.name + " " + user.sName);
console.log("User age= " + user.age);*/

// Ми можемо замінити властивість на інше значення
/*var user = {
    name: "John",
    sName: "Snow"
};
user.sName = 'Dou';
console.log(user.sName);*/

// Якщо ми можемо додавати, змінювати нові властивості, то як нам їх видаляти
/*var user = {
    name: "John",
    sName: "Snow"
};

delete user.sName;
console.log(user.sName);*/

// Може здатися що властивості в об'єкті це просто змінні. Але є маленька різниця
/*var x = 12;
var obj = {
    "user name": "Василій",
    for: x,
    "2name": "Василій",
    14: true,
    'stop!': 'stop'
}*/
/*console.log(obj["user name"]);
console.log(obj.for);
console.log(obj[10 + 4]);
console.log(obj['stop!']);*/

// Також ми можемо робити навіть так
/*var userName = "stop!";
console.log(obj[userName]);*/

//Властивістю об'єкта може бути інший об'єкт!
/*var obj = {
    name: 'Test',
    lastName: 'Test',
    credentials: {
        login: "test.test",
        password: 'Test123'
    }
}
console.log(obj.name);
console.log(obj.credentials);
console.log(obj.credentials.login);*/

// Дуже цікава штука обчислювані імена властивостей
/*let userType = 'admin';
let obj = {
    name: 'Test',
    lastName: 'Test',
    credentials: {
        login: "test.test",
        password: 'Test123'
    },
    [userType]:true
}
console.log(obj[userType]);*/


// Властивістю об'єкта може навіть функція, точніше сказати метод
/*var group = {
    name: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo: function () {
        console.log('Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor);
    }
}

group.teachersInfo();*/

// Інший спосіб запису, для нас в цілому нічого не зміниться!
/*var group = {
    name: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo () {
        return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor;
    }
}

console.log(group.teachersInfo());*/

// Цілком собі законі та всім відомі гетери та сетери
/*var group = {
    name: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo() {
        return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor;
    },
    getName() {
        return group.name;
    },
    setName(name) {
        group.name = name;
    }
}
console.log(group.getName());
group.setName('Cucucu');
console.log(group.getName());*/

// Але є також два цікавих методи! get, set !!
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    get studentCount() {
        return group.students;
    }
}
// Виглядає як звичайна властивість, але це не властивість
console.log(group.studentCount);
group.studentCount = 'Alex'; */// Cannot set property teachersInfo of #<Object> which has only a getter

// Додамо set
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    get studentCount() {
        return group.students;
    },
    set studentCount(count){
        group.students = count;
    }
}
console.log(group.studentCount);
group.studentCount = 44;
console.log(group.studentCount);*/

//Функція - це ЗНАЧЕННЯ, таке саме, як number або string
/*function test() {
    console.log("Тестова функція!");
}

var x = "String value";
//x(); //Ошибка!
x = test;
x();
console.log('x=' + x);*/

//Відповідно - методом може бути і функція, оголошена будь-де!
/*function test(){
    console.log("Hello, world!");
}

var user = {
    login: 'root',
    sayHello: test
}

user.sayHello();*/

//Хотілося б, щоб МЕТОДИ об'єкта працювали з властивостями об'єкта.
/*var login = 'global login';
var sName = 'global sName';*/

/*var user = {
    login: "John",
    sName: "Dow",
    age: 25,
    greet: function (greet1) {
        //console.log(greet1 + ', object! from ' + login + ' ' + sName); // Свойства это НЕ переменные!
        console.log(greet1 + ', object! from ' + user.login + ' ' + user.sName);
    }
}
user.greet('hello');*/

//this - контекст виконання.
/*var user = {
    name: "John",
    sName: "Dow",
    age: 25,
    greet: function (greet) {
        console.log(greet + ', object! from ' + this.name + ' ' + this.xfxdfds + ' ' + this.age);
    }
}
user.greet('hello');*/

//Контекст залежить лише від того, звідки викликано функцію.
/*var login='global Login';
function test() {
    console.log('this.login=' + this.login);
}

//test();//Помилка! Однак, варто вимкнути use strict...

//А тепер – фокус!
var user = {
    login: 'Вася',
    age: 25,
    sayHello: test
}
user.sayHello();*/

//"Жонглюємо" методами.
/*var user1 = {
    login: 'Вася',
    age: 25,
    getInfo: function () {
        console.log('my name is ' + this.login + ', my age=' + this.age)
    }
}

var user2 = {
    login: 'Петя',
    age: 27
}
user2.isHasWork = true;
user2.getInfo = user1.getInfo;

user1.getInfo();
user2['getInfo']();*/

//Ускладнюємо номер – втрачаємо контекст


/*var user = {
    login: "Василій",
    age: 25,
    method: function () {
        function test() {
            console.log("Пишемо ім'я: " + this.login + " закінчили");
        }

        test(); //Ми "втратили" контекст.
    }
}
user.method();*/

//Як уникнути такої неприємності?
/*var user = {
    login: "Василій",
    age: 25,
    method: function () {

        function test(obj,key) {
            console.log("Пишемо ім'я: " + obj[key]);
        }

        test(this,'login'); //Передаємо контекст у функцію
    }
}

user.method();*/

//Можна зробити так
/*var user = {
    login: "Василій",
    age: 25,
    method: function () {
        var self = this; //контекст "зафіксований" у змінній

       /!* console.log(typeof this);
        console.log(this);
        console.log(self);*!/

        function test() {

            console.log("Пишемо ім'я: " + self.login);
            self.a = {name: "hello"};
        }

        test();
    }
}
user.method();
console.log(user.a.name);*/

// Функція – теж об'єкт. І він має методи!
/*var user = {
    login: "supervisor",
    age: 25,
    admin: false
}

function some(object) {
     //console.log("Login: "+this.login+'\nage: '+this.age);
    console.log("Login: " + object.login + '\nage: ' + object.age);
}*/


//some(); // Помилка
//some.call(user);  //Викликає функцію, причому – у контексті зазначеного об'єкта!
//some(user); // Але в цілому можна і так

//Як дізнатися, чи є в об'єкті необхідна нам властивість?
/*var user = {
    login: "JohnSnow",
    age: 25,
    admin: undefined
}
console.log("User second name: " + user.sName);
if (user.sName === undefined) {
    console.log('Такого свойства в объекте нет');
}*/

//Однак що робити із властивістю admin?
/*var user = {
    login: "JohnSnow",
    age: 25,
    admin: undefined
}*/

/*console.log('Перевіримо властивість "admin"');
if ("admin" in user)
    console.log("Є така властивість");
else
    console.log("немає такої властивості");*/

/*console.log('Перевіримо властивість "sName"');
if ("sName" in user)
    console.log("Є така властивість");
else
    console.log("немає такої властивості");*/

//Перебір властивостей об'єкту
/*var objjjjj = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    7: "another",
    x: 12,
    y: 34,
    z: 45
}*/

//Чогось не вистачає, якщо використовувати методику роботи як з масивами, але...
/*for (let i = 0; i in obj; i++) {
    console.log(i + ': ' + obj[i]);
}*/

//А ось так краще, звісно. Новий for для нас!
/*for (let key in objjjjj){
    console.log(key + ': ' + objjjjj[key]);
}*/





// Об'єкт - тип посилання!
/*
var user = {
    name: "John",
    age: 25,
    admin: true
}

var x = user;
// Тепер давайте подивимося на об'єкт юзер
/!*for (const i in x) {
    console.log(x[i])
}*!/

// А тепер змінимо об'єкт x та об'єкт user
x.admin = false;
user.age = 105;

console.log("User is:");

console.log(x);
console.log(user);
*/

// І трошки про методи для роботи з об'єктом
// Метод keys - повертає всі ключі об'єкта
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    print: function (){
        console.log(this.groupName);
    },
    get studentCount() {
        return this.students;
    },
    set count(count){
        this.students = count;
    }
}

let keys = Object.keys(group);
console.log(keys);*/

// Метод values - повертає всі значення об'єкта
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    print: function (){
        console.log(this.groupName);
    },
    get studentCount() {
        return this.students;
    },
    set count(count){
        this.students = count;
    }
}

let values = Object.values(group);
console.log(values);*/

// Метод - повертає пари ключ значення
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    print: function (){
        console.log(this.groupName);
    },
    get studentCount() {
        return this.students;
    },
    set count(count){
        this.students = count;
    }
}

let values = Object.entries(group);
console.log(values);*/

//Про важливість деяких дрібниць :)
/*var obj = {
    go: function () {
        console.log(this)
    }
}
(obj.go)();*/
