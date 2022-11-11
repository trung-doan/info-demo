import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

import "./index.css";

import { getData } from '../../common';

function createTableData(dataObj) {
  const histories = Object.keys(dataObj).map(key => {
    return {
      time: dataObj[key].time,
      medicine: dataObj[key].medicine,
      checked: dataObj[key].checked
    };
  })

  return histories;
}

export function Detail() {
  const [tableData, setTableData] = useState([]);
  const [name, setName] = useState([]);
  const { msbn, date } = useParams();

  const _handleChechbox = (time) => {
    const updateData = tableData.map(item => {
      if (item.time === time) {
        item.checked = !item.checked;
      }
      return item;
    });
    setTableData(updateData);
  }

  useEffect(() => {
    getData().then(resp => {
      setName(resp[msbn].name);
      setTableData(createTableData(resp[msbn].history[date]));
    });
  },[msbn, date])

  return (
    <div className="detail-container">
      <Link href={`/list/${msbn}`}>Back</Link>
      <h2>MSBN: {msbn}</h2>
      <h3>Tên: {name}</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>medicine</TableCell>
              <TableCell>Checked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.time}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.medicine}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Checkbox checked={row.checked} onClick={() => _handleChechbox(row.time)}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
