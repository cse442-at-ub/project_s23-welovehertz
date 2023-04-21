import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css";
import Axios from 'axios';
import Homepage from "./homepage"

export default function Login (props) {
    //Captures the email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    //When user logins, handleSubmission will be called
    const handleSubmission = (event) => {
        event.preventDefault();

        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/login.php', {
            
            email: email,
            password: password,
        })
            .then((response) => {
                if (response.status === 200 && response.data.split('\n')[1] === "Account Verified" ) {
                    setError(false)                    
                    setSuccess(true);
                    navigate("/CSE442-542/2023-Spring/cse-442h/");
                }
                else{ 
                    setError(`Error: ${response.status}`);
                    setSuccess(false)
                    setError(true)
                }
            })
            .catch((error) => {

                setError(true);
                setSuccess(false);
        });

        //Fixed navbar bug
        setTimeout(function(){
            const cookie = document.cookie
            if (cookie.includes("currentUserCookie")) {
                props.handleLogin();
                console.log("LOGIN SUCCESS: COOKIE")
            } else {
                console.log("LOGIN FAILED: NO COOKIE")
            }
        }, 1000);
    }   
    const buttonStyle = {
        backgroundColor: 'beige',
        border: 'none',
        color:'white',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        TransitionEvent: '0.3x',
        position: "relative"
    };

    return (
        <>
            <div className="login" >
                <div className="login-form">
                    <form className="login-inputs" onSubmit={handleSubmission} action={Homepage} method="post">
                        <label for="email">Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" name="email" />
                        <label for="password">Password</label>
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="password" required/>
                        <button>Login</button>
                        {success && <div>Login Success! </div>}
                        {error !== false && <div>{error}</div>}
                    </form>
                    <button className="register-button" ><Link to="/CSE442-542/2023-Spring/cse-442h/register">Don't Have An Account? Click Here</Link></button>
                </div>
            </div>
        </>
    );
}


/* */
