import * as React from 'react';
import { Line } from 'react-chartjs-2';
import {
  createArrayOfDate,
  createArrayOfCount,
  makeAverage,
  findDifference,
} from './helpersFn';
import styles from './Chart.module.css';

const Chart = ({ training }) => {
  const { pagesReadResult, timeStart, timeEnd, allPagesCount } = training;

  const arrayOfDate = createArrayOfDate(pagesReadResult);
  const difference = findDifference(timeStart, timeEnd, arrayOfDate);
  const arrayOfCount = createArrayOfCount(arrayOfDate, pagesReadResult);
  const averageCountPage = (allPagesCount / difference).toFixed(0);
  const { length } = arrayOfCount;
  const aim = makeAverage(averageCountPage, length);

  const data = {
    labels: arrayOfDate,
    datasets: [
      {
        label: 'Факт',
        data: arrayOfCount,
        borderColor: '#d97833',
        backgroundColor: '#d97833',
        fill: false,
      },
      {
        label: 'План',
        data: aim,
        borderColor: '#091e3f',
        backgroundColor: '#091e3f',
        fill: false,
      },
    ],
  };

  return (
    <div className={styles.ChartWrapper}>
      <Line
        data={data}
        options={{
          title: {
            display: true,
            position: 'top',
            fontColor: '#091e3f',
            fontStyle: 'normal',
            padding: 20,
            left: 0,
            horizontalAlign: 'right',
            text: `КІЛЬКІСТЬ СТОРІНОК / ДЕНЬ 56`,
            fontSize: 12,
          },
          legend: {
            position: 'right',
            labels: {
              fontSize: 12,
              fontFamily: 'Montserrat',
              fontColor: '#242a37',
              boxWidth: 8,
              padding: 10,
              fullWidth: false,
              usePointStyle: true,
            },
          },
          layout: {
            padding: {
              left: 30,
              right: 30,
              top: 30,
              bottom: 0,
            },
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  position: 'left',
                },
                ticks: {
                  display: true,
                },
                gridLines: {
                  color: 'rgba(193, 196, 206, 0.4)',
                },
                display: true,
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'ЧАС',
                  fontSize: 12,
                  fontFamily: 'Montserrat',
                  fontColor: '#242a37',
                  fontStyle: 'bold',
                },
                ticks: {
                  display: true,
                  minRotation: 30,
                },
                gridLines: {
                  color: 'rgba(193, 196, 206, 0.4)',
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Chart;
