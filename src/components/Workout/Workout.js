/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { useSelector, useDispatch } from 'react-redux';
import style from './Workout.module.css';
import TrainingBookTable from '../TrainingBooksTable/TrainingBooksTable';
import { addUserTraining } from '../../redux/userTraining/userTrainingActions';
import TrainingTableInfo from '../TrainingTableInfo/TrainingTableInfo';
import { postTraining } from '../../services/API';

const Workout = () => {
  const [selectedBookId, setSelectedBookId] = useState('');
  const [books, setBooks] = useState([]);
  const [booksForRender, setBooksForRender] = useState([]);
  const [timeStart, setTimeStart] = useState(new Date().toISOString());
  const [timeEnd, setTimeEnd] = useState();
  const [avgReadPages, setAvgReadPages] = useState(0);

  const dispatch = useDispatch();
  // const token = useSelector(state => state.session.token);
  const haveTraining = useSelector(state => state.user.haveTraining);

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
    setSelectedBookId(evt.target.options[evt.target.selectedIndex].dataset.id);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const selectedBook = plannedBooks.find(el => el._id === selectedBookId);
    if (booksForRender.find(el => el._id === selectedBookId)) return;
    setBooksForRender([...booksForRender, selectedBook]);
    setBooks([...books, { book: selectedBookId }]);
  };

  const deleteBook = id => {
    const updatedBooks = booksForRender.filter(el => el._id !== id);
    setBooksForRender(updatedBooks);
    setBooks(books.filter(el => el.book !== id));
  };

  useEffect(() => {
    const allPages = booksForRender.reduce(
      (acc, el) => (el.pagesCount !== null ? acc + el.pagesCount : acc),
      0,
    );
    setAvgReadPages(allPages);
  }, [booksForRender]);

  const addTraining = () => {
    if (booksForRender.length !== 0 && timeEnd) {
      const training = {
        books,
        timeStart,
        timeEnd,
        avgReadPages,
      };
      dispatch(addUserTraining(training));
      postTraining(training);
      // setSelectedBookId('');
      // setBooks([]);
      // setBooksForRender([]);
      // setTimeEnd(new Date().toISOString());
    }
  };

  return (
    <div className={style.container}>
      {haveTraining ? (
        <TrainingTableInfo />
      ) : (
        <>
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
                <option data-id={el._id} key={el._id}>
                  {el.title}
                </option>
              ))}
            </select>
            <button type="submit" className={style.button}>
              Додати
            </button>
          </form>
          <TrainingBookTable books={booksForRender} deleteBook={deleteBook} />
          <button type="submit" className={style.submit} onClick={addTraining}>
            Почати тренування
          </button>
        </>
      )}
    </div>
  );
};

export default Workout;
