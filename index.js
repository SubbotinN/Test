// const massive = ['Первый','Второй', 'Третий', 'Четвертый']

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

let button1 = document.getElementById('button1')

function click () {
  alert ('Yay')
}
button1.onclick = click

let btn2 = document.getElementById('btn2')

function myFunction() {
  let copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  alert("Скопированный текст: " + copyText.value);
}