export const ActionBooks = {
  BOOKS_REQUEST: 'BOOKS_REQUEST',
  BOOKS_SUCCESS: 'BOOKS_SUCCESS',
  BOOKS_ERROR: 'BOOKS_ERROR',
  BOOKS_DELETE: 'BOOK_DELETE',
  BOOK_UPDATE: 'BOOK_UPDATE',
};

export const BooksRequest = () => ({
  type: ActionBooks.BOOKS_REQUEST,
});

export const BooksSuccess = res => ({
  type: ActionBooks.BOOKS_SUCCESS,
  payload: res,
});

export const BooksError = error => ({
  type: ActionBooks.BOOKS_ERROR,
  payload: error,
});

export const BookDelete = id => ({
  type: ActionBooks.BOOK_DELETE,
  payload: id,
});

export const BookUpdate = id => ({
  type: ActionBooks.BOOK_UPDATE,
  payload: id,
});
