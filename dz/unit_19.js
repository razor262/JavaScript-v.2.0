
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    console.log('work')
    out1.textContent = 'work'
}
let out1 = document.querySelector('.out-1')
document.querySelector('.div-1').onclick = t1
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */


function t2(e) {
    console.log(e)

    
    if (e.altKey == true) {
        console.log('нажата')
        out2.textContent = true
    }
    if (e.ctrlKey == true) {
        console.log('был нажат crtl')
        out2.textContent = true
    }
    if (e.shiftKey == true) {
        console.log('нажат Shift')
        out2.textContent = true
    }
    //console.log('423')
}

let out2 = document.querySelector('.out-2')
document.querySelector('.div-2').onclick = t2
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 250

function t3(e) {
    console.log(e)
    console.log('work')
    out3.style.background = 'red'
    w3 += 5
    
    out3.style.width = w3 + 'px'
    console.log(w3)
}
let out3 = document.querySelector('.div-3')
document.querySelector('.div-3').onclick = t3
// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4(e) {
    let one4 = document.querySelector('.div-4')
    console.log(one4.textContent)
    console.log(e)
    out4.innerHTML = one4.textContent
}
let out4 = document.querySelector('.out-4')
document.querySelector('.div-4').ondblclick = t4
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
    console.log('work')
    active5.classList.toggle('active')
}
let active5 = document.querySelector('.active')
document.querySelector('.div-5').ondblclick = t5
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    console.log('work')
    let i = 0
    while (i < ul6.length) {
        console.log(ul6[i].textContent)
        ul6[i].classList.toggle('hide')
        i++
    }
    //ul6.classList.toggle('hide')
}
let out6 = document.querySelector('.out-6')
let ul6 = document.querySelectorAll('.ul-6')
document.querySelector('.div-6').ondblclick = t6
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {

    console.log('work')
    div7.classList.toggle('active')

}
let div7 = document.querySelector('.div-7')
document.querySelector('.div-7').oncontextmenu = t7
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
    //console.log(ch8.cheked)
    if(ch8.checked) {
        console.log('чекбокс выбран')
        ch8.removeEventListener('click', t8)
        document.oncontextmenu = function(){
            return false
        } 
    } else {
        console.log('чекбокс не выбран')
        document.oncontextmenu = function(){
            return true
        } 
    }
    /*
    if (ch8 == true) {
        console.log(ch8)
    }*/
}
let ch8 = document.querySelector('.ch-8')
document.querySelector('.ch-8').onclick = t8

document.querySelector('.ch-8').oncontextmenu = t8
//rightClick.addEventListener('click', t8)
// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9(e) {

    console.log(e)

    div9.innerHTML = '<img src="img/2.png" alt="">'
    console.log(div9)
}
let div9 = document.querySelector('.div-9')
document.querySelector('.div-9').oncontextmenu = t9
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
document.querySelector('.div-10').onmouseenter = t10
let div10 = document.querySelector('.div-10')
function t10() {
    div10.innerHTML = '<img src="img/2.png" alt="">'
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

document.querySelector('.div-11').onmouseenter = t11

let div11 = document.querySelector('.div-11')
function t11() {
    if (div11.onmouseenter) {
        div11.innerHTML = '<img src="img/2.png" alt="">'
    }
    
}

document.querySelector('.div-11').onmouseleave = t111

let div111 = document.querySelector('.div-11')
function t111() {
    if (div111.onmouseleave) {
        div111.innerHTML = '<img src="img/1.png" alt="">'
    }
    
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
document.querySelector('.div-12').onmousedown = t12
let div12 = document.querySelector('.div-12')
function t12 (e) {
    console.log(e)
    div12.classList.add('active')

}

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
let div13 = document.querySelector('.div-13')

document.querySelector('.div-13').onmousedown = () =>  {
    console.log('при нажатии добавляет класс')
     div13.classList.add('active')
}

document.querySelector('.div-13').onmouseup = () =>  {
    console.log('отпустил мышку')
    div13.classList.remove('active')
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {

    console.log('work')
    div14.classList.add('active')
}
document.querySelector('.b-14').onclick = t14;
let div14 = document.querySelector('.div-14')

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let sum15 = 0
function t15() {
    sum15 += 1
    //console.log('work')
    div15.textContent = sum15
}
let div15 = document.querySelector('.div-15')
document.querySelector('.div-15').onmousemove = t15
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let w16 = 75
function t16() {

    console.log('work')
    w16 += 1
    div16.style.width = w16 + 'px'
}
let div16 = document.querySelector('.div-16')
document.querySelector('.div-16').onmousemove = t16
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {

    console.log('work')
   
    
    div16.onmousemove = function(){
        return true
    } 
}
let on17 = document.querySelector('.b-17_on')
on17.addEventListener('click', t17On)

function t17Off() {

    console.log('off')
   
    
    div16.onmousemove = function(){
        return false
    } 
}
let on177 = document.querySelector('.b-17_off')
on177.addEventListener('click', t17Off)
// ваше событие здесь!!!
var listener = function (event) {
    console.log('сработало')
  };
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let sum18 = 0
function t18(e) {

    console.log(e)
    console.log(div18.offsetWidth)

    sum18 = div18.offsetWidth
    div18.textContent = sum18
}
let div18 = document.querySelector('.div-18')
document.querySelector('.div-18').onmouseenter = t18
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19(e) {

    console.log(e)
    document.querySelector('.out-19').textContent = e.target.className
    div19.textContent = e.target.className

}

let div19 = document.querySelector('.div-19')
div19.onmouseout = t19
// ваше событие здесь!!!


