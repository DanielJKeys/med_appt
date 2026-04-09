import React from 'react';
import './DoctorCard.css';
import ReviewForm from '../ReviewForm/ReviewForm'; // Adjust path if needed
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image">
          {/* Fallback to a placeholder if no image is provided */}
          <img src={profilePic || "https://via.placeholder.com/150"} alt={name} />
        </div>
        <div className="doctor-card-details">
          <h2 className="doctor-card-name">{name}</h2>
          <p className="doctor-card-speciality">{speciality}</p>
          <p className="doctor-card-experience">{experience} years experience</p>
          <div className="doctor-card-ratings">
            <span className="star-rating">{"★".repeat(ratings)}</span>
          </div>
          
          {/* Step 6: Book Appointment Button */}
          <div>
            <button className="book-appointment-btn">
              <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
          </div>
        </div>
      </div>

      {/* Integration with ReviewForm using a Popup */}
      <div className="doctor-card-options-container">
        <Popup
          trigger={<button className="view-report-btn">Give Review</button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>&times;</button>
              <ReviewForm />
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default DoctorCard;