import '../styles/RegistrationPage.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        submit: ''
    });
    const [imgBlob, setImgBlob] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(require('../pictures/emptypfp.png'))
        .then(response => response.blob())
        .then(blob => {
          setImgBlob(URL.createObjectURL(blob))
        });
    }, [])

    const data = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        confirm_password: confirm_password,
        pfp: imgBlob,
    }
    const handleSubmission = (event) => {
        console.log(imgBlob)
        event.preventDefault();
        console.log(data)
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/reg.php', data)
            .then(response => {
                console.log(response.data)
                const response_json = JSON.parse(response.data.substring(1));
                console.log(response_json)
                if (response_json.status === 0) {
                    const error = response_json.errors;
                    let allErrors = {};
                    for (const field in error) {
                        allErrors[field] = error[field];
                    }
                    setErrors({ ...allErrors, submit: 'Unable to create account, please check all fields' });
                    setSuccess(false);
                } else {
                    setErrors({
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        submit: ''
                    });
                    setSuccess(true);
                    navigate('/CSE442-542/2023-Spring/cse-442h/login');
                }
            })
            .catch(error => {
                console.log(error);
                // Handle the error here by displaying an error message to the user or logging the error
                setSuccess(false);
                setErrors({ ...errors, submit: 'An error occurred. Please try again later.' });
            });
    }


    return (
        <>
            <div className='register'>
                <div className="register-form">
                    <form className="reg-inputs" onSubmit={handleSubmission}>
                        <label htmlFor="first_name">First Name</label>{errors.first_name && <div className="error-message">{errors.first_name}</div>}
                        <input value={first_name} onChange={(event) => setFirstName(event.target.value)} type="name" placeholder='First Name' name='first_name' required />

                        <label htmlFor="last_name">Last Name</label>{errors.last_name && <div className="error-message">{errors.last_name}</div>}
                        <input value={last_name} onChange={(event) => setLastName(event.target.value)} type="name" placeholder='Last Name' name='last_name' required />

                        <label htmlFor="email">Email</label>{errors.email && <div className="error-message">{errors.email}</div>}
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" name="email" required />

                        <label htmlFor="password">Password</label>{errors.password && <div className="error-message">{errors.password}</div>}
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="password" required />

                        <label htmlFor="confirm_password">Confirm Password</label>{errors.confirm_password && <div className="error-message">{errors.confirm_password}</div>}
                        <input value={confirm_password} onChange={(event) => setConfirmPassword(event.target.value)} type="password" placeholder="Confirm Password" name="confirmPassword" required />

                        <button>Register</button>
                        {errors.submit && !success && <div className="error-message">{errors.submit}</div>}
                        {success && <div>Account Creation Success!</div>}
                    </form>
                    <button className="create-account-button" ><Link to="/CSE442-542/2023-Spring/cse-442h/login">Have An Account? Click Here</Link></button>
                </div>
            </div>
        </>
    );
}
