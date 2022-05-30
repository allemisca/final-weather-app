function showTemperature(response) {
  console.log(response.data);
  let temp = document.querySelector(".number");
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let wind = document.querySelector("#wind-number");
  let humidity = document.querySelector("#humidity-number");
  temp.innerHTML = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  wind.innerHTML = Math.round(response.data.wind.speed);
  humidity.innerHTML = response.data.main.humidity;
}

let apiKey = "f07a94241e107c627fab3534ea3f2313";
let aipUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(aipUrl).then(showTemperature);
