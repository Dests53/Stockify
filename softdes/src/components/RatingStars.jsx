import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingStars = ({ rating, reviewCount, clickable = false, onStarClick }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <FaStar 
          key={i} 
          className="filled" 
          onClick={clickable ? () => onStarClick(i) : null}
        />
      );
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="filled" />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return (
    <div className="rating-stars">
      {stars}
      {reviewCount > 0 && (
        <span className="review-count">({reviewCount})</span>
      )}
    </div>
  );
};

export default RatingStars;