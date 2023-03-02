import React,{useState} from 'react'
import {AppBar, Tabs, Typography,Tab,Toolbar} from '@mui/material'
import HotelIcon from '@mui/icons-material/Hotel';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const [value,setValue] =useState();
  return (
    <div>
        <AppBar position='sticky' sx={{backgroundColor:"black"}}>
            <Toolbar>
                <Typography>
                    <HotelIcon/>
                </Typography>
                <Tabs
                sx={{ml:"auto"}}
                textColor="inherit"
                indicatorColor='secondary'
                value={value}
                onChange={(e,val)=>setValue(val)}
                >
                    <Tab LinkComponent={NavLink} to="/add" label="Add Product"/>
                    <Tab LinkComponent={NavLink} to="/rooms/delete" label="Delete Records"/>
                    <Tab LinkComponent={NavLink} to="/" label="View Data"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}
export default Header;