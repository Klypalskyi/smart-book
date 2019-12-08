import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StartingSteps from '../StartingSteps/StartingSteps';

import NowReadBooks from '../NowReadBooks/NowReadBooks';
import PlanReadBooks from '../PlanReadBooks/PlanReadBooks';
import ReadBooks from '../ReadBooks/ReadBooks';
import NextStepButton from '../NextStepButton/NextStepButton';

const BooksList = () => {
  const [planedBooks, setPlanedBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [nowReadBooks, setNowReadBooks] = useState([]);

  const books = useSelector(state => state.books);

  useEffect(() => {
    if (books) {
      setPlanedBooks(books.filter(book => book.status === 'planned'));
      setReadBooks(books.filter(book => book.status === 'read'));
      setNowReadBooks(books.filter(book => book.status === 'reading'));
    }
  }, [books]);

  return (
    <>
      {books ? (
        <>
          <ReadBooks books={readBooks} />
          <NowReadBooks books={nowReadBooks} />
          <PlanReadBooks books={planedBooks} />
        </>
      ) : (
        <StartingSteps />
      )}
    </>
  );
};

export default BooksList;
