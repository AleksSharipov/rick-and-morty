const initialState = {
  items: [],
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return {
        ...state,
        items: action.payload,
      }

    default:
      return state;
  }
}

export default cards;