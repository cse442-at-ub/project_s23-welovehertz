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
                        <Link to="/">Home</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/contact-us">Contact Us</Link>
                    </div>
                </div>
                <div className="rightSide">
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Button onClick={toggleNavbar}><ReorderIcon/></Button>
                </div>
            </div>
        </>
    );
}
