import '../styles/RegistrationPage.css';
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Axios from 'axios';


export default function Register () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const data  = {
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password,
    }

    const handleSubmission = (event) => {
        //This prevents the page from reloading and losing our current state
        event.preventDefault();
        console.log(data)
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/reg.php', data)
          .then(response => {
            setSuccess(true);
            setError(null);
          })
          .catch(error => {
            setError(error.message);
            setSuccess(false);
          });
    }  

    return (
        <>
            <div className='register'>
                <div className="register-form">
                    <form className="reg-inputs" onSubmit={handleSubmission}>
                        <label for="name">First Name</label>
                        <input value={first_name} onChange={(event) => setFirstName(event.target.value)} type="name" placeholder='First Name' name='name'required/>
                        <label for="name">Last Name</label>
                        <input value={last_name} onChange={(event) => setLastName(event.target.value)} type="name" placeholder='Last Name' name='name'required/>
                        <label for="email">Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" name="email" required/>
                        <label for="password">Password</label>
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="password" required/>
                        <label for="password">Confirm Password</label>
                        <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" placeholder="Confirm Password" name="password" required/>
                        <button>Register</button>
                        {error && <div>{error}</div>}
                        {success && <div>Account Creation Success!</div>}
                    </form>
                    <button className="create-account-button" ><Link to="https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/login">Have An Account? Click Here</Link></button>
                </div>
            </div>  
        </>  
    );
}
