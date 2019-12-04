import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import styles from './LibraryPage.module.css';
import AddBook from '../../components/AddBook/AddBook';
import NextStepButton from '../../components/NextStepButton/NextStepButton';
import BooksList from '../../components/BooksList/BooksList';

const LibraryPage = () => {
  const [books, setBooks] = useState(null);
  const token = useSelector(state => state.session.token);

  useEffect(() => {
    const BaseUrl = 'https://smart-book.goit.co.ua/api/v1/books';
    axios
      .get(BaseUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setBooks(res.data.books);
      });
  }, []);
  return (
    <div className={styles.libraryPage__wrapper}>
      <AddBook />
      <NextStepButton />
      <BooksList books={books} />
    </div>
  );
};

export default LibraryPage;
