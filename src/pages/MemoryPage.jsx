import React from 'react';
import Cards from '../components/CardsComponents';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '../css/MemoryPage.css';
const MemoryPage = () => {
    return (
        // visible for overlay-text
        <Container maxWidth='md'>
            <h1 className='page-title'>Memory Game</h1>
            <div className='overlay-text '>Click to start</div>
            <div id='game-over-text' className='overlay-text '>
                GAME OVER
                <span className='overlay-text-small'>Click to Restart</span>
            </div>
            <div id='victory-text' className='overlay-text'>
                VICTORY
                <span className='overlay-text-small'>Click to Restart</span>
            </div>
            <div className='game-container'>
                <Grid container justify='space-around' className='game-info-container'>
                    <div className='game-info'>
                        Time <span id='time-remaining'>100</span>
                    </div>
                    <div className='game-info'>
                        Time <span id='flips'>0</span>
                    </div>
                </Grid>
                <Cards />
            </div>
        </Container>
    );
};

export default MemoryPage;
