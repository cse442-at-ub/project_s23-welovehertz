import React from "react";
import "./navbar.css"
import "./login.css"

export default function Navbar(){
    return(
        <>
            <div className="navbar">
            <ul> 
                    <button className="button">Sign Up</button>
                </ul>
            </div>
            <div className="login">
                <ul>
                    <li>Login</li>
                    <input type="text" placeholder="Email" name="email" required></input>
                    <input type="password" placeholder="Password" name="password" required></input>
                </ul>
            </div>
        </>
    );
}
