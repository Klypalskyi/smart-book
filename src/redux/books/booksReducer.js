import { ActionBooks } from './booksActions';

const booksReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionBooks.BOOKS_SUCCESS:
    case ActionBooks.BOOKS_ERROR:
      return payload;
    case ActionBooks.BOOKS_DELETE:
      return state.filter(book => book.id !== payload);
    case ActionBooks.ADD_BOOK:
      return [...state, payload];
    default:
      return state;
  }
};

export default booksReducer;
