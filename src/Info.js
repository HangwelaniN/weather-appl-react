import React from "react";
import FormattedDate from "./FormattedDate";
import Unit from "./Unit";
import Icon from "./Icon";

export default function Weatherinfo(props) {
  return (
    <div className="weatherinfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.des}</li>
      </ul>
      <div className="row">
        <div className="col-7">
          <Icon code={props.data.icon} />

          <Unit celsius={props.data.temp} />
        </div>
        <div className="col-4">
          <ul>
            <li>humidity : {props.data.humi}%</li>
            <li>wind : {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
