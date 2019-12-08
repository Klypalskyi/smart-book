import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const pagesReadResult = [
  {
    _id: '5debb14b496b296044455570',
    date: '2019-12-01T13:15:00.000Z',
    count: 15,
  },
  {
    _id: '5deb8534b15b06277af0b461',
    date: '2019-12-02T20:38:00.000Z',
    count: 123,
  },
  {
    _id: '5debaa6d5defc6604353a8fa',
    date: '2019-12-04T14:26:00.000Z',
    count: 88,
  },
  {
    _id: '5deba9cd5defc6604353a8f9',
    date: '2019-12-06T12:16:00.000Z',
    count: 11,
  },
  {
    _id: '5debaeac5defc6604353a8fd',
    date: '2019-12-06T10:12:00.000Z',
    count: 121,
  },
  {
    _id: '5debac1f5defc6604353a8fc',
    date: '2019-12-07T13:38:45.473Z',
    count: 7,
  },
  {
    _id: '5deba30ab15b06277af0b462',
    date: '2019-12-07T14:32:14.844Z',
    count: 11,
  },
  {
    _id: '5debab615defc6604353a8fb',
    date: '2019-12-07T13:38:38.134Z',
    count: 213,
  },
  {
    _id: '5deb9e3cdd9d032772bf52a1',
    date: '2019-12-07T12:35:44.844Z',
    count: 32,
  },
];

const obj = {};

pagesReadResult.forEach(el => {
  const formatedDate = moment(el.date).format('YYYY/MM/DD');

  obj[formatedDate] = {
    count: obj[formatedDate] ? obj[formatedDate].count : 0 + el.count,
  };
});

const arrayOfCount = Object.values(obj);
const finalCount = arrayOfCount.map(el => el.count);

// const countArray = [];
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

const ChartComp = props => {
  // hooks
  const [average, setAverage] = useState(0);
  const [dateArray, setObject] = useState(pagesReadResult);
  const [date, setDate] = useState([]);
  const [allPages, setAllPages] = useState(3186);
  // end of hooks

  const timeStart = 1575417600000;
  const timeEnd = '2019-12-07T00:00:00.000Z';
  const allPagesCount = 1593;

  const startOfTranning = moment(timeStart).dayOfYear();
  const endOfTranning = moment(timeEnd).dayOfYear();
  const difference = endOfTranning - startOfTranning;

  const averageCountPage = allPagesCount / difference;

  const onlyDate = [];
  const onlyNormalDate = [];

  dateArray.forEach(train => {
    const day = moment(train.date).dayOfYear(); // day of year

    if (!onlyDate.includes(day)) {
      onlyDate.push(day); // push day of year

      const format = moment().dayOfYear(day)._d;
      onlyNormalDate.push(moment(format).format('YYYY/MM/DD')); // push normal date to another array
    }
  });

  dateArray.forEach(train => {
    const day = moment(train.date).dayOfYear(); // day of year

    if (!onlyDate.includes(day)) {
      onlyDate.push(day); // push day of year

      const format = moment().dayOfYear(day)._d;
      onlyNormalDate.push(moment(format).format('YYYY/MM/DD')); // push normal date to another array
    }
  });

  const differenceWithDeadline =
    difference + (onlyNormalDate.length - difference);

  const dataa = [
    { argument: 1, value: 10 },
    { argument: 2, value: 1000 },
    { argument: 3, value: 30 },
  ];

  useEffect(() => {
    setDate(pagesReadResult);
  }, []);

  const chartData = generateData(
    1,
    differenceWithDeadline,
    finalCount,
    averageCountPage,
  );

  console.log('chart', chartData);

  return (
    <Paper>
      <Chart data={chartData}>
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
};

export default ChartComp;
