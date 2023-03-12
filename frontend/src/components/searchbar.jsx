import React from "react";
import '../styles/searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';


export default function Searchbar({placeholder, data}) {
    return (
        <>
        <div>
            <div className="searchbar">
                <div className="searchInputs">
                    <input type="text" placeholder={placeholder}/>
                    <div className="searchIcon"><SearchIcon/></div>
                </div>
                <div className="dataResults"></div>
            </div>
        </div>
        </>
    );
}