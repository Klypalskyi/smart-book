import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useSelector } from 'react-redux';
import { postBook } from '../../services/API';
import { getUserToken } from '../../redux/selectors/sessionSelectors';
import styles from './AddBook.module.css';

const AddBook = () => {
  const token = useSelector(state => getUserToken(state));
  const [bookName, setbookName] = useState('');
  const [bookAuthor, setbookAuthor] = useState('');
  const [bookDate, setbookDate] = useState(Number(new Date()));
  const [pagesAmount, setpagesAmount] = useState(0);

  const getInputValue = ({ target }) => {
    if (target.name === 'bookName') {
      setbookName(target.value);
      return;
    }
    if (target.name === 'bookAuthor') {
      setbookAuthor(target.value);
      return;
    }
    if (target.name === 'pagesAmount') {
      setpagesAmount(Number(target.value));
    }
  };

  const handleDateInput = date => {
    setbookDate(Number(date));
  };

  const createBook = event => {
    event.preventDefault();
    if (pagesAmount <= 0) return;
    const book = {
      title: bookName,
      author: bookAuthor,
      year: bookDate,
      pagesCount: pagesAmount,
    };
    postBook(book, token);

    setbookName('');
    setbookAuthor('');
    setbookDate('');
    setpagesAmount(0);
  };

  return (
    <form action="#" className={styles.addBookForm} onSubmit={createBook}>
      <label htmlFor="bookName" className={styles.labelTitle}>
        <div className={styles.inputTitle}>Назва книги</div>
        <input
          type="text"
          name="bookName"
          value={bookName}
          id="bookName"
          placeholder="..."
          className={styles.inputData}
          onChange={getInputValue}
          required
        />
      </label>
      <div className={styles.tabletWrapper}>
        <label htmlFor="bookAuthor" className={styles.labelAutor}>
          <div className={styles.inputTitle}>Автор книги</div>
          <input
            type="text"
            name="bookAuthor"
            value={bookAuthor}
            id="bookAuthor"
            placeholder="..."
            className={styles.inputData}
            onChange={getInputValue}
          />
        </label>
        <label htmlFor="" className={styles.labelYear}>
          <div className={styles.inputTitle}>Рік випуску</div>
          <MuiPickersUtilsProvider utils={DateFnsUtils} id="bookDate">
            <DatePicker
              value={bookDate}
              onChange={handleDateInput}
              InputProps={{ className: styles.inputData }}
              views={['year']}
              name={bookDate}
              invalidDateMessage=""
              disableFuture
            />
          </MuiPickersUtilsProvider>
        </label>
        <label htmlFor="pagesAmount" className={styles.labelPages}>
          <div className={styles.inputTitle}>Кількість сторінок</div>
          <input
            type="number"
            name="pagesAmount"
            value={pagesAmount}
            id="pagesAmount"
            placeholder="..."
            className={styles.inputData}
            onChange={getInputValue}
            required
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
};

export default AddBook;
