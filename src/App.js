import React from 'react';
import './App.css';
import Axios from 'axios';
import TableComponent from './components/TableComponent';
import GraphComponent from './components/GraphComponent';
import DateTimePicker from './components/DateTimePicker';

function App() {
  const [data, setData] = React.useState([]);

  const [dateRange, setDateRange] = React.useState([new Date(), new Date()]);

  React.useEffect(() => {
    Axios.get(`https://www.mocky.io/v2/5cd04a20320000442200fc10`)
      .then(d => {
        return d.data;
      })
      .then(d => {
        return d.map(d => {
          return {
            ...d,
            eCPM: ((d.revenue / d.impressions) * 1000).toFixed(2)
          };
        });
      })
      .then(data => {
        if (data && data.length) {
          const temp = data
            .filter(d => dateRange[0] <= new Date(d.timestamp))
            .filter(d => dateRange[1] >= new Date(d.timestamp));
          setData(temp);
        }
      });
  }, [dateRange]);

  return (
    <div>
      <DateTimePicker dateRange={dateRange} setDateRange={d => setDateRange(d)} />
      <GraphComponent data={data} />
      <TableComponent data={data} />
    </div>
  );
}

export default App;
