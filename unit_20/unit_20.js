
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
    const a7 = [];

}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8() {

}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

function t9() {

}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10() {

}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {

}

// ваше событие здесь!!!

