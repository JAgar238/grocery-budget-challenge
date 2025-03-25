
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import CategoryFilter from '@/components/CategoryFilter';
import ShoppingCart from '@/components/ShoppingCart';
import { CartProvider } from '@/context/CartContext';
import { getSaleProducts } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    setSaleItems(getSaleProducts());
  }, []);

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <ShoppingCart />
        
        <main className="pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Budget Grocery Challenge
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Make $50 last for 5 days of meals. Select nutritious foods that give you the most value.
              </p>
            </motion.div>

            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <CategoryFilter
              activeCategory={activeCategory}
              onSelectCategory={handleCategorySelect}
            />

            <ProductGrid
              category={activeCategory}
              searchTerm={searchTerm}
            />
          </div>
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;
