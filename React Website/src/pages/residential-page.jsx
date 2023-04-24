import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Amenities from '../residental-components/amenities/Amenities'
import Header from '../residental-components/header/Header'
import Ratings from '../residental-components/ratings/Ratings'
import UserRatings from '../residental-components/userRatings/UserRatings'
import {useNavigate, useParams} from 'react-router-dom'
import ResiPrices from '../components/prices'
import ResiAmenities from '../components/hasamenities'
import ResiRatings from '../components/ratings'
import '../styles/resident-page.css'
import AverageRating from '../components/math'


export default function ResidentPage() {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [prices, setPrices] = useState('');
    const [amenities, setAmenities] = useState('');
    const [rating, setRatings] = useState('');
    const [complexRating, setComplexRating] = useState('')

    const navigate = useNavigate();

    let { id } = useParams();

    // const cookie = document.cookie
    // if (cookie.includes("currentUserCookie")) {
      
    // }
    // function readCookie(n) {
    //     var cookieName = n + "=";
    //     var split = document.cookie.split(';');
    //     for(var i=0;i < split.length;i++) {
    //         var c = split[i];
    //         while (c.charAt(0)==' ') c = c.substring(1,c.length);
    //         if (c.indexOf(cookieName) == 0) return c.substring(cookieName.length,c.length);
    //     }
    //     return null;
    // }
    
    // username = readCookie('currentUserCookie')

    useEffect(() => {
        if (id < 1 || id > 11 || isNaN(id)){
            navigate(`/CSE442-542/2023-Spring/cse-442h/contact-us`)
        }

        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/userRatings.php', {
            id: id
        }).then(function (response){
            const data = JSON.parse(response.data.substring(1, response.data.length-1))
            const m = AverageRating(data)
            setComplexRating(m)
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
            setRatings(ResiRatings(residentialData))
        })



    }, []);

    return (
        <div className='container'>
            <Header prices={prices} title={title} location={location} rating={complexRating}/>
            <hr />
            <Amenities amenities={amenities}/>
            <hr />
            <Ratings rating={rating}/>
            <hr />
            <UserRatings />
        </div>
    )
}