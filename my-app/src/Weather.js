import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Info from "./Info";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function handleTemp(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: response.data.temperature.current,
      des: response.data.condition.description,
      humi: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      city: response.data.name,
      date: new Date(response.data.time * 1000),
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
    const Url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=5a672aa271oba8c4c6073t525f8b14c8&units=metric`;

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
        <h1>{city}</h1>
        <Info data={weatherData} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
