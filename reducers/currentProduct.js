const initialState = '11001';

const currentProductReducer = (state = initialState, action) => {

  const {type, payload} = action;

  switch(type) {
    case "CHANGE_CURRENT_PRODUCT":
      return [...state, payload];
    default:
      return state;
  }

}

export default currentProductReducer;