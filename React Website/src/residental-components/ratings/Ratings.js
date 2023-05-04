import React from "react";
import "./ratings.css";

const MAX_VALUE = 5;

export default function Ratings(props) {
  const ratings = Object.entries(props.rating).map(([type, value]) => {
    const formattedValue = Number.isInteger(value) ? value : value.toFixed(1);
    const progressPercentage = (formattedValue / MAX_VALUE) * 100;
    const progressClass = progressPercentage === 0 ? "empty" : "";
    

    return (
      <div className="ratings-column" key={type}>
        <span className="ratings-type">{type}</span>
        <div
          className={`ratings-progress-bar ${progressClass}`}
          style={{ width: "300px" }}
        >
          <div
            className="ratings-progress-bar__inner"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <span className="ratings-number">{formattedValue}</span>
      </div>
    );
  });

  return (
    <div>
      <h2 className="ratings-title">Ratings</h2>
      <div className="ratings-row">{ratings}</div>
    </div>
  );
}
