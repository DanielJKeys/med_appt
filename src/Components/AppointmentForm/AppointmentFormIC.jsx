import React, { useState } from 'react';
import './AppointmentFormIC.css';

const AppointmentFormIC = ({ doctorName, speciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !phoneNumber) {
            alert("Please fill in all fields.");
            return;
        }

        // Create appointment object
        const appointmentData = {
            name,
            phoneNumber,
            date: new Date().toLocaleDateString(),
            time: "Immediate Consultation"
        };

        // Store in localStorage using the doctor's name as the key 
        // (matching the logic in your Notification component)
        localStorage.setItem(doctorName, JSON.stringify(appointmentData));

        // Call the parent onSubmit handler to close the modal or update state
        onSubmit(appointmentData);
        
        alert(`Appointment booked with ${doctorName} successfully!`);
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Patient Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                />
            </div>
            <button type="submit" className="btn-book-now">
                Book Now
            </button>
        </form>
    );
};

export default AppointmentFormIC;