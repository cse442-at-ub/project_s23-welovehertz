import React from "react";
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Amenities from "./components/amenities/Amenities"
import Ratings from "./components/ratings/Ratings"
import UserRatings from "./components/userRatings/UserRatings"
import "./app.css"

export default function App() {
    return (
        <div class="container">
            <Navbar />
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