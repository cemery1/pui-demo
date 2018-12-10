import React from 'react';
import './Card.css';

const Card = ({image, number, displayOverlay, toggleOverlay}) => (
    <div className="Card-container" onClick={toggleOverlay}>
        {console.log(displayOverlay)}
        <img src={image} alt="match game item" className="Card-image" />
        {displayOverlay && (
            <div className="Card-overlay">
                {number}
            </div>
        )}
    </div>
);

export default Card;