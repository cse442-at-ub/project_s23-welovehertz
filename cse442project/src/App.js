import React from "react";
import Navbar from "./components-mathew-yeung/navbar/Navbar"
import Header from "./components-mathew-yeung/header/Header"
import Amenities from "./components-mathew-yeung/amenities/Amenities"
import Ratings from "./components-mathew-yeung/ratings/Ratings"
import UserRatings from "./components-mathew-yeung/userRatings/UserRatings"
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