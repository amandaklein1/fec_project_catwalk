import Redux from 'redux';

var outfitReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_OUTFIT':
    return action.outfit;
  default:
    return state;
  }
};

export default outfitReducer;