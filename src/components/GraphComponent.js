import React from 'react';
import { Line } from 'react-chartjs-2';

export default function GraphComponent(props) {
  const { data } = props;
  const data1 = data => {
    return {
      labels: data.map(d => d.timestamp),
      datasets: [
        {
          label: 'eCPM',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(2, 148, 255, 0)',
          borderColor: '#0294ff',
          borderCapStyle: 'butt',
          borderDash: [],
          borderWidth: 1,
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#0294ff',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#0294ff',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data.map(d => d.eCPM)
        }
      ]
    };
  };

  return (
    <div style={{ height: '500px', width: '500px' }}>
      <Line data={data1(data)} />
    </div>
  );
}
