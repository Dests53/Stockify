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
      reviews: [],
      isFavorite: false
    },
    // Add more products...
  ]);

  const toggleFavorite = (productId) => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
    ));
  };

  const addReview = (productId, rating, comment) => {
    setProducts(products.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          reviews: [
            ...p.reviews,
            { id: Date.now(), userId: user?.id || 'guest', rating, comment }
          ]
        };
      }
      return p;
    }));
  };

  return (
    <AppContext.Provider value={{ user, setUser, cart, setCart, products, toggleFavorite, addReview }}>
      {children}
    </AppContext.Provider>
  );
};