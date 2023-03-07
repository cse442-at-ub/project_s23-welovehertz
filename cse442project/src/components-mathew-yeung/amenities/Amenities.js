import React from "react";
import gymIcon from "./images/amenities-gym-icon.png";
import wifiIcon from "./images/amenities-wifi-icon.png";
import kitchenIcon from "./images/amenities-kitchen-icon.png";
import jacuuziIcon from "./images/amenities-jacuuzi-icon.png";
import acIcon from "./images/amenities-ac-icon.png";
import parkingIcon from "./images/amenities-parking-icon.png";
import "./amenities.css"



export default function Amenities() {
    return (
        <div className="amenities">
            <h2 className="amenities-title">Amenities</h2>
            <div className="amenities-row">
                <div className="amenities-column">
                    <img className="amenities-icon" src={gymIcon} alt="gym-icon" />
                    <span className="amenities-type">Gym</span>
                </div>
                <div className="amenities-column">
                    <img className="amenities-icon" src={wifiIcon} alt="wifi-icon" />
                    <span className="amenities-type">Wifi</span>
                </div>
                <div className="amenities-column">
                    <img className="amenities-icon" src={kitchenIcon} alt="kitchen-icon" />
                    <span className="amenities-type">Kitchen</span>
                </div>
            </div>
            <div className="amenities-row">
                <div className="amenities-column">
                    <img className="amenities-icon" src={jacuuziIcon} alt="jacuuzi-icon" />
                    <span className="amenities-type">Jacuuzi</span>
                </div>
                <div className="amenities-column">
                    <img className="amenities-icon" src={acIcon} alt="ac-icon" />
                    <span className="amenities-type">Central Air Conditioning</span>
                </div>
                <div className="amenities-column">
                    <img className="amenities-icon" src={parkingIcon} alt="parking-icon" />
                    <span className="amenities-type">Parking</span>
                </div>
            </div>
        </div>
    )
}