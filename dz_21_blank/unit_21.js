
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1(e) {
    console.log(e)
    document.querySelector('.out-1').innerHTML = 'touch'
}
let start1 = document.querySelector('.div-1').addEventListener('touchstart', t1)
//start1.addEventListener('onclick', t1)
//start1.touchstart = t1
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let sum2 = 0
function t2() {
    console.log('work')
    sum2 += 1
    out2.textContent = sum2
}
let out2 = document.querySelector('.out-2')
let result2 = document.querySelector('.div-2')
result2.addEventListener('touchstart', t2)
// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
//let div3 = ''
function t3(e) {

    console.log(e)
    console.log(result3.textContent)
    let div3 = result3.textContent
    let last = div3.length-1
    console.log(div3[last])
    out3.textContent = div3[last]

}
function t32(e) {
    console.log(result32.textContent)
    let div32 = result32.textContent
    let last32 = div32.length-1
    console.log(div32[last32])
    out3.textContent = div32[last32]
}
let out3 = document.querySelector('.out-3')
let result3 = document.querySelector('.div-3_1')
result3.addEventListener('touchstart', t3)

let result32 = document.querySelector('.div-3_2')
result32.addEventListener('touchstart', t32)
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    console.log('work')
    div4.addEventListener('touchstart', t44)
}
function t44(e) {
    console.log(e)
    document.querySelector('.out-4').textContent = 'работает)'
}
let div4 = document.querySelector('.div-4')
let button4 = document.querySelector('.b-4')
button4.addEventListener('touchstart', t4)
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5(e) {
    console.log(e)
    div4.removeEventListener('touchstart', t44)
}
let b5 = document.querySelector('.b-5')
b5.onclick = t5
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6(e) {
    console.log(e)
    document.querySelector('.div-4').ontouched = t66
}
function t66() {
    out6.textContent = 'touched'
}
let out6 = document.querySelector('.out-6')
let button6 = document.querySelector('.b-6')
button6.onclick = t6
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7(e) {
    console.log(e)
    result7.style.backgroundColor = 'red'
    //container.appendChild(result7)
}
let result7 = document.querySelector('.div-7')
result7.addEventListener('touchend', t7)
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
/*
function getRandomArrayElement(arr8){
    return arr8[Math.floor(Math.random()*arr8.length)]
 }*/
function t8() {
    
    let arr8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow']

    let sum8 = arr8[Math.floor(Math.random()*arr8.length)]
    console.log(sum8)
    result8.style.backgroundColor = sum8
}
let result8 = document.querySelector('.div-8')
result8.addEventListener('touchend', t8)
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let sum9 = 0
function t9(e) {
    console.log(e)
    sum9 += 1
    out9.textContent = sum9
}
let out9 = document.querySelector('.out-9')
let result9 = document.querySelector('.div-9')
result9.addEventListener('touchend', t9)
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let sum10 = 75
function t10() {
    console.log('work')
    sum10 += 1
    div10.style.width = sum10 + 'px'
}
let div10 = document.querySelector('.div-10')
div10.addEventListener('touchmove', t10)
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
/*
function t11() {
    
  }*/
  

let div11 = document.querySelector('.div-11')
div11.addEventListener('click', event => {
    console.log('Позиция x относительно документа', event.pageX)
    console.log('Позиция y относительно документа', event.pageY)
  
    console.log('Позиция x относительно экрана', event.clientX)
    console.log('Позиция y относительно экрана', event.clientY)

  })
  
  // { x: ..., y: ..., top: ..., left: ..., right: ..., bottom: ... }
  //const rect = element.getBoundingClientRect()
// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/


const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images
console.log(typeof images)

const bigImage = document.querySelector('.img-12-max')


const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;



let btn12reset = document.createElement('button')
btn12reset.className = 'button-primary reset'
btn12reset.textContent = 'Reset'
next.after(btn12reset)
btn12reset.onclick = resetFunction;

for (const key in images) {
    
       console.log(images[key])
        
    
}

function nextFunction() {
    console.log('next')
    images[count].classList.remove('active-img')
 
    count += 1
    if (count == images.length) {
        count = 0
    }
    console.log(count)
    images[count].classList.add('active-img')
    
    bigImage.src = images[count].src
    console.log(bigImage.src)
}

function prevFunction() {
    console.log('prev')
    images[count].classList.remove('active-img')
 
    count -= 1
    if (count == -1) {
        count = images.length - 1
    }
    console.log(count)
    images[count].classList.add('active-img')

    bigImage.src = images[count].src
}

function resetFunction() {
    images[count].classList.remove('active-img')
    count = 0
    images[count].classList.add('active-img')

    bigImage.src = images[count].src
}
// ваше событие здесь!!!
