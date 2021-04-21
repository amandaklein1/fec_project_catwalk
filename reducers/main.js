import { combineReducers } from 'redux';
import styleList from './styleList';
import thumbnails from './thumbnails';
import relatedStyles from './relatedStyles';
import outfit from './outfit';


const rootReducer = combineReducers({
  styleList,
  thumbnails,
  relatedStyles,
  outfit

});

export default rootReducer;