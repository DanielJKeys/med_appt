import React, { useState } from 'react';
import './ReviewForm.css'; // Renamed from GiveReviews.css for consistency

function ReviewForm() {
  // State variables for form management
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  // Toggle form visibility
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert rating to a number explicitly
    setFormData({ 
      ...formData, 
      [name]: name === 'rating' ? parseInt(value) : value 
    });
  };

  // Handle final submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Name, Review, and a Rating > 0
    if (formData.name && formData.review && formData.rating > 0) {
      setSubmittedMessage(formData);
      setShowForm(false);
      setShowWarning(false);
      setIsButtonDisabled(true); // Disable the trigger button permanently for this session
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="review-container">
      <h2>Reviews</h2>
      
      {!showForm ? (
        // Trigger button: Disables and changes text after submission
        <button 
          onClick={handleButtonClick} 
          disabled={isButtonDisabled}
          className={isButtonDisabled ? "btn-disabled" : "btn-primary"}
        >
          {isButtonDisabled ? "Review Submitted" : "Click here to give your review"}
        </button>
      ) : (
        // Feedback Form
        <form onSubmit={handleSubmit} className="review-form">
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields and provide a rating.</p>}
          
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="review">Review:</label>
            <textarea 
              id="review" 
              name="review" 
              value={formData.review} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select 
              id="rating" 
              name="rating" 
              value={formData.rating} 
              onChange={handleChange}
            >
              <option value="0">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      {/* The Results section: Displays with a red border as per requirements */}
      {submittedMessage && (
        <div className="submitted-review-box">
          <h3>Submitted Review:</h3>
          <p><strong>Name:</strong> {submittedMessage.name}</p>
          <p><strong>Review:</strong> {submittedMessage.review}</p>
          <p><strong>Rating:</strong> 
             <span className="star-rating">{"★".repeat(submittedMessage.rating)}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;