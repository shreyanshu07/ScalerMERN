import React, { useEffect,useState } from 'react';
import {Button, Checkbox, FormControlLabel, FormLabel ,TextField} from '@mui/material'
import {Box} from '@mui/system'
import  axios from 'axios'
import validator from 'validator'
import {useNavigate} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import './addRooms.css'
import emailjs from '@emailjs/browser';
import TextField1 from '@material-ui/core/TextField';
var dateValidator = require("validate-date");
const URL = "http://localhost:5000/rooms";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const AddRooms = () => { 
  const history = useNavigate()
  const [roomType, setroomType] = React.useState('A');
  const [CustomerMailId, setCustomerMailId] = useState('')
  const [CustomerName, setCustomerName] = useState('')
  const [StartDate, setStartDate] = useState('')
  const [EndDate, setEndDate] = useState('')
  const [emailError, setEmailError] = useState('')
  const [dateStartError,setDateStartError]=useState(false)
  const [dateEndError,setDateEndError]=useState(false)
  const [TotalBill, setTotalBill] = useState(0)
  const [isValidDate,setisValidDate]=useState('true')

  const doRangesMerge=(range1Start,range1End, range2Start,range2End) => {
    // const range1Start = new Date(range1.split("/").reverse().join("-"));
    // const range1End = new Date(range1.split("/").reverse().join("-"));
    // const range2Start = new Date(range2.split("/").reverse().join("-"));
    // const range2End = new Date(range2.split("/").reverse().join("-"));
  
    // Check if the ranges overlap
    if (range1Start <= range2End && range2Start <= range1End) {
      // Merge the ranges
      const mergedStart = new Date(Math.min(range1Start, range2Start));
      const mergedEnd = new Date(Math.max(range1End, range2End));
      return `${mergedStart.toLocaleDateString()} - ${mergedEnd.toLocaleDateString()}`;
    } else {
      // Ranges do not merge
      return false;
    }
  }

  const CheckIsDatesValid=(startDatee,endDatee,roomTypee)=>{
    
    
      fetchHandler().then((data) => {
        
        const dataArray=data.rooms
        if(dateValidator(startDatee)==='Valid Date' && dateValidator(endDatee)==='Valid Date'){
          var isMerging=false;
          var countAtype=0,countBtype=0,countCtype=0
          // dataArray.forEach(element => {
            
          // });
          // if((countAtype===5 && roomTypee==='A') || (countBtype===3 && roomTypee==='B') || (countCtype===2 && roomTypee==='C')){
          //   isMerging=true;
          // }
          dataArray.forEach(element => {
            const sDate=element.StartDate
            const eDate=element.EndDate
            if(element.RoomType===roomTypee && doRangesMerge(startDatee,endDatee,sDate,eDate)){
              if(element.RoomType==='A'){
                countAtype+=1
              }
              else if(element.RoomType==='B'){
                countBtype+=1
              }
              else if(element.RoomType==='C'){
                countCtype+=1
              }
            }
            if((countAtype===5 && roomTypee==='A') || (countBtype===3 && roomTypee==='B') || (countCtype===2 && roomTypee==='C')){
              isMerging=true;
            }
          });
          if(isMerging){
            setisValidDate('false')
          }
          else{
            setisValidDate('true')
          }
        }

      });
    
  }
  
  const calcTotalBill=(startDatee,endDatee,roomTypee)=>{ // function to calculate the total bill in realtime , takes three parameter (Start Date , End Date and the type of room)
    if(dateValidator(startDatee)==='Valid Date' && dateValidator(endDatee)==='Valid Date' && roomTypee){
      var res=0
      const date1 = new Date(startDatee);
      const date2 = new Date(endDatee);
      const diffTime = date2.getTime() - date1.getTime();
      const diffDays = diffTime / (1000 * 3600 * 24); // Calculating number of days
      if(diffDays<=0){
        res='Please enter valid Dates'
      }
      else if(TotalBill===0 || TotalBill==='Please enter valid Dates' ){
        res='InComplete details'
      }
      else if(roomTypee==='A'){
        res=50*diffDays
      }
      else if(roomTypee==='B'){
        res=80*diffDays
      }
      else if(roomTypee==='C'){
        res=100*diffDays
      }
      if(res==='Please enter valid Dates' || res==='InComplete details' ){
        setTotalBill(res)
      }
      else{
        setTotalBill(`Your total bill is ${res}`)
      }
    }
    
  }
  const setName=(e)=>{
    setCustomerName(e.target.value);
  }
  const setStartDateFunction=(e)=>{ //Validator function for Start Date
    setStartDate(e.target.value);
    var date = e.target.value
    if (dateValidator(date)==="Valid Date") {
      setDateStartError('')
      calcTotalBill(date,EndDate,roomType)
      CheckIsDatesValid(date,EndDate,roomType)
      
    } else {
      setDateStartError('Invalid Date')
    }
  }
  const setEndDateFunction=(e)=>{ //Validator function for End Date
    setEndDate(e.target.value);
    var date = e.target.value
    if (dateValidator(date)==="Valid Date") {
      setDateEndError('')
      calcTotalBill(StartDate,date,roomType)
      CheckIsDatesValid(StartDate,date,roomType)
    } else {
      setDateEndError('Invalid Date')
    }
    calcTotalBill()
  }
  const validateEmail = (e) => { //Validator function for Email
    setCustomerMailId(e.target.value)
    var email = e.target.value
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Invalid Email')
    }
  }
  
  const radioButtonChangeA = () => { //Function to mark roomType RadioButton
    calcTotalBill(StartDate,EndDate,'A')
    CheckIsDatesValid(StartDate,EndDate,'A')
    setroomType('A');
  };
  const radioButtonChangeB = () => { //Function to mark roomType RadioButton
    calcTotalBill(StartDate,EndDate,'B')
    CheckIsDatesValid(StartDate,EndDate,'B')
    setroomType('B');
  };
  const radioButtonChangeC = () => { //Function to mark roomType RadioButton
    calcTotalBill(StartDate,EndDate,'C')
    CheckIsDatesValid(StartDate,EndDate,'C')
    setroomType('C');
  };
  const [paymentType, setpaymentType] = React.useState('UPI');

  const paymentTypeCash = () => { //Function to mark paymentType RadioButton
    setpaymentType('Cash');
  };
  const paymentTypeCard = () => { //Function to mark paymentType RadioButton
    setpaymentType('Card');
  };
  const paymentTypeUPI = () => { //Function to mark paymentType RadioButton
    setpaymentType('UPI');
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wv0l4kr', 'template_baebn1k', e.target, 'Mj-g54EA7pWTXLZ5R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const sendRequest=async()=>{ //Funtion to send the post request to the backend
    await axios.post("http://localhost:5000/rooms",{
      CustomerName:CustomerName,
      CustomerMailId:CustomerMailId,
      RoomType:roomType,
      StartDate:StartDate,
      EndDate:EndDate
    }).then(res=>res.data);
  }
  const handleSubmit=(e)=>{ //After user clicks submit button , this function is gonna run
    e.preventDefault();
    sendEmail(e)
    sendRequest().then(()=>history('/'))
  }
  return (
    <form onSubmit={handleSubmit}>
        <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
        >
          
          <TextField1 label="Enter your Name" value={CustomerName} onChange={(e) => setName(e)} margin="normal" fullWidth variant="outlined" name="name"/>
          
          <TextField1 label="Enter Your Mail ID" value={CustomerMailId} onChange={(e) => validateEmail(e)} margin="normal" fullWidth variant="outlined" name="mail"/>
          <FormLabel style={{color:'red'}}>{emailError}</FormLabel>
          <br></br>
          <fieldset>
            <div>
              <input type="radio" checked={roomType==='A'} onChange={radioButtonChangeA} />
              <label>Non-AC Rooms</label>
              <input type="radio" checked={roomType==='B'} onChange={radioButtonChangeB} />
              <label>Single AC-Rooms</label>
              <input type="radio" checked={roomType==='C'} onChange={radioButtonChangeC} />
              <label>Double AC-Rooms</label>
            </div>
          </fieldset>
          <TextField1 label="Start Date (MM/DD/YYYY)" value={StartDate}  onChange={(e) => setStartDateFunction(e)} margin="normal" fullWidth variant="outlined" name="Sdate"/>
          <FormLabel style={{color:'red'}}>{dateStartError}</FormLabel>
          <TextField1 label="End Date (MM/DD/YYYY)" value={EndDate}  onChange={(e) => setEndDateFunction(e)} margin="normal" fullWidth variant="outlined" name="Edate"/>
          <FormLabel style={{color:'red'}}>{dateEndError}</FormLabel>
          <fieldset>
            <div>
              <input type="radio" checked={paymentType==='Cash'} onChange={paymentTypeCash} />
              <label>Cash</label>
              <input type="radio" checked={paymentType==='Card'} onChange={paymentTypeCard} />
              <label>Card</label>
              <input type="radio" checked={paymentType==='UPI'} onChange={paymentTypeUPI} />
              <label>UPI</label>
            </div>
          </fieldset>
          <FormLabel style={{margin:10,color:'green'}}>{TotalBill}</FormLabel>
          <FormLabel style={{margin:10,color:'green'}}>{(isValidDate)?"Congratulations ! Rooms are available":"Sorry ! Rooms aren't vacant"}</FormLabel>
          <Button variant="contained" type='submit'>Add Book</Button>
        </Box>
    </form>
  )
}

export default AddRooms
