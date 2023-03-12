import React from "react";
import { Instagram, Twitter, Facebook } from "@mui/icons-material";
import '../styles/footer.css'

export default function Footer () {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Instagram /> <Twitter /> <Facebook />
            </div>
            <p> &copy; 2023 HOUSING MADE EASY</p>
        </div>
    );
}