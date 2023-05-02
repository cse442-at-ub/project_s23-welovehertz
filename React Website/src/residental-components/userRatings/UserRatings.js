import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import StarRating from "../../components/starrating";
import pfp from "./images/UserRatings-profile-icon.png"
import likeButton from "./images/UserRatings-like-button.png"
import dislikeButton from "./images/UserRatings-dislike-button.png"
import Axios from "axios"
import "./userRatings.css"

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
    const navigate = useNavigate();
    let { id } = useParams();
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
      const cookie = document.cookie
      if (cookie.includes("currentUserCookie")) {
        setIsLoggedin(true)
      }
    }, [])

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
        console.log(id)
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
        } else {
            Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/rating.php', {
                data, userid: parsedCookie, pageid: id
            })
                .then((response) => {
                    setShowPopup(false);
                    window.location.reload();
                    // reload page after submission
                })
                .catch((error) => {
                    console.log(error);
                    // handle errors
                });
        }
    };
    if (isLoggedin){
        return (
            <>
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
                                <p><label>Cleanliness: </label>A rating of 1 means that you feel that the location of your housing unit is very inconvenient, while a rating of 5 means that you feel that the location is very convenient and desirable.</p>
                                <select id="cleanlinessRating" value={cleanlinessRating} onChange={(event) => { setCleanlinessRating(event.target.value); handleFormChange(); }}>
                                    <option value={0}>Select rating...</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                                <p><label>Price: </label>A rating of 1 means that you feel that you are paying too much for the quality of your housing unit, while a rating of 5 means that you feel that you are getting a great value for the price you pay.</p>
                                <select id="priceRating" value={priceRating} onChange={(event) => { setPriceRating(event.target.value); handleFormChange(); }}>
                                    <option value={0}>Select rating...</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
    
                                <p><label>Communication: </label>A rating of 1 means that you feel that your landlord or management is very poor at communicating with you, while a rating of 5 means that you feel that they are excellent at communicating with you.</p>
                                <select id="communicationRating" value={communicationRating} onChange={(event) => { setCommunicationRating(event.target.value); handleFormChange(); }}>
                                    <option value={0}>Select rating...</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
    
                                <p><label>Location: </label>A rating of 1 means that you feel that the location of your housing unit is very inconvenient, while a rating of 5 means that you feel that the location is very convenient and desirable.</p>
                                <select id="locationRating" value={locationRating} onChange={(event) => { setLocationRating(event.target.value); handleFormChange(); }}>
                                    <option value={0}>Select rating...</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
    
                                <p><label>Interior: </label>A rating of 1 means that you feel that the interior of your housing unit is very poor and unappealing, while a rating of 5 means that you feel that it is very well-maintained and appealing.</p>
                                <select id="interiorRating" value={interiorRating} onChange={(event) => { setInteriorRating(event.target.value); handleFormChange(); }}>
                                    <option value={0}>Select rating...</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
    
                                <p><label>Safety: </label>A rating of 1 means that you feel very unsafe in your housing unit and surrounding area, while a rating of 5 means that you feel very safe.</p>
                                <select id="safetyRating" value={safetyRating} onChange={(event) => { setSafetyRating(event.target.value); handleFormChange(); }}>
                                    <option value={0}>Select rating...</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                                <label htmlFor="comment">Comment: <span>Please share your thoughts on your stay, including any feedback or suggestions you may have.</span></label>
                                <textarea id="comment" value={comment} onChange={(event) => { setComment(event.target.value); handleFormChange(); }}></textarea>
                                <div className="starRating"><StarRating/></div>

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
            </>
        )
    }

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
                            <p><label>Cleanliness: </label>A rating of 1 means that you feel that the location of your housing unit is very inconvenient, while a rating of 5 means that you feel that the location is very convenient and desirable.</p>
                            <select id="cleanlinessRating" value={cleanlinessRating} onChange={(event) => { setCleanlinessRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <p><label>Price: </label>A rating of 1 means that you feel that you are paying too much for the quality of your housing unit, while a rating of 5 means that you feel that you are getting a great value for the price you pay.</p>
                            <select id="priceRating" value={priceRating} onChange={(event) => { setPriceRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <p><label>Communication: </label>A rating of 1 means that you feel that your landlord or management is very poor at communicating with you, while a rating of 5 means that you feel that they are excellent at communicating with you.</p>
                            <select id="communicationRating" value={communicationRating} onChange={(event) => { setCommunicationRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <p><label>Location: </label>A rating of 1 means that you feel that the location of your housing unit is very inconvenient, while a rating of 5 means that you feel that the location is very convenient and desirable.</p>
                            <select id="locationRating" value={locationRating} onChange={(event) => { setLocationRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <p><label>Interior: </label>A rating of 1 means that you feel that the interior of your housing unit is very poor and unappealing, while a rating of 5 means that you feel that it is very well-maintained and appealing.</p>
                            <select id="interiorRating" value={interiorRating} onChange={(event) => { setInteriorRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <p><label>Safety: </label>A rating of 1 means that you feel very unsafe in your housing unit and surrounding area, while a rating of 5 means that you feel very safe.</p>
                            <select id="safetyRating" value={safetyRating} onChange={(event) => { setSafetyRating(event.target.value); handleFormChange(); }}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <label htmlFor="comment">Comment: <span>Please share your thoughts on your stay, including any feedback or suggestions you may have.</span></label>
                            <textarea id="comment" value={comment} onChange={(event) => { setComment(event.target.value); handleFormChange(); }}></textarea>

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

