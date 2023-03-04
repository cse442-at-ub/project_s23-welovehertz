import React from "react";
import "../navbar/navbar.css"
import logo from "./images/nav-logo.png"
import darkMode from "./images/nav-darkmode.png"
import profile from "./images/nav-profile.png"


export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="nav-logo" src={logo} alt="logo" />
            <div className="nav-title">Crib Finder</div>
            <input className="nav-search" type="text" placeholder="Search Housing"></input>
            <img className="nav-profile" src={profile} alt="profile" />
            <img className="nav-darkMode" src={darkMode} alt="darkMode" />
        </nav>
    )
}