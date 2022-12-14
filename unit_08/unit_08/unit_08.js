//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

function t1() {
let one = 1

while (one <= 50) {
   document.querySelector('.out-1').innerHTML += one + ' '
   one++
   console.log(one) 
}
}
document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

function t2() {
let two = 2 

while (two <= 122) {
   document.querySelector('.out-2').innerHTML += two + ' '
   two+=2
   console.log(two) 
}

}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

function t3() {
let tree = 26 

while (tree > 7) {
   tree -= 1
   document.querySelector('.out-3').innerHTML += tree + ' '
   //tree-=1
   console.log(tree) 
}

}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.


function t4() {
let four = 80 

while (four > 35) {
   four -= 3
   document.querySelector('.out-4').innerHTML += four + '_'
   //tree-=1
   console.log(four) 
}

}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

function t5() {
let five = 1 
//alert('work')
while (five <=17) {
  if (five % 2 == 0) {
      document.querySelector('.out-5').innerHTML += five + '_' + '**'
      five +=1
       console.log(five) 
  } else {
      document.querySelector('.out-5').innerHTML += five + '_' + '*'
      five +=1
      console.log(five) 
  } 
}

}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.

function t6() {
   let one = 0
   //console.log(input.value)
   //console.log(typeof input) 
   while (one < input.value) {
      document.querySelector('.out-6').innerHTML += '******' + '<br>'
      one++
     
   }
}
let input = document.querySelector('.i-6')
document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

function t7() {
   console.log(inputs.value)
   let ones = +inputs.value
   console.log(typeof ones)
  while (ones >= 0) {
    document.querySelector('.out-7').innerHTML += ones + ' '
    ones--  
  }

}
let inputs = document.querySelector('.i-7');
document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.

function t8() {
   let ones1 = +inputs1.value
   let ones2 = +inputs2.value

   console.log(typeof ones1)
  while (ones1 <= ones2) {
    document.querySelector('.out-8').innerHTML += ones1 + ' '
    ones1++  
  }

}
let inputs1 = document.querySelector('.i-81');
let inputs2 = document.querySelector('.i-82');

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.

function t9() {
 //  let ons1 = +input11.value
 // let ons2 = +input22.value
   let ons1 = +input11.value
   let ons2 = +input22.value
   
   console.log(typeof ons1)
   while (ons1 < ons2) {
    document.querySelector('.out-9').innerHTML += ons1 + ' '
    ons1++  
  }
   while (ons2 <= ons1) {
    document.querySelector('.out-9').innerHTML += ons2 + ' '
    ons2++  
  }

  
}
let input11 = document.querySelector('.i-91');
let input22 = document.querySelector('.i-92');

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
let year = 1950
let future = 2000
while (year <= 2000) {
     
     document.querySelector('.out-10').innerHTML += year + ' '
     year += 2
     console.log(year)
}
}
document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two
let array = ''

function t11() {
   // console.log(typeof elem[1])
    let i = 0
   while (i < elem.length) {
      
      document.querySelector('.out-11').innerHTML += elem[i].innerHTML + '<br>'
      console.log(elem[i])
      i++
   }
   
}
let elem = document.querySelectorAll('.div-11')
document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


function t12() {
  // console.log(elems)
   let condition = 0
   while (condition < elems.length) {
      elems[condition].style.background = 'orange'
      
      console.log(elems[condition])
      condition++
   }
}
let elems = document.querySelectorAll('.div-12')
document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
   console.log(input123)
   let i = 0
   while (i < input123.length) {
     console.log(input123[i]) 
     input123[i].value = i + 1
     i++
   }
}
let input123 = document.querySelectorAll('.i-13') 
document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
   console.log(inputCheck)
   let i = 0
   while (i < inputCheck.length) {
     console.log(inputCheck[i].value) 
     
   if (inputCheck[i].checked == true && i == 0) {
       console.log('0') 
         out14.innerHTML = inputCheck[0].value
     } else if (inputCheck[i].checked == true && i == 1) {
       console.log('1') 
         out14.innerHTML = inputCheck[1].value
     } else if (inputCheck[i].checked == true && i == 2) {
       console.log('2') 
         out14.innerHTML = inputCheck[2].value
     }

 
     i++
   }
}
let out14 = document.querySelector('.out-14')
let inputCheck = document.querySelectorAll('.i-14')
document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.

function t15() {
let i = 0
while (i < 11) {
  console.log(10-i) 
  console.log(i)
  document.querySelector('.out-15').innerHTML += 10-i + ' '
  document.querySelector('.out-15').innerHTML += i + ' '

  i++
}
}

document.querySelector('.b-15').onclick = t15;
