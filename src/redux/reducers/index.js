import { combineReducers } from 'redux';

import cardsReducer from './cards';
import popupReducer from './popup';


const rootReducer = combineReducers({
  cards: cardsReducer,
  popup: popupReducer,
});

export default rootReducer;