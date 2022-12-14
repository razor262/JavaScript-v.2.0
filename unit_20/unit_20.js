
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
document.querySelector('.i-1').onkeyup = function (event) {
    //console.log('keyup')
    console.log(event.key)
    out1.textContent += event.key
}
let out1 = document.querySelector('.out-1')
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {

    console.log(e)
    console.log(e.keyCode)
    out2.innerHTML += e.keyCode + ' '
}
let out2 = document.querySelector('.out-2')
let i2 = document.querySelector('.i-2')
i2.onkeypress = t2
// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;
let result3 = 0
function t3(e) {
    console.log(e)
    console.log(e.key)
    console.log(e.keyCode)
    result3 = e.keyCode
    console.log(result3)
    if (result3 >= 48 || result3 <= 57) {
        console.log('this number')
        out3.innerHTML = 'true'
    } if (result3 < 48 || result3 > 57) {
        console.log('this string')
        out3.innerHTML = 'false'
    }
}
let out3 = document.querySelector('.out-3')
let i3 = document.querySelector('.i-3')
i3.onkeypress = t3
// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
let sum4 = ''

function t4(e) {

    console.log(e)
    console.log(e.key)
    sum4 = e.key
    sum4 = sum4.toLowerCase()
    out4.innerHTML += sum4
}
let out4 = document.querySelector('.out-4')
let i4 = document.querySelector('.i-4')
i4.onkeypress = t4
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
let result5 = ''
function t5(e) {
    console.log('work')
    result5 = e.key
    result5 = result5.toUpperCase()
    out5.innerHTML += result5
}
let out5 = document.querySelector('.out-5')
let i5 = document.querySelector('.i-5')
i5.onkeypress = t5
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
let result6 = ''
let sum6 = ''
function t6(e) {

    console.log(e.key)
    result6 = e.key
    sum6 = e.key
    sum6 = sum6.toLowerCase()
    console.log(result6)

    if (result6 == sum6) {
        console.log(result6)
        out6.innerHTML += result6 + " "
    }

}
let out6 = document.querySelector('.out-6')
let i6 = document.querySelector('.i-6')
i6.onkeypress = t6
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */


function t7() {


    const a7 = ['d', 'f', 'a', 5, 2, 8];
    const rand = Math.floor(Math.random() * a7.length);

    //alert(a7[rand]);// Выведем, например: JavaScript
    out7.textContent = a7[rand]

}
let out7 = document.querySelector('.out-7')
let i7 = document.querySelector('.i-7')
i7.onkeypress = t7
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let sum8 = ''
function t8(e) {
    //console.log(e)
    sum8 = e.key
    
    if (sum8 == 'i') {
        out8.innerHTML += '1'
    }
    if (sum8 == 'o') {
        out8.innerHTML += '0'
    }
    if (sum8 == 'l') {
        out8.innerHTML += '7'
    } else {
        out8.innerHTML += sum8
    }
}
let out8 = document.querySelector('.out-8')
let i8 = document.querySelector('.i-8')
i8.onkeypress = t8
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let sum9 = 0
function t9(e) {
    console.log(e)
    console.log(e.keyCode)
    console.log(e.which)
    //sum9 = e.keyCode
    
    if (e.keyCode == 40) {
        console.log('нажата стрелка вниз')
        sum9 += 1
    }
    console.log(sum9)
    out9.textContent = sum9
}
let out9 = document.querySelector('.out-9')
let i9 = document.querySelector('.i-9')
i9.tabIndex = 0

i9.addEventListener('keydown', t9)
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let w10 = 75
function t10(e) {
    
    console.log(e.keyCode)
    if (e.keyCode == 37 || e.keyCode == 39) {
        console.log('получилось')
        w10 += 1
        div10.style.width = w10 + 'px'
    }
    if (e.keyCode == 38 || e.keyCode == 40) {
        console.log('получилось')
        w10 += 1
        div10.style.height = w10 + 'px'
    }

}
let div10 = document.querySelector('.div-10')
let i10 = document.querySelector('.i-10')

i10.tabIndex = 0
// ваше событие здесь!!!
i10.addEventListener('keydown', t10)
// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11(e) {
    console.log(e)
    console.log(e.key)
    if (e.key == 1 ) {
        console.log('work')
        button1.classList.toggle('active')
    }
    if (e.key == 2 ) {
        console.log('work')
        button2.classList.toggle('active')
    }
    if (e.key == 3 ) {
        console.log('work')
        button3.classList.toggle('active')
    }
    if (e.key == 4 ) {
        console.log('work')
        button4.classList.toggle('active')
    }
    if (e.key == 5 ) {
        console.log('work')
        button5.classList.toggle('active')
    }
    if (e.key == 6 ) {
        console.log('work')
        button6.classList.toggle('active')
    }
    if (e.key == 7 ) {
        console.log('work')
        button7.classList.toggle('active')
    }
    if (e.key == 8 ) {
        console.log('work')
        button8.classList.toggle('active')
    }
    if (e.key == 9 ) {
        console.log('work')
        button9.classList.toggle('active')
    }
    if (e.key == 0 ) {
        console.log('work')
        button0.classList.toggle('active')
    }

    if (e.key == 'q' ) {
        console.log('work')
        button11.classList.toggle('active')
    }
    if (e.key == 'w' ) {
        console.log('work')
        button12.classList.toggle('active')
    }
    if (e.key == 'e' ) {
        console.log('work')
        button13.classList.toggle('active')
    }
    if (e.key == 'r' ) {
        console.log('work')
        button14.classList.toggle('active')
    }
    if (e.key == 't' ) {
        console.log('work')
        button15.classList.toggle('active')
    }
    if (e.key == 'y' ) {
        console.log('work')
        button16.classList.toggle('active')
    }
    if (e.key == 'u' ) {
        console.log('work')
        button17.classList.toggle('active')
    }
    if (e.key == 'i' ) {
        console.log('work')
        button18.classList.toggle('active')
    }
    if (e.key == 'o' ) {
        console.log('work')
        button19.classList.toggle('active')
    }
    if (e.key == 'p' ) {
        console.log('work')
        button20.classList.toggle('active')
    }

    if (e.key == 'Shift' ) {
        console.log('work')
        button21.classList.toggle('active')
    }
    if (e.key == 'Alt' ) {
        console.log('work')
        button22.classList.toggle('active')
    }
    if (e.key == 'Control' ) {
        console.log('work')
        button23.classList.toggle('active')
    }
    if (e.key == ' ' ) {
        console.log('work')
        button24.classList.toggle('active')
    }
    if (e.key == 'Enter' ) {
        console.log('work')
        button25.classList.toggle('active')
    }
}
let out11 = document.querySelector('.out-11')

let i11 = document.querySelector('.i-11')
i11.onkeydown = t11
i11.onkeyup = t11
// ваше событие здесь!!!

let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let button5 = document.querySelector('.button5')
let button6 = document.querySelector('.button6')
let button7 = document.querySelector('.button7')
let button8 = document.querySelector('.button8')
let button9 = document.querySelector('.button9')
let button0 = document.querySelector('.button0')

let button11 = document.querySelector('.button11')
let button12 = document.querySelector('.button12')
let button13 = document.querySelector('.button13')
let button14 = document.querySelector('.button14')
let button15 = document.querySelector('.button15')
let button16 = document.querySelector('.button16')
let button17 = document.querySelector('.button17')
let button18 = document.querySelector('.button18')
let button19 = document.querySelector('.button19')
let button20 = document.querySelector('.button20')

let button21 = document.querySelector('.button21')
let button22 = document.querySelector('.button22')
let button23 = document.querySelector('.button23')
let button24 = document.querySelector('.button24')
let button25 = document.querySelector('.button25')