import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

import "./index.css";

import { getData } from '../../common';

function createTableData(dataObj) {
  const histories = Object.keys(dataObj).map(key => {
    return {date: key};
  })

  return histories;
}

export function List() {
  const [tableData, setTableData] = useState([]);
  const [name, setName] = useState([]);
  const { msbn } = useParams();

  useEffect(() => {
    getData().then(resp => {
      setName(resp[msbn].name);
      setTableData(createTableData(resp[msbn].history));
    });
  },[msbn])

  return (
    <div className="list-container">
      <Link href={'/'}>Back</Link>
      <h2>MSBN: {msbn}</h2>
      <h3>Tên: {name}</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                <Link href={`/detail/${msbn}/${row.date}`}>{row.date}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
