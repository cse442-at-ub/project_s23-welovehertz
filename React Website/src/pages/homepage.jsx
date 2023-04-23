import { useNavigate } from 'react-router-dom';
import BackGround from '../pictures/background.jpg';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/homepage.css'
import * as React from 'react';

const Homepage = () => {
    const [listings, setListings] = useState([{
        id: '',
        residence: ''
    }]);


    useEffect(() => {
        Axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/listingcard.php', {
        })
            .then(response => {
                const response_json = JSON.parse(response.data.substring(1));
                setListings(response_json)
            })
            .catch(error => console.error(error));
    }, []);

    const navigate = useNavigate();

    const handleListingClick = (id) => {
        if (0 < id < 12) {
            navigate(`/CSE442-542/2023-Spring/cse-442h/${id}`)
        } else {
            navigate(`/CSE442-542/2023-Spring/cse-442h/`)
        }
    }

    return (
        <>
            <div className='home' style={{ backgroundImage: `url(${BackGround})` }}>
                <div className='headerContainer'>
                    <h1>HOUSE FINDER</h1>
                    <p>Easily Figure Out Where To Live</p>
                </div>
            </div>
            <div className='listings'>
                {listings.map(listing => (
                    <div key={listing.id} className='listing-card' onClick={() => handleListingClick(listing.id)}>
                        <img src={`/CSE442-542/2023-Spring/cse-442h/pictures/${listing.residence.split(" ")[0].toLowerCase()}.jpg`} alt={listing.residence} />
                        <h2>{listing.residence}</h2>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Homepage;