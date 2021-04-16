import Redux from 'redux';

var currentSkuReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_CURRENT_SKU':
    return action.sku;
  default:
    return state;
  }
};

export default currentSkuReducer;