import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewModal = ({ onClose, onSubmit, userRating, setUserRating }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userRating > 0) {
      onSubmit(reviewText);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Your Review</h3>
          <button onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="rating-input">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i}
                className={i < userRating ? 'filled' : ''}
                onClick={() => setUserRating(i + 1)}
              />
            ))}
          </div>
          <textarea
            placeholder="Share your thoughts about this product..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
          <button type="submit" disabled={userRating === 0}>
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;