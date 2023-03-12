import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "../styles/login.css"

export default function Login (page) {
    //Captures the email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //When user logins, handleSubmission will be called
    const handleSubmission = (event) => {
        //This prevents the page from reloading and losing our current state
        event.preventDefault();
        console.log(email)
        console.log(password)
    }   

    return (
        <>
            <div className="login" >
                <div className="login-form">
                    <form className="login-inputs" onSubmit={handleSubmission}>
                        <label for="email">Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" name="email" />
                        <label for="password">Password</label>
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="password" />
                        <button><Link to="">LOGIN</Link></button>
                    </form>
                    <button className="register-button" ><Link to="/register">Don't Have An Account? Click Here</Link></button>
                </div>
            </div>
        </>
    );
}