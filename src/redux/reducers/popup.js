const initialState = {
  show: false,
  obj: {}
};

const popup = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_POPUP':
      return {
        ...state,
        show: action.payload,
      }

    case 'POPUP_CONTENT':
      return {
        ...state,
        obj: action.payload,
      }
    default:
      return state;
  }
}

export default popup;