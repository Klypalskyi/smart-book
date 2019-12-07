export const ActionBooks = {
  BOOKS_REQUEST: 'BOOKS_REQUEST',
  BOOKS_SUCCESS: 'BOOKS_SUCCESS',
  BOOKS_ERROR: 'BOOKS_ERROR',
  BOOKS_DELETE: 'BOOKS_DELETE',
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

export const BooksDelete = id => ({
  type: ActionBooks.BOOKS_DELETE,
  payload: id,
});
