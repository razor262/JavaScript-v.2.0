/*
Task 1

При нажатии кнопки b-1 срабатывает функция f1. Функция 
должна прочитать содержимое i-1 и сравнить его с 
числом 4 (сравнение ==). Результат сравнения - true или 
false выведите в out-1.
*/
/*
let input = document.querySelector('.i-1')
let out = document.querySelector('.out')
let button = document.querySelector('.b-1')


button.addEventListener('click', myFunction)

function myFunction() {
    //console.log(input.value)
    if(input.value == 4) {
        //console.log("true")
        out.innerHTML = 'true'
    } else {
        out.innerHTML = 'false'
        //console.log("false")
    }
}
*/
/*
Task 2

Даны две переменные a21 и a22. При нажатии кнопки b-2, 
запускается функция f2. Функция должна сравнить переменные
 с помощью if else и вывести в out-2 число, которое больше. 
 Вариант равенства переменных не рассматриваем.
*/
/*
let a21 = 3, a22 = 3
let button = document.querySelector('.b-2')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
    //console.log(input.value)
    if(a21 > a22) {
        //console.log("true")
        out.innerHTML = a21
    } else if(a22 > a21) {
        out.innerHTML = a22
        //console.log("false")
    } else {
        out.innerHTML ='они равны'
    }
}
*/