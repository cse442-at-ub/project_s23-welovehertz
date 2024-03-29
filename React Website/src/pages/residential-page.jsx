import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Amenities from '../residental-components/amenities/Amenities'
import Header from '../residental-components/header/Header'
import Ratings from '../residental-components/ratings/Ratings'
import UserRatings from '../residental-components/userRatings/UserRatings'
import {useNavigate, useParams} from 'react-router-dom'
import ResiPrices from '../components/prices'
import ResiAmenities from '../components/hasamenities'
import '../styles/resident-page.css'


export default function ResidentPage() {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [prices, setPrices] = useState('');
    const [amenities, setAmenities] = useState('');

    const navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
        if (id < 1 || id > 11 || isNaN(id)){
            navigate(`/CSE442-542/2023-Spring/cse-442h/contact-us`)
        }
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

    return (
        <div className='container'>
            <Header prices={prices} title={title} location={location}/>
            <hr />
            <Amenities amenities={amenities}/>
            <hr />
            <Ratings />
            <hr />
            <UserRatings />
        </div>
    )
}