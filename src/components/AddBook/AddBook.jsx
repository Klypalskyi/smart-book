import React from 'react';
import styles from './AddBook.module.css';

const AddBook = () => (
  <form action="#" className={styles.addBookForm}>
    <label htmlFor="bookName" className={styles.labelTitle}>
      <div className={styles.inputTitle}>Назва книги</div>
      <input
        type="text"
        name="bookName"
        value=""
        id="bookName"
        placeholder="..."
        className={styles.inputData}
      />
    </label>
    <div className={styles.tabletWrapper}>
      <label htmlFor="bookAuthor" className={styles.labelAutor}>
        <div className={styles.inputTitle}>Автор книги</div>
        <input
          type="text"
          name="bookAuthor"
          value=""
          id="bookAuthor"
          placeholder="..."
          className={styles.inputData}
        />
      </label>
      <label htmlFor="bookDate" className={styles.labelYear}>
        <div className={styles.inputTitle}>Рік випуску</div>
        <input
          type="date"
          name="bookDate"
          value=""
          id="bookDate"
          className={styles.inputData}
        />
      </label>
      <label htmlFor="pagesAmount" className={styles.labelPages}>
        <div className={styles.inputTitle}>Кількість сторінок</div>
        <input
          type="number"
          name="pagesAmount"
          value=""
          id="pagesAmount"
          placeholder="..."
          className={styles.inputData}
        />
      </label>
    </div>
    <label htmlFor="addBtn">
      <input
        type="submit"
        value="Додати"
        id="addBtn"
        className={styles.addBtn}
      />
    </label>
  </form>
);

export default AddBook;
