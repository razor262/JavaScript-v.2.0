// for 
// while
/*
let div = document.querySelectorAll('.one')
console.log(div)
//div.style.background = 'red'

for (let i = 0; i < div.length; i = i + 1) {
    console.log(i)
}
*/
/*
Task 1

Кнопка b-1 запускает функцию t1. Функция должна выводить
 в out-1 строку вида:

1 2 3 4 5 6 7 8 9 ... 49 50
от 1 до 50 включительно. Разделитель - пробел.
 Задача решается с помощью цикла.
*/
/*
let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
    for (let i = 0; i <= 50; i = i + 1) {
        out.innerHTML += i
        console.log(i)
    }
}
*/
/*
Task 2

Кнопка b-2 запускает функцию t2. Функция должна выводить 
в out-2 строку вида:

2 4 6 ... 122

от 2 до 122 c шагом 2. Разделитель - пробел. Задача
 решается с помощью цикла.
*/
/*
let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
    for (let i = 0; i <= 50; i = i + 2) {
        out.innerHTML += i
        console.log(i)
    }
}
*/
/*
Task 3

Кнопка b-3 запускает функцию t3. Функция должна
 выводить в out-3 строку вида:

25 24 23 22 . . 7

от 25 до 7 c шагом 1. Разделитель - пробел. Задача
 решается с помощью цикла.
*/
/*
let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
    for (let i = 25; i >= 7; i = i - 1) {
        out.innerHTML += i
        console.log(i)
    }
}
*/
/*
Task 4

Кнопка b-4 запускает функцию t4. Функция должна 
выводить в out-4 строку вида:

77_74_71_68_65_62_ ... _38_35_

от 77 до 35 c шагом 3. Разделитель - знак 
подчеркивания. Задача решается с помощью цикла.
*/ 
/*
let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
    for (let i = 77; i >= 35; i = i - 3) {
        out.innerHTML += i
        console.log(i)
    }
}
*/
/*
Task 5

Кнопка b-5 запускает функцию t5. Функция должна выводить 
в out-5 строку вида:

1_*2_**3_*4_** ... 17_*

от 1 до 17 c шагом 1. Разделитель - знак подчеркивания
 и звездочка (если число нечетное, и две звездочки если 
    четное). Задача решается с помощью цикла. 
*/
/*
let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
    for (let i = 1; i <= 17; i = i + 1) {
        if(i % 2 == 0){
            out.innerHTML += i + '_' + '*'+ '*'
            console.log(out)
        }
        else{
            out.innerHTML += i + '_' + '*'
            console.log(out)
        }
        //out.innerHTML += i
        //console.log(i)
    }
}
*/
/*
Task 6

Кнопка b-6 запускает функцию t6. Функция должна
 выводить в out-6 строку вида:

******
******
******

Задача решается с помощью цикла. В каждой итерации
 цикл выводит 6 звездочек без пробелов и 
 символ переноса строки br.
  Количество строк (итераций, повторений)
   цикла вводит пользователь в i-6. 
*/
/*
https://ru.stackoverflow.com/questions/1107105/%D0%9A%D0%B0%D0%BA-%D0%B2%D1%8B%D0%B2%D0%B5%D1%81%D1%82%D0%B8-%D0%BA%D0%BE%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B9-%D0%B2-%D0%B8%D0%BD%D0%BF%D1%83%D1%82

let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
    let array = '******************'
    let one = array.split('', 6)
    let two = one.join('')
    
    for (let i = 0; i <= one.length; i = i + 6) {

        out.innerHTML += two

        let br = document.createElement('br');
        //br.textContent = 'Add h2 element to the div';
        out.appendChild(br);
        
        // add div to the document
        //document.out.appendChild(br);
        //console.log(out)

    }
}
*/
/*
Task 7

Есть input i-7 куда пользователь может ввести число 
больше нуля (проверок не делаем, принимаем как факт).
 По нажатию кнопки b-7 должна запускаться функция t7,
  которая выводит в out-7 числа от введенного 
  пользователем до нуля включительно. Разделитель 
  пробел. Если пользователь ввел 4 и нажал кнопку,
   мы получим:

4 3 2 1 0

Задача решается с помощью цикла.
*//*
let input = document.querySelector('input')
let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
    
    let one = input.value
    let two = one
    console.log(one)
    
    for (let i = two; i >= 0; i = i - 1) {

        out.innerHTML += i

    }
}*/
/*
Task 8

Есть input i-81 и i-82 куда пользователь может ввести
 числа больше нуля (проверок не делаем, принимаем
     как факт). Считаем, что второе число всегда 
     больше первого. По нажатию кнопки b-8 должна 
     запускаться функция t8, которая выводит в out-8 
     числа от первого введенного до второго 
     включительно, с шагом 1. Разделитель пробел. 
     Если пользователь ввел 4 и 8 и нажал кнопку, 
     мы получим:

4 5 6 7 8

Задача решается с помощью цикла.
*/
/*
let input = document.querySelector('.i-81')
let input_2 = document.querySelector('.i-82')
let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
    
    let one = +input.value
    let two = +input_2.value
    
    if(one < two) {
        for (let i = one; i <= two; i = i + 2) {
            console.log(typeof one)
            out.innerHTML += i + ' '
            console.log(out)
        }
    }
}*/
/*
Task 9

Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию 
кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа
 от меньшего введенного до большего включительно, с шагом 1. Разделитель
  пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:

4 5 6 7 8
если ввел 8 и 6, то получим
6 7 8

Задача решается с помощью цикла. Подсказка - вначале делаем проверку,
 а потом запускаем цикл.
 *//*
 let input = document.querySelector('.i-81')
 let input_2 = document.querySelector('.i-82')
 let button = document.querySelector('.b-1')
 let out = document.querySelector('.out')
 
 button.addEventListener('click', myFunction)
 
 function myFunction() {
     
     let one = +input.value
     let two = +input_2.value
     
     if(one < two) {
         for (let i = one; i <= two; i = i + 2) {
             console.log(typeof one)
             out.innerHTML += i + ' '
             console.log(out)
         }
     } else if(two < one) {
        for (let j = two; j <= one; j = j + 2) {
            console.log(typeof one)
            out.innerHTML += j + ' '
            console.log(out)
        }
    }
 }*/
 /*
 Task 10

Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные 
годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается 
через цикл, а четность - через шаг (равный 2).
*//*
let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)

function myFunction() {
        

        for (let i = 1950; i <= 2000; i = i + 2) {
            
            out.innerHTML += i + ' '
            console.log(out)
        }
    
}
*/
/*
Task 11

Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 
перебрать их с помощью цикла. Обращение к div выглядит так elem[i] вывести
 в out-11 содержимое каждого блока. Разделитель - пробел. В результате 
 должно получиться так:

one 3 4 two
*/
/*
let div = document.querySelectorAll('.one')
let button = document.querySelector('.b-1')
let out = document.querySelector('.out')

button.addEventListener('click', myFunction)
console.log(div)
function myFunction() {
        console.log(div)
        
        
        for (let i = 0; i < div.length; i = i + 1) {
            
            console.log(div[i])
            
        }
    
}*/
/*
Task 12

Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 
перебрать их с помощью цикла. Обращение к div выглядит так elem[i] применить
 к каждому elem[i].style.background = ‘orange
 */
/*
 let div = document.querySelectorAll('.one')
 let button = document.querySelector('.b-1')
 let out = document.querySelector('.out')
 
 button.addEventListener('click', myFunction)
 console.log(div)
 function myFunction() {
         console.log(div)
         
         
         for (let i = 0; i < div.length; i = i + 1) {
             
             console.log(div[i])
             div[i].style.background = 'orange'
         }
     
 }
 */
/*
Task 13

Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 
перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
применить к каждому elem[i].value, причем к value первого должно равняться 1, 
второго - 2, третьего - 3...*//* 
 let div = document.querySelectorAll('.one')
 let button = document.querySelector('.b-1')
 let out = document.querySelector('.out')
 
 button.addEventListener('click', myFunction)
 console.log(div)
 function myFunction() {
         console.log(div)
          
         
         for (let i = 0; i < div.length; i = i + 1) {
             
             console.log(div[i].value)
             
         }
     
 } */                                                                   
