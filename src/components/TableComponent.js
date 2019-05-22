import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns = [
  {
    Header: 'timestamp',
    accessor: 'timestamp'
  },
  {
    Header: 'game',
    accessor: 'game'
  },
  {
    Header: 'revenue',
    accessor: 'revenue'
  },
  {
    Header: 'impressions',
    accessor: 'impressions'
  },
  {
    Header: 'eCPM',
    accessor: 'eCPM'
  }
];

export default function TableComponent(props) {
  return <ReactTable data={props.data} columns={columns} defaultPageSize={5} sortable filterable minRows={0} />;
}
