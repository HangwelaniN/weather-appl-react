import React from "react";
import "./Forcast.css";
export default function Forcast() {
  return (
    <div className="forcast">
      <div className="row">
        <div className="col">
          <div className="forcastDay">Thur</div>
          <div className="forcasttempicon"> icon</div>
          <span className="forcasttempMax">19° </span>
          <span className="forcasttempmin"> 10°</span>
        </div>
      </div>
    </div>
  );
}
