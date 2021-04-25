const initialState = [];

const userOutfitsReducer = (state = initialState, action) => {

  const {type, payload} = action;

  switch(type) {
    case "ADD_USER_OUTFIT":
      return [...state, payload];
    default:
      return state;
  }

}

export default userOutfitsReducer;