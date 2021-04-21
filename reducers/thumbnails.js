
const ThumbnailsReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_CURRENT_SKU':
    return action.thumbnail || null;
  default:
    return state;
  }
};

export default ThumbnailsReducer;