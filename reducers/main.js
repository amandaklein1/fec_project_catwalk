import { combineReducers } from 'redux';
import styleList from './styleList';
import currentSku from './currentSku';
import relatedStyles from './relatedStyles';
import outfit from './outfit';
import relatedProductsReducer from './relatedProducts';


var rootReducer = combineReducers({
  styleList,
  currentSku,
  relatedStyles,
  outfit,
  relatedProductsReducer

});

export default rootReducer;