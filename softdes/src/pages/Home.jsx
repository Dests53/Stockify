import { useState } from 'react';
import CategorySection from '../components/CategorySection';

const Home = () => {
  const [cart, setCart] = useState([]);
  const [categories] = useState([
    {
      id: 'tshirts',
      name: 'T-Shirts',
      products: [
        { id: 1, name: 'Basic Cotton T-Shirt', price: 199, reviews: [] },
        { id: 2, name: 'Graphic Print Tee', price: 249, reviews: [] },
        { id: 3, name: 'V-Neck T-Shirt', price: 229, reviews: [] },
        { id: 4, name: 'Polo Shirt', price: 299, reviews: [] },
        { id: 5, name: 'Oversized Tee', price: 279, reviews: [] }
      ]
    },
    {
      id: 'pants',
      name: 'Pants',
      products: [
        { id: 6, name: 'Slim Fit Jeans', price: 599, reviews: [] },
        { id: 7, name: 'Chino Pants', price: 499, reviews: [] },
        { id: 8, name: 'Cargo Pants', price: 549, reviews: [] },
        { id: 9, name: 'Jogger Pants', price: 449, reviews: [] },
        { id: 10, name: 'Formal Trousers', price: 649, reviews: [] }
      ]
    },
    {
      id: 'watches',
      name: 'Watches',
      products: [
        { id: 11, name: 'Digital Sports Watch', price: 899, reviews: [] },
        { id: 12, name: 'Classic Leather Watch', price: 1299, reviews: [] },
        { id: 13, name: 'Smart Watch', price: 2499, reviews: [] },
        { id: 14, name: 'Minimalist Watch', price: 799, reviews: [] },
        { id: 15, name: 'Luxury Chronograph', price: 3999, reviews: [] }
      ]
    }
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="home-page">
      <div className="search-container">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      {categories.map(category => (
        <CategorySection 
          key={category.id}
          category={category}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Home;