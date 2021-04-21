import { combineReducers } from 'redux';
import styleList from './styleList';
import thumbnails from './thumbnails';
import relatedStyles from './relatedStyles';
import outfit from './outfit';
import relatedProductsReducer from './relatedProducts';


const rootReducer = combineReducers({
  styleList,
  thumbnails,
  relatedStyles,
  outfit,
  relatedProducts: relatedProductsReducer

});

export default rootReducer;