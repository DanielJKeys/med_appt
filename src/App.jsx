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

                {/* Profile & User Account Route */}
                <Route path="/profile" element={<ProfileCard />} />

                {/* Default route for undefined paths */}
                <Route path="*" element={<Landing_Page />} />

                <Route path="/reports" element={<ReportsLayout />} />
              </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;