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
          <Notification>
              <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
				 <Route path="<component_route>" element={<component_name/>}/> //Replace the component_route with the component path and component_name with the component name as imported in the App.js file. 
              </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;