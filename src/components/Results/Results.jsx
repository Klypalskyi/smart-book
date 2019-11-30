import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

import styles from './Results.module.css';

const testResults = [
  {
    id: 1,
    date: '25.11.2019',
    time: '19:52:48',
    pages: 123,
  },
  {
    id: 2,
    date: '26.11.2019',
    time: '18:52:32',
    pages: 234,
  },
  {
    id: 3,
    date: '27.11.2019',
    time: '19:32:41',
    pages: 345,
  },
  {
    id: 4,
    date: '28.11.2019',
    time: '09:23:18',
    pages: 45,
  },
];

const handleSubmit = e => {
  e.preventDefault();
};

const Results = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  console.dir(DateFnsUtils);

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <h3 className={styles.title}>РЕЗУЛЬТАТИ</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <p className={styles.input_title}>Дата</p>
              <DateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
                showTodayButton
                ampm={false}
                disableFuture
                format="dd/MM/yyyy hh:mm"
                InputProps={{ className: styles.input }}
                // InputProps={{ classes: { root: styles.input } }}
                // classes={{ root: styles.input }}
                // TextFieldComponent
                // className={styles.input}
              />
            </MuiPickersUtilsProvider>
          </label>
          <label className={styles.label}>
            <p className={styles.input_title}>Кількість сторінок</p>
            <input type="text" name="pages" className={styles.input} />
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
              {testResults.length > 0 &&
                testResults.map(res => (
                  <tr className={styles.table_row} key={res.id}>
                    <td className={styles.table_date}>{res.date}</td>
                    <td className={styles.table_time}>{res.time}</td>
                    <td className={styles.table_pages}>
                      <p className={styles.table_pages_value}>{res.pages}</p>
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
