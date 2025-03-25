
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-card overflow-hidden card-hover hover-slide-up subtle-shadow"
    >
      <div className="relative p-4 pb-0 h-44 flex items-center justify-center">
        {product.onSale && (
          <span className="sale-badge">On Sale</span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="product-image h-full w-full slide-up"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-1 text-lg">{product.name}</h3>
        <div className="flex items-baseline mb-3">
          {product.originalPrice ? (
            <>
              <span className="sale-price mr-2">{formatPrice(product.price)}</span>
              <span className="original-price text-sm">{formatPrice(product.originalPrice)}</span>
            </>
          ) : (
            <span>{formatPrice(product.price)}</span>
          )}
          <span className="text-sm text-muted-foreground ml-1">/ {product.unit}</span>
        </div>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white"
          variant="default"
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
