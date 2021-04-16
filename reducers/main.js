import { combineReducers } from 'redux';
import styleList from './styleList.js';
import currentSku from './currentSku.js';
import relatedStyles from './relatedStyles.js';
import outfit from './outfit.js';


var rootReducer = combineReducers({
  styleList,
  currentSku,
  relatedStyles,
  outfit

});

export default rootReducer;