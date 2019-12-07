import { ActionBooks } from './booksActions';

const booksReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionBooks.BOOKS_SUCCESS:
    case ActionBooks.BOOKS_ERROR:
      return payload;
    default:
      return state;
  }
};

export default booksReducer;
