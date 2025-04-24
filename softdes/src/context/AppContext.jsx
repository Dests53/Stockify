import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Basic Cotton T-Shirt',
      price: 199,
      image: 'https://via.placeholder.com/300',
      description: 'Comfortable 100% cotton t-shirt',
      reviews: [
        { id: 1, userId: 'user1', rating: 4, comment: 'Great quality!', date: '2023-05-15' }
      ],
      isFavorite: false
    },
    // Add 4 more products following the same structure
  ]);

  const toggleFavorite = (productId) => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
    ));
  };

  const addReview = (productId, rating, comment) => {
    setProducts(products.map(p => {
      if (p.id === productId) {
        const existingReviewIndex = p.reviews.findIndex(r => r.userId === user?.id);
        const newReview = {
          id: Date.now(),
          userId: user?.id || 'guest',
          rating,
          comment,
          date: new Date().toISOString()
        };
        
        return {
          ...p,
          reviews: existingReviewIndex >= 0 
            ? p.reviews.map((r, i) => i === existingReviewIndex ? newReview : r)
            : [...p.reviews, newReview]
        };
      }
      return p;
    }));
  };

  return (
    <AppContext.Provider value={{ 
      user, 
      setUser, 
      cart, 
      setCart, 
      products, 
      toggleFavorite, 
      addReview 
    }}>
      {children}
    </AppContext.Provider>
  );
};