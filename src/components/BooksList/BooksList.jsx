import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import styled from './BooksList.module.css';

import NowReadBooks from '../NowReadBooks/NowReadBooks';
import PlanReadBooks from '../PlanReadBooks/PlanReadBooks';
import ReadBooks from '../ReadBooks/ReadBooks';
import NextStepButton from '../NextStepButton/NextStepButton';

const BooksList = ({ books }) => {
  const [planedBooks, setPlanedBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [nowReadBooks, setNowReadBooks] = useState([]);

  useEffect(() => {
    if (books) {
      setPlanedBooks(books.filter(book => book.status === 'planned'));
      setReadBooks(books.filter(book => book.status === 'read'));
      setNowReadBooks(books.filter(book => book.status === 'reading'));
    }
  }, [books]);
  return (
    <>
      {!nowReadBooks.length && <NextStepButton />}
      {books ? (
        <>
          <ReadBooks books={readBooks} />
          <NowReadBooks books={nowReadBooks} />
          <PlanReadBooks books={planedBooks} />
        </>
      ) : (
        <div className={styled.wrapper}>
          <div className={styled.container}>
            <p className={styled.title}>Крок 1.</p>
            <div className={styled.secondTitle}>
              <MenuBookTwoToneIcon className={styled.bookIcon} />
              <p className={styled.titleText}>Створіть особисту бібліотеку</p>
            </div>
            <div className={styled.bodyText}>
              <SubdirectoryArrowRightIcon className={styled.arrowIcon} />
              <p className={styled.text}>
                Додайте до неї книжки, які маєте намір прочитати.
              </p>
            </div>
            <p className={styled.title}>Крок 2.</p>
            <div className={styled.secondTitle}>
              <OutlinedFlagIcon className={styled.flagIcon} />
              <p className={styled.titleText}>
                Сформуйте своє перше тренування
              </p>
            </div>
            <div className={styled.bodyText}>
              <SubdirectoryArrowRightIcon className={styled.arrowIcon} />
              <p className={styled.text}>
                Визначте ціль, оберіть період, розпочинайте тренування.
              </p>
            </div>
            <button type="button" className={styled.button}>
              Ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BooksList;
