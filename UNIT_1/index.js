/*
Task 1
Выведите в консоль ваше имя.
*/
//console.log("Александр")

/*
Task 2
Выведите в консоль номер месяца в котором вы
 родились. Изучите чем отличается вывод числа и
  строки.
*/
//console.log(9)

/*
Task 3
Выведите в консоль строку:
*/
//console.log('Добро ' + 'пожаловать ' + ' на курс')

/*
Task 4
С помощью alert выведите число 2019.
 После срабатывания кода - закомментируйте его,
  чтобы не мешал для дальнейшей разработки
*/
//console.log(2019)

/*
Task 5
С помощью alert выведите результат операции:
*/
//alert(2019 - 200)

/*
Task 6
Создайте на странице div с id=one. С помощью
 document.getElementById запишите в данный элемент
  текст 'Hello World'.

let one = document.getElementById('out')
one.innerHTML = 'Hello World'
*/

/*
Task 7
Создайте на странице div с id=two.
 С помощью document.getElementById запишите
  в данный элемент результат умножения 12 на 12. 
  Умножение можно сделать с помощью знака
   звездочки ( цифра 8).
*/
/*
let one = document.getElementById('two')
one.innerHTML = 12 * 12
*/
/*
Task 8
Создайте div с классом one. С помощью
 document.querySelector запишите в данный 
 элемент текст 'Hello World'.
*/
/*
let one = document.querySelector('.one')
one.textContent = 'Hello World'
*/
/*
Task 9
Создайте следующую верстку на странице:

<h2>Hello <span>everyone</span></h2>
Замените с помощью querySelector текст 
everyone на world.
*/
/*
let one = document.querySelector('span')
one.innerHTML = "world"
*/
/*
Task 10
Создайте пустой div c классом three. 
С помощью querySelector запишите внутрь
 div заголовок h3 с произвольным текстом.
*/
/*
let one = document.querySelector('.tree')
one.innerHTML = '<h3>любой текст</h3>'
*/
/*
Task 11
Создайте пустой div c классом four. 
С помощью querySelector запишите внутрь div
 заголовок h4 с произвольным текстом
  и параграф p с произвольным текстом.
   Подсказка, чтобы дописывать внутрь элемента
    используейте не innerHTML = , 
    а innerHTML += (плюс равно без пробела).
*/
/*
let one = document.querySelector('.four')
one.innerHTML += '<h4>любой текст</h4>'
one.innerHTML += '<p>любой текст</p>'
*/
/*
Task 12
Создайте div с классом five. Получите его в переменную a.
 С помощью innerHTML запишите внутрь переменной a число 3.1415.
  Изучите как в JS пишутся дроби - через точку или через запятую!
*/
/*
let a = document.querySelector('.five')
a.innerHTML = 3.1415
*/
/*
Task 13
Создайте div с классом seven. Получите его в переменную div7.
 С помощью innerHTML запишите в него строку:

<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">
Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки.
 Главное чтобы кавычки чередовались. Поэтому при вставке оберните данную строку
  одинарными кавычками.
*/
/*
let seven = document.querySelector('.seven')
seven.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">'
*/
/*
Task 14
Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно
 и выведите в него умножение z1 на z2.
*/
/*
let seven = document.querySelector('.seven')
let z1 = 6, z2 = 3
seven.innerHTML = z1 * z2
*/
/*
Task 15
Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, 
выведите в него деление y1 на y2.
*/