import React, { useEffect, useState, Component } from 'react';
import { useSelector, connect } from 'react-redux';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import {
  getPagesReadResult,
  getTrainingTimeEnd,
  getTrainingTimeStart,
  getAllPagesCount,
} from '../../redux/selectors/trainingSelectors';

const createArrayOfDate = array => {
  const onlyDate = [];
  const onlyNormalDate = [];

  array.forEach(train => {
    const day = moment(train.date).dayOfYear(); // day of year

    if (!onlyDate.includes(day)) {
      onlyDate.push(day); // push day of year

      const format = moment().dayOfYear(day)._d;
      onlyNormalDate.push(moment(format).format('YYYY/MM/DD')); // push normal date to another array
    }
  });
  return onlyNormalDate;
};

const createArrayOfCount = array => {
  const obj = {};

  array.forEach(el => {
    const formatedDate = moment(el.date).format('YYYY/MM/DD');
    obj[formatedDate] = {
      count: obj[formatedDate] ? obj[formatedDate].count : 0 + el.count,
    };
  });

  const arrayOfCount = Object.values(obj).map(el => el.count);
  return arrayOfCount;
};

const findDifference = (start, end, arrayOfDate) => {
  const startOfTraining = moment(start).dayOfYear();
  const endOfTraining = moment(end).dayOfYear();
  const difference = endOfTraining - startOfTraining;

  const differenceWithDeadline = difference + (arrayOfDate.length - difference);
  return differenceWithDeadline;
};

const generateData = (start, end, count, average) => {
  const data = [];
  for (let i = start; i <= end; i++) {
    data.push({
      countAveragePage: average,
      countPagesEveryDay: count[i - 1],
      argument: i,
    });
  }

  return data;
};

class ChartComp extends Component {
  state = {
    training: [],
    timeEnd: 0,
    timeStart: 0,
    allPagesCount: 0,
    arrayOfDate: [],
    arrayOfCount: [],
  };

  componentDidMount() {
    // const trainingStart = useSelector(state => state.training);
    console.log('this staeteetettete', this.state.training);
    this.setState({
      training: this.props.training,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.training !== this.props.training) {
      console.log('jfdjnfnkjsnjkdfjnfdjn', prevProps.training);
      this.setState({
        training: this.props.training,
      });

      // console.log(createArrayOfDate(this.state.training.pagesReadResult));
    }

    // this.setState(
    //   {
    //     arrayOfDate: createArrayOfDate(this.state.training.pagesReadResult),
    //   }
  }

  // const [training, setTraining] = useState([]);

  // const [pagesReadResult, setPagesReadResult] = useState([]);
  // const [timeEnd, setTimeEnd] = useState(0);
  // const [timeStart, setTimeStart] = useState(0);
  // const [allPagesCount, setAllPagesCount] = useState(0);
  // const [arrayOfDate, setArrayOfDate] = useState(0);
  // const [arrayOfCount, setArrayOfCount] = useState(0);

  // const trainingStart = useSelector(state => state.training);

  // useEffect(() => {
  //   if (trainingStart) {
  //     setTraining(trainingStart);
  //   }
  // }, [trainingStart]);

  // // setTimeEnd(training.timeEnd);
  // //     setTimeStart(training.timeStart);
  // //     setAllPagesCount(training.allPagesCount);

  // useEffect(() => {
  //   if (training) {
  //     setPagesReadResult(training.pagesReadResult);
  //   }
  // }, [training]);

  // // create an array of date
  // useEffect(() => {
  //   if (pagesReadResult) {
  //     setArrayOfDate(createArrayOfDate(pagesReadResult));
  //     console.log('yergfuinhuirnh', arrayOfDate);
  //   }
  // }, [pagesReadResult]);

  // // create an array of count
  // useEffect(() => {
  //   if (arrayOfDate) {
  //     setArrayOfCount(createArrayOfCount(pagesReadResult));
  //     console.log(arrayOfCount);
  //   }
  // }, [arrayOfDate]);

  // const chartData = generateData(
  //   1,
  //   differenceWithDeadline,
  //   finalCount,
  //   averageCountPage,
  // );
  render() {
    const dataa = [
      { argument: 1, countAveragePage: 10 },
      { argument: 2, countAveragePage: 1000 },
      { argument: 3, countAveragePage: 30 },
    ];

    return (
      <Paper>
        <Chart data={dataa}>
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="line"
            valueField="countAveragePage"
            argumentField="argument"
          />
          <SplineSeries
            name="spline"
            valueField="countPagesEveryDay"
            argumentField="argument"
          />
        </Chart>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  training: state.training,
});

export default connect(mapStateToProps)(ChartComp);
