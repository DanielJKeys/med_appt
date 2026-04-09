import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './assets/Navbar/Navbar.jsx';
import Landing_Page from './assets/Landing_Page/Landing_Page.jsx';
import Login from './assets/Login/Login.jsx';
import Sign_Up from './assets/Sign_Up/Sign_Up.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing_Page/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Sign_Up/>}/>
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;