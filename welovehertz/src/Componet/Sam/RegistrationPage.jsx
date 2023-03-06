import './Componet/Sam/RegistrationPage.css';
import React from "react";


function clickMe() {
    alert('Account Created!');
}
function Nav() {
    return (
        <div className="Navbar">
            <ul>
                <button onClick={clickMe} className="LoginButton">LOGIN</button>
            </ul>
        </div>
    );
}
function Box() {
    return (
        <div className="Box">
            <ul>
                Create an account
                <input type="text" placeholder="First Name" name="first-name" required></input>
                <input type="text" placeholder="Last Name" name="last-name" required></input>
                <input type="text" placeholder="Email" name="email" required></input>
                <input type="password" placeholder="Password" name="password" required></input>
                <input type="password" placeholder="Confirm Password" name="password2" required></input>
                <button onClick={clickMe} className="createButton">Create account</button>
            </ul>
        </div>
    );
}
function page() {
    return (
        <div className="container">
            <Nav />
            <Box />
        </div>
    );
}

export default page;