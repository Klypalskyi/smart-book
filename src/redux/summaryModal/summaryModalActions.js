import { summaryModalActionTypes } from './summaryModalReducer';

export const openModalSummary = bookId => ({
  type: summaryModalActionTypes.OPEN_MODAL_SUMMARY,
  payload: {
    bookId,
  },
});

export const closeModalSummary = () => ({
  type: summaryModalActionTypes.CLOSE_MODAL_SUMMARY,
});
