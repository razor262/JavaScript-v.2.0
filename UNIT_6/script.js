/*
Task 1
С помощью вложенных циклов, нарисуйте строку:

***_***_***_
где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с 
помощью внешнего.
*//*
y*//*
 Task 2

С помощью вложенных циклов, нарисуйте строку:

1
*_*_*_
2
*_*_*_
3
*_*_*_

Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.
*//*
let out = document.querySelector('.out')

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
         out.innerHTML += '*' + "_"
        
    }
    out.innerHTML += "<br>"
}
*//*

Task 3

С помощью вложенных циклов, нарисуйте строку:

*_*_*_
*_*_*_
*_*_*_
*_*_*_

Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос
строки br, внутренний - звездочки, знак подчеркивания.
*//*
let out = document.querySelector('.out')

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 3; k++) {
         out.innerHTML += '*' + "_"
        
    }
    out.innerHTML += "<br>"
}
*//*

Task 4

С помощью вложенных циклов, нарисуйте строку:

1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
*/
/*
let out = document.querySelector('.out')
let summ = 0

for (let i = 1; i < 4; i++) {
    console.log(i)
     out.innerHTML += i + '_'

    for (let k = 1; k < 6; k++) {
        console.log(k)
         out.innerHTML += k + ' '
        
    }
}*/
/*

Task 5

С помощью вложенных циклов, нарисуйте строку:

101010
101010
101010

Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.

let out = document.querySelector('.out')
let summ = 0*/
/*
for (let i = 0; i < 3; i++) {
    console.log(i)
     out.innerHTML +='<br>'

    for (let k = 0; k <= 6; k++) {
        console.log(k)
         out.innerHTML += k + ' '
        
    }
}*/
/*
let array = []

for (let i = 0; i < 3; i++) {
    console.log(i)
     out.innerHTML +='<br>'

    for (let k = 0; k <= 5; k++) {
        console.log(k)
        if(k % 2 == 0) {
             out.innerHTML += 1
        } else{
               out.innerHTML += 0
 
        }
                
    }
}
*/
/*

Task 6

С помощью вложенных циклов, нарисуйте строку:

 10x01x
 10x01x
 10x01x

Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит
либо 0 либо 1 либо х.*/


let out = document.querySelector('.out')
let summ = 0

for (let i = 0; i < 3; i++) {
    console.log(i)
     out.innerHTML +='<br>'

    for (let k = 0; k <= 2; k++) {
        console.log(k)
         out.innerHTML += k + ' '
        
    }
}
