import React from 'react';
import style from './Workout.module.css';
import TrainingBookTable from '../TrainingBooksTable/TrainingBooksTable';

const Workout = () => {
  // const [books, setBooks] = useState({});
  // const [timeStart, setTimeStart] = useState();
  // const [timeEnd, setTimeEnd] = useState();
  // const [avgReadPages, setAvgReadPages] = useState(0);

  return (
    <div className={style.container}>
      <TrainingBookTable />
    </div>
  );
};

export default Workout;
