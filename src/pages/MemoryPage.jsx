import React, { Fragment } from 'react';
import Cards from '../components/CardsComponents';
import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';

const MemoryPage = () => {
    return (
        <main>
            <h1 className='page-title'>Memory Game</h1>
            <div className='game-container'>
                <Grid container justify='space-between' className='game-info-container'>
                    <div className='game-info'>
                        Time <span id='time-remaining'>100</span>
                    </div>
                    <div className='game-info'>
                        Time <span id='flips'>0</span>
                    </div>
                </Grid>
            </div>
            <Cards />
        </main>
    );
};

export default MemoryPage;
