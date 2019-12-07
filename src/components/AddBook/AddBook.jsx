import React, { useState } from 'react';
// import DateFnsUtils from '@date-io/date-fns';
// import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useSelector } from 'react-redux';
import { postBook } from '../../services/API';
import { getUserToken } from '../../redux/selectors/sessionSelectors';
import styles from './AddBook.module.css';

const AddBook = () => {
  const token = useSelector(state => getUserToken(state));
  const [bookName, setbookName] = useState('');
  const [bookAuthor, setbookAuthor] = useState('');
  const [bookDate, setbookDate] = useState('');
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
    if (target.name === 'bookDate') {
      setbookDate(Number(target.value));
      return;
    }
    if (target.name === 'pagesAmount') {
      setpagesAmount(Number(target.value));
    }
  };

  const createBook = event => {
    event.preventDefault();
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
        <label htmlFor="bookDate" className={styles.labelYear}>
          <div className={styles.inputTitle}>Рік випуску</div>
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              value={bookDate}
              onChange={event => console.log(event.target)}
              // className={styles.inputData}
              views={['year']}
              name={bookDate}
              invalidDateMessage=""
            />
          </MuiPickersUtilsProvider> */}
          <input
            type="date"
            name="bookDate"
            value={bookDate}
            id="bookDate"
            className={styles.inputData}
            onChange={getInputValue}
          />
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
