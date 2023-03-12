import React from "react";
import "./ratings.css"

export default function Ratings() {
    return (
        <div>
            <h2 className="ratings-title">Ratings</h2>
            <div className="ratings-row">
                <div className="ratings-column">
                    <span className="ratings-type">Cleanliness</span>
                    <div className="ratings-progess-bar"></div>
                    <span className="ratings-number">4.3</span>
                </div>
                <div className="ratings-column">
                    <span className="ratings-type">Price</span>
                    <div className="ratings-progess-bar"></div>
                    <span className="ratings-number">1.5</span>
                </div>
                <div className="ratings-column">
                    <span className="ratings-type">Communication</span>
                    <div className="ratings-progess-bar"></div>
                    <span className="ratings-number">4.9</span>
                </div>
            </div>
            <div className="ratings-row">
                <div className="ratings-column">
                    <span className="ratings-type">Location</span>
                    <div className="ratings-progess-bar"></div>
                    <span className="ratings-number">5.0</span>
                </div>
                <div className="ratings-column">
                    <span className="ratings-type">Interior</span>
                    <div className="ratings-progess-bar"></div>
                    <span className="ratings-number">3.0</span>
                </div>
                <div className="ratings-column">
                    <span className="ratings-type">Safety</span>
                    <div className="ratings-progess-bar"></div>
                    <span className="ratings-number">2.5</span>
                </div>
            </div>
        </div>
    )
}
