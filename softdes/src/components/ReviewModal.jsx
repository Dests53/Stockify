import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import RatingStars from './RatingStars';

const ReviewModal = ({ productId, existingReview, onClose, onSubmit }) => {
  const [rating, setRating] = useState(existingReview?.rating || 0);
  const [comment, setComment] = useState(existingReview?.comment || '');
  const { user } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0) {
      onSubmit(rating, comment);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{existingReview ? 'Update Your Review' : 'Add Your Review'}</h3>
          <button onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <RatingStars 
              rating={rating} 
              clickable={true}
              onStarClick={setRating}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Share your experience with this product..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          {!user && (
            <p className="login-notice">
              Please login to submit your review
            </p>
          )}
          <button 
            type="submit" 
            disabled={rating === 0 || !user}
          >
            {existingReview ? 'Update Review' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;