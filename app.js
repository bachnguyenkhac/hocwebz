var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var value  = document.querySelector('.value')


async function changeWeatherUI(){
    search.value.trim()
   let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=8c67e07e9702124bbb53d7144f8a9785`
  let data = await fetch(apiURL).then(res=> res.json())
  console.log(data);
  city.innerText = data.name
  city.innerText = data.sys.country
  visibility.innerText = data.visibility + 'm'
  wind.innerText = data.wind.speed + 'm/s'
  sun.innerText = data.main.humidity + '%'
  value.innerText = (data.main.temp - 273.15)
}
changeWeatherUI()