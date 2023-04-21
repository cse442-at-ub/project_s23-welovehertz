import '../styles/profile.css';
import pfpTemp from '../pictures/pfp.png';
import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

//This is the User Profile Page
export default function ProfilePage () {
    const [firstName, setFirstName] = useState('ERROR');
    const [lastName, setLastName] = useState('ERROR');
    const [email, setEmail] = useState('ERROR');
    const [favoriteList, setFavoriteList] = useState([]);
    const [newPassword, setNewPassword] = useState('');
    //Makes sure the password length > 8
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [pfp, setPfp] = useState();
    const [isValidPic, setIsValidPic] = useState(false);

    useEffect(() => {
        let cookie = document.cookie
        let parsedCookie = cookie.substring(cookie.indexOf("currentUserCookie") + 18)
        if (!(parsedCookie.indexOf(";") == -1)) {
            parsedCookie = parsedCookie.substring(0, parsedCookie.indexOf(";"))
        }
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/profile.php', {
            id: parsedCookie,
        })
        .then(function (response) {
            const profileData = JSON.parse(response.data.substring(1, response.data.length-1))
            setFirstName(profileData.first_name)
            setLastName(profileData.last_name)
            setEmail(profileData.email)
            setPfp(profileData.pfp)
            console.log(profileData.pfp)
            for (let i = 0; i < profileData.favorite_list.length; i++) {
                if (profileData.favorite_list == "") { break; }
                setFavoriteList(prevFavoriteList => [...prevFavoriteList, {
                        id: profileData.favorite_list[i], 
                        name: profileData.favorite_name_list[i], 
                        img: "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
                }])
            }
        })
    }, []);

    const navigate = useNavigate();

    const handleListingClick = (id) => {
        navigate(`/CSE442-542/2023-Spring/cse-442h/${id}`)
    }

    const changePassword = () => {
        let cookie = document.cookie
        let parsedCookie = cookie.substring(cookie.indexOf("currentUserCookie") + 18)
        if (!(parsedCookie.indexOf(";") == -1)) {
            parsedCookie = parsedCookie.substring(0, parsedCookie.indexOf(";"))
        }
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/changePassword.php', {
            newPassword: newPassword,
            id: parsedCookie, 
        })
        .then(function (response) {
            const res = response.data.substring(2, response.data.length - 1)
            if (res == "Password should be at least 8 characters long") {
                setIsValidPassword(true)
            } else {
                setIsValidPassword(false)
                console.log("Password has been changed")
            }
        })
    }

    const updatePFP = () => {
        console.log(pfp)
        if (pfp == undefined) {
            setIsValidPic(true)
        } else {
            setIsValidPic(false)
            let cookie = document.cookie
            let parsedCookie = cookie.substring(cookie.indexOf("currentUserCookie") + 18)
            if (!(parsedCookie.indexOf(";") == -1)) {
                parsedCookie = parsedCookie.substring(0, parsedCookie.indexOf(";"))
            }
            Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/uploadPFP.php', {
                id: parsedCookie,
                pfp: pfp,
            })
        }
    }

    return (
        <div className='profile'>
            <h1 className="profile-header">Profile Page</h1>
            <img className="profile-pfp" src={pfp} alt="pfp" />
            <div>
                <input onChange={(event) => setPfp(URL.createObjectURL(event.target.files[0]))} type="file" name="image" accept=".jpg, .jpeg, .png" />
                <button className="profile-cp-button" onClick={() => updatePFP()}>Update Profile Picture</button>
            </div>
            {isValidPic && <div className="error-message">You did not upload a png, jpg, or jpeg file</div>}
            <div className="profile-container-1">
                <div className="profile-container-2">
                    <div className="profile-container-3">
                        <h4 className="profile-titles">First Name:</h4>
                        <span className="profile-text">{firstName}</span>
                    </div>
                    <div className="profile-container-3">
                        <h4 className="profile-titles">Last Name:</h4>
                        <span className="profile-text">{lastName}</span>
                    </div>
                    <div className="profile-container-3">
                        <h4 className="profile-titles">Email:</h4>
                        <span className="profile-text">{email}</span>
                    </div>
                    <div className="profile-container-3">
                        <h4 className="profile-titles">Change Password:</h4>
                        <input className="profile-input"  value={newPassword} onChange={(event) => setNewPassword(event.target.value)} type="password" placeholder="Change password" name="password" />
                        <button className="profile-cp-button" onClick={() => changePassword()}>Update password</button>
                    </div>
                    {isValidPassword && <div className="error-message">Password should be at least 8 characters long</div>}

                </div>
            </div>
            <h2 className="profile-profile-title">Favorite Listing</h2>
            <div className='listings'>
                {favoriteList.length == 0 ? <div>You have no favorited housing options</div> : 
                favoriteList.map(favList => (
                    <div key={favList.id} className='listing-card' onClick={() => handleListingClick(favList.id)}>
                        <img src={favList.img} alt={favList.name} />
                        <h2>{favList.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}