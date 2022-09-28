/*
Task 1

Создайте две переменные a = 7 и b = 9. Выведите в консоль результа 
умножения a на b.
*/
/*
let a = 7, b = 9
console.log( a * b )
*/
/*
Task 2

Создайте две переменные
 a = 7 и b = 9. Выведите
  в консоль результа
   умножения a на b.
*/
/*
let a = 7, b = 9
console.log( a / b )
*/
/*Task 3

Создайте две переменные
 e = 3 и f = 5. Выведите 
 на страницу результат 
 сложения e + f.
*/
/*
let e = 3, f = 5
console.log( e + f )
*/
/*
Task 4

Создайте две переменные 
e1 = '3' и f1 = 5. Выведите
 на страницу результат
  сложения e1 + f1. 
  Объясните разницу.
*/
/*
let e1 = '3', f1 = 5
console.log( e1 + f1 )
*/
/*
Task 5

Создайте две переменные
 e2 = 3 и f2 = 0. Выведите
  на страницу результат 
  деления e2 на f2.
*/
/*
let e2 = 3, f2 = 0
console.log( e2 / f2 )
*/
/*
Task 6

Создайте две переменные 
e3 = 3 и f3 = 'Hello'. 
Выведите на страницу 
результат сложения двух
 переменных.
*/
/*
let e3 = 3, f3 = 'Hello'
console.log( e3 + f3 )
*/
/*
Task 7

Создайте две переменные 
e4 = 3 и f4 = 'Hello'. 
Выведите на страницу 
результат умножения двух 
переменных.
*/
/*
let e4 = 3, f4 = 'Hello'
console.log( e4 * f4 )
*/
/*
Task 8

Создайте input и кнопку.
 По нажатию на кнопку 
 выполняется функция,
  которая выводит в 
консоль то, что пользователь
 ввел в input.
*/
/*
let one = document.querySelector('.input-in')
let button = document.querySelector('button')

button.onclick = function(){
    console.log(one.value)
}
*/
/*
Task 9

Создайте input и кнопку. По нажатию на кнопку выполняется 
функция, которая выводит на страницу, что пользователь
 ввел в input. Добавьте очистку input после нажатия кнопки.
*/
/*
let one = document.querySelector('.input-in')
let button = document.querySelector('button')

button.onclick = function(){
    console.log(one.value)
    one.value = []
}
*/
/*
Task 10

Создайте input и кнопку. По нажатию на кнопку выполняется 
функция, которая выводит на страницу число, которое ввел
 пользователь умноженное на 10.
*/
/*
let one = document.querySelector('.input-in')
let button = document.querySelector('button')

button.onclick = function(){
    console.log(one.value * 10)
    one.value = []
}
*/
/*
Task 11

Создайте input и кнопку. По нажатию на кнопку выполняется 
функция, которая выводит на страницу число, которое ввел 
пользователь и к нему добавленное число 10.
*/
/*
let one = document.querySelector('.input-in')
let button = document.querySelector('button')

button.onclick = function(){
    console.log(+one.value + 10)
    one.value = []
}
*/
/*
Task 12

Создайте два input и кнопку. В первый input пользователь 
вводит имя, во второе фамилию. При нажатии кнопки 
выполняется функция, которая выводит в консоль строку
 'Hello имя фамилия', где имя - имя пользователя и фамилия
  - введенная фамилия.
*/
/*
let one = document.querySelector('.input-in')
let two = document.querySelector('.input-two')
let button = document.querySelector('button')


button.onclick = function(){
    console.log(+one.value + +two.value)
    one.value = []
    two.value = []
}
*/
/*
Task 13

Создайте два input и кнопку. В input пользователь вводит 
числа. При нажатии кнопки выполняется функция, которая 
выводит сумму данных двух чисел на страницу.
*/
/*
let one = document.querySelector('.input-in')
let two = document.querySelector('.input-two')
let out = document.querySelector('.out')
let button = document.querySelector('button')


button.onclick = function(){
    out.innerHTML = +one.value + +two.value
    one.value = []
    two.value = []
}
*/
/*
Task 14

Создайте input и пропишите ему в html value = 77. 
С помощью JS измените value на 'Hello'.
*/
/*
let one = document.querySelector('.input-in')

one.value = 'Hello'
*/
/*
Task 15

Создайте input и получите его в переменную y. 
В js выполните следующее присвоение: 
y.style.border = '2px solid red' . Изучите результат 
операции. 
*/
/*
let y = document.querySelector('.input-in')
y.style.border = '2px solid red'
*/
/*
Task 16

Создайте два input type=number, куда пользователь может 
ввести числа. Выведите на страницу сумму данных чисел.
*/
/*
let one = document.querySelector('.input-in')
let two = document.querySelector('.input-two')
let out = document.querySelector('.out')
let button = document.querySelector('button')


button.onclick = function(){
    out.innerHTML = +one.value + +two.value
    one.value = []
    two.value = []
}
*/
/*
Task 17

Создайте input type="text" куда пользователь может ввести
 строку и число. Создайте функцию, которая запускается
  по нажатию на кнопку. Получите значение из input в 
  переменную t. А затем сделайте операцию t = parseInt(t),
   и результат операции выведите в консоль. Прочитайте за 
   эту операцию. Попробуйте по очереди вводить 44, 44aaa,
    44.3, a45 . Изучите вывод.
    */
   /*
    let t = document.querySelector('.input-in')
    //let two = document.querySelector('.input-two')
    //let out = document.querySelector('.out')
    let button = document.querySelector('button')
    
    
    button.onclick = function(){
        //out.innerHTML = +one.value + +two.value
        //one.value = []
        //two.value = []
        console.log(t = parseInt(t))
    }
    */
   /*
   Task 18

Создайте input type="text" куда пользователь может ввести 
строку и число. Создайте функцию, которая запускается по
 нажатию на кнопку. Получите значение из input в переменную
  t. А затем сделайте операцию t = parseFloat(t), и 
  результат операции выведите в консоль. Прочитайте за 
  эту операцию. Попробуйте по очереди вводить 44, 44aaa,
   44.3, a45 . Изучите вывод.
   */