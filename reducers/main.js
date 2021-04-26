import { combineReducers } from 'redux';
import styleList from './styleList';
import thumbnails from './thumbnails';
import relatedStyles from './relatedStyles';
import outfit from './outfit';
import relatedProductsReducer from './relatedProducts';
import userOutfitsReducer from './userOutfits';
import currentProductReducer from './currentProduct';

const rootReducer = combineReducers({
  styleList,
  thumbnails,
  relatedStyles,
  outfit,
  relatedProducts: relatedProductsReducer,
  userOutfits: userOutfitsReducer,
  currentProduct: currentProductReducer

});

export default rootReducer;