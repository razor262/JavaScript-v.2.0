// В данной работе и далее под определением набор понимают Set. 

// Task 1
// Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Добавление делайте через add. Выведите в консоль получившийся набор (set) s1.

let s1 = new Set()

s1.add('h')
s1.add('b')
s1.add('o')
s1.add('h')
console.log(s1)

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы, которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после каждого добавления элемента.


 let s2 = new Set()
let input2
const f2 = () => {
    input2 = i2.value 
    console.log(input2)
    s2.add(input2)
    console.log(s2)
}

document.querySelector('.b-2').onclick = f2;
let i2 = document.querySelector('.i-2')

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3 строку, которую пользователь вводит в i-3. Функция должна выводить в консоль s3 после каждого удаления элемента.

let s3 = new Set(['one', 'two', 'four']); // обратите внимание, как просто можно добавить массив в набор!
let input3
const f3 = () => {
    input3 = i3.value
    console.log(input3)
    for (const item of s3) {
        console.log(item)
        if (item == input3) {
            console.log(item + ' найдено')
            s3.delete(item)
        }
    }
    console.log(s3)
}

document.querySelector('.b-3').onclick = f3;
let i3 = document.querySelector('.i-3')

// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.

let s4 = new Set(['a', 'b', 'c', 'z']);
let input4
let sum4 = ''
const f4 = () => {
    input4 = i4.value
    console.log(input4)
    for (const key of s4) {
        console.log(key)
        if (key == input4) {
            sum4 = 'true'
        }
    }
    out4.innerHTML = sum4 || 'false'
 }

document.querySelector('.b-4').onclick = f4;
let i4 = document.querySelector('.i-4')
let out4 = document.querySelector('.out-4')
// Task 5
//  При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 количество элементов в наборе s5.


let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => {
    out5.innerHTML = s5.size
}

document.querySelector('.b-5').onclick = f5;
let out5 = document.querySelector('.out-5')
// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.

let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];
let k6 = 0
const f6 = () => { 
    let one = new Set(a6)
    console.log(one)
    for (const item of one) {
        //console.log(item)
        console.log(k6 += 1)
    }
    out6.innerHTML = k6
 }
let out6 = document.querySelector('.out-6')
document.querySelector('.b-6').onclick = f6;

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.
let input7
let sum7 = 0
const f7 = () => {
    input7 = i7.value
    let one7 = new Set(input7)
    console.log(one7)
    for (const item of one7) {
        console.log(item)
        sum7 += 1
    }
    console.log(sum7)
    if (sum7 >= 6) {
        console.log('больше шести')
        out7.innerHTML = 1
    } else {
        console.log('меньше шести')
        out7.innerHTML = 0
    }
 }

document.querySelector('.b-7').onclick = f7;
let i7 = document.querySelector('.i-7')
let out7 = document.querySelector('.out-7')
// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна перебрать набор s8 и добавить в массив ar8 только числа больше 5. Выведите массив в консоль.

let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => { 
    //console.log(s8)
    for (const key of s8) {
        if (key > 5) {
            ar8.push(key)
        }
    }
    console.log(ar8)
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//  При нажатии b-9 выполняете функцию f9. Функция должна принимать набор our_set в качестве параметра, преобразовывать его в строку, причем после каждого символа строки должен быть пробел. Функция должна возвращать результирующую строку. 
// В нашем примере результат должен быть 9 8 7 6 5 
let sum9 = ''
const f9 = our_set => { 
    console.log(our_set)
    for (const item of our_set) {
        console.log(item)
        sum9 += item + ' '
    }
    return sum9
}

document.querySelector('.b-9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    document.querySelector('.out-9').innerHTML = f9(s9);
}

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.
let sum10 = ''
const f10 = (out_set, elem) => { 
    console.log(out_set)
    console.log(elem)
    for (const key of out_set) {
        console.log(key)
        sum10 += key + ' '
    }
    out10.innerHTML = sum10
}
let out10 = document.querySelector('.out-10')
document.querySelector('.b-10').onclick = () => {
    
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};


// Task 11
//  При нажатии b-11 выполняете функцию f11. Функция должна преобразовать массив a11 в набор. И выводить в консоль. Изучите вывод получившегося набора. Разберитесь почему так происходит.
// Да, эта задача решена! Просто разберитесь.

const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
    
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, так, что каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';
let i = 0
let array12 = []
let sum12 = ''
const f12 = () => {
    while (i < str12.length) {
        console.log(str12[i])
        array12.push(str12[i])
        i++
    }
    console.log(array12)
    let one12 = new Set()
    one12.add(array12)
    return one12
}

document.querySelector('.b-12').onclick = () => {
    console.log(f12());
}

// Task 13
//  При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде объекта типа { символ : количество, символ : количество } вывести в консоль и возвратить.
// пример результата для строки 'Hello ho'
// { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}

let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';
let result13 = ''
const f13 = () => {


    let array13 = Array.from(str13)
    let set13 = new Set(array13)
    let one13 = Array.from(set13)
    console.log(typeof array13)
    console.log(typeof set13)
    console.log(typeof one13)

    let obj = array13.reduce((acc, el) => {

        acc[el] = (acc[el] || 0) + 1;
        return acc;

        /*
        for (const item of set13) {
            console.log(item)
            let sum13 = 1
    
                for (let i = 0; i < array13.length; i++) {
                    //const element = array13[i];
                    //console.log(element)
    
                    if (item == array13[i]) {
                        sum13 += 1
                        console.log( array13[i] + ' : ' + sum13)
                        result13 += array13[i] + ' : ' + sum13 + ' '
                    }
                }
                
        }
            console.log(result13)*/
        // return
    }, {})

    console.log(obj)
}
document.querySelector('.b-13').onclick = () => {
    console.log(f13());

}
