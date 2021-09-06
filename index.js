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

Мой Код

let login = prompt("Кто там?", "");
if (login == "Админ") {
  let password = prompt("Пароль?", "");
  if (password == "Я Главный") {
    alert("Здраствуйте!");
  } else if (password == null || password == '') {
    alert("Отменено");
  } else {
  }
  alert("Неверный пароль");
} else if (login == null || password =='') {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

Код учебника 

let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}