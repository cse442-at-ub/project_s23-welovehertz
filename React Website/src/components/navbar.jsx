import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "../styles/navbar.css";
import Searchbar from "./searchbar";
import HomeLogo from '../pictures/home_logo.jpg'
//import HomeIcon from '@mui/icons-material/Home';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Button } from "@mui/material";


export default function Navbar(){

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

    return(
        <>
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <img src={HomeLogo} alt="" />
                    <div className="hiddenLinks">
                        <Link to="/CSE442-542/2023-Spring/cse-442h/">Home</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/register">Register</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/login">Login</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/contact-us">Contact Us</Link>
                    </div>
                </div>
                <div className="rightSide">
                        <Link to="/CSE442-542/2023-Spring/cse-442h/">Home</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/register">Register</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/login">Login</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/contact-us">Contact Us</Link>
                    <Button onClick={toggleNavbar}><ReorderIcon/></Button>
                </div>
            </div>
        </>
    );
}
