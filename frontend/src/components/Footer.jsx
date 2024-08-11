import React from "react";

const Footer = () => {
return (

    <>
        <footer className="footer">
        <div className="footer-first-container">
            <div className="copyright">
                <p>Made by Hack Master with ❤️ </p>
            </div>
            <div className="social-media">
                <a href="#">
                    <span className="social-media-text">Linkedin</span>
                </a>
                <span className="divider">|</span>
                <a href="#">
                    <span className="social-media-text">Github</span>
                </a>
                
                <span className="divider">|</span>
                <a href="#">
                    <span className="social-media-text">Instagram</span>
                </a>
                <span className="divider">|</span>
                <a href="#">
                    <span className="social-media-text">Twitter</span>
                </a>
                
            </div>
        </div>
       
        </footer>

    </>
);
};

export default Footer;