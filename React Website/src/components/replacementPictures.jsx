import React, { useState, useEffect } from "react";
import ratingStarImg from "./images/header-rating-star.png";
import slideshowOne from "./images/header-slideshow-image1.png"
import slideshowTwo from "./images/header-slideshow-image2.png"
import slideshowThree from "./images/header-slideshow-image3.png"
import "./header.css"
import { useParams, useNavigate } from 'react-router-dom'
import Axios from "axios"
import EllicottOne from "../../resident-hall-photos/Ellicott/EllicottBedroom.jpg";
import EllicottTwo from "../../resident-hall-photos/Ellicott/EllicottKitchen.jpg";
import EllicottThree from "../../resident-hall-photos/Ellicott/EllicottBathroom.jpg";
import GovenorsOne from "../../public/resident-hall-photos/Governors/"
import GovernorsTwo from "../../resident-hall-photos/Governors/"
import GovernorsThree from "../../resident-hall-photos/Governors/GovernorsSS.jpg"
import HadleyOne from "../resident-hall-photos/HadleyVillage/HadleyBathroom.jpg"
import HadleyTwo from "../resident-hall-photos/HadleyVillage/HadleyBedroom.jpg"
import HadleyThree from "../../resident-hall-photos/HadleyVillage/HadleyLivingRoom.jpg"
import CreaksideOne from "../../resident-hall-photos/Creakside East-West/CreaksideBed.jpg"
import CreaksideTwo from "../../resident-hall-photos/Creakside East-West/CreaksideKitchen.jpg"
import CreaksideThree from "../../resident-hall-photos/Creakside East-West/CreaksideLiving.jpg"

export default function Header(props) {
    const [isFavorite, setIsFavorite] = useState();
    const [headerData, setHeaderData] = useState();
    const [image, setImage] = useState([])
    const navigate = useNavigate();


    let { id } = useParams();
    const images1to5 = [EllicottOne, EllicottTwo, EllicottThree];
    const image6 = [HadleyOne, HadleyTwo, HadleyThree];
    const image9 = [GovenorsOne, GovernorsTwo, GovernorsThree];
    const image10to11 = [CreaksideOne, CreaksideTwo, CreaksideThree]

    useEffect(() => {
        if (id >= 1 && id <= 5 && id !== 8) { // Ellicott 
            setImage(images1to5);
        } else if (id >= 6 && id <= 7) { // Hadley and South Lake
            setImage(image6);
        } else if (id === 9) { // Governers 
            setImage(image9);
        } else if (id === 10 || id === 11) { // Creakside 
            setImage(image10to11);
        }
    }, [id]);

    useEffect(() => {
        let cookie = document.cookie;
        let parsedCookie = cookie.substring(cookie.indexOf("currentUserCookie") + 18);
        if (!(parsedCookie.indexOf(";") == -1)) {
            parsedCookie = parsedCookie.substring(0, parsedCookie.indexOf(";"))
        };
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/unfavorite.php', {
            id: id,
            image: image,
            pid: parsedCookie,
        })
            .then(function (response) {
                let headerData = response.data
                headerData = headerData.substring(3, headerData.length - 2)
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
    const price = prices.map(([key, value]) =>
        <ul key={key}>{key} : ${value.slice(0, value.length - 3) + "," + value.slice(value.length - 3)}</ul>
    )
    // console.log(price)
    //fixed bug
    return (
        <div className="header">
            <h1 className="header-title">{props.title}</h1>
            <button className="header-button" onClick={() => handleSubmission(4)}>{isFavorite ? "Unfavorite" : "Favorite"}</button>
            <div className="header-description">
                <img className="header-rating-img" src={ratingStarImg} alt="" />
                <span className="header-rating">{props.rating}</span>
                <span>{props.location}</span>
            </div>
            <div>
                <img className="header-img header-img-one" src={EllicottOne} alt="slideshowImg1" />
                <img className="header-img" src={EllicottTwo} alt="slideshowImg2" />
                <img className="header-img" src={EllicottThree} alt="slideshowImg3" />
            </div>
            <div>
                <h2 className="header-price-title">Dorming Options</h2>
                <span className="header-price">{price}</span>
            </div>
        </div>
    )
}