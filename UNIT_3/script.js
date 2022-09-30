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
/*
Task 3

Даны 2 input - i-31 и i-32, оба - input[type=number]. 
При нажатии кнопки b-3 срабатывает функция f3. Функция 
должна прочитать содержимое i-31 и i-32 в переменные и 
сравнить их, вывести в out-3 большее число.

Проведите самостоятельный тест работы, введите пары чисел 
4 и 9, 9 и 22, 5 и 111.
*/
/*
let input = document.querySelector('.i-31')
let input2 = document.querySelector('.i-32')
let out = document.querySelector('.out-3')
let button = document.querySelector('.b-3')


button.addEventListener('click', f3)

function f3() {
    //console.log(input.value)
    if(input.value > input2.value) {
        //console.log("true")
        out.innerHTML = input.value
    } else if(input2.value > input.value) {
        //console.log("true")
        out.innerHTML = input2.value
    } 
    else {
        out.innerHTML = 'они равны'
        //console.log("false")
    }
}
*/
/*
Task 4

Создайте на странице input[type=number] с классом i-4,
 куда пользователь может ввести год своего рождения. 
 Есть кнопка b-4 которая запускает функцию f4. Функция
  должна вывести в .out-4 число 1 если пользователю больше
   или равно 18 лет, и 0 если меньше.
*/
/*
let input = document.querySelector('.i-4')
let out = document.querySelector('.out-4')
let button = document.querySelector('.b-4')

button.addEventListener('click', f4)

function f4() {
    //console.log(input.value)
    if(input.value >= 18) {
        //console.log("true")
        out.innerHTML = 1
    }
    else {
        out.innerHTML = 0
        //console.log("false")
    }
}
*/
/*
Task 5

Создайте на странице input[type=number] с классом i-5,
 куда пользователь может ввести число. Есть кнопка b-5 
 которая запускает функцию f5. Функция должна вывести 
 в .out-5 символ m если число меньше нуля, 0 если число
  равно нулю и 1 если больше.
  */
/*
 let input = document.querySelector('.i-5')
 let out = document.querySelector('.out-5')
 let button = document.querySelector('.b-5')
 
 button.addEventListener('click', f5)
 
 function f5() {
     //console.log(input.value)
     if(input.value < 0) {
         //console.log("true")
         out.innerHTML = 'm'
     } else if(input.value == 0) {
       //console.log("true")
       out.innerHTML = 0
   }
     else {
         out.innerHTML = 1
         //console.log("false")
     }
 }
*/
/*
Task 6

Создайте на странице input[type=number] с классом i-6,
 куда пользователь может ввести число. Есть кнопка b-6
  которая запускает функцию f6. Функция должна вывести
   в .out-6 слово even если число четное и odd если нечетное.
Для проверки четности используется целочисленный остаток
 от деления на 2 (оператор %). Если остаток равен нулю
  - четное, нет - нечетное.
*/
/*
let input = document.querySelector('.i-6')
let out = document.querySelector('.out-6')
let button = document.querySelector('.b-6')

button.addEventListener('click', f6)

function f6() {
    
    if(input.value % 2 == 0) {
        out.innerHTML = 'even'

    }else {
        out.innerHTML = 'odd'
       
    }
}
*/
/*
Task 7

Даны 2 input - i-71 и i-72, оба - input[type=number]. 
При нажатии кнопки b-7 срабатывает функция f7. Функция 
должна число из i-71 возвести в степень i-72, 
вывести результат в out-7. Для возведения в степень 
можно использовать **, или Math.pow.
*/
/*
let input = document.querySelector('.i-71')
let input2 = document.querySelector('.i-72')
let out = document.querySelector('.out-7')
let button = document.querySelector('.b-7')

button.addEventListener('click', f7)

function f7() {
        out.innerHTML = Math.pow(input.value, input2.value)
        //out.innerHTML = input.value ** input2.value

}
*/
/*
Task 8

Дан select s-8, который содержит 3 значения: 1, 2, 3.
 Дана кнопка b-8. При ее нажатии срабатывает функция f8.
  Функция должна получить выбранное в select число, потом 
  с помощью switch case сравнить его поочередно 
  с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести
   в out-8 строку one, если 2 - two, если 3 - three.
*/
/*
Task 9

Создайте на странице input[type=number] с классом i-9,
 куда пользователь может ввести номер квартиры.
  Есть кнопка b-9 которая запускает функцию f9.
   Функция должна вывести в .out-9 номер подъезда,
    в котором находится квартира.

    если от 1 до 32 - то вывести цифру 1
    если от 33 до 43 - то вывести 2
    если от 44 до 64 - то 3.
    В противном случае, вывести 0.
*/
/*
let input = document.querySelector('.i-9')

let out = document.querySelector('.out-9')
let button = document.querySelector('.b-9')

button.addEventListener('click', f9)

function f9() {
    if(input.value >= 1 && input.value < 32){
        out.innerHTML = 1
    } else if(input.value >= 33 && input.value < 43){
        out.innerHTML = 2
    } else if(input.value >= 44 && input.value < 64){
        out.innerHTML = 3
    } else {
        out.innerHTML = 0
    }
        

}
*/
/*
Task 10

Дан select s-100. По нажатию кнопки, выведите value
 выбранного option в out-10.
*/
/*
let input = document.querySelector('.s-100')

let out = document.querySelector('.out-10')
let button = document.querySelector('button')

button.addEventListener('click', f10)

function f10() {
    out.innerHTML = input.value

        

}
*/
/*
Task 11

Дан select s-110. По изменению состояния select 
(событие onchange) выведите value выбранного option
 в out-11.
*/
/*
Task 12

Дан input i-120. По нажатию кнопки получите значение
 из input в переменную, а затем выведите в out-12 typeof 
 полученной переменной. Typeof позволяет определить тип 
 данных. Обратите внимание, данная задача уже решена, нужно 
 убрать комментарии и изучить работу. 
*/
/*
let input = document.querySelector('.i-120')
let out = document.querySelector('.out-12')
let button = document.querySelector('.b-12')

button.addEventListener('click', f12)

function f12() {
    let one = input.value
    out.innerHTML = typeof one
}
*/
/*
Task 13

Дан input i-130. В отличие от предыдущего задания - input
 type number. По нажатию кнопки получите значение из input 
 в переменную, а затем выведите в out-13 typeof полученной
  переменной. Typeof позволяет определить тип данных.
   Если вы правильно все сделали - то удивительно, но тип 
   данных будет string! Подумайте почему так? 
*/
/*
let input = document.querySelector('.i-130')
let out = document.querySelector('.out-13')
let button = document.querySelector('.b-12')

button.addEventListener('click', f12)

function f12() {
    let one = input.value
    out.innerHTML = typeof one
}
*/
/*
Task 14

Дан input i-141 и input-142, type=number. Дан select s-143,
 который содержит две операции - +, -, *, / . Дана кнопка
  b-14, при нажатии на которую срабатывает функция f14.
   Функция выводит в out-14 результат операций выбранной 
   в 3-м select к числам введенным в первом и втором input.
    Например выбрано 1 13 +, нужно вывести результат
     операции 1+13 т.е. 14. 
    */
/*
  let input = document.querySelector('.i-141')
  let summ = document.querySelector('.s-100')
  let input2 = document.querySelector('.i-142')
  let out = document.querySelector('.out-14')
  let button = document.querySelector('.b-14')

  button.addEventListener('click', f14)

  function f14() {
      let one = +input.value + summ.value + +input2.value
      out.innerHTML = one
  }
 */
/*
Task 15
Дан select s-151 и s-152, каждый из которых содержит 1 и 0. Дан select s-153,
 который содержит две операции - && и || . Дана кнопка b-15, при нажатии на 
 которую срабатывает функция f15. Функция выводит в out-15 результат логических
  операций выбранных в 3 select к числам выбранным в первом и втором select.
   Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.
*/
/*
let summ = document.querySelector('.s-100')
let summ2 = document.querySelector('.s-110')
let summ3 = document.querySelector('.s-120')

let out = document.querySelector('.out-15')
let button = document.querySelector('.b-15')

button.addEventListener('click', f15)

function f15() {
    let one = +summ.value + summ3.value + +summ2.value
    out.innerHTML = one
}
*/