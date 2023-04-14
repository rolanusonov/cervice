import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <Link to="https://aykhalcentr.ru/" className="LinkFoot">aykhalcentr.ru</Link>
                    <div className="lineFoot">.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;