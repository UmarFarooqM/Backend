<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Weather App</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; margin: 20px; }
    input { padding: 8px; margin-right: 5px; }
    button { padding: 8px 12px; cursor: pointer; }
    .forecast { display: flex; justify-content: center; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
    .day { border: 1px solid #ccc; padding: 10px; border-radius: 8px; width: 120px; }
  </style>
</head>
<body>
  <h1>Weather App</h1>

  <input type="text" id="cityInput" placeholder="Enter city name">
  <button onclick="searchCity()">Search</button>

  <h2 id="location"></h2>
  <p id="currentWeather"></p>

  <div class="forecast" id="forecast"></div>

  <script>
    const weatherApiKey = "1fwhs361b8b5a159482awh2w4";

    async function getWeather(lat, lon) {
      const response = await fetch(
       `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`
      );
      const data = await response.json();

      document.getElementById("location").innerText = data.city.name;
      document.getElementById("currentWeather").innerText =
        Temperature: ${data.list[0].main.temp}°C, ${data.list[0].weather[0].description};

      
      let forecastHTML = "";
      for (let i = 0; i < data.list.length; i += 8) {
        forecastHTML += `
          <div class="day">
            <h4>${new Date(data.list[i].dt_txt).toDateString()}</h4>
            <p>${data.list[i].main.temp}°C</p>
            <p>${data.list[i].weather[0].description}</p>
          </div>
        `;
      }
      document.getElementById("forecast").innerHTML = forecastHTML;
    }

    function searchCity() {
      const city = document.getElementById("cityInput").value;
      if (!city) return;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`
      )
        .then(res => res.json())
        .then(data => {
          getWeather(data.coord.lat, data.coord.lon);
        });
    }

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          getWeather(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          alert("Location access denied. Please search for a city instead.");
        }
      );
    }
  </script>
</body>
</html>