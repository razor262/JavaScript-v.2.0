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
*/
