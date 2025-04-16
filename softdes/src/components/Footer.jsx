const Footer = () => {
    return (
      <footer>
        <p>&copy; {new Date().getFullYear()} Shopee Clone. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;