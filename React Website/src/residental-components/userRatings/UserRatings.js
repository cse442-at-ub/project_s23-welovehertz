import React, { useState } from "react";
import { useParams } from 'react-router-dom'

import pfp from "./images/UserRatings-profile-icon.png"
import likeButton from "./images/UserRatings-like-button.png"
import dislikeButton from "./images/UserRatings-dislike-button.png"
import Axios from "axios"
import "./userRatings.css"
import "./popup.css"

export default function UserRatings() {
    const [showIncompleteFormError, setShowIncompleteFormError] = useState(false);
    const [formIncomplete, setFormIncomplete] = useState(true);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [cleanlinessRating, setCleanlinessRating] = useState(0);
    const [priceRating, setPriceRating] = useState(0);
    const [communicationRating, setCommunicationRating] = useState(0);
    const [locationRating, setLocationRating] = useState(0);
    const [interiorRating, setInteriorRating] = useState(0);
    const [safetyRating, setSafetyRating] = useState(0);
    let { pageid } = useParams();
    const handleFormChange = () => {
        if (
            cleanlinessRating !== 0 &&
            priceRating !== 0 &&
            communicationRating !== 0 &&
            locationRating !== 0 &&
            interiorRating !== 0 &&
            safetyRating !== 0 &&
            comment.trim() !== ""
        ) {
            setFormIncomplete(false);
        } else {
            setFormIncomplete(true);
        }
    };


    const handlePopupSubmit = (event) => {
        event.preventDefault();
        let cookie = document.cookie
        let parsedCookie = cookie.substring(cookie.indexOf("currentUserCookie") + 18)
        if (!(parsedCookie.indexOf(";") == -1)) {
            parsedCookie = parsedCookie.substring(0, parsedCookie.indexOf(";"))
        }
        const data = {
            cleanlinessRating: cleanlinessRating,
            priceRating: priceRating,
            communicationRating: communicationRating,
            locationRating: locationRating,
            interiorRating: interiorRating,
            safetyRating: safetyRating,
            comment: comment,
        };
    
        if (
            cleanlinessRating === 0 ||
            priceRating === 0 ||
            communicationRating === 0 ||
            locationRating === 0 ||
            interiorRating === 0 ||
            safetyRating === 0 ||
            comment.trim() === ""
        ) {
            setShowIncompleteFormError(true);
            return;
        }
    
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/profile.php', {
            data, id: parsedCookie, pageid
        })
            .then((response) => {
                console.log(response);
                setShowPopup(false);
                // do something else after submission
            })
            .catch((error) => {
                console.log(error);
                // handle errors
            });
    };
    
    return (
        <div className="userRatings">
            <div className="userRatings-row">
                <div className="userRatings-column">
                    <div className="userRatings-topRow">
                        <img className="userRatings-pfp" src={pfp} alt="pfp" />
                        <h3 className="userRatings-name">Anonymous</h3>
                        <img className="userRatings-like-button" src={likeButton} alt="pfp" />
                        <span className="userRatings-like-number">26</span>
                        <img className="userRatings-dislike-button" src={dislikeButton} alt="pfp" />
                        <span className="userRatings-dislike-number">2</span>
                    </div>
                    <div className="userRatings-date">Apr 19th, 2011</div>
                    <p className="userRatings-description">This is the best off campus housing. The kitchen looks so nice and the living room is huge.</p>
                </div>
                <div className="userRatings-column">
                    <div className="userRatings-topRow">
                        <img className="userRatings-pfp" src={pfp} alt="pfp" />
                        <h3 className="userRatings-name">Samuel</h3>
                        <img className="userRatings-like-button" src={likeButton} alt="pfp" />
                        <span className="userRatings-like-number">0</span>
                        <img className="userRatings-dislike-button" src={dislikeButton} alt="pfp" />
                        <span className="userRatings-dislike-number">0</span>
                    </div>
                    <div className="userRatings-date">Apr 19th, 2011</div>
                    <p className="userRatings-description">This is the best off campus housing. The kitchen looks so nice and the living room is huge.</p>
                </div>
            </div>
            <div className="userRatings-row">
                <div className="userRatings-column">
                    <div className="userRatings-topRow">
                        <img className="userRatings-pfp" src={pfp} alt="pfp" />
                        <h3 className="userRatings-name">Mathew Yeung</h3>
                        <img className="userRatings-like-button" src={likeButton} alt="pfp" />
                        <span className="userRatings-like-number">0</span>
                        <img className="userRatings-dislike-button" src={dislikeButton} alt="pfp" />
                        <span className="userRatings-dislike-number">100</span>
                    </div>
                    <div className="userRatings-date">Apr 19th, 2011</div>
                    <p className="userRatings-description">This is the best off campus housing. The kitchen looks so nice and the living room is huge.</p>
                </div>
                <div className="userRatings-column"></div>
            </div>
            <div className="commentSection">
                <h1>Leave a Comment</h1>
                {comments.map((comment, index) => (
                    <div key={index} className="comment">{comment}</div>
                ))}

                <button className="popupButton" onClick={() => setShowPopup(true)}>Leave a Rating</button>

                {showPopup && (
                    <div className="popup">
                        <button className="popupCloseButton" onClick={() => setShowPopup(false)}>X</button>
                        <h3>Leave a Comment and Rating</h3>
                        <div className="popupForm">
                            <label>Cleanliness:</label>
                            <select value={cleanlinessRating} onChange={(event) => { setCleanlinessRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Price:</label>
                            <select value={priceRating} onChange={(event) => { setPriceRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Communication:</label>
                            <select value={communicationRating} onChange={(event) => { setCommunicationRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Location:</label>
                            <select value={locationRating} onChange={(event) => { setLocationRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Interior:</label>
                            <select value={interiorRating} onChange={(event) => { setInteriorRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <label>Safety:</label>
                            <select value={safetyRating} onChange={(event) => { setSafetyRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Comment:</label>
                            <textarea value={comment} onChange={(event) => { setComment(event.target.value); handleFormChange(); }}></textarea>

            <button onClick={handlePopupSubmit}>Submit</button>
                            <button className="popupCancelButton" onClick={() => setShowPopup(false)}>Cancel</button>
                            {showIncompleteFormError && <p3 >Please complete the form.</p3>}

                        </div>
                    </div>

                )}

                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p>{comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

