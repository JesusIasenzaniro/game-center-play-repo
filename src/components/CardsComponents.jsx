import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, getFlipCard } from '../redux/actions/cards';
import OneCard from './OneCardComponent';
import Loading from '../pages/Loading';
import Error from '../pages/Error';
import Grid from '@material-ui/core/Grid';
import '../css/MemoryPage.css';

const Cards = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cards);
    const loading = useSelector((state) => state.cards.loading);
    const error = useSelector((state) => state.cards.error);
    let flip = useSelector((state) => state.cards.flip);

    const sliceCards = cards.slice(0, 9);
    const pairOfCards = [...sliceCards, ...sliceCards];

    useEffect(() => {
        dispatch(getCards());
    }, [dispatch]);

    const flipTheCard = () => {
        dispatch(getFlipCard());
    };

    return (
        <Grid container justify='center'>
            {/* {cards.loading && <Loading />} */}
            {pairOfCards.map((cards, index) => {
                const { name, card_images } = cards;

                return <OneCard name={name} images={card_images} key={index} index={index} flip={flip} flipTheCard={flipTheCard} />;
            })}
            {cards.length === 0 && !error && <Loading />}
            {error && !loading && <Error />}
        </Grid>
    );
};

export default Cards;
