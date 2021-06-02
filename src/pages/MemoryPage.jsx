import React, {useEffect} from 'react';
import Cards from '../components/CardsComponents';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {useSelector, useDispatch} from 'react-redux';
import {getStart, getRemainingTime} from '../redux/actions/board';
import '../css/MemoryPage.css';
const MemoryPage = () => {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.Board.start);
  let time = useSelector((state) => state.Board.timeRemaining);
  const flipNumbers = useSelector((state) => state.Cards.flipNumbers);
  const victory = useSelector((state) => state.Cards.victory);
  const startTheGame = () => {
    dispatch(getStart());
  };

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch(getRemainingTime(timer, victory));
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const refresh = () => {
    window.location.reload();
  };
  return (
    // visible for overlay-text
    <Container maxWidth="md">
      <h1 className="page-title">Memory Game</h1>
      <div
        className={`overlay-text ${start ? 'visible' : ''}`}
        onClick={startTheGame}
      >
        Click to start
      </div>
      <div
        id="game-over-text"
        className={`overlay-text ${time === 0 ? 'visible' : ''}`}
      >
        GAME OVER{' '}
        <span className="overlay-text-small" onClick={refresh}>
          Click to Restart
        </span>
      </div>

      <div
        id="victory-text"
        className={`overlay-text ${victory ? 'visible' : ''}`}
      >
        VICTORY{' '}
        <span className="overlay-text-small" onClick={refresh}>
          Click to Restart
        </span>
      </div>

      <div className="game-container">
        <Grid container justify="space-around" className="game-info-container">
          <div className="game-info">
            Time <span id="time-remaining">{time}</span>
          </div>
          <div className="game-info">
            Flips <span id="flips">{flipNumbers}</span>
          </div>
        </Grid>
        <Cards />
      </div>
    </Container>
  );
};

export default MemoryPage;
