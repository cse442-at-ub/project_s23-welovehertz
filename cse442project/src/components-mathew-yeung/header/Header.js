import React from "react";
import ratingStarImg from "./images/header-rating-star.png";
import slideshowOne from "./images/header-slideshow-image1.png"
import slideshowTwo from "./images/header-slideshow-image2.png"
import slideshowThree from "./images/header-slideshow-image3.png"
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <h1 className="header-title">Villas on Rensch</h1>
            <div className="header-description">
                <img className="header-rating-img" src={ratingStarImg} alt=""/>
                <span className="header-rating">4.9</span>
                <span>100 Villas Dr E, Buffalo, NY 14228</span>
            </div>
            <div>
                <img className="header-img header-img-one" src={slideshowOne} alt="slideshowImg1" />
                <img className="header-img" src={slideshowTwo} alt="slideshowImg2" />
                <img className="header-img" src={slideshowThree} alt="slideshowImg3" />
            </div>
            <div>
                <h2 className="header-price-title">PRICE</h2>
                <h3 className="header-price">$800 month</h3>
            </div>
        </div>
    )
}