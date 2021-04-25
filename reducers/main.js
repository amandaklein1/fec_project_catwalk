import { combineReducers } from 'redux';
import styleList from './styleList';
import thumbnails from './thumbnails';
import relatedStyles from './relatedStyles';
import outfit from './outfit';
import relatedProductsReducer from './relatedProducts';
import userOutfitsReducer from './userOutfits';

const rootReducer = combineReducers({
  styleList,
  thumbnails,
  relatedStyles,
  outfit,
  relatedProducts: relatedProductsReducer,
  userOutfits: userOutfitsReducer

});

export default rootReducer;