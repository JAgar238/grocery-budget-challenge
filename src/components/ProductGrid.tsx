
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product, getProductsByCategory } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductGridProps {
  category: string;
  searchTerm: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ category, searchTerm }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const categoryProducts = getProductsByCategory(category);
    setProducts(categoryProducts);
  }, [category]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="mt-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={category + searchTerm}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-muted-foreground">No products found</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductGrid;
