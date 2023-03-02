import React from 'react';
import  Header  from "./Components/header.js";
import {Route,Routes} from 'react-router-dom';
import Home from './Components/home.js';
import AddRoom from './Components/addRooms';
import Delete from './Components/delete'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Update from'./Components/update'

function App(){
  return (
    <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}exact />
        <Route path="/add" element={<AddRoom/>}exact />
        <Route path="/rooms/:id" element={<Update/>}/>
        <Route path="/rooms/delete" element={<Delete/>}/>
      </Routes>
    </main>
  </React.Fragment>)
}

export default App;