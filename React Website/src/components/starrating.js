import React, {useEffect ,useState } from "react";
import axios from "axios";
import '../styles/starRatings.css';
import {useParams} from 'react-router-dom';

export default function StarRating () {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [user, setUser] = useState('');
    let { id } = useParams();

    function readCookie(n) {
        var cookieName = n + "=";
        var split = document.cookie.split(';');
        for(var i=0;i < split.length;i++) {
            var c = split[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(cookieName) == 0) return c.substring(cookieName.length,c.length);
        }
        return null;
    }

    const handleClick = (idx) => {
        if (document.cookie.includes("currentUserCookie")) {
            setUser(readCookie('currentUserCookie'))
        }else {
            return
        }
        axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/starrating.php', {
            userid:user,
            id:id, 
            rating:idx
        })
    }
    return (
      <div className="star-rating">
        {[...Array(5)].map((a, index) => {
          index += 1;
          return (
            <button
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
            >
                <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
  


