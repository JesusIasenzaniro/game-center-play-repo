import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import '../css/Card.css';

const OneCard = ({ name, images }) => {
    return (
        // className='container-card'
        <Card className='container-card'>
            {images.map((i, id) => {
                return (
                    <div className='card' key={id}>
                        <img src={i.image_url} alt={name} />
                    </div>
                );
            })}
        </Card>
    );
};
export default OneCard;
