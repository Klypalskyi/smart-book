import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import styles from './ReadBooks.module.css';
import img from './images/library.png';

const ReadBooks = ({ books }) => {
  const [value, setValue] = useState(null);
  return (
    <>
      {books ? (
        <div>
          <div className={styles.conteiner}>
            <h1 className={styles.title}>Прочитано</h1>
            <ul className={styles.cardBook}>
              {books.map(book => (
                <li className={styles.item} key={book.id}>
                  <div className={styles.display}>
                    <img src={img} alt="book-icon" className={styles.icon} />

                    <h2 className={styles.cardTitle}>{book.title}</h2>
                  </div>

                  <table className={styles.table}>
                    <tr>
                      <td className={styles.label}>Автор:</td>
                      <td className={styles.quantity}>{book.author}</td>
                    </tr>
                    <tr className={styles.tr}>
                      <td className={styles.label}>Рік:</td>
                      <td className={styles.quantity}>{book.year}</td>
                    </tr>
                    <tr>
                      <td className={styles.label}>Стор.:</td>
                      <td className={styles.quantity}>{book.pagesCount}</td>
                    </tr>
                    <tr>
                      <td className={styles.label}>Рейтинг:</td>
                      <td className={styles.quantity}>
                        <Rating
                          name="simple-controlled "
                          size="small"
                          value={value}
                          onChange={newValue => {
                            setValue(newValue);
                          }}
                        />
                      </td>
                    </tr>
                  </table>
                  <button
                    className={
                      book.comment ? styles.button__orange : styles.button__grey
                    }
                    type="button"
                  >
                    Резюме
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.tablet}>
            <div className={styles.wrapper}>
              <div className={styles.wrapper_text}>
                <h2 className={styles.tittle__tablet}>Прочитано</h2>
                <p className={styles.text__name_book}>Назва книги</p>
                <p className={styles.text__avtor}>Автор</p>
                <p className={styles.text__year}>Рік</p>
                <p className={styles.text__page}>Стор.</p>
                <p className={styles.text__rating}>Рейтинг</p>
                <p className={styles.text__rating_book}>Рейтинг книги</p>
              </div>
              <ul className={styles.read__book}>
                {books.map(book => (
                  <li className={styles.list_tablet} key={book.id}>
                    <img
                      src={img}
                      alt="book-icon"
                      className={styles.icon__tablet}
                    />

                    <table className={styles.table_book}>
                      <tr>
                        <td className={styles.name_book}>
                          <p className={styles.p_name_book}>{book.title}</p>
                        </td>
                        <td className={styles.avtor}>
                          <p className={styles.p_avtor}>{book.author}</p>
                        </td>
                        <td className={styles.year}>{book.year}</td>
                        <td className={styles.page}>{book.pagesCount}</td>
                        <td className={styles.rating}>
                          <Rating
                            name="simple-controlled"
                            size="small"
                            value={value}
                            onChange={newValue => {
                              setValue(newValue);
                            }}
                          />
                        </td>
                      </tr>
                    </table>
                    <button
                      className={
                        book.comment
                          ? styles.button__tablet_orange
                          : styles.button__tablet_grey
                      }
                      type="button"
                    >
                      Резюме
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

ReadBooks.defaultProps = {
  books: null,
};
ReadBooks.propTypes = {
  books: PropTypes.arrayOf(),
};

export default ReadBooks;
