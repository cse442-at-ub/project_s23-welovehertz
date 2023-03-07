import React from "react";
import logo from "./images/nav-logo.png"
import darkMode from "./images/nav-darkmode.png"
import profile from "./images/nav-profile.png"
import "./navbar.css"


export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="nav-logo" src={logo} alt="logo" />
            <span className="nav-title">Crib Finder</span>
            <input className="nav-search" type="text" placeholder="Search Housing"></input>
            <div className="nav-right">
                <img className="nav-darkMode" src={darkMode} alt="darkMode" />
                <img className="nav-profile" src={profile} alt="profile" />
            </div>
        </nav>
    )
}