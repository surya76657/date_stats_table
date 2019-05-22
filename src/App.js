import React from 'react';
import './App.css';
import Axios from 'axios';
import TableComponent from './components/TableComponent';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`https://www.mocky.io/v2/5cd04a20320000442200fc10`)
      .then(d => {
        return d.data;
      })
      .then(d => {
        const temp = d.map(d => {
          return {
            ...d,
            eCPM: ((d.revenue / d.impressions) * 1000).toFixed(2)
          };
        });
        setData(temp);
      });
  }, []);
  return (
    <div>
      <div>Date picker</div>
      <div>graph</div>
      <TableComponent data={data} />
    </div>
  );
}

export default App;
