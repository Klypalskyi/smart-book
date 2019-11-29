import React from 'react';
import styles from './NowReadBooks.module.css';
import img from './icon_library.png';

const NowReadBooks = () => {
  return (
    <div>
      <div className={styles.conteiner}>
        <h2 className={styles.tittle}>Читаю</h2>

        <ul>
          <li className={styles.item}>
            <div className={styles.display}>
              <img src={img} alt="book-icon" className={styles.icon} />
              <h2 className={styles.cardTitle}>
                Разработка ценностных предложений.
              </h2>
            </div>

            <table className={styles.table}>
              <tr>
                <td className={styles.label}>Автор:</td>
                <td className={styles.quantity}>Джефф Сазерленд</td>
              </tr>
              <tr>
                <td className={styles.label}>Рік:</td>
                <td className={styles.quantity}>2014</td>
              </tr>
              <tr>
                <td className={styles.label}>Стор.:</td>
                <td className={styles.quantity}>25</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
      <div className={styles.tablet}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_text}>
            <h2 className={styles.tittle__tablet}>Читаю</h2>
            <p className={styles.text__name_book}>Назва книги</p>
            <p className={styles.text__avtor}>Автор</p>
            <p className={styles.text__year}>Рік</p>
            <p className={styles.text__page}>Стор.</p>
          </div>
          <ul className={styles.read__book}>
            <li className={styles.list_tablet}>
              <img src={img} alt="book-icon" className={styles.icon__tablet} />

              <table>
                <tr>
                  <td className={styles.name_book}>
                    <p className={styles.p_name_book}>
                      Разработка ценностных предложений.
                    </p>
                  </td>
                  <td className={styles.avtor}>
                    <p className={styles.p_avtor}>
                      Алекс Остервальдер, Ив Пинье
                    </p>
                  </td>
                  <td className={styles.year}>2014</td>
                  <td className={styles.page}>123</td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NowReadBooks;
