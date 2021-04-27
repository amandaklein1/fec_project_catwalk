const initialState = [];

const userOutfitsReducer = (state = initialState, action) => {

  const {type, payload} = action;

  switch(type) {
    case "ADD_USER_OUTFIT":
      return [...state, payload];
    case "REMOVE_USER_OUTFIT":
      return payload;
    default:
      return state;
  }

}

export default userOutfitsReducer;