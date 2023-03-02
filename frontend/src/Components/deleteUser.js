import React, { useEffect,useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Checkbox, FormControlLabel, FormLabel ,TextField} from '@mui/material'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DeleteUser = ({records}) => {
    const history = useNavigate();
    if (!records.length) return null;
    const isDatePassed=(date) => {
        // Parse the date string if necessary
        if (typeof date === "string") {
          date = new Date(date);
        }
        
        // Compare the date to the current time
        return date.getTime() < Date.now();
      }
    const calAmount=(startDate)=>{
        // Parse the date string into a Date object
        const date = new Date(startDate);
        
        // Calculate the time difference between now and the specified date
        const timeDiff = (date-(new Date()));
        console.log(date)
        console.log(new Date())
        // Convert the time difference from milliseconds to hours
        const hoursDiff = (timeDiff / (1000 * 60 *60 ));
        console.log(hoursDiff)
        // Return the number of hours remaining as a positive integer
        if(hoursDiff>48){
            return "Complete Refund"
        }
        else if(hoursDiff>=24){
            return "50% Refund"
        }
        else{
            return "Sorry! Can't refund"
        }
    }
    const deleteHandler = async (id) => {
        await axios
          .delete(`http://localhost:5000/rooms/${id}`)
          .then((res) => res.data)
          .then(() => history("/"))
        console.log(id)
      };

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
        <TableCell align="right">{calAmount(record.StartDate)}</TableCell>
        <TableCell><Button variant="contained" onClick={(e)=>deleteHandler(record._id)} type='submit' sx={{ mt: "auto" }}>Delete</Button></TableCell>
      </TableRow>
    ))
}

export default DeleteUser