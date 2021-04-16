import Redux from 'redux';

var relatedStylesReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_RELATED_STYLES':
    return action.relatedStyles;
  default:
    return state;
  }
};

export default relatedStylesReducer;