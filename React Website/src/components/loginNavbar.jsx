import React, {useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "../styles/loginNavbar.css";
import HomeLogo from '../pictures/home_logo.jpg'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchBar from "./searchbar";
import HousingData from "../Data.json"
import { Button } from "@mui/material";
import Axios from "axios"


export default function Navbar(){

    const [openLinks, setOpenLinks] = useState(false);
    const [pfp, setPfp] = useState();

    useEffect(() => {
        let cookie = document.cookie
        let parsedCookie = cookie.substring(cookie.indexOf("currentUserCookie") + 18)
        if (!(parsedCookie.indexOf(";") == -1)) {
            parsedCookie = parsedCookie.substring(0, parsedCookie.indexOf(";"))
        }
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/navbar.php', {
            id: parsedCookie,
        })          
        .then(response => {
            const parsedPFP = JSON.parse(response.data.substring(2, response.data.length-1))
            setPfp(parsedPFP)
        })     
    })
    function deleteCookie(){
        document.cookie = "currentUserCookie=; expires = 01 Jan 2000 00:00:00 UTC; path=/;"
        window.location.reload();
    }
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };


    return(
        <>
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <Button><Link to="/CSE442-542/2023-Spring/cse-442h/"><img src={HomeLogo} alt="" /></Link></Button>
                    <div className="hiddenLinks">
                        <Link to="/CSE442-542/2023-Spring/cse-442h/">Home</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/contact-us">Contact Us</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/profile">
                            <img className="profile-image" src={pfp} />
                        </Link>
                    </div>
                    <SearchBar placeholder="Enter Housing Option" data ={HousingData}/> 
                </div>
                <div className="rightSide">
                        <Link to="/CSE442-542/2023-Spring/cse-442h/">Home</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/login" onClick={deleteCookie}>Logout</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/contact-us">Contact Us</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/profile">
                            <img className="profile-image" src={pfp} />
                        </Link>
                    <Button onClick={toggleNavbar}><ReorderIcon/></Button>
                </div>
            </div>
        </>
    );
}
