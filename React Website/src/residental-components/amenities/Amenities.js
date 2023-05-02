import React from "react";
import wifiIcon from "./images/amenities-wifi-icon.png";
import acIcon from "./images/amenities-ac-icon.png";
import "./amenities.css"



export default function Amenities(props) {
    var amenities = Object.keys(props.amenities);
    // console.log(amenities)
    const amenity = amenities.map((key, a) =>
        <> 
        <ul className="amenities-type" key={key}>{key}</ul>
        <img className="amenities-icon" src={require("./images/"+key.toLowerCase()+".png")} alt={key}/>
        </>
    ) 


    return (
        <div >
            <h2 className="amenities-title">Amenities</h2>
            <div className="amenities-column">
                {amenity}
                <ul className="amenities-type">Wifi</ul>
                <img className="amenities-icon" src={wifiIcon} alt="Wifi Icon" />  
                <ul className="amenities-type">AC</ul>
                <img className="amenities-icon" src={acIcon} alt="AC Icon" />  
            </div>
        
        </div>
    )
}