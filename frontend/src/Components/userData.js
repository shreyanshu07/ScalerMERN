import React, { useEffect,useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Checkbox, FormControlLabel, FormLabel ,TextField} from '@mui/material'
import { Link} from "react-router-dom";
const UserData = ({records}) => {
    console.log(records)
    if (!records.length) return null;

    
    return records.map((record) => (
      <TableRow
        key={record.CustomerName}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {record.CustomerName}
        </TableCell>
        <TableCell align="right">{record.CustomerMailId}</TableCell>
        <TableCell align="right">{record.RoomType}</TableCell>
        <TableCell align="right">{record.StartDate}</TableCell>
        <TableCell align="right">{record.EndDate}</TableCell>
        <TableCell><Button variant="contained" type='submit' LinkComponent={Link} to={`/rooms/${record._id}`} sx={{ mt: "auto" }}>Update</Button></TableCell>
      </TableRow>
    ))
}

export default UserData