import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');

    // Mock time slots for the selection
    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", 
        "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!name || !phoneNumber || !date || !selectedSlot) {
            alert("Please fill in all details to book your appointment.");
            return;
        }

        const appointmentData = {
            name,
            phoneNumber,
            date,
            time: selectedSlot,
            doctorName
        };

        // Save to localStorage so Notification component can retrieve it
        // We use the doctor's name as the key to match your existing logic
        localStorage.setItem(doctorName, JSON.stringify(appointmentData));

        // Callback to parent component
        onSubmit(appointmentData);
        
        alert(`Appointment with ${doctorName} confirmed for ${date} at ${selectedSlot}`);
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <h2 className="form-title">Book Appointment</h2>
            <p className="form-subtitle">Consultation with {doctorName}</p>

            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date of Appointment</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="timeSlot">Select Time Slot</label>
                <select 
                    id="timeSlot" 
                    value={selectedSlot} 
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    required
                >
                    <option value="">-- Choose a Slot --</option>
                    {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                    ))}
                </select>
            </div>

            <button type="submit" className="btn-submit">Confirm Booking</button>
        </form>
    );
};

export default AppointmentForm;