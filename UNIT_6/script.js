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

/*
let out = document.querySelector('.out')
let summ = 0

for (let i = 0; i < 3; i++) {
    console.log(i)
     out.innerHTML +='<br>'

    for (let k = 0; k <= 6; k++) {
         let one = 0 

        if (one == 0) {
            one += '1'
             out.innerhtml += '1' 
        } 
        if (one == '0' '1') {
            one += '0'
             out.innerhtml += '0' 
        } 

        //out.innerHTML += '1' + '0' + 'x' + '0' + '1' + 'x'
         console.log(one)
        
    }
}*/
/*
Task 7

*
**
***
****

Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.*/
/*
let out = document.querySelector('.out')
let summ = ''


for (let i = 0; i < 4; i++) {
   
    for (let k = 1; k <= 1; k++) {
        console.log(summ += '*')
         out.innerHTML += summ

        
    }
     out.innerHTML +='<br>'

}
*/
/*
Task 8

С помощью вложенных циклов, нарисуйте строку:

*****
****
***
**
*

Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. */
/*
let out = document.querySelector('.out')
 
let summ = '******'
let one

for (let i = 0; i < 6; i++) {
   
    for (let k = 1; k > 0; k--) {
        //alert([k])
        summ = summ.slice(0, -1)
        
        // out.innerHTML += summ

    }
     out.innerHTML ='<br>'
     console.log( summ )
}
*/
/*
Task 9

С помощью вложенных циклов, нарисуйте строку:

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

Внешний цикл выводит перенос строки br. 
Вложенный цикл рисует цифры
*//*
let out = document.querySelector('.out')
let summ = 0
let k
let i

for (i = 0; i <= 5; i++) {
   
    for (k = 1; k <= i; k++) {
        console.log(i + k)
        //console.log(summ += k + ' ')
         out.innerHTML += k + ' '

    }
     out.innerHTML +='<br>'
     
}
*/
/*
Task 10

С помощью вложенных циклов, нарисуйте строку:

01 02 03 04 05 06 07 08 09 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50

Внешний цикл выводит перенос строки br и 
запускается от 0 до 6.

Вложенный цикл рисует цифры от 0 до 9. 
братите внимание, что первый ряд - есть 
ведущий нуль. Здесь все просто - проверили,
 если число меньше 10 - то конкатенируем нуль.
 */
/*
 let out = document.querySelector('.out')
 let summ = 0
 let k
 let i
 
 for (i = 1; i <= 5; i++) {
    
     for (k = 1; k <= 10; k++) {
         console.log(summ += 1)
         //console.log(summ += k + ' ')
         if(summ < 10){
            out.innerHTML += '0' + summ + ' '
         } else{
            out.innerHTML += summ + ' '
         }
          
 
     }
      out.innerHTML +='<br>'
      
 }
 */
/*
Используя вложенные циклы создайте таблицу 
умножения от 1 до 10. Т.е. вначале столбец 1x1,
 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее.
  Оформить в виде столбцов где выводятся
   множители и результат.
   *//*
   let out = document.querySelector('.out')

   
   for (let i = 1; i <= 5; i++) {
      
       for (let k = 1; k <= 10; k++) {
           console.log(`${i}*${k}=${i * k}`)
           //console.log(summ += k + ' ')
              out.innerHTML += `${i}*${k}=${i * k}<br>`
           
            
   
       }
        //out.innerHTML +='<br>'
        
   }*/
   /*
   С помощью вложенных циклов и символа * нарисуйте:

   *****
   *****
   *****
*//*
let out = document.querySelector('.out')
let summ = 0
let k
let i

for (i = 0; i <= 2; i++) {
   
    for (k = 1; k <= 5; k++) {
        console.log('*')
        //console.log(summ += k + ' ')
           out.innerHTML += '*'         

    }
     out.innerHTML +='<br>'
     
}*/