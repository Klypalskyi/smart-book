import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import style from './TrainingBooksTable.module.css';

const books = [
  {
    title: 'Scrum. Революционный метод управлениями проектами.',
    author: 'Джефф Сазерленд',
    year: '2014',
    pagesCount: '25',
  },
  {
    title: 'Deadline. Роман об управлении проектами.',
    author: 'Том ДеМарко',
    year: '2006',
    pagesCount: '188',
  },
  {
    title: '5 Пороков команды. Притчи о лидерстве.',
    author: 'Том ДеМарко',
    year: '2018',
    pagesCount: '235',
  },
];

const TrainingPageTable = () => {
  return (
    <div className={style.table}>
      <div className={style.tableHeader}>
        <div className={style.columnTitle}>
          <p className={style.headerTitle}>Назва книги</p>
        </div>
        <div className={style.columnAuthor}>
          <p className={style.headerTitle}>Автор</p>
        </div>
        <div className={style.columnYear}>
          <p className={style.headerTitle}>Рiк</p>
        </div>
        <div className={style.columnPages}>
          <p className={style.headerTitle}>Стор.</p>
        </div>
      </div>
      <ul className={style.bookList}>
        {books.map(el => (
          <li key={el.title} className={style.bookListItem}>
            <MenuBookIcon className={style.iconBook} />
            <div className={style.bookListItemBody}>
              <p className={style.bookTitle}>{el.title}</p>
              <div className={`${style.bookInfo} ${style.bookAuthor}`}>
                <p className={style.bookName}>Автор:</p>
                <p className={style.bookData}>{el.author}</p>
              </div>
              <div className={`${style.bookInfo} ${style.bookYear}`}>
                <p className={style.bookName}>Рiк:</p>
                <p className={style.bookData}>{el.year}</p>
              </div>
              <div className={`${style.bookInfo} ${style.bookPages}`}>
                <p className={style.bookName}>Стор.:</p>
                <p className={style.bookData}>{el.pagesCount}</p>
              </div>
            </div>
            <button type="button" className={style.btnDelete}>
              <DeleteOutlineIcon className={style.iconDelete} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingPageTable;
