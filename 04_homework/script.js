// task 1 --------------------
/*
let a = 4

if (a === 4) {
    console.log('work')
}*/
fetch('http://api.openweathermap.org/data/2.5/weather?q=Krasnodar,ru&appid=4ca848bb82776e391cc1309aca8f5bfd')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer').textContent = data.weather[0]
        ['description'];
        //http://openweathermap.org/img/wn/09d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    })