const initialState = [];

const relatedProductsReducer = (state = initialState, action) => {

  const {type, payload} = action;

  switch(type) {
    case "ADD_RELATED_PRODUCT":
      return [...state, payload];
    default:
      return state;
  }

};

export default relatedProductsReducer;
