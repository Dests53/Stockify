import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import RatingStars from '../components/RatingStars';
import ReviewModal from '../components/ReviewModal';
import { FaHeart, FaRegHeart, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import '../App.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, cart, setCart, toggleFavorite, addReview, user } = useContext(AppContext);
  const [showReviewModal, setShowReviewModal] = useState(false);
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const averageRating = product.reviews.length > 0 
    ? (product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length).toFixed(1)
    : 0;

  const handleAddToCart = () => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </button>
      
      <div className="product-detail">
        <div className="product-images">
          <img src={product.image || 'https://via.placeholder.com/400'} alt={product.name} />
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="price">₱{product.price.toLocaleString()}</div>
          
          <div className="rating-section">
            <RatingStars 
              rating={averageRating} 
              reviewCount={product.reviews.length} 
            />
            <button 
              className="add-review-btn"
              onClick={() => setShowReviewModal(true)}
            >
              {product.reviews.some(r => r.userId === user?.id) ? 'Update Review' : 'Add Review'}
            </button>
          </div>
          
          <p className="product-description">
            {product.description || 'No description available.'}
          </p>
          
          <div className="action-buttons">
            <button 
              className={`favorite-btn ${product.isFavorite ? 'active' : ''}`}
              onClick={() => toggleFavorite(product.id)}
            >
              {product.isFavorite ? <FaHeart /> : <FaRegHeart />}
              {product.isFavorite ? ' Saved' : ' Save'}
            </button>
            
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        {product.reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet. Be the first to review!</p>
        ) : (
          <div className="reviews-list">
            {product.reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <RatingStars rating={review.rating} />
                  <span className="reviewer">{review.userId}</span>
                </div>
                <p className="review-text">{review.comment}</p>
                {review.date && (
                  <div className="review-date">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {showReviewModal && (
        <ReviewModal
          productId={product.id}
          existingReview={product.reviews.find(r => r.userId === user?.id)}
          onClose={() => setShowReviewModal(false)}
          onSubmit={(rating, comment) => {
            addReview(product.id, rating, comment);
            setShowReviewModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ProductDetail;