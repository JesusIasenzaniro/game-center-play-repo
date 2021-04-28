import React from 'react';
import Card from '@material-ui/core/Card';
import backPart from '../assets/backPart.png';
import '../css/Card.css';

const OneCard = ({ name, images, flip }) => {
    return (
        <div className='card visible'>
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
