import { combineReducers } from 'redux';
import Board from './Board';
import Cards from './Cards';
const rootReducer = combineReducers({
    Board: Board,
    Cards: Cards,
});

export default rootReducer;
