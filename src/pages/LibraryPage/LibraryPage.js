import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './LibraryPage.module.css';
import AddBook from '../../components/AddBook/AddBook';
import BooksList from '../../components/BooksList/BooksList';
import { booksOperation } from '../../redux/books/BooksOperations';

const LibraryPage = () => {
  const token = useSelector(state => state.session.token);
  const dispatch = useDispatch();
  const book = useSelector(state => state.books);
  useEffect(() => {
    dispatch(booksOperation(token));
  }, []);
  return (
    <div className={styles.libraryPage__wrapper}>
      <AddBook />
      <BooksList books={book} />
    </div>
  );
};

export default LibraryPage;
