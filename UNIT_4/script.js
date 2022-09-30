let one = document.querySelector('button')

one.addEventListener('click', myFunction)

function myFunction() {

    one = document.querySelector('button').style.background =
        document.querySelector('#one').value
    console.log(one)
}
