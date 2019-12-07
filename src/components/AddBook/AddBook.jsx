import React, { Component } from 'react';
import styles from './AddBook.module.css';

export default class AddBook extends Component {
  state = {
    isLoading: false,
    bookName: '',
    bookAuthor: '',
    bookDate: '',
    pagesAmount: '',
  }

  getInputValue = ({ target }) => {
    console.log(target);
    this.setState({
      [target.name]: [target.value],
    })
  }

  render() {
    const { bookName, bookAuthor, pagesAmount } = this.state;
    return (
      <form action="#" className={styles.addBookForm}>
        <label htmlFor="bookName" className={styles.labelTitle}>
          <div className={styles.inputTitle}>Назва книги</div>
          <input
            type="text"
            name="bookName"
            value={bookName}
            id="bookName"
            placeholder="..."
            className={styles.inputData}
            onChange={this.getInputValue}
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
              onChange={this.getInputValue}
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
              onChange={this.getInputValue}
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
              onChange={this.getInputValue}
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
    )
  }
}
