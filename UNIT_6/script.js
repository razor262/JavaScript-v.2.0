/*
Task 1
С помощью вложенных циклов, нарисуйте строку:

***_***_***_
где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с 
помощью внешнего.
*/
let out = document.querySelector('.out')

for (let i = 0; i < 3; i++) {
    out.innerHTML = '*'
    console.log(out)
}
