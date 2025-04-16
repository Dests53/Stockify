import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="top-bar">
        <Link to="/" className="logo"></Link>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button><FiSearch /></button>
        </div>
        <div className="user-actions">
          <Link to="/login" className="login-btn">Log In</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
          <Link to="/cart" className="cart-btn">
            <FiShoppingCart /> Cart (0)
          </Link>
        </div>
      </div>
      <nav className="categories-nav">
        <div className="nav-container">
          <div className="categories">
            <Link to="#tshirts">T-Shirts</Link>
            <Link to="#pants">Pants</Link>
            <Link to="#watches">Watches</Link>
            <Link to="#shoes">Shoes</Link>
            <Link to="#accessories">Accessories</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;