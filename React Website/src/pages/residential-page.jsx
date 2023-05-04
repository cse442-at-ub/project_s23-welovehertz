import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Amenities from '../residental-components/amenities/Amenities'
import Header from '../residental-components/header/Header'
import Ratings from '../residental-components/ratings/Ratings'
import UserRatings from '../residental-components/userRatings/UserRatings'
import { useNavigate, useParams } from 'react-router-dom'
import ResiPrices from '../components/prices'
import ResiAmenities from '../components/hasamenities'
import EllicottOne from "../resident-hall-photos/Fargo/EllicottOne.jpg";
import EllicottTwo from "../resident-hall-photos/Fargo/EllicottTwo.jpg";
import EllicottThree from "../resident-hall-photos/Fargo/EllicottThree.jpg";

// Define an array of the three images
const images1to5 = [EllicottOne, EllicottTwo, EllicottThree];

// Use a ternary operator to select the correct images based on the ID
const images = id < 6 ? images1to5 : null;

import '../styles/resident-page.css'
import AverageRating from '../components/math'


export default function ResidentPage() {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [prices, setPrices] = useState('');
    const [amenities, setAmenities] = useState('');
    const navigate = useNavigate();
    const [image, setImage] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        if (id < 1 || id > 11 || isNaN(id)) {
            navigate(`/CSE442-542/2023-Spring/cse-442h/contact-us`)
        }

        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/userRatings.php', {
            id: id
        }).then(function (response){
            const data = JSON.parse(response.data.substring(1, response.data.length-1))
            setComplexRating(AverageRating(data))
            setRatings(ResiRatings(data))
        })

        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/residential.php', {
            id: id
        })
            .then(function (response) {

                const residentialData = JSON.parse(response.data.split("[")[1].split("]")[0])
                setTitle(residentialData.residence)
                setLocation(residentialData.location)
                setPrices(ResiPrices(residentialData))
                setAmenities(ResiAmenities(residentialData))
            })
    }, []);


    useEffect(() => {
        if (id >= 1 && id <= 5 && id == 8) { // Ellicott 
            setImage(["image1.jpg", "image2.jpg", "image3.jpg"]);
        } else if (id >= 6 && id <= 7) { // Hadley and South Lake
            setImage(["image4.jpg", "image5.jpg", "image6.jpg"]);
        } else if (id == 9) { // Governers 
            setImage(["image7.jpg", "image8.jpg", "image9.jpg"]);
        } else if (id == 10 && id == 11) { // Creakside 
            setImage(["cock", "cock", "cock"])
        }
    }, [id]);


    return (
        <div className='container'>
            <Header prices={prices} title={title} location={location} image={image} />
            <div className="header-images">
                {props.image.map((image) => (
                    <img key={image} src={require(`../images/${image}`).default} alt="" />
                ))}
            </div>

            <hr />
            <Amenities amenities={amenities} />
            <hr />
            <Ratings rating={rating}/>
            <hr />
            <UserRatings />
        </div>
    )
}