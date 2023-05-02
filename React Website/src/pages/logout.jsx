import Axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react';
import { Link } from 'react-router-dom';

export default function logout(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(true) 
    const handleLogout = () => {
        
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/logout.php')
        .then(response => { 
            localStorage.clear();
            window.location.reload();
            setIsLoggedIn(false)
        })
        .catch(error => console.log(error));
    }

    return (
        <div>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    );

} 