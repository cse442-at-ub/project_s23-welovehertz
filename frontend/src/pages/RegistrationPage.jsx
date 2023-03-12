import '../styles/RegistrationPage.css';
import React, { useState } from "react";
import {Link} from 'react-router-dom'


export default function Register () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmission = (event) => {
        //This prevents the page from reloading and losing our current state
        event.preventDefault();
        console.log(email)
    }  

    return (
        <>
            <div className='register'>
                <div className="register-form">
                    <form className="reg-inputs" onSubmit={handleSubmission}>
                        <label for="name">Name</label>
                        <input value={name} onChange={(event) => setName(event.target.value)} type="name" placeholder='Name' name='name'/>
                        <label for="email">Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" name="email" />
                        <label for="password">Password</label>
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="password" />
                        <label for="password">Confirm Password</label>
                        <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" placeholder="Confirm Password" name="password" />
                        <button><Link to="/login">Register</Link></button>
                    </form>
                    <button className="create-account-button" ><Link to="/login">Have An Account? Click Here</Link></button>
                </div>
            </div>  
        </>  
    );
}
