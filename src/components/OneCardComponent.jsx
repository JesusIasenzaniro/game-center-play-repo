import React from 'react';
import backPart from '../assets/backPart.png';
import '../css/MemoryPage.css';

const OneCard = ({ name, images, openCard, handleFlip, index }) => {
    // visible
    return (
        <div className={`card ${openCard ? 'visible' : ''}`} onClick={() => handleFlip(index)}>
            <div className='card-back card-face'>
                <img src={backPart} alt='back-part' />
            </div>
            <div className='card-front card-face'>
                {images.map((image, index) => {
                    return <img src={image.image_url} alt={name} key={index} />;
                })}
            </div>
        </div>
    );
};
export default OneCard;
