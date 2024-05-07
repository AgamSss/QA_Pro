// CALLBACK

function letsGoHome(cbFunction, cbFunction2) {
    console.log('Call a taxi');
    console.log('On the road...');
    cbFunction(cbFunction2);
}

function printSmth(callback) {
    console.log('We are at home!');
    callback()
}

function sayGoodbye() {
    console.log('Goodbye!');
}

letsGoHome(printSmth, sayGoodbye);

// EVENT LOOP

function printName() {
    console.log('John');
}

function createOrder(){
    setInterval(()=>{
        console.log('Interval1')
    }, 100);
    setTimeout(()=>{
        console.log('TimeOut2')
    }, 0);
    console.log('Order is created');
}

function sayThanks() {
    console.log('Thank you! For your order');
}

printName();
createOrder();
sayThanks();

// TIMEOUT

//setTimeout(callback, delay, arg1, arg2, ads3, ...);


function saySmth(phrase, name) {
    console.log(`${phrase} ${name}!`);
}

setTimeout(saySmth, 4000, 'Hello', 'John');

//setTimeout(saySmth(), 1000); // неправильно!


// clear timeout
function saySmth(phrase, name) {
    console.log(`${phrase} ${name}!`);
}

const timerId = setTimeout(saySmth, 1000, 'Hello', 'John');

// якщо ми вирішимо скасувати виконання функції, ми викликаємо clearTimeout з ідентифікатором таймера
clearTimeout(timerId);


function saySmth(phrase, name) {
    return console.log(`${phrase} ${name}!`);
}

// Запускаємо функцію saySmth кожну секунду (кожні 1000 мілісекунд)
setInterval(saySmth, 1000, 'Hello', 'John');


const intervalId = setInterval(saySmth, 1000, 'Hello', 'John');

clearInterval(intervalId);


const menu = {
    americano: [
      { item: 'Burger', time: 3000 },
      { item: 'Fri', time: 1500 },
      { item: 'Cola', time: 500 },
    ],
    italiano: [
      { item: '🍕', time: 1500 },
      { item: '🥗', time: 1500 },
      { item: '🍷', time: 500 },
    ],
    breakfast: [
      { item: '🥪', time: 1000 },
      { item: '🍳', time: 2500 },
      { item: '☕', time: 1000 },
    ],
  };
  
  const order = (dishes, onComplete) => {
    console.log(`Start cooking order ...`);
    const orderResult = [];
  
    const getResultData = (dish, index) => {
      orderResult[index] = dish;
      if (orderResult.filter(Boolean).length === dishes.length) onComplete(orderResult);
    };
  
    const cookFood = ({ item, time }, index, onDishComplete) => {
      // const condition = +Math.random().toFixed();
      const condition = 0;
  
      setTimeout(() => {
        const dish = condition ? { status: 'fulfilled', value: item } : { status: 'rejected', reason: `${item} failed` };
        onDishComplete(dish, index);
      }, time);
    };
  
    dishes.forEach((item, index) => cookFood(item, index, getResultData));
  };
  
  order(menu.americano, console.log);

// PROMISE  

function result (a, b){
    return 'result is ' + (a + b) 
}

function asyncCallBack(a, b, result){
    console.log(result(a, b));  
} 

asyncCallBack(2,3, result)

const asyncPromiseFunction = (a, b) => {
    return new Promise((resolve, rejected) => {
        return resolve(a + b);
    }) 
}

// asyncPromiseFunction(2, 3)
//     .then((result) => {
//         funcWithPromise(result).then((result) => {
//         });
//         console.log('Result is ' + result);
//     })
//     .catch((error) => {
//         console.log('Error: ' + error);
//     })
//     .finally(() => {
//         console.log('Finally');
//     });


//   function workWithMocks(env, mocks = false, data = u){
//         if(mocks){
//             const apiCall = Promise.resolve(data);
//             apiCall.then(result => {
//                 console.log(result.name); 
//               });
//         } else {
//             const apiCall = fetch(env);
//             apiCall.then(result => {
//                 console.log(result.name); 
//               });
//         }
//   }

//     Promise
// 	.reject("Something went wrong")
// 	.catch(error => {
// 	  console.error(error); // Виведе: Something went wrong
// 	});

// const promiseA = Promise.resolve('Hello');
// const promiseB = Promise.resolve('Promise');
// const promiseC = Promise.resolve('All');
// const promisesCollection = Promise.all([promiseA, promiseB, promiseC]);

// promisesCollection
//   .then(x => x.toString())
//   .then(console.log);


//   const a = Promise.resolve('Hello');
//   const b = Promise.reject('Promise all rejected');
//   const c = Promise.resolve('All');
//   const promisesCollection1 = Promise.all([a, b, c]);
  
//   promisesCollection1
//     .then(x => x.toString().replaceAll(',', ' '))
//     .then(console.log)
//     .catch(console.log);

const setteledPromiseCol = Promise.allSettled([a, b, c])

setteledPromiseCol.then(console.log);

const getDelay = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const a = new Promise(resolve => setTimeout(resolve, getDelay(500, 1000), 'First'));
const b = new Promise(reject => setTimeout(reject, getDelay(500, 1000), 'Second'));
const c = new Promise((resolve, rejected) => setTimeout(resolve, getDelay(500, 1000), 'Third'));

// Promise.race([a, b, c])
// .then(x => console.log('Fulfilled ',x))
// .catch(x => console.log('Rejected ',x));

Promise.any([a, b, c])
.then(x => console.log('Fulfilled ',x))
.catch(x => console.log('Rejected ',x)); 


// ASYNC/AWAIT

// async function asyncFunction() {
//     return 'Hello';
// }

// asyncFunction().then(console.log);

async function getApiData(){
    const response = await axios.get('https://swapi.dev/api/people/1/');
    const data = await response.data;
    return data;
} 

async function postApiData(data){
    const response = await axios.post('https://swapi.dev/api/people/1/', data);
    return await response.body.authToken;
} 

// async ==> Promise 
await getApiData();
await postApiData(data);

const authToken = await postApiData(data);
const authToken2 = postApiData(data);
const authToken3 = await postApiData(data);


async function createNewCar(data) {
    try{
        const response = await axios.post('https://swapi.dev/api/people/1/', data);
        if(!response.ok){
            throw new Error('Request failed')
        }
        return await response.body.authToken;
    } 
    catch(error){
        console.log(error);
        throw error;
    } 
    finally {
        console.log('Finally');
    }
}


