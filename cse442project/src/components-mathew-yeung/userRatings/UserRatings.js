import React from "react";
import pfp from "./images/UserRatings-profile-icon.png"
import likeButton from "./images/UserRatings-like-button.png"
import dislikeButton from "./images/UserRatings-dislike-button.png"
import "./userRatings.css"

export default function UserRatings() {
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
        </div>
    )
}