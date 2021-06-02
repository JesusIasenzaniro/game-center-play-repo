import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, setFlipCard, setMatchCard } from '../redux/actions/cards';
import OneCard from './OneCardComponent';
import Loading from '../pages/Loading';
import Error from '../pages/Error';
import Grid from '@material-ui/core/Grid';
import '../css/MemoryPage.css';

const Cards = () => {
    const dispatch = useDispatch();
    const listCards = useSelector((state) => state.Cards.listCards);
    const pairOfCards = useSelector((state) => state.Cards.cardsInGame);
    const flipCards = useSelector((state) => state.Cards.flipCards);
    const loading = useSelector((state) => state.Cards.loading);
    const error = useSelector((state) => state.Cards.error);
    const idInterval = useSelector((state) => state.Board.idInterval);

    console.log(idInterval);

    useEffect(() => {
        dispatch(getCards());
    }, [dispatch]);

    const handleFlip = (index, id) => {
        dispatch(setFlipCard(index, id));
        setTimeout(() => {
            dispatch(setMatchCard(id, index, idInterval));
        }, 800);
    };

    return (
        <Grid container justify='center'>
            {/* {cards.loading && <Loading />} */}
            {pairOfCards.map((cards, index) => {
                const { id, name, card_images } = cards;

                return <OneCard key={index} id={id} name={name} images={card_images} index={index} flipCard={flipCards[index]} handleFlip={handleFlip} />;
            })}

            {listCards.length === 0 && !error && <Loading />}
            {error && !loading && <Error />}
        </Grid>
    );
};

export default Cards;
