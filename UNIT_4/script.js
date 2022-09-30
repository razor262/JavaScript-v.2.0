/*
кнопка меняющая цвет

let one = document.querySelector('button')

one.addEventListener('click', myFunction)

function myFunction() {

    one = document.querySelector('button').style.background =
        document.querySelector('#one').value
    console.log(one)
}
*/
/*
Task 1
Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.
*/
/*
let one = document.querySelector('.b-1')

one.addEventListener('click', myFunction)

function myFunction() {
    alert('задача номер 1')
}
*/
/*
Task 2
Создайте input.b-2 type=button - при нажатии на него выводите alert с 
номером задачи. Номер задачи просто пропишите вручную.
*/
/*
let one = document.querySelector('.b-2')

one.addEventListener('click', myFunction)

function myFunction() {
    alert('задача номер 2')
}
*/
/*
Task 3
Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.
*/
/*
let one = document.querySelector('.p-3')

one.addEventListener('click', myFunction)

function myFunction() {
    alert('задача номер 3')
}
*/
/*
Task 4
Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true 
если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано
 другое, осуществляется в div.out-номер задачи. В данном случае div.out-4

 .checked - выводит состояние чекбокса
*/
/*
let one = document.querySelector('.i-4')
let button = document.querySelector('.b-4')

button.addEventListener('click', myFunction)

function myFunction() {
    //alert(one.checked == true)

    if (one.checked == true) {
        alert('задача номер 4')
    } else {
        alert('пусто')
    }

} 
*/
/*
Task 5
Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5"
 - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и 
 false если не выбран. Вывод везде в задачах, где не указано другое, 
 осуществляется в div.out-номер задачи. В данном случае div.out-5.
 */
/*
let one = document.querySelector('.i-5')
let button = document.querySelector('.b-5')
let out = document.querySelector('.out-5')

button.addEventListener('click', myFunction)

function myFunction() {
    //alert(one.checked == true)

    if (one.checked == true) {
        out.innerHTML = "i-5"
    } else {
        alert('пусто')
    }

} 
*/
/*
Task 6
Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите
 value из input в div.out-6.
 input(hidden) - скрытый ввод
 */
/*
let one = document.querySelector('.i-6')
let button = document.querySelector('.b-6')
let out = document.querySelector('.out-6')

button.addEventListener('click', myFunction)

function myFunction() {
    out.innerHTML = one.value
    //alert(one.checked)
    
        if (one.checked == true) {
            out.innerHTML = "i-5"
        } else {
            alert('пусто')
        }

} 
*/
/*
Task 7
Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите
 в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля 
 больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке
  используйте length.
*/
let one = document.querySelector('.i-7')
let button = document.querySelector('.b-7')
let out = document.querySelector('.out-7')

button.addEventListener('click', myFunction)

function myFunction() {
    //out.innerHTML = one.value
    //alert(one.checked)

    if (one.length >= 6) {
        out.innerHTML = 1
    } else {
        out.innerHTML = 0
    }

} 