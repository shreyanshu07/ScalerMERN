
import React, { useEffect,useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  axios from 'axios'
import DeleteUser from './deleteUser'
const URL = "http://localhost:5000/rooms";


export default function Delete() {
  
  
  
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios('http://localhost:5000/rooms')
      .then(res => setUsers(res.data.rooms))
      .catch(err => console.log(err))
  }, []);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cutomer Name</TableCell>
            <TableCell align="right">Customer Mail ID</TableCell>
            <TableCell align="right">Customer Room Type</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Refund</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <DeleteUser records={users}></DeleteUser>
        </TableBody>
      </Table>
    </TableContainer>
  );
}