import Redux from 'redux';

var styleListReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_STYLE_LIST':
    return action.styleList;
  default:
    return state;
  }
};

export default styleListReducer;