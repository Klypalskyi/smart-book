import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import styles from './LibraryPage.module.css';
import AddBook from '../../components/AddBook/AddBook';
import PlanReadBooks from '../../components/PlanReadBooks/PlanReadBooks';
import NowReadBooks from '../../components/NowReadBooks/NowReadBooks';
import ReadBooks from '../../components/ReadBooks/ReadBooks';
import NextStepButton from '../../components/NextStepButton/NextStepButton';

const LibraryPage = () => {
  const [books, setBooks] = useState(null);
  const token = useSelector(state => state.session.token);
  useEffect(() => {
    const BaseUrl = 'https://smart-book.goit.co.ua/api/v1/books';
    axios
      .get(BaseUrl, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        // setBooks(...res.books);
        setBooks(res.books);
        console.log(res);
      })
      .catch(error => console.log(error));
  }, []);

  console.log('books:', books);

  return (
    <div className={styles.libraryPage__wrapper}>
      {/* {books.length !== '0' && <Redirect to="/training" />} */}
      <AddBook />
      <NextStepButton />
      <ReadBooks />
      <NowReadBooks />
      <PlanReadBooks />
    </div>
  );
};

export default LibraryPage;
