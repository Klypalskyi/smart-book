import axios from 'axios';
import { BooksRequest, BooksSuccess, BooksError } from './booksActions';

export const booksOperation = token => dispatch => {
  dispatch(BooksRequest());
  axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/books`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      dispatch(BooksSuccess(res.data.bookss));
    })
    .catch(err => {
      dispatch(BooksError(err));
    });
};

export default booksOperation;
