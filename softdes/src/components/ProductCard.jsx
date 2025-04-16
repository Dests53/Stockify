import { useState } from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import ReviewModal from '../../../project soft des/ReviewModal';

const ProductCard = ({ product, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviews, setReviews] = useState(product.reviews || []);
  const [userRating, setUserRating] = useState(0);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  const handleAddReview = (reviewText) => {
    const newReview = {
      id: Date.now(),
      rating: userRating,
      text: reviewText,
      user: "Current User",
      date: new Date().toLocaleDateString()
    };
    setReviews([...reviews, newReview]);
    setShowReviewModal(false);
    setUserRating(0);
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="product-card">
      <div className="product-image">
        {product.name} Image
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <div className="product-price">₱{product.price.toLocaleString()}</div>
      
      <div className="product-rating" onClick={() => setShowReviewModal(true)}>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < averageRating ? 'filled' : ''} />
        ))}
        <span>({reviews.length})</span>
      </div>
      
      <button className="add-to-cart" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>

      {showReviewModal && (
        <ReviewModal 
          onClose={() => setShowReviewModal(false)}
          onSubmit={handleAddReview}
          userRating={userRating}
          setUserRating={setUserRating}
        />
      )}
    </div>
  );
};

export default ProductCard;