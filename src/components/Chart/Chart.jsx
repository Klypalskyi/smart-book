import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = props => {
  const data = {
    labels: ['hallo', , , , , ,],
    datasets: [
      {
        label: 'Факт',
        fill: false,
        lineTension: 0.4,
        backgroundColor: '#e18337',
        borderColor: '#d97833',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 1],
      },
      {
        label: 'План',
        fill: false,
        lineTension: 0.4,
        backgroundColor: '#091e3f',
        borderColor: '#091e3f',
        borderWidth: 1,
        data: [1, 56, 70, 7, 10, 45],
      },
    ],
  };

  return (
    <div className="ChartWrapper">
      <Line
        height={170}
        width={390}
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
                  labelString: 'hallo',
                  position: 'left',
                },
                display: false,
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
                  display: false,
                },
                gridLines: {
                  color: 'rgba(193, 196, 206, 0.9)',
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
