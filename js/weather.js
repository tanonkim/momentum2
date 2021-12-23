const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "9cd40cd1196a636e527b621af95b126d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `Weather is ${data.weather[0].main}/${data.main.temp}`;
      // ARRAY의 첫번째 Element를 가져와야 하기 때문이다
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
