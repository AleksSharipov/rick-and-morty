export const showPopup = (show) => ({
  type: 'SHOW_POPUP',
  payload: show,
})

export const popupContent = (card) => ({
  type: 'POPUP_CONTENT',
  payload: card,
})