
import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { cart, toggleCart, remainingBudget } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 ${
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            BudgetGrocer
          </h1>
          <div className="hidden md:flex ml-8 space-x-1">
            <p className="text-sm font-medium text-muted-foreground">
              Budget Project: Make $50 Last 5 Days
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="flex flex-col items-end mr-4">
              <div className="text-sm font-medium text-muted-foreground">Budget</div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold">
                  ${remainingBudget.toFixed(2)}
                </span>
                <span className="text-xs text-muted-foreground ml-1">/ $50.00</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              onClick={toggleCart}
              aria-label="Open shopping cart"
            >
              <ShoppingCart className="h-6 w-6 text-primary" />
              {cart.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.totalItems}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
