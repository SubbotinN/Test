// console.log(massive);

//  const person = new Object  ()
//     person.name= 'Nikita'
//     person.subname = 'Subbotin'
//     person.age = 23

//  console.log(person)

// function sum(a , b) {
//   return a+b/b
// }
//   const result = sum (1, 5)

// console.log(result)
// let button1 = document.getElementById("button1");

// function click() {
//   alert("Yay");
// }
// button1.onclick = click;

// let btn2 = document.getElementById("btn2");

// function myFunction() {
//   let copyText = document.getElementById("myInput");
//   copyText.select();
//   document.execCommand("copy");
//   alert("Скопированный текст: " + copyText.value);
// }

// alert("Привет,Мир!");

// let message = "Hello";
// alert(message);

// let user = 'Nikita' , age = 23 , message = 'Hello'

// let admin = "Джон";

//  let name = admin;

//  alert(name);

// let namePlanet
// let userName

// let name = "Nikita";
// alert(`Привет ${name}!`);

// let age = prompt("Сколько тебе лет?");

// alert(`Тебе ${age} лет!`);S

// let isBoss = confirm("Ты здесь главный?");

// alert(isBoss);

// let userName = prompt("Как тебя зовут?");
// alert(`Тебя зовут ${userName}`);

// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// let age = prompt ('Возраст?', 18)
// let message = (age < 3) ? 'Здравствуй , малыш' :
// (age < 18) ? 'Привет!':
// (age < 100) ? 'Здраствуйте!':
// 'Какой необычный возраст!';

// alert( message)

// let name = prompt('Какое "официальное" название JS', "");

// if (name == "ECMAScript") {
//   alert("Верно");
// } else {
//   alert('Не знаете? "ECMAScript"!');
// }

// let value = prompt("Число", 0);
// if (value > 0) {
//   alert(1);
// } else if (value < 0) {
//   alert(-1);
// } else {
//   value == 0;
//   alert(0);
// }

// let result;

// if (a + b < 4) ? 'Мало' : 'Много'

// let message =
//  (login == 'Сотрудник') ? 'Привет' :
//  (login == 'Директор') ? 'Здравствуйте':
//  (login == '') ? 'Нет логина':
//  ''

// if ( age >= 14 && age <= 90)

// if (!(age >=14 && <=90))

// if (age 14 || age > 90)

// Мой Код

// let login = prompt("Кто там?", "");
// if (login == "Админ") {
//   let password = prompt("Пароль?", "");
//   if (password == "Я Главный") {
//     alert("Здраствуйте!");
//   } else if (password == null || password == '') {
//     alert("Отменено");
//   } else {
//   }
//   alert("Неверный пароль");
// } else if (login == null || password =='') {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }

// Код учебника

// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
//

// Мини задание с Хабра

// let fiz = "fizz";
// let buz = "buzz";
// let sum = fiz + buz;
// for (let test = 1; test < 101; test++)
//   if (test % 5 === 0 && test % 3 === 0) console.log(sum);
//   else if (test % 5 === 0) console.log(buz);
//   else if (test % 3 === 0) console.log(fiz);
//   else console.log(test);

// for (let a = 0; a <= 10; a++) {
//   if (a % 2 == 0) {
//     alert(a);
//   }
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// while (true) {
//   let a = prompt("Введите число больше 100", 0);
//   if (a > 100 || number == null) break;
// }

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }

//   alert(i);
// }

// let browser = prompt("Введите название браузера", 0);

// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okay we support these browsers too");1
// } else {
//   alert("We hope that this page looks ok!");
// }

// const number = +prompt("Введите число между 0 и 3", "");

// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   case 2 || "3":
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) { age > 18 ? true : confirm ('Родители разрешили?')}

// function checkAge(age) { age > 18 ||  confirm ('Родители разершили')}

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(3, 2));

// function pow(x, n)
// {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert(pow(x, n));
// }
