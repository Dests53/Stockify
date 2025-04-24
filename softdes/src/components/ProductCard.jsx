import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import RatingStars from './RatingStars';
import ReviewModal from './ReviewModal';

const ProductCard = ({ product }) => {
  const { toggleFavorite, addReview, user } = useContext(AppContext);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const averageRating = product.reviews.reduce(
    (acc, review) => acc + review.rating, 0
  ) / product.reviews.length || 0;

  return (
    <div className="product-card">
      <div className="product-image">
        <button 
          className={`favorite-btn ${product.isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(product.id)}
        >
          {product.isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price">₱{product.price.toLocaleString()}</div>
        <RatingStars 
          rating={averageRating} 
          reviewCount={product.reviews.length}
          clickable={true}
          onStarClick={() => setShowReviewModal(true)}
        />
        <button className="add-to-cart">Add to Cart</button>
      </div>
      
      {showReviewModal && (
        <ReviewModal
          productId={product.id}
          existingReview={product.reviews.find(r => r.userId === user?.id)}
          onClose={() => setShowReviewModal(false)}
          onSubmit={addReview}
        />
      )}
    </div>
  );
};

export default ProductCard;