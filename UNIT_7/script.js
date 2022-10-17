/*
 
Task 1

Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.

let a1 = 8;
function t1() {

}
document.querySelector(‘.b-1’).onclick = t1;
*/
/*
document.querySelector('.b-1').onclick = t1;
let out = document.querySelector('.out')

let a1 = 8;
function t1() {
    out.innerHTML = a1
}
*/
/*
Task 2

Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает переменную a2. Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения. Обратите внимание, как изменился вызов функции.

let a2 = 8;
function t2() {

}
document.querySelector(‘.b-2’).onclick =function() {
    document.querySelector(‘.out-2’).textContent = f2();
}
*//*
let a2 = 8;
function f2() {
 return a2
}
document.querySelector('.b-1').onclick =function() {
    document.querySelector('.out').textContent = f2();

}
*/
/*
Task 3

Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 параметра и выводит их произведение. Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b. Протестируем функцию на двух примерах, с помощью кнопок b3-1 и b3-2.

function t3(a,b) {

}
document.querySelector(‘.b-3-1’).onclick =function() {
    document.querySelector(‘.out-3-1’).textContent = t3(3,4);
}
document.querySelector(‘.b-3-2’).onclick = function(){
    document.querySelector(‘.out-3-2’).textContent = t3(5,6);
}
*/
/*

function t3(a,b) {
    return a * b
}
document.querySelector('.b-1').onclick =function() {
    document.querySelector('.out').textContent = t3(3,4);
}
document.querySelector('.b-2').onclick = function(){
    document.querySelector('.out').textContent = t3(5,6);
}
*/
/*
Task 4

Напишите функцию t4 которая принимает ваш год рождения и вычисляет ваш возраст.*//*
let input = document.querySelector('.input')
let button = document.querySelector('.b-1')
//console.log(input)
button.addEventListener("click", myFunction)

function myFunction() {
    //console.log(input.value)
    console.log(2022 - input.value)
}*/
/*
Task 5

Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.
*//*
let input = document.querySelector('.input')
let button = document.querySelector('.b-1')
//console.log(input)
button.addEventListener("click", myFunction)

function myFunction() {
    //console.log(input.value)
    console.log('hello ' + input.value)
}
*/
/*
Task 6

Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра.*/ 
let min = document.querySelector('.input1')
let max = document.querySelector('.input2')

let button = document.querySelector('.b-1')

button.addEventListener("click", getRandomIntInclusive)

/*
function getRandomIntInclusive() {
    alert(min.value)
}*/


function getRandomIntInclusive(min, max) {
  
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум и минимум включаются
}
// getRandomIntInclusive(min, max)
