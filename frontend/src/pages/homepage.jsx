import React from 'react';
import {Link} from 'react-router-dom'
import BackGround from '../pictures/background.jpg'
import '../styles/homepage.css'

export default function Homepage() {
    return (
        <div className='home'  style={{backgroundImage: `url(${BackGround})`}}>
            <div className='headerContainer' >
                <h1>HOUSE FINDER</h1>
                <p> Easily Figure Out Where To Live</p>
                <Link to ="/resident-page"><button>Click Here</button></Link>
            </div>
        </div>
    )
}