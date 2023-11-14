import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Info from "./Info";
import Forcast from "./Forcast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function handleTemp(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temp: response.data.main.temp,
      des: response.data.weather[0].description,
      humi: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handlesearch(event) {
    event.preventDefault();
    search();
  }

  function handlesubmit(event) {
    setCity(event.target.value);
  }
  function search() {
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;

    axios.get(Url).then(handleTemp);
  }

  if (weatherData.ready) {
    return (
      <div class="weather">
        <form onSubmit={handlesearch}>
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handlesubmit}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <Info data={weatherData} />
        <Forcast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
