export const summaryModalActionTypes = {
  OPEN_MODAL_SUMMARY: 'OPEN_MODAL_SUMMARY',
  CLOSE_MODAL_SUMMARY: 'CLOSE_MODAL_SUMMARY',
};

const initialState = { open: false, bookId: null };

export const summaryModalReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case summaryModalActionTypes.OPEN_MODAL_SUMMARY:
      return { open: !state.open, bookId: payload.bookId };

    case summaryModalActionTypes.CLOSE_MODAL_SUMMARY:
      return { open: !state.open, bookId: null };

    default:
      return state;
  }
};
