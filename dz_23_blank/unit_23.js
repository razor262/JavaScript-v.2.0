
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1(e) {
    //console.log(e)
    localStorage.setItem('5', 11)
    console.log(localStorage.getItem('5'))
}
let button1 = document.querySelector('.b-1')
button1.onclick = t1
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */
let a2 = [7,6,5]
function t2() {
    console.log('work')
    localStorage.setItem('a2', JSON.stringify(a2))
    let b = localStorage.getItem('a2')
    b = JSON.parse(b)
    console.log(b)
    out2.innerHTML = b
}
let out2 = document.querySelector('.out-2')
let button2 = document.querySelector('.b-2')
button2.onclick = t2
// ваше событие здесь!!!


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let b3 = localStorage.getItem('a2')
    console.log(b3)
    b3 = JSON.parse(b3)
    for (const key in b3) {
            const element = 'ключ: ' + key + ' ' + 'значаение: ' + b3[key] + ' '
            console.log(element)
            out3.innerHTML += element
    }
}
let out3 = document.querySelector('.out-3')
let button3 = document.querySelector('.b-3')
button3.onclick = t3
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
let a4 = {hello: 'world', hi:'mahai'}

function t4() {
    console.log('work')
    localStorage.setItem('a4', JSON.stringify(a4))
    let b4 = localStorage.getItem('a4')
    b4 = JSON.parse(b4)
    console.log(b4)
      
}
//let out4 = document.querySelector('.out-4')
let button4 = document.querySelector('.b-4')
button4.onclick = t4
// ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
    let b5 = localStorage.getItem('a4')
    b5 = JSON.parse(b5)
    console.log(b5)
    for (const key in b5) {
            
            out5.innerHTML += key + ' ' + b5[key] + ' '
    }
    
}
let out5 = document.querySelector('.out-5')
let button5 = document.querySelector('.b-5')
button5.onclick = t5
// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    console.log('work')
    localStorage.removeItem('a4')
    localStorage.removeItem('data')
    localStorage.removeItem('a2')
    localStorage.removeItem('5')
}
let b6 = document.querySelector('.b-6')
b6.onclick = t6
// ваше событие здесь!!!


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let current7 = ''
let a7 = []

function t7() {
    console.log('work')
    console.log(i7.value)
    current7 = i7.value
    i7.value = ''
    console.log(current7)
    a7.push(current7)
    console.log(a7)
}
let i7 = document.querySelector('.i-7')
let button7 = document.querySelector('.b-7')
button7.onclick = t7
// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {

}

// ваше событие здесь!!!


