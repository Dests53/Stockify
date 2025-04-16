import ProductCard from './ProductCard';

const CategorySection = ({ category, onAddToCart }) => {
  return (
    <section id={category.id} className="category-section">
      <h2 className="category-title">{category.name}</h2>
      <div className="products-grid">
        {category.products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;