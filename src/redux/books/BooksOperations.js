import axios from 'axios';
import {
  BooksRequest,
  BooksSuccess,
  BooksError,
  BooksDelete,
  AddBook,
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

export const postBook = (book, token) => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_API_URL}/books/create`, book, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      if (response.status === 201) dispatch(AddBook(response.data.book));
    })
    .catch(error => dispatch(BooksError(error)));
};
