import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate } from 'react-router-dom';

const initSpecialities = [
    'Cardiologist', 'General Physician', 'Dermatologist', 'Otolaryngologist', 'Neurologist', 'Pediatrician', 'Gynecologist', 'Orthopedic'
];

const FindDoctorSearch = () => {
    const [doctorResultData, setDoctorResultData] = useState('');
    const [showSpecialities, setShowSpecialities] = useState(false);
    const [specialities, setSpecialities] = useState(initSpecialities);
    const navigate = useNavigate();

    const handleDoctorSelect = (speciality) => {
        setDoctorResultData(speciality);
        setShowSpecialities(false);
        // Navigates to the search results page with the speciality as a query param
        navigate(`/instant-consultation?speciality=${speciality}`);
    };

    return (
        <div className="find-doctor-search-container">
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search doctors by speciality..."
                        value={doctorResultData}
                        onFocus={() => setShowSpecialities(true)}
                        // Delay onBlur to allow the onClick event of the list to trigger
                        onBlur={() => setTimeout(() => setShowSpecialities(false), 200)}
                        onChange={(e) => setDoctorResultData(e.target.value)}
                    />
                    
                    <div className="search-icon">
                        <i className="fa fa-search"></i>
                    </div>

                    {showSpecialities && (
                        <div className="speciality-dropdown">
                            {specialities.map((speciality) => (
                                <div 
                                    className="speciality-item" 
                                    key={speciality} 
                                    onClick={() => handleDoctorSelect(speciality)}
                                >
                                    <div className="item-details">
                                        <div className="speciality-name">{speciality}</div>
                                        <div className="speciality-desc">Consult with {speciality}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearch;