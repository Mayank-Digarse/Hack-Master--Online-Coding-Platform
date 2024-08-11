
import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Card = (props) => {
    const { imagePath, title, description, redirectPath } = props;
    const navigate = useNavigate(); // Hook for navigation

    // Inline style for clickable card
    const clickableStyle = { cursor: 'pointer' };

    // Function to handle card click
    const handleCardClick = () => {
        if (redirectPath) {
            navigate(`/${redirectPath}`);
        }
    };

    return (
        <div className="card" style={clickableStyle} onClick={handleCardClick}>
            <div className="card-container">
                <span className="card-title">{title}</span>
                <img src={imagePath} className="card-image" alt={title} />
                <div className="card-description">{description}</div>
            </div>
        </div>
    );
};

export default Card;

