import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export default function DateTimePicker({ dateRange, setDateRange }) {
  const [date, setDate] = React.useState([new Date(), new Date()]);

  React.useEffect(() => {
    setDateRange(date);
  }, [date, setDateRange]);

  const onChange = d => {
    setDate(d);
    setDateRange(d);
  };
  return (
    <div style={{ padding: '20px' }}>
      <DateRangePicker onChange={onChange} value={dateRange} maxDate={new Date()} />
    </div>
  );
}
