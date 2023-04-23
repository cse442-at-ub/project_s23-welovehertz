import React, { useState } from "react";
import pfp from "./images/UserRatings-profile-icon.png"
import likeButton from "./images/UserRatings-like-button.png"
import dislikeButton from "./images/UserRatings-dislike-button.png"
import "./userRatings.css"
import "./popup.css"

export default function UserRatings() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [cleanlinessRating, setCleanlinessRating] = useState(0);
    const [priceRating, setPriceRating] = useState(0);
    const [communicationRating, setCommunicationRating] = useState(0);
    const [locationRating, setLocationRating] = useState(0);
    const [interiorRating, setInteriorRating] = useState(0);
    const [safetyRating, setSafetyRating] = useState(0);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handleCommentSubmit = () => {
        setComments([...comments, comment]);
        setComment("");
    }

    const handleCleanlinessRatingChange = (event) => {
        setCleanlinessRating(event.target.value);
    }

    const handlePriceRatingChange = (event) => {
        setPriceRating(event.target.value);
    }

    const handleCommunicationRatingChange = (event) => {
        setCommunicationRating(event.target.value);
    }

    const handleLocationRatingChange = (event) => {
        setLocationRating(event.target.value);
    }

    const handleInteriorRatingChange = (event) => {
        setInteriorRating(event.target.value);
    }

    const handleSafetyRatingChange = (event) => {
        setSafetyRating(event.target.value);
    }

    const handlePopupSubmit = () => {
        // handle submission of ratings
        setShowPopup(false);
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
                            <label>Cleanliness:</label>
                            <select value={cleanlinessRating} onChange={handleCleanlinessRatingChange}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Price:</label>
                            <select value={priceRating} onChange={handlePriceRatingChange}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Communication:</label>
                            <select value={communicationRating} onChange={handleCommunicationRatingChange}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Location:</label>
                            <select value={locationRating} onChange={handleLocationRatingChange}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Interior:</label>
                            <select value={interiorRating} onChange={handleInteriorRatingChange}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <label>Safety:</label>
                            <select value={safetyRating} onChange={handleSafetyRatingChange}>
                                <option value={0}>Select rating...</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <label>Comment:</label>
                            <textarea value={comment} onChange={handleCommentChange}></textarea>

                            <button onClick={handlePopupSubmit}>Submit</button>
                            <button className="popupCancelButton" onClick={() => setShowPopup(false)}>Cancel</button>
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

