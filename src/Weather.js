import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  let apiKey = "cb4440cc8b49o2e10d5a63f3ecftcafe";
  let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
  axios.get(url).then(showWeather);

  function showWeather(response) {
    alert(
      `The weather in ${props.city} is ${response.data.temperature.current}°C`
    );
  }
  let city = "Lisbon";
  return (
    <div>
      <h2>Hello from Weather in {city}</h2>
      <a
        href="https://www.shecodes.io/learn/cohorts/1736/units/74/lessons/293"
        target="_blank"
        rel="noreferrer"
      >
        SheCodes
      </a>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
