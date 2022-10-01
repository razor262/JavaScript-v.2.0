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
/*
let one = document.querySelector('.i-7')
let button = document.querySelector('.b-7')
let out = document.querySelector('.out-7')

button.addEventListener('click', myFunction)

function myFunction() {

    out.innerHTML = one.value

    let a = one.value
    let array = []
    for (let i = 0; i < a.length; i++) {
        const element = i;
        console.log(element)
        array.push(element)
        console.log(array)
    }
    if (array.length >= 6) {
        out.innerHTML = 1
    } else {
        out.innerHTML = 0
    }

} */
/*
Task 8
Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте
 внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). 
 Добавьте на созданную кнопку событие клик и запуск функции f81. 
 Функция должна в .out-81 выводить value созданного input.i-81.
 */
/*
let one = document.querySelector('.out-8')
let button = document.querySelector('.b-8')

let count = 0

button.addEventListener('click', myFunction)

function myFunction() {

    let div = document.createElement('div');
    div.id = 'content';
    div.className = 'note';

    let input = document.createElement('input');
    input.id = 'inputS';
    input.className = 'input';
    div.appendChild(input);

    const buttonS = document.createElement('button')
    buttonS.className = "b-81"
    buttonS.textContent = 'pushing'
    div.appendChild(buttonS);

    document.body.appendChild(div);

    buttonS.addEventListener('click', f81)

    function f81() {

        one.innerHTML = inputS.value
        //console.log("push")

    }
}*/
/*
let one = document.querySelector('.i-8')
let button = document.querySelector('.b-8')

let count = 0

button.addEventListener('click', myFunction)

function myFunction() {

    const div = document.createElement('button')
    div.className = "myDiv"
    div.textContent = 'push'

    document.body.appendChild(div);
    count += 1
    console.log(count)

    div.addEventListener('click', fragmentS)
    let two = count
    function fragmentS() {

        console.log(two)

    }
}*/
/*
let div = document.createElement('div');
div.id = 'content';
div.className = 'note';

// create a new heading and add it to the div
let h2 = document.createElement('h2');
h2.textContent = 'Add h2 element to the div';
div.appendChild(h2);

// add div to the document
document.body.appendChild(div);
*/
/*
Task 9
Создайте один input(radio).r-9 и button.b-9 - при нажатии на button если radio.r-9 
выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если
 не активен.
*/
/*
let one = document.querySelector('.r-9')
let button = document.querySelector('.b-9')
let out = document.querySelector('.out-9')

button.addEventListener('click', myFunction)

function myFunction() {
    if (one.checked == true) {
        out.innerHTML = 'znachenye'
    } else {
        out.innerHTML = 0
    }
}
*/
/*
Task 10
>Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте
 div.out-10 выбранным цветом (имеется ввиду .style.background = ).
*/
/*
let one = document.querySelector('.i-10')
let button = document.querySelector('.b-10')
let out = document.querySelector('.out-10')

button.addEventListener('click', myFunction)

function myFunction() {

    one = document.querySelector('button').style.background =
        document.querySelector('#one').value
    console.log(one)
}
*/
/*
Task 11

Создайте input(color).i-111 и input(color).i-112- два элемента 
и button.b-11 - при нажатии на кнопку присвойте цвет из первого 
input в value второго.
*/
/*
let button = document.querySelector('.b-11')
let one = document.querySelector('.i-111')

button.addEventListener('click', myFunction)

function myFunction() {

    let two = document.querySelector('.i-112').style.background =
        document.querySelector('#one').value
    
    console.log(two)
}
*/
/*
Task 12

Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите 
на в out-12 выбранную в input дату.
*/
let button = document.querySelector('.b-12')
let out = document.querySelector('.out-12')

button.addEventListener('click', myFunction)

function myFunction() {

    out = document.querySelector('#one').value
    
    console.log(out)
}