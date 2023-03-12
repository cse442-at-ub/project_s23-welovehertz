import React from 'react'
import Amenities from '../residental-components/amenities/Amenities'
import Header from '../residental-components/header/Header'
import Ratings from '../residental-components/ratings/Ratings'
import UserRatings from '../residental-components/userRatings/UserRatings'


export default function ResidentPage() {
    return (
        <div class="container">
            <Header />
            <hr />
            <Amenities />
            <hr />
            <Ratings />
            <hr />
            <UserRatings />
        </div>
    )
}