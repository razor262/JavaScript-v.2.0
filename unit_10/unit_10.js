// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

let ar1 = ['true', 65, 6969]

function f1() {
    out1.innerHTML = ar1
}
let out1 = document.querySelector('.out-1')
document.querySelector('.b-1').onclick = f1;

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

// let ar2 = // переменную обьявляем здесь!!!!

function f2() {
    let out = ''
    let ar2 = ['true', 500, 'yes', 7983];
    for (let i = 0; i < ar2.length; i++) {
       out +=ar2[i]+' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;

// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

let ar3 = '' // переменную обьявляем здесь!!!!

function f3() {
    let array = ['word', 300, 808, 'true']
    for (let i = 0; i <= array.length; i++) {
        ar3 = i;
        
    }
    console.log(ar3)
    out3.innerHTML = ar3
}
let out3 = document.querySelector('.out-3')
document.querySelector('.b-3').onclick = f3;

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 9

let array4 = ''


function f4() {

    let ar4 = ['word', 300, 808, 'true',556, 655, 2323, 112323, 'sd', 656666,]
    
    array4 += ar4[0] + ' ' + ar4[2] + ' ' + ar4[3]
    out4.innerHTML = array4
}
let out4 = document.querySelector('.out-4')
document.querySelector('.b-4').onclick = f4;

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

 let ar5 = [1,2,3,4,5,6,7,8,9,10]
let arrays = ''
function f5() {

   arrays += ar5[0] + ar5[2] + ar5[3]
   console.log(arrays)
}

document.querySelector('.b-5').onclick = f5;

// Task 6
//Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

 let ar6 = [ 'Andrey', 35, 'oven', 24, 03 ]
let i = 0
function f6() {
    while (i < ar6.length) {
        
        console.log(ar6[i])
        out6.innerHTML += ar6[i] + ' '
        i++
    }
    
}
let out6 = document.querySelector('.out-6')
document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    let i = 0
    ar7[5] = 'italy' + ' '
    ar7[6] = 'turkey' + ' '
    ar7[7] = 'vietnam' + ' '
    console.log(ar7)
    while (i < ar7.length) {
        
        out7.innerHTML += ar7[i] + ' '
        i++
    }
    
}
let out7 = document.querySelector('.out-7')
document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let ar8 = [];
let k = 0
function f8() {
    ar8[3] = 3,14
    ar8[4] = 17,6
    ar8[6] = 5
    console.log(ar8)
    while (k < ar8.length) {
        
        out8.innerHTML += ar8[k] + '-'
        k++
    }
    out81.innerHTML = k
}
let out81 = document.querySelector('.out-8-1')
let out8 = document.querySelector('.out-8')
document.querySelector('.b-8').onclick = f8;

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let ar9 = [100, 200, 300, 400, 700, 121];
let lastElement = 0
function f9() {
    
    lastElement = ar9[ar9.length - 1]
    console.log(lastElement)
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let ar10 = [100, 200, 300, 400, 700, 121];

function f10() {

    let a = ar10[1]
    a += ar10[ar10.length - 1]
    console.log(a)
    out10.innerHTML = a
}
let out10 = document.querySelector('.out-10')
document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let ar11 = [2, 3, 4, 5, 6, 7];
let arr = ''
let s = 0
function f11() {
    arr = ar11[4]
    ar11[4] = ar11[2]
    ar11[2] = arr
    console.log(arr)
    console.log(ar11)
    while (s < ar11.length) {
       
    out11.innerHTML += ar11[s] + ' '
        s++
    }
}
let out11 = document.querySelector('.out-11')
document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let ar12 = ['test', 'west', 'list', 'class', 'best'];
let g = 0
let myPerem = ''
function f12() {

    myPerem = ar12[0]
    ar12[0] = ar12[ar12.length - 1]
    ar12[ar12.length - 1] = myPerem
    console.log(ar12)
    while (g < ar12.length) {
        out12.innerHTML += ar12[g] + ' '
        g++
    }
    //out12.innerHTML = ar12
}
let out12 = document.querySelector('.out-12')
document.querySelector('.b-12').onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3


let ar13 = ['test', 'west', 'list', 'class', 'best'];
let j = 0
function f13() {

    while (j < ar13.length) {
        console.log(j)
        console.log(ar13[j])
        out13.innerHTML += j + ' ' + ar12[j] + ' '
        j++
    }
}
let out13 = document.querySelector('.out-13')
document.querySelector('.b-13').onclick = f13;


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let ar14 = [1, 2, 3, 'hello', 66];
//let m = 0
let korzinka = ''
function f14() {
       
for (let i = ar14.length - 1; i >= 0; i--) {
	console.log(ar14[i]);
    out14.innerHTML += ar14[i] + ' '
}
}
let out14 = document.querySelector('.out-14')
document.querySelector('.b-14').onclick = f14;

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let fuke = 0
function f15() {

    while (fuke < ar15.length) {
        if (ar15[fuke] > 0) {
            out15.innerHTML += ar15[fuke] += ' '
        }
        fuke++
    }
}
let out15 = document.querySelector('.out-15')
document.querySelector('.b-15').onclick = f15;

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];
let d = 0
function f16() {

    while (d < ar16.length) {
        if (ar16[d] % 2 == 0) {
            out16even.innerHTML += ar16[d] + ' '
        } else {
            out16odd.innerHTML += ar16[d] + ' ' 
        }
        d++
    }
}
let out16even = document.querySelector('.out-16-even')
let out16odd = document.querySelector('.out-16-odd')
document.querySelector('.b-16').onclick = f16;

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let n = 0
let summ17 = ''
let element17 = 0
function f17() {

    while (n <= ar17.length) {
        
        if (ar17[n] > 3) {
            summ17 += n
            //out17.innerHTML += n
        }
        n++
    }
 
    for (let i = 0; i < summ17.length; i++) {
        element17 = i + 1;
        console.log(element17)
    }
    out17.innerHTML += element17
}
let out17 = document.querySelector('.out-17')
document.querySelector('.b-17').onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
let sum18 = ''

function f18() {
    //console.log(sum18)
    for (let i = 0; i < ar18.length; i++) {
        const element = ar18[i];
        //console.log(element)
        if (ar18[i] > sum18) {
            sum18 = ar18[i]
        }
    }
    out18.innerHTML = sum18
    console.log(sum18)
}
let out18 = document.querySelector('.out-18')
document.querySelector('.b-18').onclick = f18;


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
let sum19 = ar19[0]
let m = 0
function f19() {
    while (m < ar19.length) {
        //console.log(ar19[m])
        if (ar19[m] < sum19) {
            sum19 = ar19[m]
        }
        m++
    }
    out19.innerHTML = sum19
    console.log(sum19)
}
let out19 = document.querySelector('.out-19')
document.querySelector('.b-19').onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let ar20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
let element20 = 0
    for (let i = 0; i < ar20.length; i++) {
        element20 += ar20[i];
        //console.log(element20)
    }
    out20.innerHTML = element20
    console.log(element20)
}
let out20 = document.querySelector('.out-20')
document.querySelector('.b-20').onclick = f20;