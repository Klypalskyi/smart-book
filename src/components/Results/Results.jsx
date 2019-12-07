/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

// import { addResult } from '../../redux/results/resultsActions';

import styles from './Results.module.css';

function formatDate(date) {
  let dd = new Date(date).getDate();
  if (dd < 10) dd = `0${dd}`;
  let mm = new Date(date).getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;
  const yyyy = new Date(date).getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}
function formatTime(date) {
  let hh = new Date(date).getHours();
  if (hh < 10) hh = `0${hh}`;

  let mm = new Date(date).getMinutes();
  if (mm < 10) mm = `0${mm}`;

  let ss = new Date(date).getSeconds();
  if (ss < 10) ss = `0${ss}`;

  return `${hh}:${mm}:${ss}`;
}

const Results = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [selectedPages, setSelectedPages] = useState('');
  const [trainingId, setTrainingId] = useState('');
  const [pagesReadResult, setPagesReadResult] = useState([]);

  const token = useSelector(state => state.session.token);

  useEffect(() => {
    axios
      .get(`/training`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setTrainingId(res.data.training.trainingId);
        setPagesReadResult(res.data.training.pagesReadResult);
      });
  }, []);

  const handleDateInput = date => {
    setSelectedDate(date);
  };

  const handlePagesInput = ({ target }) => {
    setSelectedPages(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (selectedPages.length === 0 || Number(selectedPages) <= 0) {
      // error handler
    } else {
      // set pages result
      const addedResult = {
        date: new Date(selectedDate).toISOString(), // date	string($date)
        count: Number(selectedPages), // count	number
      };

      // add to backend
      axios.post(`/training/time/${trainingId}`, addedResult, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // clear inputs
      setSelectedDate(new Date().toISOString());
      setSelectedPages('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <h3 className={styles.title}>РЕЗУЛЬТАТИ</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} forHtml="resultDatePicker">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <p className={styles.input_title}>Дата</p>
              <DateTimePicker
                id="resultDatePicker"
                name="resultDatePicker"
                value={selectedDate}
                onChange={handleDateInput}
                showTodayButton
                ampm={false}
                disableFuture
                format="dd/MM/yyyy"
                InputProps={{
                  className: styles.picker,
                  id: 'resultDatePicker',
                }}
              />
            </MuiPickersUtilsProvider>
          </label>
          <label className={styles.label}>
            <p className={styles.input_title}>Кількість сторінок</p>
            <input
              type="number"
              name="pages"
              className={styles.input}
              value={selectedPages}
              onChange={handlePagesInput}
            />
          </label>
          <input
            type="submit"
            className={styles.submit}
            value="Додати результат"
          />
        </form>

        <div className={styles.statistic}>
          <h3 className={styles.title_statistic}>
            <span className={styles.title_statisticText}>Статистика</span>
          </h3>
          <table className={styles.table}>
            <tbody>
              {/* {testResults.length > 0 &&
                testResults.map(res => (
                  <tr className={styles.table_row} key={res.id}>
                    <td className={styles.table_date}>{res.date}</td>
                    <td className={styles.table_time}>{res.time}</td>
                    <td className={styles.table_pages}>
                      <p className={styles.table_pages_value}>{res.pages}</p>
                      <p className={styles.table_pages_text}>стор.</p>
                    </td>
                  </tr>
                ))} */}
              {pagesReadResult.length > 0 &&
                pagesReadResult.map(res => (
                  <tr className={styles.table_row} key={res.id}>
                    <td className={styles.table_date}>
                      {formatDate(res.date)}
                    </td>
                    <td className={styles.table_time}>
                      {formatTime(res.date)}
                    </td>
                    <td className={styles.table_pages}>
                      <p className={styles.table_pages_value}>{res.count}</p>
                      <p className={styles.table_pages_text}>стор.</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;
