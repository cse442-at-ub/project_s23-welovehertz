import React, {useState, useEffect} from "react";
import ratingStarImg from "./images/header-rating-star.png";
import slideshowOne from "./images/header-slideshow-image1.png"
import slideshowTwo from "./images/header-slideshow-image2.png"
import slideshowThree from "./images/header-slideshow-image3.png"
import "./header.css"
import {useParams, useNavigate} from 'react-router-dom'
import Axios from "axios"

export default function Header( props ) {
    const [isFavorite, setIsFavorite] = useState();
    const navigate = useNavigate();

    let { id } = useParams();

    //
    useEffect(() => {
        let cookie = document.cookie
        let parsedCookie = cookie.substring(cookie.indexOf("currentUserCookie") + 18)
        if (!(parsedCookie.indexOf(";") == -1)) {
            parsedCookie = parsedCookie.substring(0, parsedCookie.indexOf(";"))
        }
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/unfavorite.php', {
            id: id,
            pid: parsedCookie,
        })
        .then(function(response){
            let headerData = response.data
            headerData = headerData.substring(3, headerData.length-2)
            let headerDataArr = headerData.split(",");
            if (headerDataArr.indexOf(id) > -1) {
                setIsFavorite(true)
            } else {
                setIsFavorite(false)
            }
        })
    }, [])

    const handleSubmission = (event) => { 
        let cookie = document.cookie
        let parsedCookie = cookie.substring(cookie.indexOf("currentUserCookie") + 18)
        if (!(parsedCookie.indexOf(";") == -1)) {
            parsedCookie = parsedCookie.substring(0, parsedCookie.indexOf(";"))
        }
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/addFavorite.php', {
            id: id,
            pid: parsedCookie,
        })
        setIsFavorite(!isFavorite)
        //DO NOT GET RID OF CONSOLE.LOG, ITS FOR TESTING!
        console.log("Added housing complex into the database")
    }

    var prices = Object.entries(props.prices);
    const price = prices.map(([key,value]) =>
        <ul key={key}>{key} : ${value.slice(0,value.length-3)+ ","+ value.slice(value.length-3)}</ul>
    )
    // console.log(price)
    //fixed bug
    return (
        <div className="header">
            <h1 className="header-title">{props.title}</h1>
            <button className="header-button" onClick={() => handleSubmission(4)}>{isFavorite ? "Unfavorite" : "Favorite"}</button>
            <div className="header-description">
                <img className="header-rating-img" src={ratingStarImg} alt=""/>
                <span className="header-rating">{props.rating}</span>
                <span>{props.location}</span>
            </div>
            <div>
                <img className="header-img header-img-one" src={slideshowOne} alt="slideshowImg1" />
                <img className="header-img" src={slideshowTwo} alt="slideshowImg2" />
                <img className="header-img" src={slideshowThree} alt="slideshowImg3" />
            </div>
            <div>
                <h2 className="header-price-title">Dorming Options</h2>
                <span className="header-price">{price}</span>
            </div>
        </div>
    )
}