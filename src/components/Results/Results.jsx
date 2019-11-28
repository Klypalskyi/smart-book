import React, { Component } from 'react';
import styles from './Results.module.css';

class Results extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>РЕЗУЛЬТАТИ</h3>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.labelsWrapper}>
            <label className={styles.label}>
              <p className={styles.input_title}>Дата</p>
              <input type="text" name="date" className={styles.input} />
            </label>
            <label className={styles.label}>
              <p className={styles.input_title}>Кількість сторінок</p>
              <input type="text" name="pages" className={styles.input} />
            </label>
          </div>
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
          {/* can be replaced by ul>li with flex-basis: 33% */}
          <table className={styles.table}>
            <tbody>
              <tr className={styles.table_row}>
                <td className={styles.table_date}>26.11.2019</td>
                <td className={styles.table_time}>19:52:48</td>
                <td className={styles.table_pages}>
                  123 <span className={styles.table_pages_grey}>стор.</span>
                </td>
              </tr>
              <tr className={styles.table_row}>
                <td className={styles.table_date}>26.11.2019</td>
                <td className={styles.table_time}>19:52:48</td>
                <td className={styles.table_pages}>
                  123 <span className={styles.table_pages_grey}>стор.</span>
                </td>
              </tr>
              <tr className={styles.table_row}>
                <td className={styles.table_date}>26.11.2019</td>
                <td className={styles.table_time}>19:52:48</td>
                <td className={styles.table_pages}>
                  12 <span className={styles.table_pages_grey}>стор.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Results;
