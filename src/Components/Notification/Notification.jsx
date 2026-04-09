import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'; // Ensure you create this CSS file

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  
  // State to determine if the notification should be displayed
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
      // Retrieve appointment data using the doctor's name as the key
      const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData.name));
      
      if (storedAppointmentData) {
        setAppointmentData(storedAppointmentData);
        setShowNotification(true); // Display notification if data exists
      }
    }
  }, []);

  return (
    <div>
      <Navbar />
      {children}
      
      {/* Enhanced Notification Display */}
      {isLoggedIn && showNotification && appointmentData && (
        <div className="notification-overlay">
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              
              <p className="appointment-card__message">
                <strong>User:</strong> {username.split('@')[0]}
              </p>
              
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData?.name}
              </p>

              <p className="appointment-card__message">
                <strong>Date:</strong> {appointmentData?.date}
              </p>

              <p className="appointment-card__message">
                <strong>Time Slot:</strong> {appointmentData?.time}
              </p>

              <button 
                className="close-notification" 
                onClick={() => setShowNotification(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;