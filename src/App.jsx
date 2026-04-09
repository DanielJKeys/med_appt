import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout & Wrapper Components
import Notification from './Components/Notification/Notification';

// Page Components
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout'; // Added missing import

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          {/* Notification wraps the routes to provide the Navbar and Appointment alerts globally */}
          <Notification>
              <Routes>
                {/* Home and Auth Routes */}
                <Route path="/" element={<Landing_Page />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Sign_Up />}/>

                {/* Doctor & Consultation Routes */}
                <Route path="/find-doctor" element={<FindDoctorSearch />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                
                {/* Review & Feedback Route */}
                <Route path="/reviews" element={<ReviewForm />} />

                {/* Profile & User Account Routes */}
                <Route path="/profile" element={<ProfileCard />} />
                <Route path="/reports" element={<ReportsLayout />} />

                {/* Default route for undefined paths - Keep this at the bottom */}
                <Route path="*" element={<Landing_Page />} />
              </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;