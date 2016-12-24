const initialState = {
  popupType: null,
  popupProps: {}
};

function popup(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_POPUP':
      return {
        popupType: action.popupType,
        popupProps: action.popupProps
      };
    case 'HIDE_POPUP':
      return initialState;
    default:
      return state;
  }
}

export default popup;