// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for (let i. Выведите на страницу в .out-1 формате значение+пробел.

let a1 = [5,7,9, 11, 13, 15];

function f1() {

    for (let i = 0; i < a1.length; i++) {
        out1.innerHTML += a1[i] + ' '
        
    }
}
let out1 = document.querySelector('.out-1')
document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for (let i. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.

let a2 = [5,7,9, 11, 13, 15];

function f2() {

    for (let i = 0; i < a2.length; i++) {
        out2.innerHTML += i + ' ' + a2[i] + ' '
        
    }
}
let out2 = document.querySelector('.out-2')
document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.

function f3() {
    console.log(out3.length)
    
    for (let i = 0; i < out3.length; i++) {
        //console.log(out3[i])
        out3[i].textContent = 3
        
    }
}
let out3 = document.getElementsByClassName('out-3')
document.querySelector('.b-3').addEventListener('click', f3);


// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.

function f4() {
    console.log(typeof out4)
    
    for (let i = 0; i < out4.length; i++) {
       console.log(out4[i])
       out4[i].innerHTML += 4
        
    }
    //console.log(out4)
}
let out4 = document.querySelectorAll('.out-4')
document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.

let a5 = [3,4,5,2,1,7,8,2,4,6,8,11,23,17];
let w5 = []
function f5() {

    for (const item of a5) {
        if (item > 7) {
            console.log(item)
            w5.push(item)
        }
        
    }
    console.log(w5)
    return w5
}

document.querySelector('.b-5').addEventListener('click', ()=> {
    document.querySelector('.out-5').innerHTML = f5();
});

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [[1,2], [3,4], [5,6]];

function f6() {

    for (let i = 0; i < a6.length; i++) {
        const element = a6[i];
        for (let k = 0; k < element.length; k++) {
            element[k];
            console.log(a6[i][k])
            out6.innerHTML += a6[i][k] + ' '
        }
    }
}
let out6 = document.querySelector('.out-6')
document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать результирующий массив.

let a7 = [{ id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];
Array7 = []
function f7() {
    //let one7 = new Object(a7)

    for (let i = 0; i < a7.length; i++) {
        const element = a7[i];

        console.log(element.id)
        console.log(element.name)
        let one7 = element.id + ' ' + ':'
        Array7.push(one7)
        let ones7 = element.name + ' '
        Array7.push(ones7)
    }
    console.log(Array7)
}

document.querySelector('.b-7').addEventListener('click', ()=>{
    console.log(f7());
});


// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.

let a8 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];
let Array8 = []
function f8() {

    for (const item of a8) {
        console.log(item)
        one8 = item.id
        console.log(one8)
        Array8.push(one8)
    }
    console.log(Array8)
}

document.querySelector('.b-8').addEventListener('click', ()=>{
    console.log(f8());
});

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.

let a9 = [ [4,3,2], [2,5], [0,0,0,0,0]];

function f9() {

    for (let i = 0; i < a9.length; i++) {
        const element = a9[i];
        console.log(element)
        let curent9 = 0
        for (let k = 0; k < element.length; k++) {
            const sum9 = element[k];
            console.log(sum9)
            //console.log(k)
            curent9 += 1
            
        }
        console.log(curent9)
        //out9.innerHTML = curent9
        return curent9 + 1
    }
   
}
let out9 = document.querySelector('.out-9')
document.querySelector('.b-9').addEventListener('click', ()=>{
    document.querySelector('.out-9').innerHTML = f9();
});

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.


let a10 = [4, 6, 9, 'Hello'];
let z11 = { 4: 1, 5: 2, 6: 0 }
let z10 = new Object()
function f10() {

    for (const item of a10) {
        console.log(a10[item])
        z10[item] = item
    }
    console.log(z10)
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
}

function f11() {

    for (const key in a11) {
        console.log(a11[key])
        
        if (a11[key] > 10) {
            out11.innerHTML += a11[key] + ' '
            
        }
    }
}
let out11 = document.querySelector('.out-11')
document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

let a12 = [4,5,6,7];

function f12() {

    for (const item of a12) {
        console.log(item)
        out12.innerHTML += item + ' '
    }
}
let out12 = document.querySelector('.out-12')
document.querySelector('.b-12').addEventListener('click', f12);


// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символу в out-13 через пробел.

let a13 = 'testone';

function f13() {

    for (const item of a13) {
        console.log(item)
        out13.innerHTML += item + ' '
    }
}
let out13 = document.querySelector('.out-13')
document.querySelector('.b-13').addEventListener('click', f13);



// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4,5,6]);

function f14() {

    for (const item of a14) {
        console.log(item)
        out14.innerHTML += item + ' '
    }
}
let out14 = document.querySelector('.out-14')
document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).


function f15() {

    for (const item of out15) {
        console.log(item)
        item.innerHTML = 15
    }
}
let out15 = document.querySelectorAll('.out-15')
document.querySelector('.b-15').addEventListener('click', f15);