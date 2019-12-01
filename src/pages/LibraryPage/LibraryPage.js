import React from 'react';
import styles from './LibraryPage.module.css';
import AddBook from '../../components/AddBook/AddBook';
import PlanReadBooks from '../../components/PlanReadBooks/PlanReadBooks';
import NowReadBooks from '../../components/NowReadBooks/NowReadBooks';
import ReadBooks from '../../components/ReadBooks/ReadBooks';
import NextStepButton from '../../components/NextStepButton/NextStepButton';

const LibraryPage = () => {
  return (
    <div className={styles.libraryPage__wrapper}>
      <AddBook />
      <NextStepButton />
      <ReadBooks />
      <NowReadBooks />
      <PlanReadBooks />
    </div>
  );
};

export default LibraryPage;
