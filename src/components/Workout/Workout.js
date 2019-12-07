import React, { useState } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { useSelector } from 'react-redux';
import style from './Workout.module.css';
import TrainingBookTable from '../TrainingBooksTable/TrainingBooksTable';

const Workout = () => {
  const [selectedBook, setSelectedBook] = useState('');
  const [books, setBooks] = useState([]);
  const [timeStart, setTimeStart] = useState(new Date().toISOString());
  const [timeEnd, setTimeEnd] = useState();
  // const [avgReadPages, setAvgReadPages] = useState(0);

  const plannedBooks = useSelector(state =>
    state.books.filter(book => book.status === 'planned'),
  );

  const handleTimeStart = date => {
    setTimeStart(date.toISOString());
  };

  const handleTimeEnd = date => {
    setTimeEnd(date.toISOString());
  };

  const addBook = evt => {
    const { value } = evt.target;
    setSelectedBook(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const book = plannedBooks.find(el => el.title === selectedBook);
    setBooks([...books, book]);
    setSelectedBook('');
  };

  return (
    <div className={style.container}>
      <div className={style.header}>Моє тренування</div>
      <div className={style.pickers}>
        <MuiPickersUtilsProvider
          className={style.pickerOverlay}
          utils={DateFnsUtils}
        >
          <DatePicker
            value={timeStart}
            onChange={handleTimeStart}
            disablePast
            disableFuture
            format="dd/MM/yyyy"
            InputProps={{ className: style.picker }}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            value={timeEnd}
            onChange={handleTimeEnd}
            disablePast
            format="dd/MM/yyyy"
            InputProps={{ className: style.picker }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <form className={style.selectContainer} onSubmit={handleSubmit}>
        <select className={style.select} onChange={addBook}>
          <option disabled selected className={style.label}>
            Обрати книги з бібліотеки
          </option>
          {plannedBooks.map(el => (
            <option key={el.id}>{el.title}</option>
          ))}
        </select>
        <button type="submit" className={style.button}>
          Додати
        </button>
      </form>
      <TrainingBookTable />
      <button type="submit" className={style.submit}>
        Почати тренування
      </button>
    </div>
  );
};

export default Workout;
