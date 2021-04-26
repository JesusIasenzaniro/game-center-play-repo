import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards } from '../redux/actions/cards';
import OneCard from './OneCardComponent';

const Cards = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cards);
    const loading = useSelector((state) => state.cards.loading);
    const error = useSelector((state) => state.cards.error);
    useEffect(() => {
        dispatch(getCards());
    }, []);

    return (
        <Fragment>
            {console.log(cards)}
            {cards.loading && <p>Loading...</p>}
            {cards.length > 0 && cards.slice(0, 6).map(({ id, name, card_images }) => <OneCard name={name} key={id} images={card_images} />)}

            {cards.length === 0 && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
        </Fragment>
    );
};

export default Cards;
