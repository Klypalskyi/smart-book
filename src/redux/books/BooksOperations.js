import axios from 'axios';
import {
  BooksRequest,
  BooksSuccess,
  BooksError,
  BooksDelete,
} from './booksActions';

export const booksOperation = token => dispatch => {
  dispatch(BooksRequest());
  axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/books`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      dispatch(BooksSuccess(res.data.books));
    })
    .catch(err => {
      dispatch(BooksError(err));
    });
};

export const booksDelete = (token, id) => dispatch => {
  axios
    .delete(`${process.env.REACT_APP_BASE_API_URL}/books`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      dispatch(BooksDelete(res.data.books.filter(book => book.id !== id)));
    })
    .catch(err => {
      dispatch(BooksError(err));
    });
};
